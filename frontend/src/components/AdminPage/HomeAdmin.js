import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Search from '../detailsPage/Search'
import LogoutButton from "../logoutButton/logoutButton";
import Client from "../detailsPage/Client"
import { getClients, logout } from '../../actions/clientAction';
import { useDispatch, useSelector } from "react-redux"
import Styles from './HomeAdmin.module.css'
import Pagination from 'react-js-pagination'
const HomeAdmin = ({ history, match }) => {

    const dispatch = useDispatch();
    const [keyword, setKeyword] = useState();
    const [currentPage, setCurrentPage] = useState(1)
    const { client, isAuthenticated } = useSelector((state) => state.client);
    const { loading, clients, clientCount, resultPerPage } = useSelector((actions) => actions.clients);
    if (!client) {
        window.location.reload();

    }

    const bigKeyword = match.params.id;


    const setCurrentPageNo = (e) => {
        setCurrentPage(e)
    }


    const searchSubmitHandler = (e) => {
        e.preventDefault();

        if (keyword.trim()) {
            dispatch(getClients(keyword, currentPage))
            history.push(`/admin/${keyword}`)
        } else {
            history.push("/admin")
        }
    }

    useEffect(() => {
        dispatch(getClients(
            bigKeyword, currentPage));
        if (isAuthenticated === false) {
            console.log("home 2 returning")
            history.push("/");
        }

        if (client.role === "admin") {
            console.log("Admin login")
            history.push("/admin");
        }

    }, [history, isAuthenticated, bigKeyword, currentPage, dispatch]);

    function handleClick() {
        dispatch(logout());
        history.push("/");
    }
    function handleAdd() {
        history.push("/clients/register")
    }

    return <>
        {loading === false && (
            <div className={Styles.container} >
                <div className={Styles.header}>
                    <h1 className="fs-1 fw-bold">
                        Clients Details
                    </h1>
                </div>
                <div className={Styles.cards}>
                    <Search history={history} />
                    {clients && clients.map((client, index) => <Client index={(clientCount - 1) - ((currentPage - 1) * resultPerPage + index)} id={client._id} key={client._id} customer={client} history={history} />)}
                </div>
                {/* <div className={Styles.Cards}>
                    <div>
                        <form className={Styles.form} onSubmit={searchSubmitHandler}>
                            <input
                                className={Styles.Input}
                                placeholder=" Search Name"
                                onChange={(e) => setKeyword(e.target.value)} />

                            <input className={Styles.Button} type='submit' value="Search" />

                        </form>
                    </div>
                    {clients && clients.map((client) => <Client id={client._id} key={client._id} customer={client} history={history} />)}
                </div> */}
                {clientCount ? <div className={Styles.PageBox}>
                    <Pagination
                        activePage={currentPage}
                        itemsCountPerPage={resultPerPage}
                        totalItemsCount={clientCount}
                        onChange={setCurrentPageNo}
                        nextPageText="Next"
                        prevPageText="Prev"
                        itemClass="page-item"
                        linkClass="page-link"
                        activeClass="pageItemActive"
                        activeLinkClass="pageLinkActive"
                        hideFirstLastPages={true}
                        pageRangeDisplayed={4}
                    />
                </div> : " "}

                <LogoutButton func={handleClick} />

                <button className="Add" onClick={() => { handleAdd() }}>+</button>



            </div>
        )
        }
    </>
}
export default HomeAdmin