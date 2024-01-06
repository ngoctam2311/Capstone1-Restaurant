import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import "./approve.css";
import RowApprove from "./RowApprove";
import { UserContext } from "../../hook/UserContext";
import { PaginationComponent } from "../../components";

const Approve = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageno,setPageno] = useState(1);
  const [error, setError] = useState(null);
  const paginationno = 51

  useEffect(() => {
    fetchData(pageno);
  }, [pageno]);

  const { user } = useContext(UserContext);

  const option = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${user.auth}`,
    },
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`http://localhost:3000/api/booking/pending`, option);
      setData(res.data.data);
      console.log(res.data.data)
    } catch (error) {
      setError(error.message || "Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  const fetchRespond = async (restaurantId, action) => {
    try {
      setLoading(true);
      const res = await axios.patch(
        `http://localhost:3000/api/restaurant/respond`,
        { restaurantId, action },
        option
      );
      setData(res.data.data);
    } catch (error) {
      setError(error.message || "Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const status = document.getElementById("statusDropdown").value;

    try {
      setLoading(true);
      const response = await axios.get(`api/restaurant/655b582b675d8a2ff0c9ddca/booking`);
      setData(response.data.data.result);
    } catch (error) {
      setError(error.message || "Error searching data");
    } finally {
      setLoading(false);
    }
  };

  const handleClick = (number) =>{
    setPageno(number)
  }
    return (
     <div className='wrapper'>
       <div className="header">
            <div className="title-list">
              <h2 className="list-text">DANH SÁCH ĐẶT CHỖ</h2>
            </div>
       </div>
       <div className="maincontent">
           <form className="form">
              <div className="form-col-3">
                 <label className='text-name'>Họ Tên Người Đặt</label>
                 <input type="text"  placeholder='Nhập họ tên người đặt' className='text-input'/>
              </div>
              <div className="form-col-3">
                 <label className='text-name'>Ngày Đặt</label>
                 <input type="date" className='text-input' />
              </div>
              <div className="form-col-3">
                 <label className='text-name'>Trạng Thái</label>
                 <select className='text-input' id="statusDropdown">
                   <option value="0" >accepted</option>
                   <option value="1">pending</option>
                   <option value="2">rejected</option>
                 </select>
              </div>
              <button className='btn-search' onClick={handleSearch}>Tìm Kiếm</button>
           </form>
       </div>
       <div className="info-customer">
           <table>
              <thead>
                  <tr className='listReservation'>
                       <th className='listcol'>STT</th>
                       <th className='listcol'>Họ và Tên</th>
                       <th className='listcol'>Email</th>
                       <th className='listcol'>Số Điện Thoại</th>
                       <th className='listcol'>Ngày Đặt</th>
                       <th className='listcol'>Thời Gian</th>
                       <th className='listcol'>Số Người</th>
                       <th className='listcol'>Trạng Thái</th>

                  </tr>
              </thead>
              <tbody>
                 {loading ? (
                            <p>đang tải dữ liệu...</p>
                        ) : (
                            data &&
                            data.map((item, index) => 
                            (
                                <RowApprove
                                    key={item._id}
                                    item={item}
                                    index={index}
                                    onRespond={(action) =>
                                        fetchRespond(item._id, action)
                                    }
                                />
                            )
                            )
                        )}
              </tbody>
           </table> 
           <PaginationComponent
              maxnum={paginationno}
              activenum={pageno}
              handleClick={handleClick}
           >
            </PaginationComponent>         
      </div>
    </div>
  )
};

export default Approve;
