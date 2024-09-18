import "../../App.css";
import LoginIllustration from "../../Illustrations/Grad_16.png";
import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <div className="Register flex justify-around items-center font-Inter">
      <div className='Illustration-div w-80'>
        <img className='illustration' src = {LoginIllustration}/>
      </div>
      <div className="form flex flex-col gap-5">
        <div className='form-headers flex flex-col items-center gap-2'>
          <h1 className='font-bold text-3xl'>Login</h1>
          <p className='font-normal text-sm text-gray-600'>Nothing will work, unless you do. 🚀</p>
        </div>
        <div className='inputs'>
          <div className='email flex flex-col items-start gap-2'>
            <label className='text-xs text-gray-400 font-normal'>Email</label>
            <input type='email' placeholder='Your email' />
          </div>
          <div className='password flex flex-col items-start gap-2'>
            <label className='text-xs text-gray-400 font-normal'>Password</label>
            <input type='password' placeholder='password' />
          </div>
        </div>
        <div className='btn flex items-center flex-col justify-center font-Inter font-normal text-xs'>
          <button id='login' className="text-white">Login</button>
          <p className="mt-5">Don't have an account? <Link to= '/register' className="text-blue-500">Register</Link></p>
        </div>
      </div>
    </div>
  )
}
