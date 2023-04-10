import React from 'react'
import { TbBrandFacebook } from 'react-icons/tb'
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
                <div className="facebook">
                    <TbBrandFacebook  className='icon'/>
                </div>
                <div className="google"></div>
                <div className="twiter"></div>
            </div>
        </div>
    </div>
)
}

export default SignUp
