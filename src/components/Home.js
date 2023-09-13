import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Home = () => {
  const contacts =  useSelector((state) => state)
  console.log("contacts = ",contacts);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const deleteContact = (id) => {
    dispatch({type:'DELETE_CONTACT',data:id})
    toast.success("Contact Deleted Successfully")
    navigate("/")
  }
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12 my-5 text-end">
                    <Link to="/add" className="btn btn-outline-dark">Add Contact</Link>
            </div>
            <div className="col-md-6 mx-auto">
                <table className='table table-hover'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Number</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      contacts.map((contact,id)=>(
                        <tr key={id}>
                          <td>{id+1}</td>
                          <td>{contact.name}</td>
                          <td>{contact.email}</td>
                          <td>{contact.number}</td>
                          <td>
                            <Link to={`edit/${contact.id}`} className='btn btn-primary btn-small me-1'>Edit</Link>
                            <button className='btn btn-danger' onClick={() => deleteContact(contact.id)}>Delete</button>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Home