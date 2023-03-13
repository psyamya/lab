import React from 'react';
import './ass1.css';
function Card() {
    return (
        <><center>
            <h2>Flowers</h2>
            <div class="card">
                <img src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg" style={{ width: "100%" }} />
                <div class="container">
                    <h4><b>Plant or Animal Product Type:</b></h4>
                    <p>Jasmine</p>
<h4><b>Brand</b></h4><p>Hirt's Gardens</p>
<h4><b>Colour</b></h4><p>White</p>
                    <button class="button button1"><b>SHARE</b></button>
                    <button class="button button2"><b>LEARN MORE</b></button>
                </div>
            </div></center>
        </>
    )
}
export default Card;