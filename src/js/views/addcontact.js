import React, { useState } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";
const AddContact = () => {
  const {  actions } = useContext(Context);
  const [inputData, setInputData] = useState('');
  const underChange = (el) => {
    setInputData({ ...inputData, [el.target.name]: el.target.value })
  }
  console.log(inputData)
  const navigate = useNavigate();
  const underSubmit = (event) => {
    event.preventDefault()
    fetch(`https://playground.4geeks.com/contact/agendas/Varos1009/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputData)

    }).then(resp => {

      resp.json()
    })
      .then(resp => {

        actions.getAgenda();

        navigate('/contact')

      })
  }
  return (
    <form className="  w-50 my-2 m-auto" onSubmit={underSubmit}>
      <div className="mb-3">
        <label for="exampleInputName" className="form-label" >Name</label>
        <input type="text" className="form-control" placeholder="Name" aria-label="nameHelp" name="name" value={inputData.name} onChange={(e) => underChange(e)} />
      </div>
      <div className="mb-3">
        <label for="exampleInputPhone" className="form-label">Phone number</label>
        <input type="number" className="form-control" placeholder="Phone" aria-label="phoneHelp" name="phone" value={inputData.phone} onChange={(e) => underChange(e)} />
      </div> <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">Email</label>
        <input type="email" className="form-control" placeholder="Email" aria-label="emailHelp" name="email" value={inputData.email} onChange={(e) => underChange(e)} />
      </div>
      <div className="mb-3">
        <label for="exampleInputAdress" className="form-label">Adress</label>
        <input type="text" className="form-control" placeholder="Adress" aria-label="adressHelp" name="address" value={inputData.address} onChange={(e) => underChange(e)} />
      </div>
      <button type="submit" className="btn btn-primary float-end" >Create</button>

    </form>
  )
}


export default AddContact;