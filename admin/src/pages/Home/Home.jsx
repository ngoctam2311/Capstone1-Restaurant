import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import "./home.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { PaginationComponent } from "../../components";
import { UserContext } from "../../hook/UserContext";

const Home = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        fetchData();
      });

      const fetchData = async () => {
        try {
        //   setLoading(true);
        //   const res = await axios.get(`http://localhost:3000/api/restaurant?page=1`);
        //   setData(res.data.data);
        //   console.log(res.data.data)
        } catch (error) {
          setError(error.message || "Error fetching data");
        } 
      };

    return (
        
     <div className="wrapper">
         <div className="header">
            <div className="title-create">
              <h2 className="infomation-text">NHÀ HÀNG CỦA TÔI</h2>
            </div>
          </div>

           <div className="main-home">
                 <div className="image-home">
                    <img src="https://cdn.pastaxi-manager.onepas.vn/content/uploads/articles/lentkdau/mauthietkenhahangdep/9.jpg" className="img-home"></img>
                 </div>
                 <div className="infomation-home">
                     <div className="resname-home">
                         <p></p>
                     </div>
                     <div className="district-home">
                      <span> <LocationOnIcon/> </span>
                     </div>
                     <div className="description-home">
                       <p></p>
                     </div>
                 </div>
           </div>
         </div>
    )
};

export default Home;
