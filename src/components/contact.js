import React from 'react'
import Phone from "../images/svg/phone.svg"
import Email from "../images/svg/email.svg"
import Linkedin from "../images/svg/linkedin.svg"



export default function Contact() {

    return (
        <section className="block--colored">
            <h2 className="h2--colored">Contact</h2>
            <div>
                <div>
                    <img src={Phone} alt="Phone Icon" />
                    <a href="tel:9717145527" style={{ padding: 16 }}>+91-9717145527</a>
                </div>
                <div>
                    <img src={Email} alt="Email Icon" />
                    <a href="mailto: nakulmehra677@gmail.com" style={{ padding: 16 }}>nakulmehra677@gmail.com</a>
                </div>
                <div>
                    <img src={Linkedin} alt="Linkedin Icon" />
                    <a href="https://www.linkedin.com/in/nakul-kumar-a3965914b/" target="_blank" style={{ padding: 16 }}>https://www.linkedin.com/in/nakul-kumar-a3965914b/</a>
                </div>
            </div>
        </section>
    )
} 
