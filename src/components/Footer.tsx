export const Footer = () => {
    return (
        <footer className=" mt-4 w-full py-4 bg-slate-500 text-white">
            <div className=" container m-auto px-6 flex flex-col sm:flex-row gap-2 justify-between">
                <p className=''>Job data provided by <a href="https://remotive.com/" target="_blank" rel="noopener noreferrer" className=' hover:underline'>Remotive.com</a></p>
                <p className=''>© <a href="https://abdulazeezsalamiportfolio.onrender.com/" target="_blank" rel="noopener noreferrer" className=' hover:underline'>Aziz</a> {new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}