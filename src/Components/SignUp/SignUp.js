import React from 'react'
import { TbBrandFacebook, TbBrandTwitter } from 'react-icons/tb'
import { SlSocialGoogle } from 'react-icons/sl'
import { FiLogIn } from 'react-icons/fi'
import './SignUp.css'

const SignUp = () => {
return (
    <div className="signUp-card">
        <div className="container">
            <div className="signUp-logo flex">
                <h1>SIGN UP</h1>
                <p>Welcome To Zaprafka.uz</p>
            </div>
            <div className="signUp-inputs flex">
                <input type="text" placeholder='Name' />
                <input type="text" placeholder='Email' />
                <input type="text" placeholder='Password' />
                <input type="text" placeholder='Confirm Password' />
                <button className='signUp-btn'>SIGN UP <FiLogIn className='icon'/></button>
            </div>
            <div className="signUp-footer flex">
                <div className="footer-icon  icon-name">
                    <TbBrandFacebook  className='icon'/>
                    <p>Facebook</p>
                </div>
                <div className="footer-icon icon-name">
                    <SlSocialGoogle className='icon'/>
                    <p>Google</p>
                </div>
                <div className="footer-icon icon-name">
                    <TbBrandTwitter className='icon'/>
                    <p>Twitter</p>
                </div>
            </div>
            <div className="signUp-bg"></div>
        </div>
    </div>
)
}

export default SignUp
