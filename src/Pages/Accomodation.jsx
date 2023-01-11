import React from 'react'
import img1 from '../assets/offerDetails/desertBanner.png'
import Slider from '../components/slider';
import Button from '../components/smComponents/Button';

const Accomodation = () => {
  return (
    <main>
      {/* banner */}
      <div className='banner section relative bg-cover bg-center w-full h-[14vh] md:h-[22vh] lg:h-[25vh] flex flex-col justify-center items-center mt-14 px-5 sm:px-15 lg:px-0'
            style={ { backgroundImage: `url(${ img1 })` } }>
            <p className={`text-center font-bold text-white text-[1.5rem] xs:text-[1.7rem] md:text-[2rem] lg:text-[2.7rem] lg:w-[80%]`}>DESERT SAFARI</p>
      </div>
     
      <div className='px-4 md:px-10 lg:px-16 mt-7'>
        <h1 className='font-[700] text-[1.1rem] md:text-[1.4rem]'><span className='text-[#EB8C1A]'>Dubai: </span> Al Awir Safari Desert</h1>
        <div className='md:mt-1 flex gap-3 font-[600] text-[.78rem] md:text-[.9rem]'>
            <p className=''><span className='text-[#EB8C1A]'>Meeting Point:</span> La Suite</p>
            <p className=''><span className='text-[#EB8C1A]'>Duration: </span> 24hours</p>
        </div>
      </div>
       {/* slider and activities */}
      <div className='flex flex-col md:flex-row gap-5 lg:gap-10 px-[1.5rem] md:px-[3rem] lg:px-[7rem] mt-6 items-center justify-center'>
        <div className='md:w-[60%]'>

      <Slider />
        </div>
        <div className='flex flex-col gap-6 md:gap-4 px-4 py-5 shadow-lg md:ml-12 w-full md:w-fit'> 
          <h1 className='text-center text-[1.2rem] font-[600] text-[#EB8C1A]'>Activities</h1>
          <div className='flex px-2 justify-between items-center border-t-2 pt-4 gap-9'>
            <span className='text-[.75rem] font-[600]'>Desert Dube Bashing</span>
            <div className='scale-[.7]'>
            <Button text='Included' />
            </div>
          </div>
          <div className='flex px-2 justify-between items-center border-t-2 pt-4 gap-9'>
            <span className='text-[.75rem] font-[600]'>Sandboarding</span>
            <div className='scale-[.7]'>
            <Button text='Included' />
            </div>
          </div>
          <div className='flex px-2 justify-between items-center border-t-2 pt-4 gap-9'>
            <span className='text-[.75rem] font-[600]'>Activities</span>
            <div className='scale-[.7]'>
            <Button text='Included' />
            </div>
          </div>
          <div className='flex px-2 justify-between items-center border-t-2 pt-4 gap-9'>
            <span className='text-[.75rem] font-[600]'>Activities</span>
            <div className='scale-[.7]'>
            <Button text='Included' />
            </div>
          </div>
          <div className='flex px-2 justify-between items-center border-t-2 pt-4 gap-9'>
            <span className='text-[.75rem] font-[600]'>Activities</span>
            <div className='scale-[.7]'>
            <Button text='Included' />
            </div>
          </div>
        </div>
      </div>

      {/* description */}
      <div className='flex flex-col gap-5 px-[1.5rem] md:px-[3rem] lg:px-[7rem] lg:w-[89%] md:w-[90%] w-[100%] mt-10'>
        <h1 className='text-[#EB8C1A] text-[1.5rem] font-bold'>Description</h1>
        <hr className='w-full bg-[#CCCCCC] h-[2px]' />
        <p className=' text-[.7rem] md:text-[.75rem] font-[500] leading-6'>The Dubai Royal Safari is the ultimate way of experiencing the vast, beautiful desert that lies just beyond the confines of the city. This Dubai dinner safari takes you right into a true Middle Eastern desert, an area where civilizations have lived for hundreds of years prior to the appearance of the modern metropolises of the region like Dubai and Abu Dhabi.The Dubai Royal Safari is the ultimate way of experiencing the vast, beautiful desert that lies just beyond the confines of the city. This Dubai dinner safari takes you right into a true Middle Eastern desert, an area where civilizations have lived for hundreds of years prior to the appearance of the modern metropolises of the region like Dubai and Abu Dhabi.</p>
      </div>

      {/* About the activities */ }
      <div className='flex flex-col gap-5 px-[1.5rem] md:px-[3rem] lg:px-[7rem] lg:w-[85%] md:w-[90%] w-[100%] mt-12'>
        <h1 className='text-[#EB8C1A] text-[1.5rem] font-bold'>About this activity
        </h1>
          <hr className='w-full bg-[#CCCCCC] h-[2px]' />
          <div>
            <div className='mb-4'>
              <h3 className='text-[.8rem] text-[#222222] font-semibold mb-1'>Free Cancellation</h3>
              <p className='text-[.7rem] text-[#555555]'>Cancel up to 24hours in advance to receive a full refund</p>
          </div>
          <div className='mb-4'>
              <h3 className='text-[.8rem] text-[#222222] font-semibold mb-1'>Reserve now & pay later</h3>
              <p className='text-[.7rem] text-[#555555]'>Keep your travel plans flexible — book your spot and pay nothing today.</p>
          </div>
          <div className='mb-4'>
              <h3 className='text-[.8rem] text-[#222222] font-semibold mb-1'>Covid-19 precautions</h3>
              <p className='text-[.7rem] text-[#555555]'>Special health and safety measures are in place. Check your activity voucher once you book for full details.</p>
          </div>
          <div className='mb-4'>
              <h3 className='text-[.8rem] text-[#222222] font-semibold mb-1'>Live tour guide</h3>
              <p className='text-[.7rem] text-[#555555]'>English</p>
          </div>
          <div className='mb-4'>
              <h3 className='text-[.8rem] text-[#222222] font-semibold mb-1'>Pickup included</h3>
              <p className='text-[.7rem] text-[#555555]'>Complimentary pickup is available from any hotel or location within Dubai.</p>
          </div>
          <div className=''>
              <h3 className='text-[.8rem] text-[#222222] font-semibold mb-1'>Private group available</h3>
            </div>
          </div>
    
      </div>

      {/* schedule form */ }
      <form className='flex flex-col gap-6 p-6 bg-[#2A2D46]'>
        <h1 className='text-white'>Book your tour</h1>
        <div className='flex gap-3 items-center justify-center w-full'>
        <div className="flex justify-center flex-1">
<div className="w-full">
  <select className="form-select appearance-none
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding bg-no-repeat
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
      <option>Adult</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
  </select>
</div>
        </div>
    <div className="flex justify-center flex-1">
<div className="w-full">
  <select className="form-select appearance-none
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding bg-no-repeat
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
      <option>Children</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
  </select>
</div>
      </div>    
      </div>
      <div className="flex items-center justify-center">
      <div className="flex items-center justify-center">
      <div className="flex items-center justify-center">

</div>
      </div>
      </div>
      <div className="flex justify-center flex-1">
<div className="w-full">
  <input type="date" placeholder="MM/DD/YYYY" className="form-select appearance-none
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding bg-no-repeat bg-none
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example" />
      
</div>
        </div>    
       
    

        <a href="#" className=" text-sm bg-[#EB8C1A] px-5 md:px-7 py-3 text-white rounded-lg font-semibold hover:bg-white hover:border-[#EB8C1A] hover:border hover:text-[#EB8C1A] transition duration-[.2s] flex items-center justify-center">Book Now</a>
      </form>
    </main>
  )
}

export default Accomodation