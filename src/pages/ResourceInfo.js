import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
const ResourceInfo = () => {
    const [resourceInfo, setResourceInfo] = useState([]);
    const { name } = useParams();
    console.log(name);
    useEffect(() => {
        fetch('https://engineering-task.elancoapps.com/api/resources/' + name)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setResourceInfo(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    return (<div className="posts-container">
        <h1>Resource Info</h1>
        <table class="table bordered">
    <tbody>
        <tr>
          <th>Quantity</th>
          <th>Cost</th>
          <th>InstanceId</th>
          <th>Date</th>
          <th>Meter Category</th>
          <th>Rsc Grp</th>
          <th>Rsc Loc</th>
          <th>Unit</th>
          <th>Location</th>
          <th>Service Name</th>      
        </tr>
        {resourceInfo.map((item, index) => (
          <tr key={index}>
            <td>{item.ConsumedQuantity}</td>
            <td>{item.Cost}</td>            
            <td>{item.InstanceId}</td>
            <td>{item.Date}</td>
            <td>{item.MeterCategory}</td>
            <td>{item.ResourceGroup}</td>
            <td>{item.ResourceLocation}</td>            
            <td>{item.UnitOfMeasure}</td>
            <td>{item.Location}</td>
            <td>{item.ServiceName}</td>           
          </tr>
        ))}
      </tbody>
      </table>
    </div>);
};

export default ResourceInfo;