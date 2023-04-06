import React, { useState } from 'react'
import "./dinamicForm.css";
const formFields = {
    name:{
        label: "what is your Name?",
        type:'text',
        placeholder:'Sajid ali'
    },
    email:{
        label: "what is your email?",
        type:'email',
        placeholder:'Sajid@gmail.com'
    },
    date:{
        label: "what is your Date of Births?",
        type:'date',
        placeholder:'11/03/1996'
    },
    phone:{
        label: "what is your phone Number?",
        type:'number',
        placeholder:'+880178111111'
    },
    color:{
        label: "what is your Favourite Color?",
        type:'color',
        placeholder:'red'
    },
}

const mapObjectToArray = (obj)=>{
    return Object.keys(obj).map((key)=>({name: key, ...obj[key]}));
}

const transformObject = (obj) => {
  return Object.keys(obj).reduce((acc, cur) => {
    acc[cur] = {
      ...obj[cur],
      value: '',
    };
    return acc;
  }, {});
};



function DinamicForm () {
    console.log(formFields);
    const [formState, setFormState] = useState(transformObject(formFields));
    const formData = mapObjectToArray(formState);
    console.log(formData);
   
    const handelSubmit =(e)=>{
    e.preventDefault();
    const values = Object.keys(formState).reduce((acc, cur) => {
        acc[cur]= formState[cur].value;
        return acc;
    }, {})
    console.log(values);
}
const handelChange = (e)=>{
    setFormState({
        ...formState,
        [e.target.name]:{
            ...formState[e.target.name],
            value: e.target.value,
        },
    })
}
  return (
      <div className='container'>
        <div className="header">Registation Form </div>
        <form onSubmit={handelSubmit}className='form' >
            {formData.map((item, index) =>(
                <div className='formItem' key={index}>
                    <label className='label' htmlFor={item.name}>{item.label}</label>
                    <input className='formInput'
                    type={item.type}
                    name={item.name}
                    value={item.value}
                    placeholder={item.placeholder}
                    onChange={handelChange} />
                </div>
          ))}
            <div>
              <button className='btn' type='submit'>Submit</button>
             </div>
        </form>
      
    </div>
  )
}

export default DinamicForm
