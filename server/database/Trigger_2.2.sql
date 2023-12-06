GO 
CREATE TRIGGER trCaculateBillOrder
ON DanhSachSPThuocDonHang
AFTER INSERT, UPDATE
AS
BEGIN
	DECLARE @MaSP CHAR(8), @MaDonHang INT, @SoLuong INT, @GiaTien DECIMAL(10,2), @TongTien DECIMAL(10,2);

	SELECT @MaSP = i.MaSP, @MaDonHang = i.MaDonHang, @SoLuong = i.SoLuong, @GiaTien = s.GiaTien
	FROM inserted i JOIN SanPham s ON i.MaSP = s.MaSP;

	SET @TongTien = @GiaTien*@SoLuong;

	--Update giá tiền trong Danh Sách Sản phẩm thuộc đơn hàng
	UPDATE DanhSachSPThuocDonHang
	SET GiaTien = @TongTien
	WHERE MaSP = @MaSP AND MaDonHang = @MaDonHang;

	--Update tổng tiền trong đơn hàng
	BEGIN
		DECLARE @TongTienDonHang DECIMAL(10,2);
		SET @TongTienDonHang = (SELECT Sum(GiaTien)
							FROM DanhSachSPThuocDonHang
							WHERE MaDonHang = @MaDonHang);

		UPDATE DonHang
		SET GiaTien = @TongTienDonHang + PhiVanChuyen
		WHERE MaDonHang = @MaDonHang;
	END
END

---------------------------------------------------------------------
-- Tính số sao trung bình của sản phẩm
-----Khi thêm đánh giá mới
GO
CREATE TRIGGER trCaculateAverageStarsAfterInsert
ON DanhGiaSanPham
AFTER INSERT
AS
BEGIN
	DECLARE @MaSP CHAR(8), @SoSaoTrungBinh DECIMAL(2,1);
	SELECT @MaSP = i.MaSP
	FROM inserted i;

	SET @SoSaoTrungBinh = (SELECT AVG(CAST(SoSao AS DECIMAL(2,1)))
							FROM DanhGiaSanPham
							WHERE MaSP = @MaSP);

	--update
	UPDATE SanPham
	SET SoSaoTrungBinh = @SoSaoTrungBinh
	WHERE MaSP = @MaSP
END

----Khi chỉnh sửa đánh giá
GO
CREATE TRIGGER trCaculateAverageStarsAfterUpdate
ON DanhGiaSanPham
AFTER UPDATE
AS
BEGIN
	DECLARE @MaSP CHAR(8), @SoSaoTrungBinh DECIMAL(2,1), @TrangThaiChinhSua INT, @MaDanhGia INT;
	SELECT @MaSP = i.MaSP, @TrangThaiChinhSua = i.TrangThaiChinhSua, @MaDanhGia = i.MaDanhGia
	FROM inserted i;

	IF (@TrangThaiChinhSua = 1)
	BEGIN
		PRINT 'Chi cho phep chinh sua danh gia mot lan';
		ROLLBACK;
		RETURN;
	END

	SET @SoSaoTrungBinh = (SELECT AVG(CAST(SoSao AS DECIMAL(2,1)))
							FROM DanhGiaSanPham
							WHERE MaSP = @MaSP);

	--update
	UPDATE SanPham
	SET SoSaoTrungBinh = @SoSaoTrungBinh
	WHERE MaSP = @MaSP

	UPDATE DanhGiaSanPham
	SET TrangThaiChinhSua = 1, NgayDanhGia = CAST(GETDATE() AS DATE)
	WHERE MaDanhGia = @MaDanhGia

END

