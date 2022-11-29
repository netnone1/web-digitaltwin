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
import BuildingImage from '../../public/images/building.png'
import DropdownSvg from '../../public/svgs/dropdown.svg'

export default function Building() {
    return (
        <div className='grid grid-cols-4 grid-rows-8 gap-3'>
            <div className='bg-white rounded-md row-span-6 p-3'>
                <p className='text-center pb-3'>การใช้ไฟฟ้ารายชั้น</p>
                <div className='pb-3'>
                    <Energy title='ชั้น 1' value='0' />
                </div>
                <div className='pb-3'>
                    <Energy title='ชั้น 2' value='0' />
                </div>
                <div className='pb-3'>
                    <Energy title='ชั้น 3' value='0' />
                </div>
                <div className='pb-3'>
                    <Energy title='ชั้น 4' value='0' />
                </div>
                <div className='pb-3'>
                    <Energy title='ชั้น 5' value='0' />
                </div>
                <div className='pb-3'>
                    <Energy title='ชั้น 6' value='0' />
                </div>
                <div className='pb-3'>
                    <Energy title='ชั้น 7' value='0' />
                </div>
                <div className='pb-3'>
                    <Energy title='ชั้น 8' value='0' />
                </div>
                <Energy title='ลิฟต์' value='0' />
            </div>
            <div className='bg-white rounded-md col-span-2 row-span-2 p-3'>
                <div className='flex justify-center cursor-pointer'>
                    <p className='pr-2'>อาคาร</p>
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
                            <p className='text-center'>การใช้พลังงานไฟฟ้า 1 เดือน</p>
                            <BarChart label='1,2,3,4' dataenergy='1,2,3,4' datasolar='1,2,3,4' />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='col-span-2 row-span-6 p-3'>
                <Image className='rounded-md m-auto' alt='' src={BuildingImage} />
            </div>
            <div className='bg-white rounded-md row-span-4 p-3'>
                <p className='text-center'>ลักษณะการใช้งานพื้นที่รวม</p>
                <DoughnutChart label='Outlet,Light,Aircon' data='6,5,4' />
            </div>
            <div className='bg-white rounded-md row-span-2 p-3'>
                <div className='pb-3'>
                    <Temperature title='อุณหภูมิ' value='25' />
                </div>
                <Pm title='PM' value='0' />
            </div>
        </div>
    )
}