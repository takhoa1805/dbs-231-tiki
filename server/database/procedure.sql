-- lấy danh sách đánh giá
GO
CREATE PROCEDURE GetRating(@ID INT, @sortBy VARCHAR(50))
AS
BEGIN
    IF @sortBy = 'date_asc'
        SELECT *
        FROM DanhGiaSanPham DG
        LEFT JOIN HinhAnhVideoDanhGia HV ON DG.MaDanhGia = HV.MaDanhGia
        WHERE DG.MaSP = @ID
        ORDER BY [NgayDanhGia] ASC;
    ELSE IF @sortBy = 'date_desc'
        SELECT *
        FROM DanhGiaSanPham DG
        LEFT JOIN HinhAnhVideoDanhGia HV ON DG.MaDanhGia = HV.MaDanhGia
        WHERE DG.MaSP = @ID
        ORDER BY [NgayDanhGia] DESC;
    ELSE IF @sortBy = 'rating_asc'
        SELECT *
        FROM DanhGiaSanPham DG
        LEFT JOIN HinhAnhVideoDanhGia HV ON DG.MaDanhGia = HV.MaDanhGia
        WHERE DG.MaSP = @ID
        ORDER BY SoSao ASC;
    ELSE IF @sortBy = 'rating_desc'
        SELECT *
        FROM DanhGiaSanPham DG
        LEFT JOIN HinhAnhVideoDanhGia HV ON DG.MaDanhGia = HV.MaDanhGia
        WHERE DG.MaSP = @ID
        ORDER BY SoSao DESC;
    ELSE
        SELECT *
        FROM DanhGiaSanPham DG
        LEFT JOIN HinhAnhVideoDanhGia HV ON DG.MaDanhGia = HV.MaDanhGia
        WHERE DG.MaSP = @ID
        ORDER BY [NgayDanhGia] DESC;
END;
-- kiểm tra thủ tục: EXEC GetRating @ID = 10000003, @sortBy = 'date_asc';
-- lấy thông tin của đơn hàng
GO
CREATE PROCEDURE GetOrderDetails
    @MaDonHang INT
AS
BEGIN
    SELECT *
    FROM DonHang
    WHERE MaDonHang = @MaDonHang;
    SELECT DSD.MaSP, SP.TenSP, DSD.SoLuong, DSD.GiaTien
    FROM DanhSachSPThuocDonHang DSD
    INNER JOIN SanPham SP ON DSD.MaSP = SP.MaSP
    WHERE DSD.MaDonHang = @MaDonHang;
END;
--Kiểm tra thủ tục: EXEC GetOrderDetails @MaDonHang = 1;

