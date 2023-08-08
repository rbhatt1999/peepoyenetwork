import React from 'react'
import { DM_Sans } from 'next/font/google'
import Image from 'next/image'
import image from '@/assets/akasshashokgupta3.png'
import image2 from '@/assets/akassh_signature.jpg'
import SocialMediaDetails from '@/components/SocialMediaDetails'
import data from '@/utils/socialawareness_sections'
import FeatureSection from '@/components/FeatureSection'

const dmSans = DM_Sans({
  weight: '500',
  subsets: ['latin'],
})

export default function page() {
  return (

    <main className={`relative flex min-h-screen flex-col items-center mt-20 ${dmSans.className} overflow-x-hidden`}>
      <section className="flex flex-col md:flex-row items-center justify-center px-5 md:px-20">
        <div className="flex flex-col justify-center flex-1 md:gap-1">
          <span className="text-xl md:text-2xl font-normal text-center md:text-left text-neutral-700">यहाँ मिलेगी बस</span>
          <h1 className="text-3xl md:text-6xl font-bold text-center md:text-left text-neutral-700">Bekhauf Opinion</h1>
          <h2 className="text-lg md:text-2xl font-normal text-center md:text-left text-neutral-700">Kyuki Ab Kuch Nahi Chupega</h2>
          <Image src={image2} alt="Akassh ashok Gupta" width={400} height={400} className="w-8/12 md:w-5/12 mt-3 self-center md:self-start" />
        </div>
        <div className="flex flex-col items-center justify-center flex-1">
          <Image src={image} alt="Akassh ashok Gupta" width={1000} height={1000} className="w-full"  draggable={false} />
        </div>
      </section>
      <SocialMediaDetails />
      {
        Object.keys(data).map((key, index) => (
          <FeatureSection key={index} data={data[key]} backgroundColor={index%2 === 0 ? 'bg-stone-100' : 'bg-white'} reverse={index%2 === 0 ? false : true} />
        ))
      }
      </main>
  )
}