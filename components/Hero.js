import React from 'react'
import Navbar from './Navbar'
import Button from './Button'
import Link from 'next/link'

export default function Hero() {
    return (
        <div className="bg-hero 2xl:h-[700px] xl:h-[680px] lg:h-[640px] md:h-[620px] pb-24">
            <div className="container mx-auto px-10 2xl:px-0">
                <Navbar />
                <div className="text-center xl:mt-20 lg:mt-10 md:mt-6">
                    <h1 className="text-4xl text-white font-semibold font-mono 2xl:w-6/12 xl:w-8/12 lg:w-10/12 w-full mx-auto leading-relaxed">Saya seorang Front-End  dan Back-End Developer Web Programming</h1>
                    <p className="text-white text-opacity-60 text-lg 2xl:w-4/12 xl:w-5/12 lg:w-6/12 md:w-7/12 mx-auto mt-5 leading-relaxed">Saya adalah pemula di bidang web programming dan sedang  mendalami front-end dan  back-end developer </p>
                    <Button pill variant="yellow" className="mt-12"><Link href="#profile"><a>Pelajari</a></Link></Button>
                </div>
            </div>
        </div>
    )
}
