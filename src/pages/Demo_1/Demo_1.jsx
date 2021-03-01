import React from 'react'
import logo from '../../picture/education.png'

import './Demo_1.css'

function Demo_1() {
    return (
        <div className='demo'>
            <div className="demo_container">
            <nav className="demo_nav">
                <div className="left_nav">
                    <img src={logo} alt="..." className="logo"/>
                </div>
                <div className="right_nav">
                    <ul className="list">
                        <div className="home_box">
                        <li className="items">Home</li>

                        <div className="home_items_box">
                        <li className="home_items">text</li>
                        <li className="home_items">text</li>
                        <li className="home_items">text</li>
                        <li className="home_items">text</li>
                        <li className="home_items">text</li>
                        </div>
                        </div>
                        
                        
                        <li className="items">About us</li>
                        <li className="items">Contact us</li>
                        <li className="items">Sign up</li>
                    </ul>
                </div>
            </nav>
            <header className="header">
                <h1 className="demo_header">
                    empower yourself
                </h1>
                <p className="demo_text">
                    free online courses from the world's leading experts.
                    <br/> join 12 million learner today 
                </p>
                <button className="demo_btn">Find courses</button>
            </header>
            </div>
            
        </div>
    )
}

export default Demo_1
