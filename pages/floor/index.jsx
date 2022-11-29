import Image from 'next/image'

// Components
import Energy from '../../components/energy';
import Pm from '../../components/pm';
import Temperature from '../../components/temperature';
import BarChart from '../../components/chart/bar';
import DoughnutChart from '../../components/chart/doughnut'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

// Image
import FloorImage from '../../public/images/floor.png'
import DropdownSvg from '../../public/svgs/dropdown.svg'

export default function Floor() {
    return (
        <div className='grid grid-cols-3 grid-rows-8 gap-3'>
            <div className='bg-white rounded-md col-span-2 p-3'>
                <div className='flex justify-center cursor-pointer'>
                    <p className='pr-2'>ชั้น</p>
                    <Image className='w-4' alt='' src={DropdownSvg} />
                </div>
            </div>
            <div className='bg-white rounded-md row-span-4 p-3'>
                <Swiper loop={true} modules={[Pagination]} pagination={{ clickable: true }} className='h-full'>
                    <SwiperSlide>
                        <div>
                            <p className='text-center'>การใช้พลังงานไฟฟ้า 1 วัน</p>
                            <BarChart label='1,2,3,4' dataenergy='1,2,3,4' datasolar='1,2,3,4' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <p className='text-center'>การใช้พลังงานไฟฟ้า 7 วัน</p>
                            <BarChart label='1,2,3,4' dataenergy='1,2,3,4' datasolar='1,2,3,4' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <p className='text-center'>การใช้พลังงานไฟฟ้า 30 วัน</p>
                            <BarChart label='1,2,3,4' dataenergy='1,2,3,4' datasolar='1,2,3,4' />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='rounded-md col-span-2 row-span-5 p-3'>
                <Image className='rounded-md m-auto' alt='' src={FloorImage} />
            </div>
            <div className='bg-white rounded-md row-span-4 p-3'>
                <p className='text-center'>ลักษณะการใช้งานพื้นที่รวม</p>
                <DoughnutChart label='Outlet,Light,Aircon' data='6,5,4' />
            </div>
            <div className='col-span-2'>
                <div className='grid grid-cols-2 gap-3'>
                    <div className='bg-white rounded-md p-3'>
                        <p className='text-center'>ดาวน์โหลดแปลน</p>
                    </div>
                </div>
            </div>
            <div className='col-span-2'>
                <div className='grid grid-cols-2 gap-3'>
                    <div className='bg-white rounded-md p-3'>
                        <p className='text-center'>PM</p>
                    </div>
                    <div className='bg-white rounded-md p-3'>
                        <p className='text-center'>Temperature</p>
                    </div>
                </div>
            </div>
        </div>
    )
}