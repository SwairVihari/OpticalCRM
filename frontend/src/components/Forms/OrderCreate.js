import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Styles from './OrderCreate.module.css'
import { clearErrors, createOrder, getCustomer } from "../../actions/customerAction"
import { updateProfile } from "../../actions/customerAction"
import { useAlert } from 'react-alert';

const OrderCreate = ({ history, match }) => {
    const dispatch = useDispatch();
    const alert = useAlert();

    const { client, loading, isAuthenticated } = useSelector((state) => state.client);
    const { error, orderdetails } = useSelector(state => state.orderdetail)
    const { customers } = useSelector(
        (state) => state.customers
    );
    const str = history.location.pathname;
    // const id = str.substring(str.length - 24);
    const id = match.params.id

    useEffect(() => {
        console.log(error)
        if (error) {
            alert.error("error")
            dispatch(clearErrors())
        }

    }, [error, alert, dispatch])

    useEffect(() => {
        dispatch(getCustomer());
        if (isAuthenticated === false) {

            history.push("/");
        }
    }, [history, isAuthenticated]);
    let initialValue = {
        lens_type: "",
        frame_type: "",
        amount: "",
        quantity: "",
        remarks: "",
        re_sph: "",
        re_cyl: "",
        re_axis: "",
        re_near_sph: "",
        re_near_cyl: "",
        re_near_axis: "",
        le_sph: "",
        le_cyl: "",
        le_axis: "",
        le_near_sph: "",
        le_near_cyl: "",
        le_near_axis: "",

    }
    const [val, setVal] = useState(initialValue)

    const handleChange = (e) => {
        console.log(e.target.val)
        setVal({ ...val, [e.target.name]: e.target.value })
    }

    function handleClick(e) {
        e.preventDefault();
        dispatch(createOrder(val, id));
        history.push("/customer");
    }
    return (
        <>
            <div className={Styles.Container}>

                <form className={Styles.Form}>

                    <h2 className={Styles.Heading}>Create Order</h2>
                    {/* <div className={Styles.div}> */}

                    {/* </div> */}



                    <input placeholder='lens_type' name="lens_type" className={Styles.input} value={val.lens_type} onChange={handleChange} />
                    <input placeholder='frame_type' name="frame_type" className={Styles.input} value={val.frame_type} onChange={handleChange} />
                    <input placeholder='amount' name="amount" className={Styles.input} value={val.amount} onChange={handleChange} />
                    <input placeholder='remarks' name="remarks" className={Styles.input} value={val.remarks} onChange={handleChange} />


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
                                    <input placeholder='re_sph' type='number' name="re_sph" className={Styles.inputCell} value={val.re_sph} onChange={handleChange} />
                                </td>

                                <td>
                                    <input placeholder='re_cyl' type='number' name="re_cyl" className={Styles.inputCell} value={val.re_cyl} onChange={handleChange} />
                                </td>

                                <td>
                                    <input placeholder='re_axis' type='number' name="re_axis" className={Styles.inputCell} value={val.re_axis} onChange={handleChange} />
                                </td>

                            </tr>

                            <tr>
                                <td>Near</td>
                                <td>
                                    <input placeholder='re_sph' type='number' name="re_near_sph" className={Styles.inputCell} value={val.re_near_sph} onChange={handleChange} />
                                </td>


                                <td>
                                    <input placeholder='re_cyl' type='number' name="re_near_cyl" className={Styles.inputCell} value={val.re_near_cyl} onChange={handleChange} />
                                </td>


                                <td>
                                    <input placeholder='re_axis' type='number' name="re_near_axis" className={Styles.inputCell} value={val.re_near_axis} onChange={handleChange} />
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
                                    <input placeholder='le_sph' type='number' name="le_sph" className={Styles.inputCell} value={val.le_sph} onChange={handleChange} />
                                </td>

                                <td>
                                    <input placeholder='le_cyl' type='number' name="le_cyl" className={Styles.inputCell} value={val.le_cyl} onChange={handleChange} />
                                </td>

                                <td>
                                    <input placeholder='le_axis' type='number' name="le_axis" className={Styles.inputCell} value={val.le_axis} onChange={handleChange} />
                                </td>

                            </tr>


                            <tr>
                                <td>Near</td>

                                <td>
                                    <input placeholder='le_sph' type='number' name="le_near_sph" className={Styles.inputCell} value={val.le_near_sph} onChange={handleChange} />
                                </td>


                                <td>
                                    <input placeholder='le_cyl' type='number' name="le_near_cyl" className={Styles.inputCell} value={val.le_near_cyl} onChange={handleChange} />
                                </td>


                                <td>
                                    <input placeholder='le_axis' type='number' name="le_near_axis" className={Styles.inputCell} value={val.le_near_axis} onChange={handleChange} />
                                </td>

                            </tr>


                        </tbody>
                    </table>


                    {/* <input placeholder='re_sph' type='number' name="re_sph" className={Styles.input} value={val.re_sph} onChange={handleChange} />
            <input placeholder='re_cyl' type='number' name="re_cyl" className={Styles.input} value={val.re_cyl} onChange={handleChange} />
            <input placeholder='re_axis' type='number' name="re_axis" className={Styles.input} value={val.re_axis} onChange={handleChange} />
            
            
            <input placeholder='le_sph' type='number' name="le_sph" className={Styles.input} value={val.le_sph} onChange={handleChange} />
            <input placeholder='le_cyl' type='number' name="le_cyl" className={Styles.input} value={val.le_cyl} onChange={handleChange} />
            <input placeholder='le_axis' type='number' name="le_axis" className={Styles.input} value={val.le_axis} onChange={handleChange} /> */}
                    <button onClick={handleClick} className={Styles.button} type="submit">Submit</button>
                </form>


            </div>

        </>



    )
}

export default OrderCreate;