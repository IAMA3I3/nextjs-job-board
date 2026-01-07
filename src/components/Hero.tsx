import handshake from '@/assets/handshake.jpg'
import meeting from '@/assets/meeting.jpg'
import remotive from '@/assets/remotive.png'
import Image from 'next/image'

export const Hero = () => {

    return (
        <section className=" w-full p-8 rounded-3xl bg-linear-60 from-black/40 via-black/20 to-black/40 border-b border-gray-200 shadow-xl">
            <div className=" flex flex-col md:flex-row gap-8">
                <div className=" flex-1 flex flex-col justify-center gap-4 md:pr-6 text-center md:text-left">
                    <h1 className=' text-3xl lg:text-5xl font-bold text-white'>Find Jobs That Match Your Skills</h1>
                    <p className=' text-sm font-semibold text-white'>Explore verified opportunities from trusted companies and apply with confidence.</p>
                    <div className="">
                        <p className=' text-sm text-white'>Jobs Source</p>
                        <a href="https://remotive.com/" target="_blank" rel="noopener noreferrer" className=' inline-block'>
                            <Image
                                src={remotive}
                                alt='meeting'
                                priority
                                className=' w-50 rounded-xl shadow hover:shadow-lg object-cover transition'
                            />
                        </a>
                    </div>
                </div>
                <div className=" relative w-full md:w-[40%] md:max-w-96">
                    <div className=" mt-32 w-[80%] max-w-62.5 aspect-square bg-gray-600 rounded-lg shadow-lg overflow-hidden">
                        <Image
                            src={meeting}
                            alt='meeting'
                            priority
                            className=' w-full h-full object-cover'
                        />
                    </div>
                    <div className=" absolute top-0 right-0 w-[80%] max-w-62.5 aspect-square bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                        <Image
                            src={handshake}
                            alt='meeting'
                            priority
                            className=' w-full h-full object-cover'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}