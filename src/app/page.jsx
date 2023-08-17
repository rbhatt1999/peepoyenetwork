import { DM_Sans } from 'next/font/google'
import FeatureSection from '@/components/FeatureSection';
import Experience from '@/components/Experience';
import data from '@/utils/home_sections';

export const metadata = {
  title: 'Enabling Awareness & Happiness Via Content & Courses - Peepoye',
  description: 'With Peepoye, Discover the path to awareness and happiness through our transformative content, empowering courses, and engaging masterminds.',
  image: 'https://i.postimg.cc/pXPLWrYr/akassh-signature.png',
  url: 'https://peepoye.com',
  type: 'website',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://peepoye.com',
    title: 'Enabling Awareness & Happiness Via Content & Courses - Peepoye',
    description: 'With Peepoye, Discover the path to awareness and happiness through our transformative content, empowering courses, and engaging masterminds.',
    image: 'https://i.postimg.cc/pXPLWrYr/akassh-signature.png',
    site_name: 'Peepoye',
  },
  canonical: 'https://peepoye.com',
};


const dmSans = DM_Sans({
  weight: '500',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <main className={`relative flex min-h-screen flex-col items-center mt-20 ${dmSans.className} overflow-x-hidden`}>
      <section className="flex flex-col md:flex-row items-center justify-center px-5 md:px-20">
        <div className="flex flex-col justify-center flex-1 md:gap-2">
          <h1 className="text-3xl md:text-6xl font-bold text-center md:text-left text-neutral-700 md:mb-3">I Breathe Passion</h1>
          <p className="text-md md:text-2xl text-center md:text-left text-neutral-700">Enabling Awareness & Happiness Via</p>
          <p className="text-md md:text-2xl text-center md:text-left text-neutral-700">Content, Courses & Masterminds</p>
          <img src="https://i.postimg.cc/W1qXYNFp/akassh-signature.jpg" alt="Akassh ashok Gupta" className="w-8/12 md:w-5/12 mt-3 self-center md:self-start" />
        </div>
        <div className="flex flex-col items-center justify-center flex-1">
          <img src="https://i.postimg.cc/HW9ThHDg/akasshashokgupta.webp" alt="Akassh ashok Gupta" className="w-full"  draggable={false} />
        </div>
      </section>
      <Experience />
      {
        Object.keys(data).map((key, index) => (
          <FeatureSection key={index} data={data[key]} backgroundColor={index%2 === 0 ? 'bg-stone-100' : 'bg-white'} reverse={index%2 === 0 ? false : true} />
        ))
      }
    </main>
  )
}
