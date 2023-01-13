import React from 'react'
import './style.css'
// const img = require("./")
export default function Home() {
    return (
        <>
            <div className="container">
                <div className="row justify-content-center mt-4 mb-4">
                    <div className="col-10">
                        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={"https://mcdn.wallpapersafari.com/medium/27/94/N5TtnG.jpg"} className="d-block w-100" alt="..." />

                                </div>
                                <div className="carousel-item">
                                    <img src={"https://mcdn.wallpapersafari.com/medium/98/35/scag2V.jpg"} className="d-block w-100" alt="..." />

                                </div>
                                <div className="carousel-item">
                                    <img src={"https://mcdn.wallpapersafari.com/medium/68/27/4c0sQ8.jpg"} className="d-block w-100" alt="..." />

                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
