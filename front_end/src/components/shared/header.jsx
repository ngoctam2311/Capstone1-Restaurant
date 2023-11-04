import { useContext } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import SearchMap from "../home/search-map";
import SearchRestaurent from "../search/search-restaurant";
// import { UserContext } from "../../Hooks/UserContext";

function Header() {
  //   const { user } = useContext(UserContext);
  const user = null;
  return (
    <header className="wrapp-header">
      <div className="inner">
        <Link href="/" className="logo">
          <span className="logo-first">Foodie</span>
          <span className="logo-last">Finder</span>
        </Link>
        <div className="search">
          <SearchMap />
          <SearchRestaurent />
        </div>
        <nav>
            <Link href={"/list"}>Tất cả nhà hàng</Link>
        </nav>

        <div className="account">
          {!!user && !!user.auth === false ? (
            <>
              <Link href="/login">
                <button className="btn login-btn">ĐĂNG NHẬP</button>
              </Link>
              <Link href="/register">
                <button className="btn register-btn">ĐĂNG KÝ</button>
              </Link>
            </>
          ) : (
            <>
              <span className="user-name">Văn Hùng</span>
              <Tippy delay={[0, 200]} content="Tài khoản" placement="bottom">
                <Link href="/account-manager">
                  <button className="user-avatar">
                    <FontAwesomeIcon icon={faUser} />
                  </button>
                </Link>
              </Tippy>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
