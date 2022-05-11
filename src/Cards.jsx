import React from 'react'
import web from '../src/images/468739.jpg'

const Cards = () => {
    return (
        <>
            <div className = "my-5">
                <h1 className = "text-center"> Available Projects </h1>
            </div>
            <div className = "container-fluid mb-5">
                <div className = "row"> 
                    <div className = "col-10 mx-auto">
                        <div className = "row gy-4" >
                            <div className= "col-md-5 col-10 mx-auto">
                                <div class = "card">
                                    <img src= {web} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Project 1</h5>
                                        <p class="card-text">
                                            Web Developement
                                        </p>
                                        <a href="#" class="btn btn-primary">
                                            Choose This Project
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className= "col-md-5 col-10 mx-auto">
                                <div class = "card">
                                    <img src= {web} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Project 2</h5>
                                        <p class="card-text">
                                            Marketing
                                        </p>
                                        <a href="#" class="btn btn-primary">
                                            Choose This Project
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className= "col-md-5 col-10 mx-auto">
                                <div class = "card">
                                    <img src= {web} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Project 3</h5>
                                        <p class="card-text">
                                            Software Testing
                                        </p>
                                        <a href="#" class="btn btn-primary">
                                            Choose This Project
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className= "col-md-5 col-10 mx-auto">
                                <div class = "card">
                                    <img src= {web} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Project 4</h5>
                                        <p class="card-text">
                                            Quality Assurance
                                        </p>
                                        <a href="#" class="btn btn-primary">
                                            Choose This Project
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className= "col-md-5 col-10 mx-auto">
                                <div class = "card">
                                    <img src= {web} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Project 5</h5>
                                        <p class="card-text">
                                            Android Development
                                        </p>
                                        <a href="#" class="btn btn-primary">
                                            Choose This Project
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className= "col-md-5 col-10 mx-auto">
                                <div class = "card">
                                    <img src= {web} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Project 6</h5>
                                        <p class="card-text">
                                            Human Resources
                                        </p>
                                        <a href="#" class="btn btn-primary">
                                            Choose This Project
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

    
export default Cards;