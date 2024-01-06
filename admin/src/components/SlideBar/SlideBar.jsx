import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import "./slidebar.css";
import Sidebaroption from "./Sidebaroption";
import { routes } from "../../Routes/Routes";
import NoteAddIcon from '@mui/icons-material/NoteAdd';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__heading">
                  <img
                      className="sidebar-avatar__img"
                      alt="Ellipse"
                      src="https://c.animaapp.com/vhs2vhQQ/img/ellipse-5@2x.png"
                  />
                <div>
                  <span className="name-owner">Chủ Nhà Hàng</span>
                  <p className="function-name">Chức Năng Chính</p>
                </div>
            </div>
            <div className="sideMenu">
                <div className="sidebarlist">
                    <Link to={routes.home}>
                    <div className="sidebarList-item">
                        <AiOutlineHome className="sidebarIcon"/>
                        <p className="name-menu">Home</p>
                        </div>
                    </Link>
                    
                    <Link to={routes.create}>
                      <div className="sidebarList-item">
                          <NoteAddIcon  className="sidebarIcon" />
                          <p className="name-menu">Tạo Hồ Sơ Nhà Hàng</p>
                      </div>
                    </Link>
                    <div className="sidebarList-item">
                        <Sidebaroption />
                    </div>
                    <div className="img-restaurant">
                        <img
                            className="imgrestaurant"
                            src="https://c.animaapp.com/0EOLjur4/img/rectangle-262.svg"
                        ></img>
                    </div>
                </div>
            </div>
        </div>
    );
}
