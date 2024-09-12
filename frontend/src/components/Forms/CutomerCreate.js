import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, createCustomer } from "../../actions/customerAction"
import { loadUser } from '../../actions/clientAction';
import Styles from './CutomerCreate.module.css'
import { useAlert } from 'react-alert';

const CutomerCreate = ({ history }) => {
  const [clientid, setClientid] = useState('')
  const dispatch = useDispatch();
  const alert = useAlert()
  const { client, loading, isAuthenticated } = useSelector((state) => state.client);
  const { error } = useSelector(
    (state) => state.customers
  );

  useEffect(() => {
    if (error) {
      alert.error("Error");
      dispatch(clearErrors())
    }
  })
  useEffect(() => {
    if (!loading) {
      if (isAuthenticated === false) {
        console.log("createCustomer returning")
        history.push("/");
      }
      setClientid(client.id)
    }
  }, [history, isAuthenticated, loading]);


  let initialValue = {
    client_id: clientid,
    name: "",
    address: "",
    drname: "",
    draddress: "",
    date: "",
    contactno: "",
    email: "",
  }
  const [val, setVal] = useState(initialValue)


  const handleChange = (e) => {
    setVal({ ...val, [e.target.name]: e.target.value })
  }

  function handleClick(e) {
    e.preventDefault();
    dispatch(createCustomer(val));
    alert.success("Customer Created")
    history.push("/customer");

  }


  return (

    (loading === false) ?
      <div className={Styles.Container} onSubmit={handleClick}>
        <form className={Styles.Form}>
          <h2 className={Styles.Heading}>Create Customer</h2>
          <input placeholder='Name' required name="name" className={Styles.input} value={val.name} onChange={handleChange} />
          <input placeholder='Address' required name="address" className={Styles.input} value={val.address} onChange={handleChange} />
          <input placeholder='Docter Name' required name="drname" className={Styles.input} value={val.drname} onChange={handleChange} />
          <input placeholder='Docter Adress' required name="draddress" className={Styles.input} value={val.draddress} onChange={handleChange} />
          <input placeholder='Date' required type='date' name="date" className={Styles.input} value={val.date} onChange={handleChange} />
          <input placeholder='Contact no.' required type='tel' name="contactno" className={Styles.input} value={val.contactno} onChange={handleChange} />
          <input placeholder='Email' type='email' name="email" className={Styles.input} value={val.email} onChange={handleChange} />
          <button required className={Styles.Button} type="submit">Submit</button>
        </form>
      </div> : " "

  )
}

export default CutomerCreate