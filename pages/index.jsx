import Image from 'next/image'

// Components
import Energy from "../components/energy";
import Temperature from "../components/temperature"
import Pm from "../components/pm"

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

// Image
import HomeImage from '../public/images/home.png'

export default function Home() {
    return (
        <div className='grid grid-cols-3 grid-rows-1 gap-3'>
            <div className='col-span-2 p-3'>
                <Image className='rounded-md m-auto w-full' alt='' src={HomeImage} />
            </div>
            <div className='bg-white rounded-md my-3 p-3'>
                <Swiper loop={true} modules={[Pagination]} pagination={{ clickable: true }} className="h-full">
                <SwiperSlide>
                    <div>
                        <p className="text-center">การใช้พลังงานไฟฟ้า</p>
                        <div className="py-3"><Energy title="อาคาร" value="0" /></div>
                        <div className="pb-3"><Energy title="อาคาร " value="0" /></div>
                        <div className="pb-3"><Energy title="อาคาร " value="0" /></div>
                        <div className="pb-3"><Energy title="อาคาร " value="0" /></div>
                        <div className="pb-3"><Energy title="อาคาร " value="0" /></div>
                        <div className="pb-3"><Energy title="อาคาร " value="0" /></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <p className="text-center">อุณหภูมิ</p>
                        <div className="py-3"><Temperature title="อาคาร" value="0" /></div>
                        <div className="pb-3"><Temperature title="อาคาร" value="0" /></div>
                        <div className="pb-3"><Temperature title="อาคาร" value="0" /></div>
                        <div className="pb-3"><Temperature title="อาคาร" value="0" /></div>
                        <div className="pb-3"><Temperature title="อาคาร" value="0" /></div>
                        <div className="pb-3"><Temperature title="อาคาร" value="0" /></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <p className="text-center">PM</p>
                        <div className="py-3"><Pm title="อาคาร" value="0" /></div>
                        <div className="pb-3"><Pm title="อาคาร" value="0" /></div>
                        <div className="pb-3"><Pm title="อาคาร" value="0" /></div>
                        <div className="pb-3"><Pm title="อาคาร" value="0" /></div>
                        <div className="pb-3"><Pm title="อาคาร" value="0" /></div>
                        <div className="pb-3"><Pm title="อาคาร" value="0" /></div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
        </div >
    )
}