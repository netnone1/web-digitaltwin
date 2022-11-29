import Image from 'next/image'

// Components
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
import DropdownSvg from '../../public/svgs/dropdown.svg'

export default function Room() {
    return (
        <div className='grid grid-cols-4 grid-rows-8 gap-3'>
            <div className='bg-white rounded-md row-span-6 p-3'>
                <p className='text-center'>อุปกรณ์</p>
            </div>
            <div className='bg-white rounded-md col-span-2 row-span-2 p-3'>
                <div className='flex justify-center'>
                    <p className='pr-2'>ห้อง</p>
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
            <div className='col-span-2 row-span-6 p-3'></div>
            <div className='bg-white rounded-md row-span-4 p-3'>
                <p className='text-center'>การใช้งานพื้นที่</p>
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