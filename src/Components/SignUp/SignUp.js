import React, { useEffect, useState } from 'react'
import { TbBrandFacebook, TbBrandTwitter } from 'react-icons/tb'
import { SlSocialGoogle } from 'react-icons/sl'
import { FiLogIn } from 'react-icons/fi'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './SignUp.css'
import User from '../../Server/Server'

const SignUp = () => {
    useEffect(() => {
        AOS.init()
    });

    const [autorisation, setAutorisation] = useState(false)


return (
    <div className="signUp-card" data-aos="fade-right" data-aos-duration='1000'>
        <div className="container">
            <div className="signUp-logo flex">
                <h1 data-aos="fade-down" data-aos-duration='1800'>SIGN UP</h1>
                <p data-aos="fade-down" data-aos-duration='1800'>Welcome To <span className='signUp-span'>Zaprafka.uz</span></p>
            </div>
            <div className="signUp-inputs flex">
                <input value={Name} type="text" placeholder='Name' data-aos="fade-down" data-aos-duration='1000'/>
                <input value={email} type="email" placeholder='Email'data-aos="fade-down" data-aos-duration='1300' />
                <input value={password} type="password" placeholder='Password'data-aos="fade-down" data-aos-duration='1500' />
                <input type="password" placeholder='Confirm Password'data-aos="fade-down" data-aos-duration='1800' />
                <button className='signUp-btn' data-aos="fade-down" data-aos-duration='1000' type='submit'>SIGN UP <FiLogIn className='icon'/></button>
            </div>
            <div className="signUp-footer flex">
                <div className="footer-icon  icon-name" data-aos="fade-down" data-aos-duration='1800'>
                    <TbBrandFacebook  className='icon'data-aos="fade-right" data-aos-duration='1500' />
                    <p data-aos="fade-right" data-aos-duration='1500'>Facebook</p>
                </div>
                <div className="footer-icon icon-name" data-aos="fade-down" data-aos-duration='1800'>
                    <SlSocialGoogle className='icon' data-aos="fade-right" data-aos-duration='1500'/>
                    <p data-aos="fade-right" data-aos-duration='1500'>Google</p>
                </div>
                <div className="footer-icon icon-name" data-aos="fade-down" data-aos-duration='1800'>
                    <TbBrandTwitter className='icon' data-aos="fade-right" data-aos-duration='1500'/>
                    <p data-aos="fade-right" data-aos-duration='1500'>Twitter</p>
                </div>
            </div>
            <div className="signUp-bg"></div>
            <div className="signUp-bg-bottom">
                <p>Have an accaunt? <span><a href="#">LOG IN</a></span></p>
            </div>
        </div>
    </div>
)
}

export default SignUp
