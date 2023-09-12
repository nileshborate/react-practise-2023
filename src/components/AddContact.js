import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

const AddContact = () => {

    const [formData,setFormData] = useState({
        name : "",
        email:"",
        number :""
    })

    const contacts =  useSelector((state) => state)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const InputEvent = (e) => {
        const name = e.target.name
        const value = e.target.value
        setFormData((prevData)=>{
            return{
                ...prevData,
                [name] : value
            }
        })
    }

    const AddContact = (e) => {
        e.preventDefault();
        if(!formData.name || !formData.email || !formData.number){
            return toast.warning("All fields are required")
        }

        const checkEmail = contacts.find(contact => contact.email === formData.email)
        if(checkEmail){
            return toast.error("This email already exists")
        }

        const checkNumber = contacts.find(contact => contact.number == formData.number)
        if(checkNumber){
            return toast.error("This Number already exists")
        }
        
        const data = {
            id : contacts[contacts.length-1].id + 1,
            name : formData.name,
            email : formData.email,
            number : formData.number
        }

        dispatch({type:"ADD_CONTACT", data:data})
        toast.success("Contact Added Successfully")
        navigate("/")
        //console.log("Form Data = ",formData);
    }

  
  //console.log("contacts = ",contacts);

  return (
    <div className="container">
        <div className="row">
            <h1 className="display-3 text-center mb-5">
                Add Contact
            </h1>
            <div className="col-md-6 shadow mx-auto p-5">
                <form>
                    <div className="form-group mb-3">
                        <input type="text" 
                            placeholder="Name" 
                            className="form-control" 
                            name="name"
                            value={formData.name}  
                            onChange={InputEvent}  
                            />
                    </div>
                    <div className="form-group mb-3">
                        <input type="email" 
                            placeholder="Email" 
                            className="form-control"
                            name="email"
                            value={formData.email}  
                            onChange={InputEvent}  />
                    </div>
                    <div className="form-group mb-3">
                        <input type="number" 
                            placeholder="Phone Number" 
                            className="form-control" 
                            name="number"
                            value={formData.number}  
                            onChange={InputEvent} 
                            />
                    </div>
                    <div className="form-group d-grid">
                        <input type="submit" 
                            value="Add Contact" 
                            onClick={AddContact}
                            className="btn btn-block btn-dark" />
                    </div>
                </form>
            </div>
        </div>
    </div>

  )
}

export default AddContact