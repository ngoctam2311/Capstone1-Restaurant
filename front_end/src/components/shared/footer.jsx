import Link from "next/link";
function Footer() {
  return (
    <div className="wrap-footer">
      <span className="wrap-footer__title">
        Khám phá và đặt nhà hàng tốt nhất
      </span>
      <div className="wrap-footer_bottom">
        <div className="wrap-footer_left">
          <Link href="#" className="wrap-footer_link">
            Giới thiệu về FoodieFine
          </Link>
          <Link href="#" className="wrap-footer_link">
            Liên hệ
          </Link>
          <Link href="#" className="wrap-footer_link">
            Bạn là nhà hàng?
          </Link>
          <Link href="#" className="wrap-footer_link">
            Chúng thôi đang thuê
          </Link>
          <Link href="#" className="wrap-footer_link">
            Nhà Hàng gần tôi
          </Link>
        </div>
        <div className="wrap-footer_right">
          <Link href="#" className="wrap-footer_link">
            Chương trình khách hàng thân thiết
          </Link>
          <Link href="#" className="wrap-footer_link">
            Điều khoản sử dụng
          </Link>
          <Link href="#" className="wrap-footer_link">
            Tuyên bố về quyên riêng tư và cookie
          </Link>
          <Link href="#" className="wrap-footer_link">
            Sự đồng ý của cookie
          </Link>
          <Link href="#" className="wrap-footer_link">
            Các câu hỏi thường gặp
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
