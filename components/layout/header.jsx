import Image from "next/image"

// Image
import HamburgerSvg from '../../public/svgs/hamburger.svg'

export default function Header() {
    return (
        <nav className='flex justify-between bg-white mb-3 p-3'>
            <div className=''></div>
            <div className='cursor-pointer'>
                <Image alt='' src={HamburgerSvg} />
            </div>
        </nav>
    )
}