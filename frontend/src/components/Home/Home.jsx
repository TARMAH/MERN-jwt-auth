import React, { useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectUserDetails } from "../../redux/user/user.selector";

function Home () {
    const userData =  useSelector(selectUserDetails);
    const history = useHistory();

    useEffect(() => {
        if(!userData.user)
            history.push("/login");

    }, [userData,history]);
    
    return (
        <div>
            {userData.user ? (
                <h1>Welcome {userData.user.displayName}</h1>
            ) : (
                <>
                    <h2>You are not logged in</h2>
                    <Link to="/login">Login</Link>
                </>
            )}
        </div>
    );
}
 
export default Home;