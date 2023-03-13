import React from 'react';
import './Dashboard.css';
import { NavLink } from 'react-router-dom';
const Studentdashboard = () => {
  const activepagestyle=({isActive})=>{
    return{
        color:isActive?'aqua':'orange'
    };
};
    return (
        <div>
          <nav>
                <div style={{backgroundColor:"white",color:"black",height:"30px"}}>
                  <ul>
                    <li><NavLink to="/" style={activepagestyle}>Dashboard</NavLink></li>
                    <li><NavLink to="Login" style={activepagestyle}>Login</NavLink></li>
                    <li><NavLink to="Courses" style={activepagestyle}>Courses</NavLink></li>
                    <li><NavLink to="Studentdetails" style={activepagestyle}>Students</NavLink></li>
                    </ul>
                </div>

            </nav>
        </div>
    );
};

export default Studentdashboard;