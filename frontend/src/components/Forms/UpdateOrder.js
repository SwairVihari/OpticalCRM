import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { getOrderDetails } from '../../actions/orderDetailsAction'
import Loading from '../Layout/Loading'
import Styles from './UpdateOrder.module.css'
import { useAlert } from 'react-alert'

const UpdateOrder = ({ match, history }) => {

    const dispatch = useDispatch();
    const alert = useAlert();
    const { loading, orderdetails } = useSelector(state => state.orderdetail)

    useEffect(() => {
        dispatch(getOrderDetails(match.params.id))
    }, [dispatch])

    let initialValue =
        (orderdetails) ? {
            lens_type: orderdetails.lens_type,
            frame_type: orderdetails.frame_type,
            amount: orderdetails.amount,
            quantity: orderdetails.quantity,
            remarks: orderdetails.remarks,
            re_sph: orderdetails.re_sph,
            re_cyl: orderdetails.re_cyl,
            re_axis: orderdetails.re_axis,
            re_near_axis: orderdetails.re_near_axis,
            re_near_sph: orderdetails.re_near_sph,
            re_near_cyl: orderdetails.re_near_cyl,
            le_sph: orderdetails.le_sph,
            le_cyl: orderdetails.le_cyl,
            le_axis: orderdetails.le_axis,
            le_near_sph: orderdetails.le_near_sph,
            le_near_cyl: orderdetails.le_near_cyl,
            le_near_axis: orderdetails.le_near_axis
        } : ""



    const [val, setVal] = useState(initialValue)

    const handleChange = (e) => {
        setVal({ ...val, [e.target.name]: e.target.value })
    }

    // console.log(val)




    const SubmitHandler = async (e) => {
        try {
            e.preventDefault();
            const data = axios.put(`/api/orders/${match.params.id}`, val)
            history.push("/customer")
            // console.log(data);
            alert.success("updated Successfully")
        }
        catch (error) {
            alert.error(error.response.message)
        }
    }

    return (
        <>
            {loading === false ? <>
                <div className={Styles.Container}>
                    <form className={Styles.Form}>
                        <label className={Styles.label}>Lens Type</label>
                        <input placeholder='lens_type' name="lens_type" className={Styles.input} defaultValue={orderdetails.lens_type} onChange={handleChange} />
                        <label className={Styles.label}>Frame Type</label>
                        <input placeholder='frame_type' name="frame_type" className={Styles.input} defaultValue={orderdetails.frame_type} onChange={handleChange} />
                        <label className={Styles.label}>Amount</label>
                        <input placeholder='amount' name="amount" className={Styles.input} defaultValue={orderdetails.amount} onChange={handleChange} />
                        <label className={Styles.label}>Quantity</label>
                        <input placeholder='quantity' name="quantity" className={Styles.input} defaultValue={orderdetails.quantity} onChange={handleChange} />
                        <label className={Styles.label}>Remarks</label>
                        <input placeholder='remarks' name="remarks" className={Styles.input} defaultValue={orderdetails.remarks} onChange={handleChange} />


                        <table>
                            <tbody>
                                <tr>
                                    <th>Right Eye</th>
                                    <th>SPH</th>
                                    <th>CYL</th>
                                    <th>AXIS</th>
                                </tr>

                                <tr>
                                    <td>Distance</td>
                                    <td>
                                        <input placeholder='re_sph' type='number' name="re_sph" className={Styles.inputCell} defaultValue={val.re_sph} onChange={handleChange} />
                                    </td>

                                    <td>
                                        <input placeholder='re_cyl' type='number' name="re_cyl" className={Styles.inputCell} defaultValue={val.re_cyl} onChange={handleChange} />
                                    </td>

                                    <td>
                                        <input placeholder='re_axis' type='number' name="re_axis" className={Styles.inputCell} defaultValue={val.re_axis} onChange={handleChange} />
                                    </td>

                                </tr>

                                <tr>
                                    <td>Near</td>
                                    <td>
                                        <input placeholder='re_sph' type='number' name="re_near_sph" className={Styles.inputCell} defaultValue={val.re_near_sph} onChange={handleChange} />
                                    </td>


                                    <td>
                                        <input placeholder='re_cyl' type='number' name="re_near_cyl" className={Styles.inputCell} defaultValue={val.re_near_cyl} onChange={handleChange} />
                                    </td>


                                    <td>
                                        <input placeholder='re_axis' type='number' name="re_near_axis" className={Styles.inputCell} defaultValue={val.re_near_axis} onChange={handleChange} />
                                    </td>

                                </tr>
                            </tbody>
                        </table>

                        <table>
                            <tbody>
                                <tr>
                                    <th>Left Eye</th>
                                    <th>SPH</th>
                                    <th>CYL</th>
                                    <th>AXIS</th>
                                </tr>

                                <tr>
                                    <td>Distance</td>
                                    <td>
                                        <input placeholder='le_sph' type='number' name="le_sph" className={Styles.inputCell} defaultValue={val.le_sph} onChange={handleChange} />
                                    </td>

                                    <td>
                                        <input placeholder='le_cyl' type='number' name="le_cyl" className={Styles.inputCell} defaultValue={val.le_cyl} onChange={handleChange} />
                                    </td>

                                    <td>
                                        <input placeholder='le_axis' type='number' name="le_axis" className={Styles.inputCell} defaultValue={val.le_axis} onChange={handleChange} />
                                    </td>

                                </tr>


                                <tr>
                                    <td>Near</td>

                                    <td>
                                        <input placeholder='le_sph' type='number' name="le_near_sph" className={Styles.inputCell} defaultValue={val.le_near_sph} onChange={handleChange} />
                                    </td>


                                    <td>
                                        <input placeholder='le_cyl' type='number' name="le_near_cyl" className={Styles.inputCell} defaultValue={val.le_near_cyl} onChange={handleChange} />
                                    </td>


                                    <td>
                                        <input placeholder='le_axis' type='number' name="le_near_axis" className={Styles.inputCell} defaultValue={val.le_near_axis} onChange={handleChange} />
                                    </td>

                                </tr>


                            </tbody>
                        </table>





                        {/* <label className={Styles.label}>Right Eye SPH</label>
            <input placeholder='re_sph' type='number' name="re_sph" className={Styles.input} defaultValue={orderdetails.re_sph} onChange={handleChange} />
            <label className={Styles.label}>Right Eye CYL</label>
            <input placeholder='re_cyl' type='number' name="re_cyl" className={Styles.input} defaultValue={orderdetails.re_cyl} onChange={handleChange} />
            <label className={Styles.label}>Right Eye AXIS</label>
            <input placeholder='re_axis' type='number' name="re_axis" className={Styles.input} defaultValue={orderdetails.re_axis} onChange={handleChange} />
            <label className={Styles.label}>Left Eye SPH</label>
            <input placeholder='le_sph' type='number' name="le_sph" className={Styles.input} defaultValue={orderdetails.le_sph} onChange={handleChange} />
            <label className={Styles.label}>Left Eye CYL</label>
            <input placeholder='le_cyl' type='number' name="le_cyl" className={Styles.input} defaultValue={orderdetails.le_cyl} onChange={handleChange} />
            <label className={Styles.label}>Left Eye Axis</label>
            <input placeholder='le_axis' type='number' name="le_axis" className={Styles.input} defaultValue={orderdetails.le_axis} onChange={handleChange} /> */}


                        <button onClick={SubmitHandler} className={Styles.button} type="submit">Submit</button>
                    </form></div>

            </> : <Loading />
            }

        </>
    )
}

export default UpdateOrder