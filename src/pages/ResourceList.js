import React, { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
const ResourceList = () => {
  const [resourceList, setResourceList] = useState([]);
  useEffect(() => {
    fetch('https://engineering-task.elancoapps.com/api/resources')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResourceList(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (<div className="posts-container">
    <h1>Resource List</h1>
    <ol>
      {resourceList.map((resources, index) => {
        return (
          <li className="post-body" key={index}><Link to={`${resources}`}>{resources}</Link></li>
        );
      })}
    </ol>
  </div>);
};

export default ResourceList;