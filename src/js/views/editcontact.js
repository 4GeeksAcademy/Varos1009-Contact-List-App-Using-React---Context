import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";


export const EditContact = () => {
  const { actions, store } = useContext(Context);
  const navigate = useNavigate();
  const [contact, setContact] = useState(store.contact);
  const underChange = (event) => {
    setContact({ ...contact, [event.target.name]: event.target.value })
  }
  const underSubmit = (event) => {
    event.preventDefault()
    actions.updateContact(contact, navigate)
  }
  console.log(contact)
  return (
    <form className="  w-50 my-2 m-auto" onSubmit={underSubmit}>
      <div className="mb-3">
        <label for="exampleInputName" className="form-label" >Name</label>
        <input type="text" className="form-control" placeholder="Name" aria-label="nameHelp" name="name" value={contact.name} onChange={(e) => underChange(e)} />
      </div>
      <div className="mb-3">
        <label for="exampleInputPhone" className="form-label">Phone number</label>
        <input type="number" className="form-control" placeholder="Phone" aria-label="phoneHelp" name="phone" value={contact.phone} onChange={(e) => underChange(e)} />
      </div> <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">Email</label>
        <input type="email" className="form-control" placeholder="Email" aria-label="emailHelp" name="email" value={contact.email} onChange={(e) => underChange(e)} />
      </div>
      <div className="mb-3">
        <label for="exampleInputAdress" className="form-label">Adress</label>
        <input type="text" className="form-control" placeholder="Adress" aria-label="adressHelp" name="address" value={contact.address} onChange={(e) => underChange(e)} />
      </div>
      <button type="submit" className="btn btn-primary float-end" >Edit</button>

    </form>
  )
}