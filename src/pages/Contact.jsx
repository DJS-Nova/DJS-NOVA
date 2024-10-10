import React from 'react'
import './contact.css'
import { Element } from 'react-scroll';


export default function AboutUs() {
  return (
    <Element name="Contact" id='contact'>
        <div className="container1">
            <div className="title">
                <h2>
                    Contact Us
                </h2>
            </div>

            <div className="content2">
            <div className="vision">
                    <p>
                    Email: <a href="mailto:djsnova09@gmail.com" target="_blank" rel="noreferrer"> djsnova09@gmail.com </a>
                    </p>
                    <p>
              Revati Singh: <a href="tel:+918291653370" title="Revati Singh">+91 82916 53370</a>
                    </p>
                    <p>
                    <a title="LinkedIn" href="https://www.linkedin.com/company/djs-nova/" target="_blank" rel="noreferrer" className="text-white">
              Linkedin
            </a>
                    </p>
                    <p>
                    <a title="Instagram" href="https://www.instagram.com/djsnova/" target="_blank" rel="noreferrer" className="text-white">
              Instagram
            </a> 
                    </p>

                </div>
                
            </div>


        </div>
    
    </Element>
  )
}
