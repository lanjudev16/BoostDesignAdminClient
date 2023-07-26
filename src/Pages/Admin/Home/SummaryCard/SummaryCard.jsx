import React from 'react';
import image1 from '../../../../../public/SummaryCard/shopingCart.png'
import image2 from '../../../../../public/SummaryCard/new.png'
import './SummaryCard.css'
const SummaryCard = () => {
    return (
        <div className='grid lg:grid-cols-3 mt-5 gap-5 '>
            <div className='rounded-3xl bg1 bg' data-aos="fade-right"
        data-aos-duration="3000"
        data-aos-anchor-placement="top-center" >
                <h2 className='font-bold text-[18px] text-white ps-10 pt-5'>Shipped orders</h2>
                <div className='flex items-center justify-between'>
                    <img src={image1} alt="" />
                    <p className='text-[60px] font-semibold customFont text-white pe-10  '>67</p>
                </div>
            </div>
            <div className='rounded-3xl bg2 bg' data-aos="fade-bottom"
        data-aos-duration="3000"
        data-aos-anchor-placement="top-center">
                <h2 className='font-bold text-[18px] text-white ps-10 pt-5'>Pending orders</h2>
                <div className='flex items-center justify-between'>
                    <img src={image1} alt="" />
                    <p className='text-[60px] font-semibold customFont text-white pe-10  '>09</p>
                </div>
            </div>
            <div className='rounded-3xl bg3 bg' data-aos="fade-right"
        data-aos-duration="3000"
        data-aos-anchor-placement="top-center" >
                <h2 className='font-bold text-[18px] text-white ps-10 pt-5'>New orders</h2>
                <div className='flex items-center justify-between'>
                    <img src={image2} alt="" />
                    <p className='text-[60px] font-semibold customFont text-white pe-10  '>35</p>
                </div>
            </div>
        </div>
    );
};

export default SummaryCard;