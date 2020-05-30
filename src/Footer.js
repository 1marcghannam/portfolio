import React from "react";
import './Footer.css';
import linkedin from './static/linkedin.png';


function Footer() {

    return(

        <div className='footer'>
            <img className='linkedin' src={linkedin}/>
            <h4 className='copyright'>Copyright &copy; Marc Ghannam 2020</h4>





        </div>
    )

}


export default Footer;