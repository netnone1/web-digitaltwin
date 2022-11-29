import Image from 'next/image'

// Image
import HomeImage from '../../public/images/home.png'

export default function Parking() {
    return (
        <div className='grid grid-cols-3 grid-rows-1 gap-3'>
            <div className='col-span-2 p-3'>
                <Image className='rounded-md m-auto w-full' alt='' src={HomeImage} />
            </div>
            <div className='bg-white rounded-md my-3 p-3'>
                <p className='text-center'>พื้นที่จอดรถ</p>
                <p className='py-3'>หน้าอาคาร 30 ปี</p>
                <p className='pb-3'>ลานอาคารไฟฟ้า</p>
                <p>ลานหลังตึกแหล่งน้ำ</p>
            </div>
        </div>
    )
}