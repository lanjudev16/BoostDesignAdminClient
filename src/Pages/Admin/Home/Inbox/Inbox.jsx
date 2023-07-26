import React from 'react';

const Inbox = () => {
    return (
        <div     
        data-aos="fade-right"
        data-aos-duration="3000"
        data-aos-anchor-placement="top-center">
            <div className='bg-[#16193A]  my-5 rounded-2xl py-3 customFonts'>
                <h1 className='font-bold text-[18px] text-white px-5'>Inbox</h1>
                <div className='flex justify-between items-center px-5'>
                    <h2 className='text-xs text-[#9FA2B4]'>Group: Support</h2>
                    <button className='text-[#3751FF] font-semibold text-[14px]'>View details</button>
                </div>
                <div className='flex justify-between items-center px-5'>
                    <h2 className='text-[#fff] mt-3 font-medium text-[14px]'>Waiting for order#12345</h2>
                    <button className='text-[#9FA2B4] font-medium text-[14px]'>4:39</button>
                </div>
                <hr className='h-[1px] bg-white w-full my-3' />
                <div className='flex justify-between items-center px-5'>
                    <h2 className='text-[#fff]  font-medium text-[14px]'>Customer support id#22234</h2>
                    <button className='text-[#9FA2B4] font-medium text-[14px]'>11:07</button>
                </div>
            </div>
        </div>
    );
};

export default Inbox;