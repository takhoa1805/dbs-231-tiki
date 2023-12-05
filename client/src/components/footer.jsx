import React from "react";
import img1 from '../../assets/footer_1.png';
import img2 from '../../assets/tikinow.png';
import img3 from '../../assets/footerContact.png';
import img4 from '../../assets/qr.png';

export default function Footer() {
    const customstyle=`
    h1
    {
        margin:10px 0 10px 0;
    }
    p
    {
        color:gray;
        font-size:80%;
    }
    `;
    return (
        <div className="grid grid-cols-5 gap-x-4 p-5">
            <div>
                <h1>Hỗ trợ khách hàng</h1>
                <p>Hotline: 1900-6035(1000 đ/phút, 8-21h kể cả T7, CN) <br />
                Các câu hỏi thường gặp <br />
                Gửi yêu cầu hỗ trợ<br />
                Hướng dẫn đặt hàng<br />
                Phương thức vận chuyển<br />
                Chính sách đổi trả<br />
                Hướng dẫn trả góp<br />
                Chính sách hàng nhập khẩu<br />
                Hỗ trợ khách hàng: hotro@tiki.vn<br />
                Báo lỗi bảo mật: security@tiki.vn<br />
                </p>                          
            </div>
            <div>
            <h1>Về Tiki</h1>
            <p>
            Giới thiệu Tiki <br />
            Tiki Blog<br />
            Tuyển dụng<br />
            Chính sách bảo mật thanh toán<br />
            Chính sách bảo mật thông tin cá nhân<br />
            Chính sách giải quyết khiếu nại<br />
            Điều khoản sử dụng<br />
            Giới thiệu Tiki Xu<br />
            Gói hội viên VIP<br />
            Tiếp thị liên kết cùng Tiki<br />
            Bán hàng doanh nghiệp<br />
            Điều kiện vận chuyển<br />
            </p>
            </div>
            <div>
            <h1>Hợp tác và liên kết</h1>
            <p>
            Quy chế hoạt động Sàn GDTMĐT<br />
            Bán hàng cùng Tiki<br />
            </p>
            <h1>Chứng nhận bởi</h1>
            <img src={img1} alt="chứng nhận bởi" style={{width:"70%"}}/>
            </div>
            <div>
                <h1>Đối tác giao hàng</h1>
                <img src={img2} alt="tikinow" style={{width:"50%"}}/>
            </div>
            <div>
                <h1>Kết nối với chúng tôi</h1>
                <img src={img3} alt="contact" style={{width:"50%"}}/>
                <h1>Tải ứng dụng trên điện thoại</h1>
                <img src={img4} alt="contact" />
            </div>
            <style>{customstyle}</style>
        </div>
    );
}
