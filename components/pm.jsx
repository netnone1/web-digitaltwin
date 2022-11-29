export default function Pm({ title, value }) {
    return (
        <div className='flex justify-between mx-auto'>
            <p>{title}</p>
            <p>{value} mm/g</p>
        </div>
    )
}