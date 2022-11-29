export default function Energy({ title, value }) {
    return (
        <div className='flex justify-between mx-auto'>
            <p>{title}</p>
            <p>{value} kWh</p>
        </div>
    )
}