
import "./profile.css"
import Inforestaurant from "../../components/Profilerestaurant/info-restaurant-form/Inforestaurant"
import Addfoot from "../../components/Profilerestaurant/addfoot-form/Addfoot"
import Image from "../../components/Profilerestaurant/image-form/Image"
import Desrestaurant from "../../components/Profilerestaurant/option-form/Desrestaurant"
import Timerestaurant from "../../components/Profilerestaurant/time-form/Timerestaurant"
import axios from "axios"
import { useState } from "react"


export default function Profile(){

  const [create, Setcreate] = useState({
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
    averagePrice: "",
    image: "",
    description: "",
    resMenuInfor: ""
  });

  
  const handleSubmit = async (e) => {
   e.preventDefault();
   try {
    const response = await axios.post('http://localhost:3000/api/restaurant',{create});
    console.log(response.data);

  } catch (error) {
    console.error('Error:', error);
  }
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
              <h2 className="infomation-text">HỒ SƠ NHÀ HÀNG</h2>
            </div>
         </div>

         <form onSubmit={handleSubmit}>

         <div className="maincontent">
            <div className="listcontent">
            <div className="listcontent-row1">
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
         </form>

   </div>
  )
}