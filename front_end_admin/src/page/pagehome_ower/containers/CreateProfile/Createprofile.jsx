
import "./createprofile.css"
import Inforestaurant from '../../page/sidebarCreate/info-restaurant-form/Inforestaurant'
import Desrestaurant from '../../page/sidebarCreate/option-form/Desrestaurant'
import Image from '../../page/sidebarCreate/image-form/Image'
import Timerestaurant from '../../page/sidebarCreate/time-form/Timerestaurant'
import Addfoot from '../../page/sidebarCreate/addfoot-form/Addfoot'

import axios from "axios"
import { useState, useEffect } from "react"

export default function Createprofile() {
  // const [create, Setcreate] = useState({
  //   resname: "",
  //   address:{
  //     street: "",
  //     district: "",
  //     city: ""
  //   },
    // timeOpen: "",
    // timeClose: "",
    // seats: "",
    // typeOfRes: "",
    // averagePrice: "",
    // image: "",
    // // pointEvaluation: null,
    // description: "",
    // resMenuInfor: ""
  // });

  const [create, Setcreate] = useState({
     data:{
        result: [
           {
             resname: ""
           }
        ]
     }
     
  });
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Nếu trường input là một trường con của 'address'
    if (name.includes("address.")) {
      const addressField = name.split('.')[1];
      Setcreate({
        ...create,
        address: {
          ...create.address,
          [addressField]: value
        }
      });
    } else {
      Setcreate({
        ...create,
        [name]: value
      });
    }
  };


  
//   const handleSubmit = async (e) => {
//    e.preventDefault();
//    try {
//     const response = await axios.post('http://localhost:3000/api/restaurant',{create});
//     console.log(response);

//     // Display form data
//     alert(`123`);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

  // const handleSubmit = (e) =>{
  //   e.preventDefault();
  //   axios.post('https://jsonplaceholder.typicode.com/users',create)
  //   .then((res) => console.log(res))
  // }

  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:3000/api/restaurant',create)
    .then((res) => console.log(res))
  }
  
  


  const handlecancel = () =>{
     Setcreate(
      {
        deleted: false,
        resname: "",
        address:{
          street: "",
          district: "",
          city: ""
      },
        timeOpen: "",
        timeClose: "",
        seats: "",
        typeOfRes: "",
        averagePrice:'',
        image: "",
        pointEvaluation: null,
        description: "",
        resMenuInfor: ""
      }
     )
  }

  return (
     <div className="wrapper">
         <div className="header">
            <div className="title-create">
              <h2 className="infomation-text">TẠO HỒ SƠ NHÀ HÀNG</h2>
            </div>
         </div>
     
         <div className="maincontent">
            <div className="listcontent">
             <div className="information-restaurant">
                    <Inforestaurant 
                       create={create}
                       Setcreate={Setcreate}
                       handleInputChange={handleInputChange}
                    />
              </div>
              <div className="description-restaurant">
                     <Desrestaurant 
                       create={create}
                       Setcreate={Setcreate}
                       
                     />
              </div>
              <div className="image-restaurant">
                     <Image 
                         create={create}
                         Setcreate={Setcreate}
                         handleInputChange={handleInputChange}
                     />
              </div>
            </div>
            <div className="listcontent-row2">
            <div className="time-restaurant">
                 <Timerestaurant 
                    create={create}
                    Setcreate={Setcreate}
                    handleInputChange={handleInputChange}
                  
                 />
               </div>
               <div className="addfoot-restaurant">
                 <Addfoot  
                    create={create}
                    Setcreate={Setcreate}
                    handleInputChange={handleInputChange}
                 
                 />
              </div>
              <div className="footer-button">
             <div className="button">
                 <button className='save' onClick={handleSubmit}>Lưu lại</button>
                 <button className='cancel' onClick={handlecancel}>Hủy bỏ</button>
              </div>
             </div>
            </div>
         </div>
       
    </div>
  )
}