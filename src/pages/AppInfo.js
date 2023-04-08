import React, { useState, useEffect} from 'react';
import { useParams } from "react-router-dom";

const AppInfo = () => {
    const [appInfo, setAppInfo] = useState([]);
    const { name } = useParams();   
    console.log(name);
    useEffect(() => {
        fetch('https://engineering-task.elancoapps.com/api/applications/' + name)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setAppInfo(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    
    return (<>    
    <div className="posts-container">
    <h1>Application Info</h1>  
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
        {appInfo.map((item, index) => (
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
    </div></>);
};

export default AppInfo;