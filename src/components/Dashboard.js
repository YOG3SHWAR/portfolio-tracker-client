import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const Dashboard = () => {

    const { user } = useAuth0();
    console.log("user", JSON.stringify(user, null, 2));

    return (
        <div>
            Dashboard
        </div>
    )
}

export default Dashboard
