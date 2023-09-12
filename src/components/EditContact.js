import React from 'react'
import { Link, useParams } from 'react-router-dom'

const EditContact = () => {
    const {id} = useParams();
  return (
    <div className="container">
            <div className="row">
                <h1 className="display-3 text-center mb-5">
                    Edit Contact {id}
                </h1>
            <div className="col-md-6 shadow mx-auto p-5">
                <form>
                    <div className="form-group mb-3">
                        <input type="text" placeholder="Name" className="form-control" />
                    </div>
                    <div className="form-group mb-3">
                        <input type="email" placeholder="Email" className="form-control" />
                    </div>
                    <div className="form-group mb-3">
                        <input type="number" placeholder="Phone Number" className="form-control" />
                    </div>
                    <div className="form-group d-flex flex-row">
                        <input type="submit" value="Update Contact" className="btn btn-dark flex-fill" />
                        <Link to="/" className="btn btn-danger ms-3 flex-fill">Cancel</Link> 
                    </div>
                </form>
            </div>
            </div>
        </div>

  )
}

export default EditContact