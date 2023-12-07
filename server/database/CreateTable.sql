CREATE TABLE TaiKhoan (
	MaTK CHAR(6) not null,
	Ten NVARCHAR(50) not null,
	Email VARCHAR(50),
	MatKhau VARCHAR(20) not null CHECK (LEN(MatKhau) >= 8 AND LEN(MatKhau) <= 20 AND MatKhau LIKE '%[0-9]%' AND MatKhau LIKE '%[a-z,A-Z]%'),
	Sdt CHAR(10),
	LoaiTK VARCHAR(20) not null,
	PRIMARY KEY(MaTK),
)

CREATE TABLE DiaChiNguoiDung (
	MaTK CHAR(6) not null,
	DiaChi NVARCHAR(255) not null,
	PRIMARY KEY (MaTK, DiaChi),
	FOREIGN KEY (MaTK) REFERENCES TaiKhoan(MaTK),
)

CREATE TABLE NguoiMua (
	MaTK CHAR(6) not null,
	PRIMARY KEY(MaTK),
	FOREIGN KEY (MaTK) REFERENCES TaiKhoan(MaTK),
)

CREATE TABLE GioHang (
	MaNguoiMua CHAR(6) not null,
	PRIMARY KEY(MaNguoiMua),
	FOREIGN KEY (MaNguoiMua) REFERENCES NguoiMua(MaTK),
)

CREATE TABLE NguoiBan (
	MaTK CHAR(6) not null,
	PRIMARY KEY(MaTK),
	FOREIGN KEY (MaTK) REFERENCES TaiKhoan(MaTK),
)

CREATE TABLE ThuongHieu (
	MaThuongHieu CHAR(4) not null,
	TenThuongHieu NVARCHAR(30) not null,
	PRIMARY KEY(MaThuongHieu),
)

CREATE TABLE DanhSachSPLienQuan (
	MaDanhSach INT not null,
	PRIMARY KEY (MaDanhSach),
)

CREATE TABLE SanPham (
	MaSP CHAR(8) not null,
	GiaTien DECIMAL(10,2) not null CHECK (GiaTien > 1000),
	MoTa NVARCHAR(MAX),
	TenSP NVARCHAR(255) not null,
	XuatXu NVARCHAR(30),
	SoLuongConLai INT CHECK (SoLuongConLai >= 0),
	LoaiSP VARCHAR(30),
	MaThuongHieu CHAR(4),
	DanhSachLienQuan INT,
	SPMau CHAR(8),
	MaNguoiBan CHAR(6) not null,
	SoSaoTrungBinh DECIMAL(2,1) DEFAULT 0.0,
	PRIMARY KEY (MaSP),
	FOREIGN KEY (SPMau) REFERENCES SanPham(MaSP),
	FOREIGN KEY (MaThuongHieu) REFERENCES ThuongHieu(MaThuongHieu),
	FOREIGN KEY (DanhSachLienQuan) REFERENCES DanhSachSPLienQuan(MaDanhSach),
	FOREIGN KEY (MaNguoiBan) REFERENCES NguoiBan(MaTK),
)

CREATE TABLE DienTuDienLanh (
	MaSP CHAR(8) not null,
	NgaySanXuat DATE,
	HinhThucBaoHanh NVARCHAR(30),
	ThoiGianBaoHanh INT CHECK (ThoiGianBaoHanh > 0),
	PRIMARY KEY (MaSP),
	FOREIGN KEY (MaSP) REFERENCES SanPham(MaSP),

)

CREATE TABLE ThoiTrang (
	MaSP CHAR(8) not null,
	ChatLieu NVARCHAR(20),
	PRIMARY KEY (MaSP),
	FOREIGN KEY (MaSP) REFERENCES SanPham(MaSP),

)

CREATE TABLE KichCoThoiTrang (
	MaSP CHAR(8) not null,
	KichCo VARCHAR(10) not null,
	PRIMARY KEY (MaSP, KichCo),
	FOREIGN KEY (MaSP) REFERENCES ThoiTrang(MaSP),
)

CREATE TABLE MauSacThoiTrang (
	MaSP CHAR(8) not null,
	MauSac NVARCHAR(20) not null,
	PRIMARY KEY (MaSP, MauSac),
	FOREIGN KEY (MaSP) REFERENCES ThoiTrang(MaSP),
)

CREATE TABLE BaoHiem (
	MaSP CHAR(8) not null,
	DoiTuong NVARCHAR(30) not null,
	ThoiHan DATE not null,
	PRIMARY KEY (MaSP),
	FOREIGN KEY (MaSP) REFERENCES SanPham(MaSP),

)

CREATE TABLE Sach (
	MaSP CHAR(8) not null,
	NamXuatBan INT,
	SoTrang INT,
	NgayPhatHanh DATE,
	NhaXuatBan NVARCHAR(30) not null,
	PRIMARY KEY (MaSP),
	FOREIGN KEY (MaSP) REFERENCES SanPham(MaSP),
)

CREATE TABLE TacGiaSach (
	MaSP CHAR(8) not null,
	TacGia NVARCHAR(30) not null,
	PRIMARY KEY (MaSP, TacGia),
	FOREIGN KEY (MaSP) REFERENCES Sach(MaSP),
)

CREATE TABLE BachHoa (
	MaSP CHAR(8) not null,
	NgaySanXuat DATE,
	HanSuDung DATE,
	PRIMARY KEY (MaSP),
	FOREIGN KEY (MaSP) REFERENCES SanPham(MaSP),
	CHECK (HanSuDung > NgaySanXuat),
)

CREATE TABLE ThanhPhanBachHoa (
	MaSP CHAR(8) not null ,
	ThanhPhan NVARCHAR(255) not null,
	PRIMARY KEY (MaSP, ThanhPhan),
	FOREIGN KEY (MaSP) REFERENCES BachHoa(MaSP),
)

CREATE TABLE Evoucher (
	MaSP CHAR(8) not null,
	CoHieuLuc DATE not null,
	HetHieuLuc DATE not null,
	DieuKienSuDung VARCHAR(255),
	PRIMARY KEY (MaSP),
	FOREIGN KEY (MaSP) REFERENCES SanPham(MaSP),
	CHECK (HetHieuLuc > CoHieuLuc),
)

CREATE TABLE DiaDiemSuDungEvoucher (
	MaSP CHAR(8) not null,
	DiaDiemSuDung NVARCHAR(255) not null,
	PRIMARY KEY (MaSP, DiaDiemSuDung),
	FOREIGN KEY (MaSP) REFERENCES Evoucher(MaSP),

)

CREATE TABLE AnhMinhHoaSP (
	MaSP CHAR(8) not null,
	AnhMinhHoa VARCHAR(255) not null,
	PRIMARY KEY (MaSP, AnhMinhHoa),
	FOREIGN KEY (MaSP) REFERENCES SanPham(MaSP),
)

CREATE TABLE KhoHang (
	MaKhoHang INT not null,
	TenKhoHang VARCHAR(255) not null,
	DiaChi NVARCHAR(255) not null,
	UNIQUE(TenKhoHang),
	PRIMARY KEY (MaKhoHang),
)

CREATE TABLE DanhSachSPThuocKhoHang (
	MaSP CHAR(8) not null,
	MaKhoHang INT not null,
	PRIMARY KEY (MaSP, MaKhoHang),
	FOREIGN KEY (MaSP) REFERENCES SanPham(MaSP),
	FOREIGN KEY (MaKhoHang) REFERENCES KhoHang(MaKhoHang),
)

CREATE TABLE KhuyenMai (
	MaKhuyenMai VARCHAR(50) not null,
	GiaTriDonToiThieu DECIMAL(10,2) CHECK (GiaTriDonToiThieu > 1000),
	PhanTramTienGiam INT, CHECK (PhanTramTienGiam > 2 AND PhanTramTienGiam < 99),
	TienGiam DECIMAL(10,2),
	TienGiamToiDa DECIMAL(10,2),
	SoLuongBanDau INT not null CHECK(SoLuongBanDau > 0),
	SoLuongConLai INT CHECK(SoLuongConLai >= 0),
	ThoiGianCoHieuLuc DATE not null,
	ThoiGianHetHieuLuc DATE not null,
	LoaiVoucher VARCHAR(50) not null,
	PRIMARY KEY (MaKhuyenMai),
	CHECK (ThoiGianCoHieuLuc < ThoiGianHetHieuLuc AND DATEDIFF(DAY, ThoiGianCoHieuLuc, ThoiGianHetHieuLuc) <= 180),
)

CREATE TABLE Coupon (
	MaKhuyenMai VARCHAR(50) not null,
	PRIMARY KEY (MaKhuyenMai),
	FOREIGN KEY (MaKhuyenMai) REFERENCES KhuyenMai(MaKhuyenMai),
)

CREATE TABLE VoucherVanChuyen (
	MaKhuyenMai VARCHAR(50) not null,
	PhuongThucVanChuyen VARCHAR(30) not null,
	PRIMARY KEY (MaKhuyenMai),
	FOREIGN KEY (MaKhuyenMai) REFERENCES KhuyenMai(MaKhuyenMai),
)

CREATE TABLE ShopVoucher (
	MaKhuyenMai VARCHAR(50) not null,
	MaNguoiBan CHAR(6) not null,
	PRIMARY KEY (MaKhuyenMai),
	FOREIGN KEY (MaKhuyenMai) REFERENCES KhuyenMai(MaKhuyenMai),
)

CREATE TABLE DonHang (
	MaDonHang INT not null,
	PhuongThucVanChuyen NVARCHAR(30) not null,
	ThoiGian DATE not null,
	PhuongThucThanhToan NVARCHAR(30) not null,
	TinhTrangDonHang NVARCHAR(30) not null,
	TinhTrangVanChuyen NVARCHAR(30) not null,
	PhiVanChuyen DECIMAL(10,2),
	DiaChi NVARCHAR(255),
	MaNguoiMua CHAR(6) not null,
	MaCoupon VARCHAR(50) ,
	MaVoucherVanChuyen VARCHAR(50),
	GiaTien DECIMAL(10,2) CHECK(GiaTien >= 0),
	PRIMARY KEY (MaDonHang),
	FOREIGN KEY (MaNguoiMua) REFERENCES NguoiMua(MaTK),
	FOREIGN KEY (MaCoupon) REFERENCES Coupon(MaKhuyenMai),
	FOREIGN KEY (MaVoucherVanChuyen) REFERENCES VoucherVanChuyen(MaKhuyenMai),
)



CREATE TABLE DanhGiaSanPham (
	MaDanhGia INT not null,
	NoiDung NVARCHAR(500),
	SoSao INT not null CHECK (SoSao > 0 AND SoSao <= 5),
	MaSP CHAR(8) not null,
	TrangThaiChinhSua INT CHECK (TrangThaiChinhSua IN (0,1)),
	MaNguoiMua CHAR(6) not null,
	MaDonHang INT not null,
	NgayDanhGia DATE,
	PRIMARY KEY (MaDanhGia),
	FOREIGN KEY (MaSP) REFERENCES SanPham(MaSP),
	FOREIGN KEY (MaNguoiMua) REFERENCES NguoiMua(MaTK),
	FOREIGN KEY (MaDonHang) REFERENCES DonHang(MaDonHang),
	UNIQUE(MaSP, MaNguoiMua, MaDonHang),
)

CREATE TABLE HinhAnhVideoDanhGia (
	MaDanhGia INT not null,
	HinhAnhVideo VARCHAR(255),
	PRIMARY KEY (MaDanhGia, HinhAnhVideo),
	FOREIGN KEY (MaDanhGia) REFERENCES DanhGiaSanPham(MaDanhGia),
)



CREATE TABLE DanhSachSPThuocDonHang (
	MaSP CHAR(8) not null,
	MaDonHang INT not null,
	SoLuong INT not null CHECK (SoLuong > 0),
	GiaTien DECIMAL(10,2),
	PRIMARY KEY (MaSP, MaDonHang),
	FOREIGN KEY (MaSP) REFERENCES SanPham(MaSP),
	FOREIGN KEY (MaDonHang) REFERENCES DonHang(MaDonHang),

)

CREATE TABLE DanhSachSPThuocGioHang (
	MaSP CHAR(8) not null,
	MaNguoiMua CHAR(6) not null,
	SoLuong INT not null CHECK (SoLuong > 0),
	GiaTien DECIMAL(10,2),
	PRIMARY KEY (MaSP, MaNguoiMua),
	FOREIGN KEY (MaSP) REFERENCES SanPham(MaSP),
	FOREIGN KEY (MaNguoiMua) REFERENCES GioHang(MaNguoiMua),	
)

CREATE TABLE DanhMucSP (
	MaDanhMuc INT not null,
	TenDanhMuc NVARCHAR(50) not null,
	DanhMucCha INT,
	PRIMARY KEY (MaDanhMuc),
	FOREIGN KEY (DanhMucCha) REFERENCES DanhMucSP(MaDanhMuc),
)

CREATE TABLE DanhSachSPThuocDanhMuc (
	MaSP CHAR(8) not null,
	MaDanhMuc INT not null,
	PRIMARY KEY(MaSP, MaDanhMuc),
	FOREIGN KEY (MaSP) REFERENCES SanPham(MaSP),
	FOREIGN KEY (MaDanhMuc) REFERENCES DanhMucSP(MaDanhMuc),

)

CREATE TABLE DanhMucSPDuocSuDungCoupon (
	MaDanhMuc INT not null,
	MaCoupon VARCHAR(50) not null,
	PRIMARY KEY (MaDanhMuc, MaCoupon),
	FOREIGN KEY (MaDanhMuc) REFERENCES DanhMucSP(MaDanhMuc),
	FOREIGN KEY (MaCoupon) REFERENCES Coupon(MaKhuyenMai),
)

CREATE TABLE VoucherCuaShopTrongDonHang (
	MaDonHang INT not null,
	MaKhuyenMai VARCHAR(50) not null,
	PRIMARY KEY (MaDonHang, MaKhuyenMai),
	FOREIGN KEY (MaDonHang) REFERENCES DonHang(MaDonHang),
	FOREIGN KEY (MaKhuyenMai) REFERENCES ShopVoucher(MaKhuyenMai),
)


--Create TRIGGER

----Trigger kiểm tra số lượng hình ảnh minh hoạ của sản phẩm
GO
CREATE TRIGGER trCheckImageCount
ON AnhMinhHoaSP
AFTER INSERT, DELETE
AS
BEGIN
    DECLARE @MaSP CHAR(8);
    DECLARE @ImageCount INT;

    -- Lấy MaSP và số lượng hình ảnh minh họa mới nhất sau mỗi thay đổi
    SELECT @MaSP = MaSP, @ImageCount = COUNT(*)
    FROM AnhMinhHoaSP
    WHERE MaSP IN (SELECT MaSP FROM inserted UNION SELECT MaSP FROM deleted)
    GROUP BY MaSP;

    -- Kiểm tra số lượng hình ảnh minh họa
    IF @ImageCount < 5 OR @ImageCount > 15
    BEGIN
        PRINT 'So luong hinh anh minh hoa phai tu 5 den 15';
        ROLLBACK;
    END
END;


----Trigger kiểm tra số lượng còn lại
GO
CREATE TRIGGER trCheckQuantityLimitCart
ON DanhSachSPThuocGioHang
AFTER INSERT
AS
BEGIN
    DECLARE @MaSP CHAR(8), @SoLuong INT, @SoLuongConLai INT;

    -- Lấy thông tin sản phẩm và số lượng còn lại từ bảng inserted
    SELECT @MaSP = i.MaSP, @SoLuong = i.SoLuong, @SoLuongConLai = s.SoLuongConLai
    FROM inserted i
    INNER JOIN SanPham s ON i.MaSP = s.MaSP;

    -- Kiểm tra số lượng sản phẩm thêm vào giỏ hàng
    IF @SoLuong > @SoLuongConLai
    BEGIN
        PRINT 'So luong san pham them vao gio hang da vuot qua so luong con lai';
        ROLLBACK;
    END
END;

GO
CREATE TRIGGER trCheckQuantityLimitOrder
ON DanhSachSPThuocDonHang
AFTER INSERT
AS
BEGIN
    DECLARE @MaSP CHAR(8), @SoLuong INT, @SoLuongConLai INT;

    -- Lấy thông tin sản phẩm và số lượng còn lại từ bảng inserted
    SELECT @MaSP = i.MaSP, @SoLuong = i.SoLuong, @SoLuongConLai = s.SoLuongConLai
    FROM inserted i
    INNER JOIN SanPham s ON i.MaSP = s.MaSP;

    -- Kiểm tra số lượng sản phẩm thêm vào giỏ hàng
    IF @SoLuong > @SoLuongConLai
    BEGIN
        PRINT 'So luong san pham them vao don hang da vuot qua so luong con lai';
        ROLLBACK;
    END
END;

----Trigger kiểm tra voucher của người bán trong đơn hàng
GO
CREATE TRIGGER trUniqueVoucherOfShop
ON VoucherCuaShopTrongDonHang
AFTER INSERT
AS
BEGIN
    DECLARE @MaDonHang INT, @MaKhuyenMai VARCHAR(50), @MaNguoiBan CHAR(6);

    -- Lấy thông tin MaDonHang và MaKhuyenMai từ bảng inserted
    SELECT @MaDonHang = i.MaDonHang, @MaKhuyenMai = i.MaKhuyenMai, @MaNguoiBan = s.MaNguoiBan
    FROM inserted i
    JOIN ShopVoucher s ON i.MaKhuyenMai = s.MaKhuyenMai;

    -- Kiểm tra xem đã có voucher nào khác của người bán đó trong đơn hàng chưa
    IF EXISTS (
        SELECT 1
        FROM VoucherCuaShopTrongDonHang v
        JOIN ShopVoucher s ON v.MaKhuyenMai = s.MaKhuyenMai
        WHERE v.MaDonHang = @MaDonHang
            AND s.MaNguoiBan = @MaNguoiBan
            AND v.MaKhuyenMai != @MaKhuyenMai
    )
    BEGIN
        PRINT 'Trong mot don hang, voi moi nguoi ban chi ap dung 1 voucher cua nguoi ban do';
        ROLLBACK;
    END
END;

----Trigger xoá sản phẩm trong giỏ hàng khi sản phẩm hết hàng (SoLuongConLai = 0)
GO
CREATE TRIGGER trDeleteOutOfStockProduct
ON SanPham
AFTER UPDATE
AS
BEGIN
	DECLARE @MaSP CHAR(8), @SoLuongConLai INT;
	SELECT @SoLuongConLai = inserted.SoLuongConLai, @MaSP = inserted.MaSP
	FROM inserted;

	IF(@SoLuongConLai = 0)
	BEGIN
		DELETE 
		FROM DanhSachSPThuocGioHang
		WHERE MaSP = @MaSP;
	END
END

