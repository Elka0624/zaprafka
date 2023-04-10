import React from 'react'
import { TbBrandFacebook, TbBrandTwitter } from 'react-icons/tb'
import { SlSocialGoogle } from 'react-icons/sl'
import './SignUp.css'

const SignUp = () => {
return (
    <div className='container'>
        <div className="signUp-card">
            <div className="signUp-logo flex">
                <h1>SIGN UP</h1>
                <p>Welcome To Zaprafka.uz</p>
            </div>
            <div className="signUp-inputs flex">
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <button>SIGN UP</button>
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
        </div>
    </div>
)
}

export default SignUp
