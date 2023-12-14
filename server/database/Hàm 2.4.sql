------THỐNG KÊ TỶ LỆ HỦY ĐƠN--------
CREATE FUNCTION cancel_order_rate
(
    @from DATE, 
    @to DATE, 
    @id_nguoiban CHAR(6)
)
RETURNS DECIMAL(5,2)
AS
BEGIN
    DECLARE @total_orders INT;
    DECLARE @cancelled_orders INT;
    DECLARE @cancel_rate DECIMAL(5,2);

    -- Sử dụng hàm tính tổng số đơn hàng
    SET @total_orders = dbo.total_order(@from, @to, @id_nguoiban);

    -- Tính số đơn hàng bị hủy của người bán
    SELECT @cancelled_orders = COUNT(DISTINCT d.MaDonHang) 
    FROM DanhSachSPThuocDonHang d
    INNER JOIN SanPham s ON d.MaSP = s.MaSP
    INNER JOIN NguoiBan nb ON s.MaNguoiBan = nb.MaTK
    INNER JOIN DonHang dh ON d.MaDonHang = dh.MaDonHang
    WHERE dh.ThoiGian BETWEEN @from AND @to
      AND dh.TinhTrangDonHang = N'Đã huỷ'
      AND nb.MaTK = @id_nguoiban;

    -- Tính tỷ lệ hủy đơn
    IF @total_orders > 0
        SET @cancel_rate = CAST(@cancelled_orders AS DECIMAL(5,2)) / @total_orders * 100.00;
    ELSE
        SET @cancel_rate = 0.00;

    RETURN @cancel_rate;
END;

/*DROP FUNCTION IF EXISTS dbo.cancel_order_rate;

SELECT dbo.cancel_order_rate('2023-11-13', '2023-11-23', '333333') AS CancelRate;*/

--------------------TỔNG SỐ ĐƠN---------
CREATE FUNCTION total_order(@from DATE, @to DATE, @id_nguoiban CHAR(6))
RETURNS INT AS
BEGIN 
    DECLARE @total INT;
    SET @total = 0;
    
    SELECT @total = COUNT(DISTINCT d.MaDonHang) 
    FROM DanhSachSPThuocDonHang d
    INNER JOIN SanPham s ON d.MaSP = s.MaSP
    INNER JOIN NguoiBan nb ON s.MaNguoiBan = nb.MaTK
    INNER JOIN DonHang dh ON d.MaDonHang = dh.MaDonHang
    WHERE dh.ThoiGian BETWEEN @from AND @to
      AND nb.MaTK = @id_nguoiban;

    RETURN @total;
END;

/*DROP FUNCTION IF EXISTS dbo.total_order;

SELECT dbo.total_order('2023-11-13', '2023-11-23', '333333') AS TotalOrder;*/

---------------------------------TÍNH DOANH THU NGƯỜI BÁN----------------
CREATE FUNCTION revenue_statistics
(
    @from DATE, 
    @to DATE, 
    @id_nguoiban CHAR(6)
)
RETURNS DECIMAL(10,2) 
AS
BEGIN 
    DECLARE @total DECIMAL(10,2);
    SET @total = 0;

    SELECT @total = SUM(d.SoLuong * s.GiaTien)
    FROM DanhSachSPThuocDonHang d
    INNER JOIN SanPham s ON d.MaSP = s.MaSP
    INNER JOIN DonHang dh ON d.MaDonHang = dh.MaDonHang
    WHERE dh.ThoiGian BETWEEN @from AND @to
        AND s.MaNguoiBan = @id_nguoiban;

    RETURN @total;
END;

/*SELECT dbo.revenue_statistics('2023-11-13', '2023-11-17','112233') AS TotalRevenue;*/
-------------------------THỐNG KÊ ĐƠN HÀNG---------------------
CREATE FUNCTION total_order_status
(
    @from DATE,
    @to DATE,
    @id_nguoiban CHAR(6)
)
RETURNS TABLE
AS
RETURN
(
    WITH OrderCounts AS
    (
        SELECT
            COUNT(DISTINCT d.MaDonHang) AS TotalOrder
        FROM
            DanhSachSPThuocDonHang d
            INNER JOIN SanPham s ON d.MaSP = s.MaSP
            INNER JOIN NguoiBan nb ON s.MaNguoiBan = nb.MaTK
            INNER JOIN DonHang dh ON d.MaDonHang = dh.MaDonHang
        WHERE
            dh.ThoiGian BETWEEN @from AND @to
            AND nb.MaTK = @id_nguoiban
    ),
    CanceledOrderCounts AS
    (
        SELECT
            COUNT(DISTINCT d.MaDonHang) AS CanceledOrder
        FROM
            DanhSachSPThuocDonHang d
            INNER JOIN SanPham s ON d.MaSP = s.MaSP
            INNER JOIN NguoiBan nb ON s.MaNguoiBan = nb.MaTK
            INNER JOIN DonHang dh ON d.MaDonHang = dh.MaDonHang
        WHERE
            dh.ThoiGian BETWEEN @from AND @to
            AND dh.TinhTrangDonHang = N'Đã huỷ'
            AND nb.MaTK = @id_nguoiban
    ),
    SuccessfulOrderCounts AS
    (
        SELECT
            COUNT(DISTINCT d.MaDonHang) AS SuccessfulOrder
        FROM
            DanhSachSPThuocDonHang d
            INNER JOIN SanPham s ON d.MaSP = s.MaSP
            INNER JOIN NguoiBan nb ON s.MaNguoiBan = nb.MaTK
            INNER JOIN DonHang dh ON d.MaDonHang = dh.MaDonHang
        WHERE
            dh.ThoiGian BETWEEN @from AND @to
            AND dh.TinhTrangDonHang = N'Thành công'
            AND nb.MaTK = @id_nguoiban
    )

    SELECT
        TotalOrder,
        CanceledOrder,
        SuccessfulOrder
    FROM
        OrderCounts
        CROSS JOIN CanceledOrderCounts
        CROSS JOIN SuccessfulOrderCounts
);

/*SELECT * FROM dbo.total_order_status('2023-11-13', '2023-11-23', '333333');
DROP FUNCTION IF EXISTS dbo.total_order_status;*/


------------------TỔNG SỐ ĐƠN HỦY--------------------
CREATE FUNCTION total_canceled_order
(
    @from DATE,
    @to DATE,
    @id_nguoiban CHAR(6)
)
RETURNS INT
AS
BEGIN 
    DECLARE @total INT;
    SET @total = 0;

    -- Use COLLATE to ensure case-insensitive comparison if needed
    SELECT @total = COUNT(DISTINCT d.MaDonHang) 
    FROM DanhSachSPThuocDonHang d
    INNER JOIN SanPham s ON d.MaSP = s.MaSP
    INNER JOIN NguoiBan nb ON s.MaNguoiBan = nb.MaTK
    INNER JOIN DonHang dh ON d.MaDonHang = dh.MaDonHang
    WHERE dh.ThoiGian BETWEEN @from AND @to
      AND dh.TinhTrangDonHang = N'Đã huỷ'
      AND nb.MaTK = @id_nguoiban;

    RETURN @total;
END;


SELECT dbo.total_canceled_order('2023-11-13', '2023-11-23', '332211') AS TotalCanceledOrders;

DROP FUNCTION IF EXISTS dbo.total_canceled_order;
SELECT * FROM DonHang;
SELECT * FROM SanPham;
SELECT * FROM DanhSachSPThuocDonHang order by MaDonHang;

