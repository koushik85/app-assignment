import React, { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";

const AppList = () => {
    const [appsList, setAppsList] = useState([]);
    useEffect(() => {
        fetch('https://engineering-task.elancoapps.com/api/applications')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setAppsList(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    return (<><div className="posts-container">
        <h1>Application List</h1>

        <ol>
            {appsList.map((apps, index) => {
                return (
                    <li className="post-body" key={index}><Link to={`${apps}`}>{apps}</Link></li>
                );
            })}
        </ol>
    </div>
        <Outlet />
    </>
    );
};

export default AppList;