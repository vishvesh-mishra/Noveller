import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./footer.css";

function Footer() {
    return (
        <footer className="footer-bs" data-aos="fade-up">
            <div className="row">
                <div className="col-md-3 footer-brand animated fadeInLeft">
                    <h2>Noveller</h2>
                    <p>Noveller acts as platform for for its users to read and enjoys content from their favorite autors and also lets them create and share thier own content.</p>
                    <p>© 2022 Noveller, All rights reserved</p>
                </div>
                <div className="col-md-4 footer-nav animated fadeInUp">
                    <h4>Menu —</h4>
                    <div className="col-md-6">
                        <ul className="pages">
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Create</a></li>
                            <li><a href="/">Browse</a></li>
                            <li><a href="/">Login</a></li>
                            <li><a href="/">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-2 footer-social animated fadeInDown">
                    <h4>Follow Us</h4>
                    <ul>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">Twitter</a></li>
                        <li><a href="/">Instagram</a></li>
                    </ul>
                </div>
                <div className="madeby col-md-3 footer-ns animated fadeInRight">
                    <h4>Made By:</h4>
                    <p>
                        <ul>
                        <li>Shreyas Singh</li>
                        <li>Ayan Bhowal</li>
                        <li>Ishaan Rejra</li>
                        <li>Ikshit Samantha</li>
                        <li>Vishwesh Mishra</li>
                        </ul>
                    </p>

                    
                </div>
            </div>
        </footer>
    )
}

export default Footer;