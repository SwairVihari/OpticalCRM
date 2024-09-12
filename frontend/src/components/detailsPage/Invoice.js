import React, { Component, useRef } from 'react'
import Styles from "./Invoice.module.css"
import { useSelector, useDispatch } from 'react-redux'
function GetCurrentDate() {
    const separator = '-'
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`
}
export const Invoice = () => {
    // const componentRef = useRef();
    const dispatch = useDispatch();
    const { loading, orderdetails } = useSelector(state => state.orderdetail)
    const { loadingCustomer, customer } = useSelector(state => state.customer)




    // const { customers } = useSelector(state => state.customer)
    return (
        <><div className={Styles.Container}>
            <div className={Styles.Design}></div>
            <div className={Styles.Headingdiv}>
                <div className={Styles.Heading}><h2>INVOICE</h2></div>
                <div className={Styles.Logo}>Logo</div>
            </div>
            {/* <div className={Styles.floatcontainer}> */}
            <div className={Styles.Details}>
                <p>{customer.address}</p>
                <p>{customer.address}</p>
                <p>{customer.address}</p>
                <p>{customer.contactno} {customer.email}</p>
            </div>
            <div className={Styles.Date}>
                <h5><GetCurrentDate /></h5>
                <h5>Invoice number</h5>
            </div>
            {/* </div> */}
            {/* <div className={Styles.floatcontainer}> */}
            <div className={Styles.Bill}>
                <h6>Bill to:</h6>
                <hr></hr>
                <p>{customer.name}</p>
                <p>{customer.company}</p>
                <p>{customer.address}</p>
                <p>{customer.contactno}</p>
            </div>
            {/* </div> */}
            <div className={Styles.Desc}>
                <table className={Styles.Table} >
                    <tbody>
                        {/* <thead> */}
                        <tr>
                            <th className={Styles.Th}>Description</th>
                            <th className={Styles.Th}>QTY</th>
                            <th className={Styles.Th}>Unit Price</th>
                            <th className={Styles.Th}>Total</th>
                        </tr>
                        {/* </thead> */}

                        <tr>
                            <td className={Styles.Td}>EyeGlasses({orderdetails.frame_type} , {orderdetails.lens_type})</td>
                            <td className={Styles.Td}>
                                {orderdetails.quantity ? orderdetails.quantity : 1}
                            </td>

                            <td className={Styles.Td}>
                                {orderdetails.amount}
                            </td>

                            <td className={Styles.Td}>
                                {orderdetails.quantity ? orderdetails.quantity * orderdetails.amount : orderdetails.amount}
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>
            <table className={Styles.Table}>
                <tbody>
                    <tr>
                        <th className={Styles.Th}>Right Eye</th>
                        <th className={Styles.Th}>SPH</th>
                        <th className={Styles.Th}>CYL</th>
                        <th className={Styles.Th}>AXIS</th>
                    </tr>

                    <tr>
                        <td className={Styles.Td}>Distance</td>
                        <td className={Styles.Td}>
                            {orderdetails.re_sph}
                        </td>

                        <td className={Styles.Td}>
                            {orderdetails.re_cyl}
                        </td>

                        <td className={Styles.Td}>
                            {orderdetails.re_axis}
                        </td>

                    </tr>

                    <tr>
                        <td className={Styles.Td}>Near</td>
                        <td className={Styles.Td}>{orderdetails.re_near_sph}</td>
                        <td className={Styles.Td}>{orderdetails.re_near_cyl}</td>
                        <td className={Styles.Td}>{orderdetails.re_near_axis}</td>

                    </tr>
                </tbody>
            </table>


            <table className={Styles.Table}>
                <tbody>
                    <tr>
                        <th className={Styles.Th}>Left Eye</th>
                        <th className={Styles.Th}>SPH</th>
                        <th className={Styles.Th}>CYL</th>
                        <th className={Styles.Th}>AXIS</th>
                    </tr>

                    <tr>
                        <td className={Styles.Td}>Distance</td>
                        <td className={Styles.Td}>
                            {orderdetails.le_sph}
                        </td>

                        <td className={Styles.Td}>
                            {orderdetails.le_cyl}
                        </td>

                        <td className={Styles.Td}>
                            {orderdetails.le_axis}
                        </td>

                    </tr>

                    <tr>
                        <td>Near</td>
                        <td>{orderdetails.le_near_sph}</td>
                        <td>{orderdetails.le_near_cyl}</td>
                        <td>{orderdetails.le_near_axis}</td>

                    </tr>
                </tbody>
            </table>
            <div className={Styles.Design}></div>

        </div></>
    )
}
