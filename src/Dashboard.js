import React from 'react';
import { Link } from 'react-router-dom';
const Dashboard = () => {
    return (
        <div>
            <div class="flex-container">
            <div class="card">
  <div class="container">
    <h4><b>Student</b></h4>
    <p><pre>Total Students:100</pre>
    <pre><Link to='StudentDetails'>
      Go To Student Page</Link></pre>
    </p>
  </div>
  </div>
  <div class="card">
  <div class="container">
    <h4><b>Courses</b></h4> 
    <p>Total Courses:25</p>
  </div>
  </div>
  <div class="card">
  <div class="container">
    <h4><b>Grades</b></h4> 
  </div>
  </div>
</div>
        </div>
    );
};

export default Dashboard;