import React from 'react';
import { NavLink } from 'react-router-dom';
const Router1 = () => {
    const activepagestyle=({isActive})=>{
        return{
            color:isActive?'aqua':'red'
        };
    };
    return (
        <div>
            <nav>
                <div style={{backgroundColor:"black",color:"white",height:"20px"}}>
                    <NavLink to="/" style={activepagestyle}>Home</NavLink>
                    <NavLink to="about" style={activepagestyle}>About</NavLink>
                    <NavLink to="information" style={activepagestyle}>Information</NavLink>
                </div>

            </nav>
        </div>
    );
};

export default Router1;