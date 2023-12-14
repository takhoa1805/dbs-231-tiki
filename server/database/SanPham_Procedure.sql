--- procedure insert into SanPham table

CREATE PROCEDURE Insert_SanPham(
    @p_MaSP CHAR(8),
    @p_GiaTien DECIMAL(10,2),
    @p_MoTa NVARCHAR(MAX),
    @p_TenSP NVARCHAR(255),
    @p_XuatXu NVARCHAR(30),
    @p_SoLuongConLai INT,
    @p_LoaiSP VARCHAR(30),
    @p_MaThuongHieu CHAR(4),
    @p_DanhSachLienQuan INT,
    @p_SPMau CHAR(8),
    @p_MaNguoiBan CHAR(6),
    @p_SoSaoTrungBinh DECIMAL(1,1)
)
AS
BEGIN
    -- Check for NULL constraints
    IF @p_MaSP IS NULL OR @p_GiaTien IS NULL OR @p_TenSP IS NULL OR @p_MaNguoiBan IS NULL OR @p_LoaiSP IS NULL
    BEGIN
        RAISERROR('One or more required fields are NULL!', 16, 1);
        RETURN;
    END;

    -- Check if MaNguoiBan exists in NguoiBan table
    IF NOT EXISTS (SELECT 1 FROM NguoiBan WHERE MaTK = @p_MaNguoiBan)
    BEGIN
        RAISERROR('MaNguoiBan does not exist in NguoiBan table!', 16, 1);
        RETURN;
    END;

    -- Check for constraints
    IF @p_GiaTien <= 1000 OR @p_SoLuongConLai < 0
    BEGIN
        RAISERROR('Invalid GiaTien or SoLuongConLai!', 16, 1);
        RETURN;
    END;

    -- Check foreign key constraints
    IF (@p_SPMau IS NOT NULL AND NOT EXISTS (SELECT 1 FROM SanPham WHERE MaSP = @p_SPMau))
    BEGIN
        RAISERROR('SPMau does not exist in SanPham table!', 16, 1);
        RETURN;
    END;

    IF (@p_MaThuongHieu IS NOT NULL AND NOT EXISTS (SELECT 1 FROM ThuongHieu WHERE MaThuongHieu = @p_MaThuongHieu))
    BEGIN
        RAISERROR('MaThuongHieu does not exist in ThuongHieu table!', 16, 1);
        RETURN;
    END;

    IF (@p_DanhSachLienQuan IS NOT NULL AND NOT EXISTS (SELECT 1 FROM DanhSachSPLienQuan WHERE MaDanhSach = @p_DanhSachLienQuan))
    BEGIN
        RAISERROR('DanhSachLienQuan does not exist in DanhSachSPLienQuan table!', 16, 1);
        RETURN;
    END;

    -- Insert the record if all validations pass
    INSERT INTO SanPham(MaSP, GiaTien, MoTa, TenSP, XuatXu, SoLuongConLai, LoaiSP, MaThuongHieu, DanhSachLienQuan, SPMau, MaNguoiBan, SoSaoTrungBinh)
    VALUES(@p_MaSP, @p_GiaTien, @p_MoTa, @p_TenSP, @p_XuatXu, @p_SoLuongConLai, @p_LoaiSP, @p_MaThuongHieu, @p_DanhSachLienQuan, @p_SPMau, @p_MaNguoiBan, @p_SoSaoTrungBinh);
END;

--- procedure update MaSP, GiaTien, MoTa, SoLuongConLai in SanPham table

CREATE PROCEDURE Update_SanPham(
    @p_MaSP CHAR(8),
    @p_GiaTien DECIMAL(10,2),
    @p_MoTa NVARCHAR(MAX),
    @p_SoLuongConLai INT
)
AS
BEGIN
    -- Check for NULL constraints
    IF @p_MaSP IS NULL OR @p_GiaTien IS NULL OR @p_MoTa IS NULL OR @p_SoLuongConLai IS NULL 
    BEGIN
        RAISERROR('One or more required fields are NULL!', 16, 1);
        RETURN;
    END;

    -- Check if MaSP exists
    IF NOT EXISTS (SELECT 1 FROM SanPham WHERE MaSP = @p_MaSP)
    BEGIN
        RAISERROR('MaSP does not exist!', 16, 1);
        RETURN;
    END;

    -- Check for constraints
    IF @p_GiaTien <= 1000 OR @p_SoLuongConLai < 0
    BEGIN
        RAISERROR('Invalid GiaTien or SoLuongConLai!', 16, 1);
        RETURN;
    END;

    -- Update the record if all validations pass
    UPDATE SanPham
    SET GiaTien = @p_GiaTien, MoTa = @p_MoTa, SoLuongConLai = @p_SoLuongConLai
    WHERE MaSP = @p_MaSP;
END;

--- procedure delete records in SanPham table

CREATE PROCEDURE Delete_SanPham(
    @p_MaSP CHAR(8)
)
AS
BEGIN
    -- Check if MaSP exists
    IF NOT EXISTS (SELECT 1 FROM SanPham WHERE MaSP = @p_MaSP)
    BEGIN
        RAISERROR('MaSP does not exist!', 16, 1);
        RETURN;
    END;

    -- Check if MaSP is associated with DanhSachSPThuocDonHang
    IF EXISTS (SELECT 1 FROM DanhSachSPThuocDonHang WHERE MaSP = @p_MaSP)
    BEGIN
        RAISERROR('Cannot delete, product is associated with a buyer in DanhSachSPThuocDonHang!', 16, 1);
        RETURN;
    END;

    -- Perform the deletion if all checks pass
    DELETE FROM SanPham WHERE MaSP = @p_MaSP;
    PRINT 'Record deleted successfully';
END;



---trigger when call insert procedure to SanPham table

/*
CREATE TRIGGER tr_InsertIntoDienTuDienLanh
ON SanPham
AFTER INSERT
AS
BEGIN
    -- Insert into DienTuDienLanh table based on the inserted records in SanPham
    INSERT INTO DienTuDienLanh(MaSP, NgaySanXuat, HinhThucBaoHanh, ThoiGianBaoHanh)
    SELECT i.MaSP, NULL, NULL, NULL
    FROM inserted i
    WHERE i.LoaiSP = 'DienTuDienLanh';
END;



CREATE TRIGGER tr_InsertIntoThoiTrang
ON SanPham
AFTER INSERT
AS
BEGIN
    -- Insert into ThoiTrang table based on the inserted records in SanPham
    INSERT INTO ThoiTrang(MaSP, ChatLieu)
    SELECT i.MaSP, NULL
    FROM inserted i
    WHERE i.LoaiSP = 'ThoiTrang';
END;

CREATE TRIGGER tr_InsertIntoSach
ON SanPham
AFTER INSERT
AS
BEGIN
    -- Insert into Sach table based on the inserted records in SanPham
    INSERT INTO Sach(MaSP, NamXuatBan, SoTrang, NgayPhatHanh, NhaXuatBan)
    SELECT i.MaSP, NULL, NULL, NULL, NULL
    FROM inserted i
    WHERE i.LoaiSP = 'Sach';
END;


CREATE TRIGGER tr_InsertIntoBachHoa
ON SanPham
AFTER INSERT
AS
BEGIN
    -- Insert into BachHoa table based on the inserted records in SanPham
    INSERT INTO BachHoa(MaSP, NgaySanXuat, HanSuDung)
    SELECT i.MaSP, NULL, NULL
    FROM inserted i
    WHERE i.LoaiSP = 'BachHoa';
END;




CREATE TRIGGER tr_InsertIntoBaoHiem
ON SanPham
AFTER INSERT
AS
BEGIN
    -- Insert into BaoHiem table based on the inserted records in SanPham
    INSERT INTO BaoHiem(MaSP, DoiTuong, ThoiHan)
    SELECT i.MaSP, NULL, NULL
    FROM inserted i
    WHERE i.LoaiSP = 'BaoHiem';
END;


CREATE TRIGGER tr_InsertIntoEvoucher
ON SanPham
AFTER INSERT
AS
BEGIN
    -- Insert into Evoucher table based on the inserted records in SanPham
    INSERT INTO Evoucher(MaSP, CoHieuLuc, HetHieuLuc, DieuKienSuDung)
    SELECT i.MaSP, NULL, NULL, NULL
    FROM inserted i
    WHERE i.LoaiSP = 'Evoucher';
END;

----------------------------------------
--- test exec code                   ---
----------------------------------------

-- execute Insert_SanPham procedure with sample values
EXEC Insert_SanPham '10000022', 200000.00, N'Product description', N'Product Name', N'Vietnam', 50, 'DienTuDienLanh', '1001', 1, null, '112233', null;

-- execute Update_SanPham procedure with sample values
EXEC Update_SanPham '10000022', 250000.00, N'Updated product description', 60;

-- execute Delete_SanPham procedure with sample values
EXEC Delete_SanPham '10000022';


*/