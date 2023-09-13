import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

const EditContact = () => {
    const {id} = useParams();
    const [formData,setFormData] = useState({
        name : "",
        email:"",
        number :""
    })

    const contacts =  useSelector((state) => state)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const currentContact = contacts.find(contact => contact.id === parseInt(id))

    useEffect(()=>{
        if(currentContact){
            setFormData({
                name : currentContact.name,
                email : currentContact.email,
                number : currentContact.number
            })
        }
    },[currentContact])

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
    const updateContact = (e) => {
        e.preventDefault();
        if(!formData.name || !formData.email || !formData.number){
            return toast.warning("All fields are required")
        }

        const data = {
            id : id,
            name : formData.name,
            email : formData.email,
            number : formData.number
        }

        //console.log("data = ",data);

        dispatch({type:"EDIT_CONTACT", data:data})
        toast.success("Contact Updated Successfully")
        navigate("/")
    }

  return (
    <div className="container">
            <div className="row">
                <h1 className="display-3 text-center mb-5">
                    Edit Contact {id}
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
                    <div className="form-group d-flex flex-row">
                        <input type="submit" 
                            value="Update Contact" 
                            onClick={updateContact}
                            className="btn btn-dark flex-fill" />
                        <Link to="/" className="btn btn-danger ms-3 flex-fill">Cancel</Link> 
                    </div>
                </form>
            </div>
            </div>
        </div>

  )
}

export default EditContact