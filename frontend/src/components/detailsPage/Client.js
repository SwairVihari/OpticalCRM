import React from "react";
import Styles from './Customer.module.css'
// import { Redirect, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"

const current = new Date();
const month = current.toLocaleString('default', { month: 'long' });
const date = `${current.getDate()} ${month} ${current.getFullYear()}`;
const Client = ({ index, customer, history }) => {
    const dispatch = useDispatch();
    const num = customer.contactno;
    const tel = `tel:${num}`;
    const whatsapp = `https://wa.me/${num}`;
    // const handleClick = () => {
    //     // console.log("clicked");
    //     // console.log(customer._id)
    //     history.push('/clients/orders/new/' + customer._id)
    // }
    return <div className="customerCard">

        <div className="d-flex justify-content-between align-content-start  px-3 py-3" >
            <div className="border d-flex justify-content-between">
                <h3>{index + 1}.</h3>
                <div>
                    <h3>{customer.username}</h3>
                    <p>{customer.contactno}</p>
                    <p>{customer.email}</p>
                </div>
            </div>
            <h4>{customer.date}</h4>
        </div>
        <div className={Styles.LastRow}>
            <div className={Styles.Icons}>
                <a href={`customer/update/${customer._id}`}> <i className="fa-solid  fa-pencil"></i></a>
                <a href={whatsapp}><i className="fa-brands   fa-whatsapp-square"></i></a>
                <a href={tel}><i className="fa-solid  fa-phone"></i></a>
            </div>

            {/* <form action="post" method="">
                <div>
                    <button type="button" className={Styles.Newbutton} onClick={handleClick}>New Order</button>
                </div>
            </form> */}
        </div >
        {/* <div className="fontawesome">
            <a href="/admin/password/updatepassword"> <i className="fa-solid  fa-xl fa-pencil"></i></a>
            <a href={whatsapp}><i className="fa-brands fa-xl  fa-whatsapp-square"></i></a>
            <a href={tel}><i className="fa-solid  fa-xl fa-phone"></i></a>
        </div>

        <form action="post" method="">

        </form> */}
    </div>
}
export default Client;