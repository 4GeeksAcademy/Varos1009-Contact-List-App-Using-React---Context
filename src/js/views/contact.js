import React, { useContext } from "react";
import { Context } from '../store/appContext';
import { useNavigate } from "react-router";


const Contact = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

 
  const onDeleteContact = async (itemid) => {
    await actions.deleteContact(itemid)
    actions.getAgenda()
  }

  return (
    < >
      {
        store.contacts.map(el => {
          return (
            <div className="row " key={el.id}>
              <div className="card col-12 col-md-12 w-50 my-4 m-auto  " >
                <div className="card-body">
                  <h5 className="card-title text-center ">{el.name}</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><i className="fas fa-phone  text-primary" style={{ paddingRight: '20px' }}></i>{el.phone}</li>
                  <li className="list-group-item"><i className="far fa-envelope text-danger" style={{ paddingRight: '20px' }}></i>{el.email}</li>
                  <li className="list-group-item"><i className="fas fa-map-marker-alt text-info" style={{ paddingRight: '20px' }} ></i>{el.address}</li>
                </ul>
                <div className="card-body  ">
                  <i className="fas fa-trash px-2 float-end text-danger" onClick={() => onDeleteContact(el.id)}></i>
                  <i className="fas fa-edit px-2 float-end text-secondary" onClick={() => {
                    actions.saveContact(el)
                    navigate('/editcontact')
                  }}></i>

                </div>
              </div>


            </div>)

        })
      }
    </>


  )
};


export default Contact;