export default function Temperature({ title, value }) {
    return (
        <div className='flex justify-between mx-auto'>
            <p>{title}</p>
            <p>{value} °C</p>
        </div>
    )
}