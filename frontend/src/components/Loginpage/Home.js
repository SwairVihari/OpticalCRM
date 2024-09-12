import React, { useEffect, useState } from "react"
import { Navigate, Redirect, useNavigate } from 'react-router-dom'
import Styles from './Home.module.css'
import Heading from "./Heading"
// import Userform from "./Userform";
import { Link } from "react-router-dom";
import store from "../../store";
import { useDispatch, useSelector } from "react-redux"
import { useAlert } from "react-alert";
import { clearErrors, loadUser, login } from "../../actions/clientAction"
import "../../App.css";
function Home({ history }) {

    const alert = useAlert();
    // const navigate = useNavigate()
    let initialValue = {
        email: '',
        password: ''
    }
    const [val, setVal] = useState(initialValue)
    const handleChange = (e) => {
        setVal({ ...val, [e.target.name]: e.target.value })
    }

    // const handleClick = async () => {
    //     console.log(val);
    //     const response = await fetch('http://localhost:4000/api/clients/login', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(val)
    //     })

    //     const json = await response.json()

    //     if (json.success) {
    //         navigate('/home')
    //     }
    //     console.log(json);
    // }

    const dispatch = useDispatch();
    
    const {client, isAuthenticated,error } = useSelector(state => state.client);

    useEffect(()=>{
        if(error){
            alert.error("Invalid Email or Password")
            dispatch(clearErrors())
        }
        if((isAuthenticated===true && client.role === "admin")){
            history.push("/admin")
        }
        if( (isAuthenticated===true && client.role === "user")){
            history.push("/customer")
        }
    },[isAuthenticated,history,client, error,dispatch,clearErrors])

    const handleClick = (e) => {

        e.preventDefault();
       
        if (!val.email || !val.password) {
            return <Redirect to={'/'} />
            // console.log("no")
        }

        dispatch(login(val.email, val.password));
        if(isAuthenticated){
            alert.success("Login Successful")
        }

    }
    
    return (<>
        <div className={Styles.BigContainer}>
            <Heading />
            <form className={Styles.Container}>
       

                    <input className={Styles.Input} type="email" placeholder="Email" name="email" value={val.email} onChange={handleChange} />
                  
              
                    <input className={Styles.Input} type="password" autoComplete="true" placeholder="Password" name="password" value={val.password} onChange={handleChange} />
              

               
                    <button  onClick={handleClick} className="submitbtn btn btn-success" type="submit">Submit</button>
                    <a>Forgot Password ?</a>
            
            </form>
                {/* </Link> */}

            </div>
    
    </>)
}

export default Home;