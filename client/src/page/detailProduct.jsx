import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';
import dummyData from "./dummydata"; 
import img from "../../assets/product.png";
import tiki from "../../assets/tikitrading.png";
import auth from "../../assets/chinhhang.png";
import DataComment from "./dummycomment";
import Carousel from "../components/Image";
export default function Detail() {
    const { id } = useParams(); 
        const product = dummyData.find((item) => item.id === parseInt(id));

    if (!product) {
        return <div>Sản phẩm không tồn tại</div>;
    }
    const [quantity, setQuantity] = useState(1);

    const decreaseQuantity = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };
  
    const increaseQuantity = () => {
      setQuantity(quantity + 1);
    };
    function renderStars(rating) {
        const stars = [];
        const totalStars = 5;
        const roundedRating = Math.round(rating);
        
        for (let i = 1; i <= totalStars; i++) {
            if (i <= roundedRating) {
              stars.push(<FaStar key={i} className="text-yellow-500" />);
            } else {
              stars.push(<FaStar key={i} className="text-gray-500" />);
            }
          }
        
        return stars;
      }      
    return (
        <div>
            <div className="grid grid-cols-7 gap-x-4">
                <div className="col-span-5  grid grid-cols-5">
                    <div className="col-span-2 rounded overflow-hidden shadow-lg" >
                        <Carousel></Carousel>
                    </div>
                    <div className=" col-span-3 rounded overflow-x-auto shadow-lg p-4 overflow-y-auto">
                        <img src={auth} alt={product.name} className="rounded-lg"  />

                        <h2 className="text-2xl font-normal">{product.name}</h2>
                        <div className="flex flex-row mt-4 mb-4">
                        {renderStars(3)}
                        <p className="text-gray-500 ml-4 ">    Đã bán 4.4k</p>
                        </div>
                        
                        <p  className="font-medium text-black text-2xl">Giá: {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                        }).format(product.price)}</p>
                        <div className="mt-4">
                            <p className="font-medium">Mô tả sản phẩm</p> <br />
                            <p>
                            Điện Thoại iPhone 12 <br />
                            iPhone 12 đẩy nhanh mọi tác vụ với mạng 5G siêu nhanh.1 A14 Bionic, chip nhanh nhất trên điện thoại thông minh. Hệ thống camera kép mới. Với màn hình Super Retina XDR tuyệt đẹp, nay bạn có thể chiêm ngưỡng từng chi tiết hình ảnh vô cùng sống động.
                            <br />
                            Nội dung về tính năng <br />
                            iPhone 12. Mạng 5G giúp tải xuống các bộ phim một cách nhanh chóng và xem trực tuyến video chất lượng cao.1 Màn hình Super Retina XDR 6.1 inch sáng đẹp ấn tượng.2 Ceramic Shield với khả năng chịu va đập khi rơi tốt hơn gấp 4 lần.3 Ảnh chụp tuyệt đẹp trong điều kiện ánh sáng yếu với chế độ Ban Đêm ở tất cả các camera. Quay phim, biên tập và phát video Dolby Vision đẳng cấp điện ảnh. Chip A14 Bionic mạnh mẽ. Hãy để điều thú vị bắt đầu.
                            <br />
                            Tính năng nổi bật <br />
                            Màn hình Super Retina XDR 6.1 inch2
                            Ceramic Shield, chất liệu kính bền chắc nhất từng có trên điện thoại thông minh
                            Mạng 5G cho tốc độ tải xuống siêu nhanh, xem video và nghe nhạc trực tuyến chất lượng cao1
                            A14 Bionic, chip nhanh nhất từng có trên điện thoại thông minh
                            Hệ thống camera kép tiên tiến 12MP với các camera Ultra Wide và Wide; chế độ Ban Đêm, Deep Fusion,
                            HDR thông minh thế hệ 3, khả năng quay video HDR Dolby Vision 4K
                            <br />
                            Camera trước TrueDepth 12MP với chế độ Ban Đêm và khả năng quay video HDR Dolby Vision 4K
                            Khả năng chống nước đạt chuẩn IP68 đứng đầu thị trường4
                            iOS 14 với các tiện ích được thiết kế lại trên Màn Hình Chính, Thư Viện Ứng Dụng hoàn toàn mới, App Clips cùng nhiều tính năng khác
                            Pháp lý
                            1Cần có gói cước dữ liệu. Mạng 5G chỉ khả dụng ở một số thị trường và được cung cấp qua một số nhà mạng. Tốc độ có thể thay đổi tùy địa điểm và nhà mạng. Để biết thông tin về hỗ trợ mạng 5G, vui lòng liên hệ nhà mạng và truy cập.

                            2Màn hình có các góc bo tròn. Khi tính theo hình chữ nhật, kích thước màn hình là 6.06 inch theo đường chéo. Diện tích hiển thị thực tế nhỏ hơn.

                            3Xác nhận dựa vào mặt trước có Ceramic Shield của iPhone 12 so với iPhone thế hệ trước.

                            4iPhone 12 có khả năng chống tia nước, chống nước và chống bụi. Sản phẩm đã qua kiểm nghiệm trong điều kiện phòng thí nghiệm có kiểm soát đạt mức IP68 theo tiêu chuẩn IEC 60529 (chống nước ở độ sâu tối đa 6 mét trong vòng tối đa 30 phút). Khả năng chống tia nước, chống nước và chống bụi không phải là các điều kiện vĩnh viễn. Khả năng này có thể giảm do hao mòn thông thường. Không sạc pin khi iPhone đang bị ướt. Vui lòng tham khảo hướng dẫn sử dụng để biết cách lau sạch và làm khô máy. Không bảo hành sản phẩm bị hỏng do thấm chất lỏng.

                            Thông số kỹ thuật
                            Truy cập để xem cấu hình đầy đủ.

                            Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
                            </p>
                        </div>
                    </div>
                    <div className="col-span-5 rounded overflow-hidden shadow-lg p-6 " >
                        <p className="font-medium text-xl text-black">Khách hàng đánh giá</p>
                        <p className="font-medium text-xl text-black">Lọc theo</p>
                        <div className="flex flex-row pb-4 border-b border-gray-300">
                            <button className="border border-gray-500 rounded-2xl text-gray-500  p-1 m-2">Mới nhất</button>
                            <button className="border border-gray-500 rounded-2xl text-gray-500  p-1 m-2">Cũ nhất</button>
                            <button className="border border-gray-500 rounded-2xl text-gray-500  p-1 m-2">Đánh giá cao</button>
                            <button className="border border-gray-500 rounded-2xl text-gray-500  p-1 m-2">Đánh giá thấp</button>
                        </div>
                        {DataComment.map((comment,id)=>
                        (
                            <div key={id} className="grid grid-cols-10 border-b border-gray-300 pb-4 gap-x-4">
                                <div className="col-span-3 pt-2">
                                <div className="flex flex-row flex justify-center items-center border-b border-gray-300 pb-2 ">
                                    <div className="rounded-full h-16 w-16 bg-blue-500 mr-4 flex justify-center items-center text-white">TG</div>
                                    <div>Tên tác giả <br /> <span className="text-gray-500">Đã tham gia 1 năm</span></div>
                                </div>
                                </div>
                                
                                <div className="col-span-7 ">
                                    <div className="flex flex-row pt-2"> {renderStars(comment.star)}</div>
                                    <p className="flex flex-row text-green-500 pt-4 pb-4"><FaCheck className="text-green-500"></FaCheck>Đã mua hàng</p>
                                    <p>{comment.content}</p>
                                    <img src={img} alt={product.name} className="rounded-lg"  />
                                    <p className="text-gray-400 text-sm">Đã đánh giá lúc: 12/12/2023</p>
                                </div>
                            </div>
                        )
                        )}
                    </div>
                </div>
                <div className="col-span-2 rounded overflow-hidden shadow-lg p-4 sticky top-0 z-10" >
                    <img src={tiki} alt="tiki" className="w-full" style={{borderBottom:"1px solid lightgray"}} />
                    
                    <div className="font-medium">Số lượng</div>
                    <div className="flex items-center mt-4 mb-4">
                    <button
                    onClick={decreaseQuantity}
                    className="w-8 h-8 rounded-l border p-1  mr-2 border-gray-500 text-gray-500"
                    >
                    -
                    </button>
                    <div>{quantity}</div>
                    <button
                    onClick={increaseQuantity}
                    className="w-8 h-8 rounded-r border p-1 ml-2 border-gray-500 text-gray-500"
                    >
                    +
                    </button>
                    </div>
                    <div className="font-medium text-black">
                        Tạm tính <br />
                        <p className="text-2xl mt-4 mb-4 text-black"> {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                    }).format(product.price)}</p>
                    </div>
                    <button className="rounded bg-red-500 p-2 text-white w-full hover:shadow-xl">Mua ngay</button>
                    <button className="rounded border p-2 mt-4 border-blue-500 text-blue-500 w-full hover:shadow-xl">Thêm vào giỏ hàng</button>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
}
