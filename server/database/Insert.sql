INSERT INTO TaiKhoan VALUES ('123456', N'Phạm Ngọc Ân', 'ngocan@gmail.com','mk123456', '0123456789', 'NguoiMua');
INSERT INTO TaiKhoan VALUES ('654321', N'Trần Anh Khoa', 'anhkhoa@hcmut.edu.com','mk123456', '0987654321', 'NguoiMua');
INSERT INTO TaiKhoan VALUES ('112233', N'Đỗ Ngọc Ánh', 'anhdo@gmail.com','mk123456', '0112233123', 'NguoiBan');
INSERT INTO TaiKhoan VALUES ('332211', N'Trần Nguyễn Nam Anh', 'namanh@gmail.com','mk123456', '0332211321', 'NguoiBan');
INSERT INTO TaiKhoan VALUES ('111111', N'Hoàng Minh Hiển', 'minhhien@gmail.com','mk123456', '0111111111', 'NguoiMua');
INSERT INTO TaiKhoan VALUES ('222222', N'Nguyễn Thành Nam', 'thanhnam@gmail.com','mk123456', '0222222222', 'NguoiMua');
INSERT INTO TaiKhoan VALUES ('333333', N'Trần Thị Lê', 'tranthile@gmail.com','mk123456', '0333333333', 'NguoiBan');


INSERT INTO DiaChiNguoiDung VALUES ('123456', N'Linh Trung, Thủ Đức');
INSERT INTO DiaChiNguoiDung VALUES ('123456', N'KTX Khu B, Dĩ An, Bình Dương');
INSERT INTO DiaChiNguoiDung VALUES ('654321', N'Đại học Bách Khoa, Dĩ An, Bình Dương');
INSERT INTO DiaChiNguoiDung VALUES ('654321', N'Đại học Bách Khoa, Quận 10, TP.HCM');
INSERT INTO DiaChiNguoiDung VALUES ('112233', N'KTX Khu A, Dĩ An, Bình Dương');
INSERT INTO DiaChiNguoiDung VALUES ('332211', N'Đường 11, Linh Xuân, Thủ Đức');
INSERT INTO DiaChiNguoiDung VALUES ('111111', N'Đại học Bách Khoa, Dĩ An, Bình Dương');
INSERT INTO DiaChiNguoiDung VALUES ('222222', N'KTX Khu B, Dĩ An, Bình Dương');
INSERT INTO DiaChiNguoiDung VALUES ('333333', N'Đại học Bách Khoa, Quận 10, TP.HCM');


INSERT INTO NguoiMua VALUES ('123456');
INSERT INTO NguoiMua VALUES ('654321');
INSERT INTO NguoiMua VALUES ('111111');
INSERT INTO NguoiMua VALUES ('222222');

INSERT INTO GioHang VALUES ('123456');
INSERT INTO GioHang VALUES ('654321');
INSERT INTO GioHang VALUES ('111111');
INSERT INTO GioHang VALUES ('222222');

INSERT INTO NguoiBan VALUES ('112233');
INSERT INTO NguoiBan VALUES ('332211');
INSERT INTO NguoiBan VALUES ('333333');

INSERT INTO ThuongHieu VALUES ('1001', N'Samsung');
INSERT INTO ThuongHieu VALUES ('1002', N'Kangaroo');
INSERT INTO ThuongHieu VALUES ('1003', N'5s');
INSERT INTO ThuongHieu VALUES ('1004', N'Chandi');
INSERT INTO ThuongHieu VALUES ('1005', N'PVI');
INSERT INTO ThuongHieu VALUES ('1006', N'Kim Đồng');
INSERT INTO ThuongHieu VALUES ('1007', N'gufoods');
INSERT INTO ThuongHieu VALUES ('1008', N'SANEST');
INSERT INTO ThuongHieu VALUES ('1009', N'FPT');
INSERT INTO ThuongHieu VALUES ('1010', N'ELSA');


INSERT INTO DanhSachSPLienQuan VALUES (1);
INSERT INTO DanhSachSPLienQuan VALUES (2);
INSERT INTO DanhSachSPLienQuan VALUES (3);
INSERT INTO DanhSachSPLienQuan VALUES (4);
INSERT INTO DanhSachSPLienQuan VALUES (5);
INSERT INTO DanhSachSPLienQuan VALUES (6);
INSERT INTO DanhSachSPLienQuan VALUES (7);
INSERT INTO DanhSachSPLienQuan VALUES (8);


INSERT INTO SanPham VALUES ('10000001', 2948000.00, N'Dung lượng pin lớn 5000mAh, sử dụng lâu dài lên đến 2 ngày. Màn hình 90Hz, hiển thị sắc nét và cuộn lướt mượt mà. Hệ thống camera gồm 3 camera 50MP, chụp ảnh chất lượng cao và khả năng phóng to, thu nhỏ.', N'Điện thoại Samsung Galaxy A04s (4GB/64GB) ', N'Trung Quốc', 400, 'DienTuDienLanh', '1001', 1, null, '112233',null);
INSERT INTO SanPham VALUES ('10000002', 43000.00, N'Lõi lọc làm từ sợi bông PP chất lượng cao, đảm bảo hiệu quả lọc tốt. Cấu tạo nén chặt giúp nâng cao khả năng lọc và tuổi thọ.', N'Lõi lọc nước số 1 Kangaroo thay thế cho các loại máy lọc RO ', N'Việt Nam', 300, 'DienTuDienLanh', '1002', 2, null, '112233',null);
INSERT INTO SanPham VALUES ('10000003', 389000.00, N'Vải Gió Phom Regular Fit, Thiết Kế Trơn Túi Dáng Hộp, Khóa Kéo Tiện Lợi', N'Áo Khoác Nam Jacket Cổ Bẻ', N'Việt Nam', 945, 'ThoiTrang', '1003', 3, null, '332211',null);
INSERT INTO SanPham VALUES ('10000004', 168000.00, N'Chất vải Kaki mềm mịn, co giãn nhẹ và ít nhăn khi gập. Phom dáng ôm cơ thể, tôn dáng người mặc. Đường may chắc chắn, tỉ mỉ, tinh tế cả những chi tiết nhỏ.', N'Quần Tây Âu Nam', N'Trung Quốc', 28, 'ThoiTrang', '1004', 3, null, '332211',null);
INSERT INTO SanPham VALUES ('10000005', 66000.00, N'PVI là doanh nghiệp bảo hiểm số 1 VN từ 2014 thành lập từ 2011.EZIN là nền tảng số hóa bảo hiểm số 1 VN', N'Bảo hiểm bắt buộc trách nhiệm dân sự xe máy ', N'Việt Nam', 102, 'BaoHiem', '1005', 4, null, '333333',null);
INSERT INTO SanPham VALUES ('10000006', 120000.00, N'PVI là doanh nghiệp bảo hiểm số 1 VN từ 2014 thành lập từ 2011.EZIN là nền tảng số hóa bảo hiểm số 1 VN', N'Bảo Hiểm Bình An', N'Việt Nam', 53, 'BaoHiem', '1005', 4, null, '333333',null);
INSERT INTO SanPham VALUES ('10000007', 70000.00, N'Câu chuyện cảm động về tình yêu và sự sống. Ngôn ngữ sâu sắc, gần gũi và tinh tế. Được chuyển thể thành phim điện ảnh thành công.', N'Cây Cam Ngọt Của Tôi', N'Việt Nam', 94, 'Sach', null, 5, null, '112233',null);
INSERT INTO SanPham VALUES ('10000008', 25000.00, N'Câu chuyện căng thẳng và hấp dẫn với sự xuất hiện của tổ chức Áo Đen. Sự phát triển đáng kinh ngạc của nhân vật chính Conan.', N'Thám Tử Lừng Danh Conan Tập 101', N'Việt Nam', 902, 'Sach', '1006', 6, null, '112233',null);
INSERT INTO SanPham VALUES ('10000009', 25000.00, N'Câu chuyện căng thẳng và hấp dẫn với sự xuất hiện của tổ chức Áo Đen. Sự phát triển đáng kinh ngạc của nhân vật chính Conan.', N'Thám Tử Lừng Danh Conan Tập 100', N'Việt Nam', 890, 'Sach', '1006', 6, null, '112233',null);
INSERT INTO SanPham VALUES ('10000010', 56000.00, N'Nui gạo lứt và nui gạo ngũ sắc từ thành phần tự nhiên, không chứa phẩm màu nhân tạo. Nui gạo lứt phù hợp cho ăn kiêng, eat clean và thực dưỡng. Đặc sản làng bột Sa Đéc - Đồng Tháp, đảm bảo chất lượng và hương vị đặc biệt. ', N'Nui gạo lứt / nui ngũ sắc GUfoods (Gói 500g) ', N'Việt Nam', 12, 'BachHoa', '1007', 7, null, '333333', null);
INSERT INTO SanPham VALUES ('10000011', 222000.00, N'Sản phẩm Nước Yến sào Khánh Hòa Sanest đóng lọ là sản phẩm có giá trị dinh dưỡng cao được chế biến từ nguồn nguyên liệu Yến sào thiên nhiên Khánh Hòa theo phương pháp cổ truyền kết hợp với khoa học công nghệ hiện đại. Nước Yến sào Khánh Hòa Sanest không đường đóng lọ thích hợp với những người ăn kiêng, những người bị bệnh tiểu đường, cần hạn chế về sự hấp thu đường.', N'[Hộp 6 lọ] Nước Yến sào Sanest Khánh Hòa đóng lọ 70ml', N'Việt Nam', 63, 'BachHoa', '1008', 7, null, '333333', null);
INSERT INTO SanPham VALUES ('10000012', 720000.00, N'Xem trọn vẹn tất cả các ứng dụng như khi sử dụng trên đầu thu FPT Play Box. Ứng dụng chạy được trên tất cả các nhà mạng và các thiết bị thông minh. Gia hạn gói cước đơn giản. Được hỗ trợ kỹ thuật từ FPT 24/7 ', N'FPT Play - Gói VIP 6 tháng', N'Việt Nam', 12, 'Evoucher', '1009', 8, null, '332211', null);
INSERT INTO SanPham VALUES ('10000013', 1745000.00, N'ELSA Speak là Ứng dụng học nói & giao tiếp tiếng Anh chuẩn bản xứ, sử dụng công nghệ Trí Tuệ Nhân Tạo tiên tiến hàng đầu thế giới, có khả năng nhận diện giọng nói chuẩn xác 95%', N'Voucher Gói Học ELSA Pro Trọn Đời', N'Việt Nam', 43, 'Evoucher', '1010', 8, null, '332211', null);



INSERT INTO DienTuDienLanh VALUES ('10000001', CONVERT(datetime, '09-06-2023', 105), N'Điện tử', 365);
INSERT INTO DienTuDienLanh VALUES ('10000002', CONVERT(datetime, '12-07-2023', 105), N'Tem bảo hành', 30);

INSERT INTO ThoiTrang VALUES ('10000003', 'Polyester');
INSERT INTO ThoiTrang VALUES ('10000004', 'Kaki');

INSERT INTO KichCoThoiTrang VALUES ('10000003', 'S');
INSERT INTO KichCoThoiTrang VALUES ('10000003', 'M');
INSERT INTO KichCoThoiTrang VALUES ('10000003', 'L');
INSERT INTO KichCoThoiTrang VALUES ('10000003', 'XL');
INSERT INTO KichCoThoiTrang VALUES ('10000003', '2XL');
INSERT INTO KichCoThoiTrang VALUES ('10000003', '3XL');
INSERT INTO KichCoThoiTrang VALUES ('10000004', '28');
INSERT INTO KichCoThoiTrang VALUES ('10000004', '29');
INSERT INTO KichCoThoiTrang VALUES ('10000004', '30');
INSERT INTO KichCoThoiTrang VALUES ('10000004', '31');
INSERT INTO KichCoThoiTrang VALUES ('10000004', '32');
INSERT INTO KichCoThoiTrang VALUES ('10000004', '34');

INSERT INTO MauSacThoiTrang VALUES ('10000003', N'Vàng');
INSERT INTO MauSacThoiTrang VALUES ('10000003', N'Đen');
INSERT INTO MauSacThoiTrang VALUES ('10000003', N'Xanh rêu');
INSERT INTO MauSacThoiTrang VALUES ('10000004', N'Xám');
INSERT INTO MauSacThoiTrang VALUES ('10000004', N'Xanh Đen');
INSERT INTO MauSacThoiTrang VALUES ('10000004', N'Đen');

INSERT INTO BaoHiem VALUES ('10000005', 'Xe máy trên 50cc', CONVERT(datetime,'31-12-2026', 105));
INSERT INTO BaoHiem VALUES ('10000006', 'Người', CONVERT(datetime,'31-12-2027', 105));

INSERT INTO Sach VALUES ('10000007', 2022, 244, null, N'Hội Nhà Văn');
INSERT INTO Sach VALUES ('10000008', 2023, 180, CONVERT(datetime,'17-11-2023', 105), N'Kim Đồng');
INSERT INTO Sach VALUES ('10000009', 2023, 178, CONVERT(datetime,'20-10-2023', 105), N'Kim Đồng');

INSERT INTO TacGiaSach VALUES ('10000007', N'Mauro de Vasconcelos');
INSERT INTO TacGiaSach VALUES ('10000008', N'Gosho Aoyama');
INSERT INTO TacGiaSach VALUES ('10000009', N'Gosho Aoyama');

INSERT INTO BachHoa VALUES ('10000010', CONVERT(datetime,'11-06-2023', 105), CONVERT(datetime,'11-02-2024', 105));
INSERT INTO BachHoa VALUES ('10000011', CONVERT(datetime,'20-09-2023', 105), CONVERT(datetime,'20-12-2023', 105));

INSERT INTO ThanhPhanBachHoa VALUES ('10000010', N'Tinh bột gạo lứt');
INSERT INTO ThanhPhanBachHoa VALUES ('10000010', N'Tinh bột khoai mì');
INSERT INTO ThanhPhanBachHoa VALUES ('10000010', N'Màu tự nhiên');
INSERT INTO ThanhPhanBachHoa VALUES ('10000011', N'Yến sào thiên nhiên');
INSERT INTO ThanhPhanBachHoa VALUES ('10000011', N'Đường tổng hợp');

INSERT INTO Evoucher VALUES ('10000012', CONVERT(datetime,'01-01-2023', 105), CONVERT(datetime,'31-12-2023', 105), N'Xem trực tiếp trên SmartTV, Smartphone, PC, Laptop & FPT Play Box - Chỉ cần kết nối Internet');
INSERT INTO Evoucher VALUES ('10000013', CONVERT(datetime,'12-06-2023', 105), CONVERT(datetime,'31-12-2024', 105), N'Mã được dùng để kích hoạt gói học ELSA PRO trên ứng dụng ELSA Speak, KHÔNG GIỚI HẠN THỜI GIAN SỬ DỤNG kể từ ngày kích hoạt tài khoản ELSA PRO');


INSERT INTO DiaDiemSuDungEvoucher VALUES ('10000012', N'FPT Telecom, 31 Lê Văn Quới, P. Bình Trị Đông');
INSERT INTO DiaDiemSuDungEvoucher VALUES ('10000013', N'ELSA Speak, 453/123, Lê Văn Sỹ, Phường 12, Quận 3');



INSERT INTO KhoHang VALUES (1, 'HN5', N'Ngõ 9 (số 3 + 5), đường Nguyễn Văn Linh, Phường Gia Thụy, Quận Long Biên, Hà Nội.');
INSERT INTO KhoHang VALUES (2, 'SGN', N'367/F370 Đường Bạch Đằng, Phường 2, Quận Tân Bình, TP.HCM');
INSERT INTO KhoHang VALUES (3, 'BFSGN', N'Số 162/2 Quốc Lộ 1A, Phường Thạnh Xuân, Quận 12, TP.HCM');
INSERT INTO KhoHang VALUES (4, 'SGN3', N'Số 09 Nguyễn Văn Tạo, Long Thới, Nhà Bè, TP. HCM');

INSERT INTO DanhSachSPThuocKhoHang VALUES ('10000001', 1);
INSERT INTO DanhSachSPThuocKhoHang VALUES ('10000002', 3);
INSERT INTO DanhSachSPThuocKhoHang VALUES ('10000003', 2);
INSERT INTO DanhSachSPThuocKhoHang VALUES ('10000004', 1);
INSERT INTO DanhSachSPThuocKhoHang VALUES ('10000005', 4);
INSERT INTO DanhSachSPThuocKhoHang VALUES ('10000006', 2);
INSERT INTO DanhSachSPThuocKhoHang VALUES ('10000007', 1);
INSERT INTO DanhSachSPThuocKhoHang VALUES ('10000008', 3);
INSERT INTO DanhSachSPThuocKhoHang VALUES ('10000009', 3);
INSERT INTO DanhSachSPThuocKhoHang VALUES ('10000010', 2);
INSERT INTO DanhSachSPThuocKhoHang VALUES ('10000011', 2);
INSERT INTO DanhSachSPThuocKhoHang VALUES ('10000012', 4);
INSERT INTO DanhSachSPThuocKhoHang VALUES ('10000013', 3);

INSERT INTO KhuyenMai VALUES  ('TIKI1', 50000, 10, 9000, 20.000, 180, 93, CONVERT(datetime,'11-11-2023', 105), CONVERT(datetime,'30-11-2023', 105), 'Coupon');
INSERT INTO KhuyenMai VALUES  ('TIKI2', 100000, null, 15000, 15000, 107, 18, CONVERT(datetime,'13-11-2023', 105), CONVERT(datetime,'20-11-2023', 105), 'Coupon');
INSERT INTO KhuyenMai VALUES  ('VanChuyen1', 70000, null, 12000, 25000, 54, 32, CONVERT(datetime,'05-11-2023', 105), CONVERT(datetime,'28-11-2023', 105), 'VoucherVanChuyen');
INSERT INTO KhuyenMai VALUES  ('VanChuyen2', 40000, null, 15000, 150000, 67, 14, CONVERT(datetime,'09-11-2023', 105), CONVERT(datetime,'22-11-2023', 105), 'VoucherVanChuyen');
INSERT INTO KhuyenMai VALUES  ('VanChuyen3', 40000, null, 15000, 150000, 63, 28, CONVERT(datetime,'09-11-2023', 105), CONVERT(datetime,'22-11-2023', 105), 'VoucherVanChuyen');
INSERT INTO KhuyenMai VALUES  ('VoucherShop1', 50000, 10, 5000, 10000, 50, 36, CONVERT(datetime,'16-11-2023', 105), CONVERT(datetime,'02-12-2023', 105), 'ShopVoucher');
INSERT INTO KhuyenMai VALUES  ('VoucherShop2', 20000, null, 7000, 15000, 70, 22, CONVERT(datetime,'17-10-2023', 105), CONVERT(datetime,'26-11-2023', 105), 'ShopVoucher');
INSERT INTO KhuyenMai VALUES  ('VoucherShop3', 2000, 20, 12000, 20000, 102, 17, CONVERT(datetime,'11-11-2023', 105), CONVERT(datetime,'30-11-2023', 105), 'ShopVoucher');

INSERT INTO Coupon VALUES ('TIKI1');
INSERT INTO Coupon VALUES ('TIKI2');

INSERT INTO VoucherVanChuyen VALUES  ('VanChuyen1', 'Nhanh');
INSERT INTO VoucherVanChuyen VALUES  ('VanChuyen2', 'Tiết kiệm');
INSERT INTO VoucherVanChuyen VALUES  ('VanChuyen3', 'Hoả tốc');

INSERT INTO ShopVoucher VALUES ('VoucherShop1', '112233');
INSERT INTO ShopVoucher VALUES ('VoucherShop2', '332211');
INSERT INTO ShopVoucher VALUES ('VoucherShop3', '333333');

INSERT INTO DonHang VALUES (1, N'Nhanh', CONVERT(datetime,'13-11-2023', 105), N'COD', N'Thành công', N'Đã giao hàng', 25000.00, N'KTX Khu B, Dĩ An, Bình Dương', '123456', 'TIKI1', 'VanChuyen1', null);
INSERT INTO DonHang VALUES (2, N'Tiết kiệm', CONVERT(datetime,'14-11-2023', 105), N'Momo', N'Thành công', N'Đã giao hàng', 22000.00, N'Đại học Bách Khoa, Dĩ An, Bình Dương', '654321', 'TIKI2', 'VanChuyen2', null);
INSERT INTO DonHang VALUES (3, N'Tiết kiệm', CONVERT(datetime,'14-11-2023', 105), N'Zalopay', N'Thành công', N'Đã giao hàng', 18000.00, N'KTX Khu B, Dĩ An, Bình Dương', '123456', 'TIKI1', 'VanChuyen2', null);
INSERT INTO DonHang VALUES (4, N'Hoả tốc', CONVERT(datetime,'15-11-2023', 105), N'COD', N'Đã huỷ', N'Đã huỷ', 37000.00, N'Đại học Bách Khoa, Dĩ An, Bình Dương', '654321', null, null, null);
INSERT INTO DonHang VALUES (5, N'Hoả tốc', CONVERT(datetime,'15-11-2023', 105), N'Momo', N'Thành công', N'Đã giao hàng', 34000.00, N'Đaị học Bách Khoa, Dĩ An, Bình Dương', '654321', 'TIKI2', 'VanChuyen3', null);
INSERT INTO DonHang VALUES (6, N'Nhanh', CONVERT(datetime,'16-11-2023', 105), N'COD', N'Thành công', N'Đã giao hàng', 42000.00, N'Đại học Bách Khoa, Dĩ An, Bình Dương', '111111', null, 'VanChuyen1', null);
INSERT INTO DonHang VALUES (7, N'Tiết kiệm', CONVERT(datetime,'17-11-2023', 105), N'Zalopay', N'Thành công', N'Đã giao hàng', 27000.00, N'Đại học Bách Khoa, Dĩ An, Bình Dương', '111111', 'TIKI2', 'VanChuyen2', null);
INSERT INTO DonHang VALUES (8, N'Tiết kiệm', CONVERT(datetime,'18-11-2023', 105), N'COD', N'Đã huỷ', N'Đã huỷ', 27000.00, N'KTX Khu B, Dĩ An, Bình Dương', '222222', null, null, null);
INSERT INTO DonHang VALUES (9, N'Nhanh', CONVERT(datetime,'19-11-2023', 105), N'Momo', N'Thành công', N'Đã giao hàng', 27000.00, N'KTX Khu B, Dĩ An, Bình Dương', '222222', 'TIKI1', 'VanChuyen3', null);
INSERT INTO DonHang VALUES (10, N'Hoả tốc', CONVERT(datetime,'20-11-2023', 105), N'Momo', N'Thành công', N'Đã giao hàng', 22000.00, N'KTX Khu B, Dĩ An, Bình Dương', '123456', 'TIKI2', 'VanChuyen3', null);
INSERT INTO DonHang VALUES (11, N'Nhanh', CONVERT(datetime,'22-11-2023', 105), N'Momo', N'Thành công', N'Đang vận chuyển', 17000.00, N'Đại học Bách Khoa, Quận 10, TP.HCM', '654321', null, null, null);
INSERT INTO DonHang VALUES (12, N'Tiết kiệm', CONVERT(datetime,'22-11-2023', 105), N'Zalopay', N'Thành công', N'Đã giao hàng', 0.0, N'Đại học Bách Khoa, Quận 10, TP.HCM', '111111', 'TIKI1', 'VanChuyen1', null);
INSERT INTO DonHang VALUES (13, N'Nhanh', CONVERT(datetime,'23-11-2023', 105), N'Zalopay', N'Thành công', N'Đã giao hàng', 12000.00, N'KTX Khu B, Dĩ An, Bình Dương', '222222', 'TIKI2', 'VanChuyen2', null);
INSERT INTO DonHang VALUES (14, N'Hoả tốc', CONVERT(datetime,'23-11-2023', 105), N'Zalopay', N'Đã huỷ', N'Đã huỷ', 35000.00, N'KTX Khu B, Dĩ An, Bình Dương', '222222', null, null, null);

INSERT INTO DanhSachSPThuocDonHang VALUES ('10000003', 1, 1, null);
INSERT INTO DanhSachSPThuocDonHang VALUES ('10000004', 1, 1, null);
INSERT INTO DanhSachSPThuocDonHang VALUES ('10000001', 2, 1, null);
INSERT INTO DanhSachSPThuocDonHang VALUES ('10000002', 3, 2, null);
INSERT INTO DanhSachSPThuocDonHang VALUES ('10000003', 4, 1, null);
INSERT INTO DanhSachSPThuocDonHang VALUES ('10000005', 4, 1, null);
INSERT INTO DanhSachSPThuocDonHang VALUES ('10000003', 5, 1, null);
INSERT INTO DanhSachSPThuocDonHang VALUES ('10000005', 5, 2, null);
INSERT INTO DanhSachSPThuocDonHang VALUES ('10000006', 6, 1, null);
INSERT INTO DanhSachSPThuocDonHang VALUES ('10000006', 7, 1, null);
INSERT INTO DanhSachSPThuocDonHang VALUES ('10000010', 7, 1, null);
INSERT INTO DanhSachSPThuocDonHang VALUES ('10000007', 8, 2, null);
INSERT INTO DanhSachSPThuocDonHang VALUES ('10000007', 9, 2, null);
INSERT INTO DanhSachSPThuocDonHang VALUES ('10000008', 9, 1, null);
INSERT INTO DanhSachSPThuocDonHang VALUES ('10000009', 9, 1, null);
INSERT INTO DanhSachSPThuocDonHang VALUES ('10000008', 10, 2, null);
INSERT INTO DanhSachSPThuocDonHang VALUES ('10000009', 10, 3, null);
INSERT INTO DanhSachSPThuocDonHang VALUES ('10000011', 11, 1, null);
INSERT INTO DanhSachSPThuocDonHang VALUES ('10000010', 11, 2, null);
INSERT INTO DanhSachSPThuocDonHang VALUES ('10000012', 12, 1, null);
INSERT INTO DanhSachSPThuocDonHang VALUES ('10000013', 13, 1, null);
INSERT INTO DanhSachSPThuocDonHang VALUES ('10000012', 14, 1, null);
INSERT INTO DanhSachSPThuocDonHang VALUES ('10000011', 14, 1, null);
INSERT INTO DanhSachSPThuocDonHang VALUES ('10000013', 14, 1, null);

INSERT INTO DanhGiaSanPham VALUES (1, N'Đóng gói đẹp, giao hành nhanh', 4, '10000001', 0, '654321', 2);
INSERT INTO DanhGiaSanPham VALUES (2, N'Đóng gói kỹ càng, hàng chất lượng, giao hàng nhanh', 5, '10000002', 0, '123456', 3);
INSERT INTO DanhGiaSanPham VALUES (3, N'Đóng gói đẹp, giao hành nhanh', 4, '10000003', 0, '123456', 1);
INSERT INTO DanhGiaSanPham VALUES (4, N'Đóng gói đẹp, giao hành nhanh', 4, '10000003', 0, '654321', 5);
INSERT INTO DanhGiaSanPham VALUES (5, N'Đóng gói kỹ càng, hàng chất lượng, giao hàng nhanh', 5, '10000004', 0, '123456', 1);
INSERT INTO DanhGiaSanPham VALUES (6, N'Đóng gói đẹp, giao hành nhanh', 4, '10000005', 0, '654321', 5);
INSERT INTO DanhGiaSanPham VALUES (7, N'Hàng chất lượng nhưng Shop giao hàng chậm', 3, '10000006', 0, '111111', 6);
INSERT INTO DanhGiaSanPham VALUES (8, N'Đóng gói đẹp, giao hành nhanh', 4, '10000006', 0, '111111', 7);
INSERT INTO DanhGiaSanPham VALUES (9, N'Đóng gói đẹp, giao hành nhanh', 4, '10000007', 0, '222222', 8);
INSERT INTO DanhGiaSanPham VALUES (10, N'Đóng gói kỹ càng, hàng chất lượng, giao hàng nhanh', 5, '10000007', 0, '222222', 9);
INSERT INTO DanhGiaSanPham VALUES (11, N'Hàng chất lượng nhưng Shop giao hàng chậm', 3, '10000008', 0, '222222', 9);
INSERT INTO DanhGiaSanPham VALUES (12, N'Đóng gói đẹp, giao hành nhanh', 4, '10000008', 0, '123456', 10);
INSERT INTO DanhGiaSanPham VALUES (13, N'Đóng gói đẹp, giao hành nhanh', 4, '10000009', 0, '222222', 9);
INSERT INTO DanhGiaSanPham VALUES (14, N'Đóng gói kỹ càng, hàng chất lượng, giao hàng nhanh', 5, '10000009', 0, '123456', 10);
INSERT INTO DanhGiaSanPham VALUES (15, N'Giao hàng chậm, đóng gói sơ sài, hàng không như mong đợi', 2, '10000010', 0, '111111', 7);
INSERT INTO DanhGiaSanPham VALUES (16, N'Hàng chất lượng nhưng Shop giao hàng chậm', 3, '10000010', 0, '654321', 11);
INSERT INTO DanhGiaSanPham VALUES (17, N'Đóng gói kỹ càng, hàng chất lượng, giao hàng nhanh', 5, '10000011', 0, '654321', 11);
INSERT INTO DanhGiaSanPham VALUES (18, N'Đóng gói đẹp, giao hành nhanh', 4, '10000012', 0, '111111', 12);
INSERT INTO DanhGiaSanPham VALUES (19, N'Hàng chất lượng nhưng Shop giao hàng chậm', 3, '10000013', 0, '222222', 13);



INSERT INTO DanhSachSPThuocGioHang VALUES ('10000001', '123456', 1, 2948000.00);
INSERT INTO DanhSachSPThuocGioHang VALUES ('10000005', '123456', 1, 66000.00);
INSERT INTO DanhSachSPThuocGioHang VALUES ('10000002', '654321', 2, 86000.00);
INSERT INTO DanhSachSPThuocGioHang VALUES ('10000004', '654321', 1, 168000.00);
INSERT INTO DanhSachSPThuocGioHang VALUES ('10000003', '111111', 1, 389000.00);
INSERT INTO DanhSachSPThuocGioHang VALUES ('10000006', '111111', 1, 120000.00);
INSERT INTO DanhSachSPThuocGioHang VALUES ('10000007', '111111', 2, 140000.00);
INSERT INTO DanhSachSPThuocGioHang VALUES ('10000008', '222222', 1, 25000.00);
INSERT INTO DanhSachSPThuocGioHang VALUES ('10000010', '222222', 1, 56000.00);

INSERT INTO DanhMucSP VALUES (1, N'Đồ chơi', null);
INSERT INTO DanhMucSP VALUES (2, N'Điện tử điện lạnh', null);
INSERT INTO DanhMucSP VALUES (3, N'Điện thoại - Máy tính bảng', null);
INSERT INTO DanhMucSP VALUES (4, N'Bách Hoá', null);
INSERT INTO DanhMucSP VALUES (5, N'Làm đẹp - Sức khoẻ', null);
INSERT INTO DanhMucSP VALUES (6, N'Điện gia dụng', null);
INSERT INTO DanhMucSP VALUES (7, N'Thời trang', null);
INSERT INTO DanhMucSP VALUES (8, N'Thời trang nữ', 7);
INSERT INTO DanhMucSP VALUES (9, N'Thời trang nam', 7);
INSERT INTO DanhMucSP VALUES (10, N'Balo và Vali', null);
INSERT INTO DanhMucSP VALUES (11, N'Phụ kiện thời trang', 7);
INSERT INTO DanhMucSP VALUES (12, N'Đồng hồ và trang sức', 7);
INSERT INTO DanhMucSP VALUES (13, N'Laptop', null);
INSERT INTO DanhMucSP VALUES (14, N'Nhà cửa - Đời sống', null);
INSERT INTO DanhMucSP VALUES (15, N'Phụ kiện', null);
INSERT INTO DanhMucSP VALUES (16, N'Voucher - Dịch vụ', null);
INSERT INTO DanhMucSP VALUES (17, N'Ô tô - Xe máy - Xe đạp', null);
INSERT INTO DanhMucSP VALUES (18, N'Sách', null);
INSERT INTO DanhMucSP VALUES (19, N'Bảo hiểm', null);

INSERT INTO DanhSachSPThuocDanhMuc VALUES ('10000001',3);
INSERT INTO DanhSachSPThuocDanhMuc VALUES ('10000002',2);
INSERT INTO DanhSachSPThuocDanhMuc VALUES ('10000003',7);
INSERT INTO DanhSachSPThuocDanhMuc VALUES ('10000004',7);
INSERT INTO DanhSachSPThuocDanhMuc VALUES ('10000005',19);
INSERT INTO DanhSachSPThuocDanhMuc VALUES ('10000006',19);
INSERT INTO DanhSachSPThuocDanhMuc VALUES ('10000007',18);
INSERT INTO DanhSachSPThuocDanhMuc VALUES ('10000008',18);
INSERT INTO DanhSachSPThuocDanhMuc VALUES ('10000009',18);
INSERT INTO DanhSachSPThuocDanhMuc VALUES ('10000010',4);
INSERT INTO DanhSachSPThuocDanhMuc VALUES ('10000011',4);
INSERT INTO DanhSachSPThuocDanhMuc VALUES ('10000012',16);
INSERT INTO DanhSachSPThuocDanhMuc VALUES ('10000013',16);


INSERT INTO DanhMucSPDuocSuDungCoupon VALUES (1, 'TIKI1');
INSERT INTO DanhMucSPDuocSuDungCoupon VALUES (3, 'TIKI1');
INSERT INTO DanhMucSPDuocSuDungCoupon VALUES (2, 'TIKI1');
INSERT INTO DanhMucSPDuocSuDungCoupon VALUES (7, 'TIKI1');
INSERT INTO DanhMucSPDuocSuDungCoupon VALUES (18, 'TIKI1');
INSERT INTO DanhMucSPDuocSuDungCoupon VALUES (19, 'TIKI1');
INSERT INTO DanhMucSPDuocSuDungCoupon VALUES (16, 'TIKI2');
INSERT INTO DanhMucSPDuocSuDungCoupon VALUES (4, 'TIKI2');
INSERT INTO DanhMucSPDuocSuDungCoupon VALUES (3, 'TIKI2');
INSERT INTO DanhMucSPDuocSuDungCoupon VALUES (5, 'TIKI2');
INSERT INTO DanhMucSPDuocSuDungCoupon VALUES (7, 'TIKI2');

INSERT INTO VoucherCuaShopTrongDonHang VALUES (2, 'VoucherShop1');
INSERT INTO VoucherCuaShopTrongDonHang VALUES (3, 'VoucherShop1');
INSERT INTO VoucherCuaShopTrongDonHang VALUES (1, 'VoucherShop2');
INSERT INTO VoucherCuaShopTrongDonHang VALUES (4, 'VoucherShop2');
INSERT INTO VoucherCuaShopTrongDonHang VALUES (4, 'VoucherShop3');
INSERT INTO VoucherCuaShopTrongDonHang VALUES (5, 'VoucherShop2');
INSERT INTO VoucherCuaShopTrongDonHang VALUES (5, 'VoucherShop3');

INSERT INTO HinhAnhVideoDanhGia VALUES  
(1, 'img/danhgia1_1.jpg'),
(1, 'img/danhgia1_2.jpg'),
(1, 'img/danhgia1_3.mp4')
INSERT INTO HinhAnhVideoDanhGia VALUES  
(2, 'img/danhgia2_1.jpg'),
(2, 'img/danhgia2_2.jpg'),
(2, 'img/danhgia2_3.mp4')
INSERT INTO HinhAnhVideoDanhGia VALUES  
(3, 'img/danhgia3_1.jpg'),
(3, 'img/danhgia3_2.jpg'),
(3, 'img/danhgia3_3.mp4')
INSERT INTO HinhAnhVideoDanhGia VALUES  
(4, 'img/danhgia4_1.jpg'),
(4, 'img/danhgia4_2.jpg'),
(4, 'img/danhgia4_3.mp4')
INSERT INTO HinhAnhVideoDanhGia VALUES  
(5, 'img/danhgia5_1.jpg'),
(5, 'img/danhgia5_2.jpg'),
(5, 'img/danhgia5_3.mp4')
INSERT INTO HinhAnhVideoDanhGia VALUES  
(6, 'img/danhgia6_1.jpg'),
(6, 'img/danhgia6_2.jpg'),
(6, 'img/danhgia6_3.mp4')
INSERT INTO HinhAnhVideoDanhGia VALUES  
(7, 'img/danhgia7_1.jpg'),
(7, 'img/danhgia7_2.jpg'),
(7, 'img/danhgia7_3.mp4')
INSERT INTO HinhAnhVideoDanhGia VALUES  
(8, 'img/danhgia8_1.jpg'),
(8, 'img/danhgia8_2.jpg'),
(8, 'img/danhgia8_3.mp4')
INSERT INTO HinhAnhVideoDanhGia VALUES  
(9, 'img/danhgia9_1.jpg'),
(9, 'img/danhgia9_2.jpg'),
(9, 'img/danhgia9_3.mp4')
INSERT INTO HinhAnhVideoDanhGia VALUES  
(10, 'img/danhgia10_1.jpg'),
(10, 'img/danhgia10_2.jpg'),
(10, 'img/danhgia10_3.mp4')
INSERT INTO HinhAnhVideoDanhGia VALUES  
(11, 'img/danhgia11_1.jpg'),
(11, 'img/danhgia11_2.jpg'),
(11, 'img/danhgia11_3.mp4')
INSERT INTO HinhAnhVideoDanhGia VALUES  
(12, 'img/danhgia12_1.jpg'),
(12, 'img/danhgia12_2.jpg'),
(12, 'img/danhgia12_3.mp4')
INSERT INTO HinhAnhVideoDanhGia VALUES  
(13, 'img/danhgia13_1.jpg'),
(13, 'img/danhgia13_2.jpg'),
(13, 'img/danhgia13_3.mp4')


INSERT INTO AnhMinhHoaSP VALUES
('10000001', 'img/sp1_1.jpg'),
('10000001', 'img/sp1_2.jpg'),
('10000001', 'img/sp1_3.jpg'),
('10000001', 'img/sp1_4.jpg'),
('10000001', 'img/sp1_5.jpg'),
('10000001', 'img/sp1_6.jpg'),
('10000001', 'img/sp1_7.jpg')

INSERT INTO AnhMinhHoaSP VALUES
('10000002', 'img/sp2_1.jpg'),
('10000002', 'img/sp2_2.jpg'),
('10000002', 'img/sp2_3.jpg'),
('10000002', 'img/sp2_4.jpg'),
('10000002', 'img/sp2_5.jpg'),
('10000002', 'img/sp2_6.jpg')

INSERT INTO AnhMinhHoaSP VALUES
('10000003', 'img/sp3_1.jpg'),
('10000003', 'img/sp3_2.jpg'),
('10000003', 'img/sp3_3.jpg'),
('10000003', 'img/sp3_4.jpg'),
('10000003', 'img/sp3_5.jpg')

INSERT INTO AnhMinhHoaSP VALUES
('10000004', 'img/sp4_1.jpg'),
('10000004', 'img/sp4_2.jpg'),
('10000004', 'img/sp4_3.jpg'),
('10000004', 'img/sp4_4.jpg'),
('10000004', 'img/sp4_5.jpg'),
('10000004', 'img/sp4_6.jpg'),
('10000004', 'img/sp4_7.jpg')

INSERT INTO AnhMinhHoaSP VALUES
('10000005', 'img/sp5_1.jpg'),
('10000005', 'img/sp5_2.jpg'),
('10000005', 'img/sp5_3.jpg'),
('10000005', 'img/sp5_4.jpg'),
('10000005', 'img/sp5_5.jpg')

INSERT INTO AnhMinhHoaSP VALUES
('10000006', 'img/sp6_1.jpg'),
('10000006', 'img/sp6_2.jpg'),
('10000006', 'img/sp6_3.jpg'),
('10000006', 'img/sp6_4.jpg'),
('10000006', 'img/sp6_5.jpg')

INSERT INTO AnhMinhHoaSP VALUES
('10000007', 'img/sp7_1.jpg'),
('10000007', 'img/sp7_2.jpg'),
('10000007', 'img/sp7_3.jpg'),
('10000007', 'img/sp7_4.jpg'),
('10000007', 'img/sp7_5.jpg'),
('10000007', 'img/sp7_6.jpg')

INSERT INTO AnhMinhHoaSP VALUES
('10000008', 'img/sp8_1.jpg'),
('10000008', 'img/sp8_2.jpg'),
('10000008', 'img/sp8_3.jpg'),
('10000008', 'img/sp8_4.jpg'),
('10000008', 'img/sp8_5.jpg'),
('10000008', 'img/sp8_6.jpg')

INSERT INTO AnhMinhHoaSP VALUES
('10000009', 'img/sp9_1.jpg'),
('10000009', 'img/sp9_2.jpg'),
('10000009', 'img/sp9_3.jpg'),
('10000009', 'img/sp9_4.jpg'),
('10000009', 'img/sp9_5.jpg'),
('10000009', 'img/sp9_6.jpg')

INSERT INTO AnhMinhHoaSP VALUES
('100000010', 'img/sp10_1.jpg'),
('100000010', 'img/sp10_2.jpg'),
('100000010', 'img/sp10_3.jpg'),
('100000010', 'img/sp10_4.jpg'),
('100000010', 'img/sp10_5.jpg'),
('100000010', 'img/sp10_6.jpg'),
('100000010', 'img/sp10_7.jpg')

INSERT INTO AnhMinhHoaSP VALUES
('100000011', 'img/sp11_1.jpg'),
('100000011', 'img/sp11_2.jpg'),
('100000011', 'img/sp11_3.jpg'),
('100000011', 'img/sp11_4.jpg'),
('100000011', 'img/sp11_5.jpg'),
('100000011', 'img/sp11_6.jpg')

INSERT INTO AnhMinhHoaSP VALUES
('100000012', 'img/sp12_1.jpg'),
('100000012', 'img/sp12_2.jpg'),
('100000012', 'img/sp12_3.jpg'),
('100000012', 'img/sp12_4.jpg'),
('100000012', 'img/sp12_5.jpg'),
('100000012', 'img/sp12_6.jpg')

INSERT INTO AnhMinhHoaSP VALUES
('100000013', 'img/sp13_1.jpg'),
('100000013', 'img/sp13_2.jpg'),
('100000013', 'img/sp13_3.jpg'),
('100000013', 'img/sp13_4.jpg'),
('100000013', 'img/sp13_5.jpg')
