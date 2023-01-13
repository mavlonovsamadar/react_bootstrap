import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'


export default function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row justify-content-between pt-3">
                        <div className="col-3">
                            <img className='hp' src={"https://th.bing.com/th/id/OIP.UqNKLxo6ELrjWIqP_zWYaQHaEl?pid=ImgDet&rs=1"} alt="" />
                        </div>

                        <div className="col-3">
                            <ul className="list">

                                <Link to='/' style={{ color: 'white', textDecoration: "none" }}><li className="list_item">Home</li></Link>
                                <Link to='/section' style={{ color: 'white', textDecoration: "none" }}><li className="list_item">Section</li></Link>
                                <Link to='/registration' style={{ color: 'white', textDecoration: "none" }}><li className="list_item">Registration</li></Link>

                            </ul>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    )
}
