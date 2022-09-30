import React,{useState} from "react";
const About =()=>{
     const  [state,setState]=useState({});
    
     const updateData=(e)=>{
     state [e.target.id]=e.target.value;
      

     }
      const getdata =()=>{

        console.log(state)
      }
      
   
    return (
     <div>  

    <input  onChange={updateData} id="Name"/>
    <input  onChange={updateData} id="FatherName"/>
    <button onClick={getdata}>GetData</button>
    <br/>

     </div>
    )
 
 }
  export default About;