import React from 'react';
import signIma from "../assets/fin.jpg";

function Signin() {
  return (
    <div className='flex w-full '>
            <div className='h-full w-3/6 flex justify-center items-center  flex-col align-middle  mt-8 p-20'>
            <h1 className='text-4xl font-extrabold mt-20'>MIL</h1>
            <h1 className='text-3xl text-[#76C4B4] font-extrabold'>Modibbo Adama University Innovation Laboratory</h1>
            <p className='text-[#7E5576] mb-9'>Get Skill - action speaks louder than voice! - open curriulum </p>


            <input type="email" name="email" id="email" placeholder='email' className='border-2 w-2/3 p-2 m-6 rounded-sm'/>
            <input type="password" name="password" id="password" placeholder='************' className='border-2 w-2/3 p-2 m-6 rounded-sm'/>
            <input type="submit" name="btn" id="btn" className='border-2 w-2/3 p-2 m-6 bg-[#4B4873] text-[#FEDA58] hover:cursor-pointer hover:bg-[#3d3977]'/>
            <button  name="btn" id="btn"  className='border-2 w-2/3 p-2 m-6 text-[#113045] hover:cursor-pointer bg-[#dfc244]' >
            Connect to wallet
            </button>
        </div>

        <div className='h-full w-3/6'>
            <img src={signIma} alt="Sign In" className='w-full h-[100vh]' />
        </div>
    

    </div>
  );
}

export default Signin;
