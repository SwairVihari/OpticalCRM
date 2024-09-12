import React, { useState } from "react";
// import "../../App.css";
import Styles from './Customer.module.css'
import { Redirect, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { createOrder, getOneCustomer } from "../../actions/customerAction"
const current = new Date();
const month = current.toLocaleString('default', { month: 'long' });
const date = `${current.getDate()} ${month} ${current.getFullYear()}`;
const Customer = ({ index, customer, history }) => {

    const dispatch = useDispatch();

    const num = customer.contactno;
    const orders = customer.orders;
    const tel = `tel:${num}`;
    const whatsapp = `https://wa.me/+91${num}`;
    const handleClick = () => {
        // console.log("clicked");
        // console.log(customer._id)
        history.push('/customers/orders/new/' + customer._id)
    }

    const orderHandler = (or) => {
        // dispatch(getOneCustomer(customer._id));
        history.push(`/order/${or.Order}/${customer._id}`)
    }
    return <div className={Styles.customerCard}>

        <div className={Styles.Info} >
            <div className={Styles.SubInfo}>
                <p className={Styles.Index}>{index + 1}</p>
                <div className={Styles.PerInfo}>
                    <p className={Styles.name}>{customer.name}</p>
                    <p>{customer.contactno}</p>
                </div>
            </div>
            <p>{customer.date.substr(0, 10)}</p>
        </div>

        <div className={Styles.buttonGroup}>
            {orders.map((or, index) => <button className={Styles.button} onClick={() => { orderHandler(or) }} key={or.Order}>{`Order ${index + 1}`}</button>)}
        </div>


        <div className={Styles.LastRow}>
            <div className={Styles.Icons}>
                <a href={`customer/update/${customer._id}`}> <i className="fa-solid  fa-pencil"></i></a>
                <a href={whatsapp}><i className="fa-brands   fa-whatsapp-square"></i></a>
                <a href={tel}><i className="fa-solid  fa-phone"></i></a>
            </div>

            <form action="post" method="">
                <div>
                    <button type="button" className={Styles.Newbutton} onClick={handleClick}>New Order</button>
                </div>
            </form>
        </div >
    </div>
}
export default Customer;