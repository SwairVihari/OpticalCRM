import './App.css';
import React from 'react';
import { useSelector } from 'react-redux'
import Home from './components/Loginpage/Home';
import CutomerCreate from './components/Forms/CutomerCreate';
import OrderCreate from './components/Forms/OrderCreate';
import HomeAdmin from './components/AdminPage/HomeAdmin';
import ProtectedRoute from "./components/protectedRoute/protectedRoute"
import Home2 from './components/detailsPage/Home2';
import store from "./store";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import ClientCreate from './components/Forms/ClientCreate';
import { loadUser } from './actions/clientAction';
import { useEffect } from 'react';
import OrderDetails from './components/detailsPage/OrderDetails';
import updatePassword from './components/Forms/updatePassword';
import Loading from './components/Layout/Loading';
import UpdateOrder from './components/Forms/UpdateOrder';
import UpdateCustomer from './components/Forms/UpdateCustomer';

// import redirect from './components/AdminUserRedirect/redirect';
function App({ history }) {

  const { loading, isAuthenticated, client } = useSelector(state => state.client)

  useEffect(() => {
    store.dispatch(loadUser());
  }, [])


  return (
    (isAuthenticated === false && loading === false) ? <Home /> :
      (<>

        <Switch>


          <Route exact path='/' component={Home} />
          {/* <ProtectedRoute exact path="/customer" component={Home2} /> */}
          {/* <ProtectedRoute exact path="/redirect" component={redirect} /> */}
          {/* <ProtectedRoute exact path="/customer/new" component={CutomerCreate} /> */}

          {
            <Route exact path="/customer" component={(loading === false && isAuthenticated === true) && Home2} />
          }

          {
            <Route exact path="/customer/update/:id" component={(loading === false && isAuthenticated === true) && UpdateCustomer} />
          }

          {
            <Route path="/customer/:keyword" component={(loading === false && isAuthenticated === true) ? Home2 : Loading} />
          }
          {
            <Route path="/admin/password/updatepassword" component={client && (loading === false && client.role === "admin") ? updatePassword : Loading} />
          }


          {
            <Route exact path="/admin" component={client && (loading === false && client.role === "admin") ? HomeAdmin : Loading} />
          }


          {
            <Route path="/admin/:keyword" component={client && (loading === false && client.role === "admin") ? HomeAdmin : Loading} />
          }


          {/* {
            <Route exact path="/order/:id" component={(loading === false && isAuthenticated ===true) ? OrderDetails : Loading}/>
          } */}
          {
            <Route exact path="/order/:ord/:cust" component={(loading === false && isAuthenticated === true) ? OrderDetails : Loading} />
          }

          {
            <Route exact path="/customers/orders/update/:id" component={(loading === false && isAuthenticated === true) ? UpdateOrder : Loading} />
          }


          <Route path="/customers/new" component={CutomerCreate} />
          <ProtectedRoute exact path="/clients/register" component={ClientCreate} />
          {/* <ProtectedRoute exact path="/admin" component={HomeAdmin} /> */}
          {/* <ProtectedRoute exact path="/admin/:keyword" component={HomeAdmin} /> */}
          <ProtectedRoute exact path="/customers/orders/new/:id" component={OrderCreate} />
        </Switch>

      </>)
  );
}
export default App;
