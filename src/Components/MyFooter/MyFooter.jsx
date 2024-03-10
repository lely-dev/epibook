import React from "react";
import "./MyFooter.css";



export default function MyFooter() {

    return(
        <footer>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="#">Web design</a></li>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">Hosting</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                    <h4>About</h4>
                            <ul>
                                <li><a href="#">Company</a></li>
                                <li><a href="#">Team</a></li>
                                <li><a href="#">Legacy</a></li>
                            </ul>
                    </div>
                    <div className="col-md-4">
                    <h4>Careers</h4>
                            <ul>
                                <li><a href="#">Job openings</a></li>
                                <li><a href="#">Employee success</a></li>
                                <li><a href="#">Benefits</a></li>
                            </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
    
                    </div>
                    <div>
                        <p>Company Name © 2018</p>
                    </div>
                </div>

            </div>
        </footer>

    )
    
}