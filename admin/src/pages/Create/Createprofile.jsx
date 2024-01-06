
import "./createprofile.css"
import Inforestaurant from "../../components/SidebarCreate/info-restaurant-form/Inforestaurant";
import Addfoot from "../../components/SidebarCreate/addfoot-form/Addfoot";
import Image from "../../components/SidebarCreate/image-form/Image";
import Desrestaurant from "../../components/SidebarCreate/option-form/Desrestaurant";
import Timerestaurant from "../../components/SidebarCreate/time-form/Timerestaurant";
import axios from "axios"
import {UserContext} from "../../hook/UserContext"
import { useState, useContext } from "react"


export default function Createprofile(){
  const [errors, setErrors] = useState({})
  const [create, Setcreate] = useState({
    resname: "",
    address:{
      street: "",
      district: "",
      city: ""
    },
    timeOpen: "",
    timeClose: "",
    seats: null,
    typeOfRes: "",
    averagePrice: null,
    image: "",
    description: "",
    resMenuInfor: ""
  });

  // const {user} = useContext(UserContext)
  
  // const option = {
  //   headers: {
  //     "Content-Type": "application/json",
  //     Accept: "application/json",
  //     Authorization: `Bearer ${user.auth}`,
  //   },
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
    try {
      const response = await axios.post('http://localhost:3000/api/restaurant', create
        
      );
      console.log(response.data);
      
    } catch (error) {
      console.error('Error:', error);
    }
  }else{
    console.log("Invalid form");
  }
}
  

  const validate = () => {
    const error = {};
    if (!create.resname) {
        error["resname"] = "Vui lòng nhập tên nhà hàng";
    }
    if (!create.address.street) {
        error["street"] = "Vui lòng nhập địa chỉ";
    }
    if (!create.address.city) {
        error["city"] = "Vui lòng chọn Tỉnh/thành phố";
    }
    if (!create.address.district) {
        error["district"] = "Vui lòng chọn Quận/huyện";
    }
    if (!create.seats){
       error["seats"] = "Vui lòng chọn số bàn";
       
    } 
    if(!create.image){
       error["image"] = "Vui lòng thêm hình ảnh nhà hàng"
    }
    if(!create.typeOfRes){
      error["typeOfRes"] = "Vui lòng nhập món"   
    }
    if(!create.averagePrice){
      error["averagePrice"] = "Vui lòng nhập giá"
    }
    setErrors(error);
    return Object.keys(error).length === 0;
}; 


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
  
//   const handleSubmit = (e) =>{
//      e.preventDefault()
//      axios.post('http://localhost:5556/api/restaurant/create' , {create})
//      .then(response => console.log(response))
//   }
  
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

         {/* <form onSubmit={handleSubmit}> */}

         <div className="maincontent">
            <div className="listcontent">
            <div className="listcontent-row1">
             <div className="information-restaurant">
                    <Inforestaurant 
                       create={create}
                       Setcreate={Setcreate}
                       handleInputChange={handleInputChange}
                       errors={errors}
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
                         errors={errors}
                     />
              
            </div>

            </div>
            <div className="listcontent-row2">
            <div className="time-restaurant">
                 <Timerestaurant 
                    create={create}
                    Setcreate={Setcreate}
                    handleInputChange={handleInputChange}
                    errors={errors}
                 />
               </div>
               <div className="addfoot-restaurant">
                 <Addfoot  
                    create={create}
                    Setcreate={Setcreate}
                    handleInputChange={handleInputChange}
                    errors={errors}
                 
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
         {/* </form> */}

   </div>
  )
}