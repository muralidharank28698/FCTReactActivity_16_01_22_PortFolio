import React from 'react';
import "./Footer_container.css"
const Footer_container = () => {
    return (
        <div className='Footercontainer'>
            <section className="contact-area">
                <div className="contact-social">
                    <ul>
                        <li><a className="hover-target" href=""><i className="fa fa-facebook"></i></a></li>
                        <li><a className="hover-target" href=""><i className="fa fa-twitter"></i></a></li>
                        <li><a className="hover-target" href=""><i className="fa fa-instagram"></i></a></li>
                    </ul>
                </div>
            </section>
            <footer>
                <p>Copyright &copy; 2022 All Rights Reserved.</p>
            </footer>
        </div>
    )
};

export default Footer_container;

