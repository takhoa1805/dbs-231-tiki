-- lấy danh sách đánh giá
CREATE PROCEDURE GetRating(@ID INT, @sortBy VARCHAR(50))
AS
BEGIN
    IF @sortBy = 'date_asc'
        SELECT *
        FROM DanhGiaSanPham
        WHERE MaSP = @ID
        ORDER BY [NgayDanhGia] ASC;
    ELSE IF @sortBy = 'date_desc'
        SELECT *
        FROM DanhGiaSanPham
        WHERE MaSP = @ID
        ORDER BY [NgayDanhGia] DESC;
    ELSE IF @sortBy = 'rating_asc'
        SELECT *
        FROM DanhGiaSanPham
        WHERE MaSP = @ID
        ORDER BY SoSao ASC;
    ELSE IF @sortBy = 'rating_desc'
        SELECT *
        FROM DanhGiaSanPham
        WHERE MaSP = @ID
        ORDER BY SoSao DESC;
    ELSE
        SELECT *
        FROM DanhGiaSanPham
        WHERE MaSP = @ID
        ORDER BY [NgayDanhGia] DESC;
END;
-- lấy thông tin của đơn hàng
CREATE PROCEDURE GetProductsInOrder(IN orderID INT)
AS
BEGIN
    SELECT *
    FROM DanhsachSPthuocDonhang p INNER JOIN DonHang od ON p. MaDonHang = od. MaDonHang
    LEFT JOIN voucher v ON p.MaDonHang = v.MaDonHang
    WHERE od.MaDonHang = orderID;
END;

