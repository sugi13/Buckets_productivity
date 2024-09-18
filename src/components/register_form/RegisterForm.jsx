import "../../App.css";
import RegisterIllustration from "../../Illustrations/Grad_10.png";
          import { Link } from "react-router-dom";


export default function RegisterForm() {
  return (
    <div className="Register flex justify-around items-center font-Inter">
      <div className='Illustration-div w-80'>
        <img src={RegisterIllustration} className='illustration' />
      </div>
      <div className="form flex flex-col gap-5">
        <div className='form-headers flex flex-col items-center gap-2'>
          <h1 className='font-bold text-3xl'>Register</h1>
          <p className='font-normal text-sm'>Welcome to <strong className='title'>Buckets</strong></p>
          <p className='font-normal text-sm text-gray-600'>Better 1% everyday. join with us😀.</p>
        </div>
        <div className='inputs'>
          <div className='Name flex flex-col items-start gap-2'>
            <label className='text-xs text-gray-400 font-normal'>Name</label>
            <input type='text' placeholder='Your Name' />
          </div>
          <div className='email flex flex-col items-start gap-2'>
            <label className='text-xs text-gray-400 font-normal'>Email</label>
            <input type='email' placeholder='Your email' />
          </div>
          <div className='password flex flex-col items-start'>
            <label className='text-xs text-gray-400 font-normal'>Password</label>
            <input type='password' placeholder='password' />
          </div>
          <div className='password flex flex-col items-start'>
            <label className='text-xs text-gray-400 font-normal'>Confirm Password</label>
            <input type='password' placeholder='password' />
          </div>
        </div>
        <div className='btn flex items-center flex-col justify-center font-Inter font-normal text-xs'>
          <button id='submit' className="text-white">Register</button>
          <p className="text-black mt-5 ">Already a user? <Link to = "/login" className="text-blue-500">login</Link></p>
        </div>
      </div>
    </div>
  );
}
