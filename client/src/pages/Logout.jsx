import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Logout = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        const url = "http://localhost:4000/auth/logout";

        //Using Axios 
        axios.get(url, { withCredentials: true })
            .then((response) => {
                const redirect = response.data.redirect;
                navigate(redirect);
            })
            .catch((error) => {
                console.log("😢Logout Error! \n", error.message);
            });
    }

    return (
        <div>
            <button onClick={handleLogout}> Click to Logout! </button>
        </div>
    )
}

export default Logout;