import React, { useState } from 'react'

const App = () => {
    let [fullName,setFullName] = useState({
        fname : "",
        lname : "",
        email:"",
        mobile:"",
        pincode:""
    })
    let [name,setName] = useState("")

    const InputEvent = (e) => {
        const name = e.target.name
        const value = e.target.value

        setFullName((preValue) => {
            return {
                ...preValue,
                [name] : value
            }
        });
    }

    const ButtonEvent = (e) => {
        //console.log("Button : ",e.target);
        if(fullName.fname == ""){
            alert("Please enter First Name")
        }else
        if(fullName.lname == ""){
            alert("Please enter Last Name")
        }else
        if(fullName.email == ""){
            alert("Please enter Email Id")
        }else
        if(fullName.mobile == ""){
            alert("Please enter Mobile")
        }else
        if(fullName.pincode == ""){
            alert("Please enter Pincode")
        }else
        {
            setName(fullName.fname+" "+fullName.lname+" "+fullName.email+" "+fullName.mobile+" "+fullName.pincode)
        }
    }
  return (
    <>
        <div>
            <h1>Hello {name}</h1>
            <input type="text" onChange={InputEvent} name="fname" value={fullName.fname}/> <br /><br />
            <input type="text" onChange={InputEvent} name="lname" value={fullName.lname}/> <br /><br />
            <input type="text" onChange={InputEvent} name="email" value={fullName.email}/> <br /><br />
            <input type="text" onChange={InputEvent} name="mobile" value={fullName.mobile}/> <br /><br />
            <input type="text" onChange={InputEvent} name="pincode" value={fullName.pincode}/> <br /><br />
            <button onClick={ButtonEvent}>Click Me</button>
        </div>
    </>
  )
}

export default App