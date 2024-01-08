import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewSubmit() {
    const navigate =useNavigate()
    const [otp, setOtp] =useState('')
    const [password, setPassword] = useState('')

    const handleSubmit =() =>{
        console.log(otp, password)
        axios.post('https://localhost:5000/submit-otp',
        {
            otp:otp,
            password:password,
        })
        .then(res => {
            console.log(res.data)
            if(res.data.code ===200){
                navigate('./signin')
                alert('Password Updated.')
            }else {
                alert("server err/ wrong otp")
            }
        }).catch(err =>{
            console.log(err)
        })
    }







    return (<>
    <h1 className="center">Forget Password</h1>
        <div className="outcard">
            Otp
        <input style={{marginBottom:'15px'}}
        onChange={(e) =>{
            setOtp(e.target.value)
        }}
        value={otp}
        className="inputs"
        type="text"
        />
        New Password <input 
        style={{marginBottom:'20px'}}
        value={password}
        onChange={(e) =>{
            setPassword(e.target.value)
        }}
        
        className="inputs"
            type="text"/>
        
        <button  onClick={handleSubmit} style={{textAlign:'center', display:'block', marginTop:'5px'}} className="btns">Change Password</button>
        </div>
        </>
    )
}

export default NewSubmit;