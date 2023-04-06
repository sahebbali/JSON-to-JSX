import InputGroup from "../../components/Elements/Inputs/InputGroup";
import ButtonGroup from "../../components/Elements/Buttons/ButtonGroup";
import "./singUp.css";
import { useState } from "react";
const SingUp = ()=>{
 const [formData, setFromData] = useState({
    name:"",
    email: "",
    password: ""

 });
 const handleChange = (event) => {
	setFromData({
		...formData,
		[event.target.name]: event.target.value,
	});
};
 const handelSubmit =(e)=>{
    e.preventDefault();
    console.log(formData);
 }
    return(
     <div className="singupContainer" >
            <div className="contentText" >
                <h3 className="singuptext">Sign Up</h3>
            </div>

            <form onSubmit={handelSubmit}>
                <InputGroup label="What is your name?" type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>
                <InputGroup label="What is your email?" type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                <InputGroup label="What is your password?" type="password" id="password"  name= "password" value={formData.password} onChange={handleChange} />
                <div>
                   <ButtonGroup type="submit" text="Submit" variant="success" />
                </div>
            </form>
    </div>
    );
};
export default SingUp;