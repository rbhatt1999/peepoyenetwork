'use client'
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import Link2 from 'next/link'
import PaymentSection from './PaymentSection'
import { Sora } from 'next/font/google'
import style from '@/styles/AcceleratorInd.module.css'
import { useInView } from 'react-intersection-observer'
import { AiFillCloseCircle } from 'react-icons/ai'
import { BsCheckLg } from 'react-icons/bs'
import WhoIsThisFor from './WhoIsThisFor'
import YoutubeneurStruction from './YoutubeneurStruction'
import Testimonials from './Testimonials'
import FAQ from '@/components/FAQ'
import parse from 'html-react-parser';
import url from '@/utils/url'
import AccRibbonBonus from './AccRibbonBonus'
import { FaPlay } from 'react-icons/fa'
import VideoPlayer from './VideoPlayer'
import FunnelFooter from '../../FunnelFooter'

const sora = Sora({
  weight: ['100', '300', '400', '700'],
  subsets: ['latin'],
})

export default function AcceleratorInd({ loc, data }) {
  const [videoPlayervisible, setVideoPlayervisible] = React.useState(false)

  const firstSectionData = [
    {
      image: 'https://i.ibb.co/VLzWq14/1.png',
      p1: '21 Modules in 3 Days',
      p2: 'to learn everything about youtube',
    },
    {
      image: 'https://i.ibb.co/sQqgGHN/2.png',
      p1: 'A Copy-Paste Method',
      p2: 'to strategize your youtube growth',
    }
    ,
    {
      image: 'https://i.ibb.co/hBBNXCq/3.png',
      p1: 'Lifetime Access',
      p2: 'to the course to learn and implement ',
    }
    ,
    {
      image: 'https://i.ibb.co/sW1LcLQ/4.png',
      p1: 'Weekly Coffee Chats',
      p2: 'to solve all your doubts on a live call.',
    }
  ]

  const faqData = [
    {
      question: 'What language are the courses conducted in?',
      answer: 'All our courses are conducted in English, ensuring that learners from around the world can easily access and benefit from the valuable content provided by Youtubeneur Community.',
    },
    {
      question: 'What are the schedules of the Weekly Coffee Chats?',
      answer: `We provide a clear and up-to-date schedule for our weekly coffee chats in the Youtubeneur community. These interactive sessions are designed to foster networking, knowledge sharing, clear doubts and collaboration among members.`,
    },
    {
      question: `What if I can't attend a coffee chat due to emergencies?`,
      answer: `No worries! We understand that life can be unpredictable. In case you miss a live coffee chat, we have you covered. All coffee chat sessions are recorded and archived for the benefit of Youtubeneur Skool members. You can access these archives at your convenience to catch up on any missed sessions.`,
    }
  ]

  return (
    <div className='flex flex-col w-full'>
      <div className="flex flex-col w-full justify-center py-3 items-center bg-neutral-800 overflow-hidden">
        <motion.h1 className={`text-base md:text-2xl text-center px-2 text-white font-light ${sora.className}`}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'spring', bounce: 0.5 }}>
          {data ? parse(data.query.message) : parse("⚠️Do you know that <span className='italic font-medium'>99 out of 100 people</span> start and grow in YouTube the wrong way?")}
        </motion.h1>
      </div>
      <section className="relative flex flex-col py-8 px-5 md:px-40">
        <img src="https://i.ibb.co/jJ3gDDP/texture-BG.png" alt="texture" className="z-0 absolute top-0 left-0 w-full h-full object-cover opacity-20" />
        <div className="flex flex-col z-10 md:gap-6 gap-5">
          <div className="flex flex-col items-center gap-10">
            <motion.h2 className={`text-base ${sora.className} md:text-2xl px-2 md:px-5 py-2 font-light text-white text-center shadow-md rounded-md ${style.bgRed}`}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, type: 'spring', bounce: 0.5, delay: 0.5 }}>
              Become one of those <span className='font-bold'>1% successful YouTubers</span> and Influencers before it&apos;s TOO LATE!
            </motion.h2>
          </div>
          <div className="flex flex-col items-center gap-5 md:gap-10">
            <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-10">
              <motion.div className="flex flex-col justify-center gap-5 md:gap-12 flex-1 order-2 md:order-1"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, type: 'spring', bounce: 0.5, delay: 1 }}
              >
                <p className={`text-2xl text-center md:text-left md:text-5xl select-none text-white font-bold ${style.headlineLineHeight} ${sora.className}`}
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, type: 'spring', bounce: 0.5, delay: 1 }}>
                  Accelerate your online growth strategy using <br /> <span className={`${style.textRed} font-bold ${style.lineBg}`}>YouTube in 3 Days</span>
                </p>
                <div className="flex flex-col md:flex-row items-center md:items-stretch flex-wrap gap-5">
                  {
                    firstSectionData.map((item, index) => (
                      <div key={index} className={`flex flex-row w-10/12 md:w-5/12 items-center gap-2 bg-neutral-800/80 text-white px-5 py-1 rounded-md hover:scale-105 shadow-md drop-shadow-md cursor-pointer select-none ${style.hoverShadow}`}>
                        <div className="flex flex-col gap-1">
                          <img src={item.image} alt={index + 1} className='w-auto h-10' />
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className='text-base'>{item.p1}</span>
                        </div>
                      </div>
                    ))
                  }
                </div>
                <div className="flex flex-col gap-2 w-full md:w-10/12">
                  <Link activeClass='activestatus' spy={true} to='paymentPage' smooth={true} duration={1000} offset={-150} className={`flex flex-col items-center cursor-pointer ${style.bgRed} rounded-lg px-2 py-1 md:px-5 md:py-3 hover:scale-105 shadow-sm drop-shadow-sm`}>
                    <span className='text-white text-xl md:text-3xl font-medium'>Book Now at 50% discount</span>
                    <span className='text-white text-center text-sm md:text-base font-light'>and reserve your spot at a discounted price!</span>
                  </Link>
                  {
                    data && (
                      <Link2 className='self-center text-xl text-white hover:underline' href={`${url}/${data.no.query}?product=${data.no.product}`} >
                        No, I don't want this offer
                      </Link2>
                    )
                  }
                </div>
              </motion.div>
              <motion.div className={`flex order-1 md:order-2 flex-col flex-1 items-center`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, type: 'spring', bounce: 0.5, delay: 1 }}
              >
                <img src='https://i.ibb.co/JRjfHhr/accelerator.png' alt="Foundation accelerator" className='w-8/12' />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <div className={`flex flex-col relative`}>
        <img src="https://i.ibb.co/PWVzSQt/texture-BG3.jpg" alt="texture" className="z-0 absolute top-0 left-0 w-full h-full object-cover opacity-10" />
        <section className="z-10 flex flex-col items-center py-10 px-5 md:px-40 gap-5 bg-white/5">
          <div className={`flex flex-col gap-10 items-center`}>
            <div className={`flex flex-col gap-2 ${sora.className}`}>
              <h2 className={`text-xl md:text-4xl text-center ${style.redBgRounded} text-white font-bold`}>
                Watch Trailer
              </h2>
            </div>
            <div className="flex relative flex-col justify-center items-center">
              <img src="https://i.ibb.co/YQbxPjc/video-Thumbnail.png" alt="video thumbnail" className='w-full md:w-10/12 rounded-md shadow-md drop-shadow-md' />
              <div className={`${style.borderPulseAnimation} absolute w-16 h-16 m-auto left-0 right-0 top-0 bottom-0 flex justify-center items-center rounded-full`}>
                <div className="flex flex-col w-full h-full justify-center cursor-pointer items-center bg-gradient-to-r from-red-700 to-red-800 rounded-full hover:scale-105" onClick={() => setVideoPlayervisible(true)}>
                  <FaPlay className='text-white text-3xl' />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full md:w-8/12">
              <Link activeClass='activestatus' spy={true} to='paymentPage' smooth={true} duration={1000} offset={-150} className={`flex flex-col items-center cursor-pointer ${style.bgRed} rounded-lg px-2 py-1 md:px-5 md:py-3 hover:scale-105 shadow-sm drop-shadow-sm`}>
                <span className='text-white text-xl md:text-3xl font-medium'>Book Now at 50% discount</span>
                <span className='text-white text-center text-sm md:text-base font-light'>and reserve your spot at a discounted price!</span>
              </Link>
              {
                data && (
                  <Link2 className='self-center text-xl text-white hover:underline' href={`${url}/${data.no.query}?product=${data.no.product}`} >
                    No, I don't want this offer
                  </Link2>
                )
              }
            </div>
          </div>
        </section>
        <section className="z-10 flex flex-col py-10 px-5 md:px-40 gap-5">
          <div className={`flex flex-col gap-2 ${sora.className}`}>
            <h2 className='text-xl md:text-3xl text-center text-white font-bold'>
              SPEAK WITH YOUR EXPERT- <span className={`${style.textRed}`}>AKASSH ASHOK GUPTA</span>
            </h2>
            <p className='text-sm md:text-lg text-center text-white'>
              Weekly Live Coffee Chats with Akassh + Free Access to all the recorded sessions
            </p>
          </div>
          <div className="flex md:flex-row flex-col gap-5 items-center">
            <div className='flex flex-col flex-1 items-center'>
              <img src="https://images.clickfunnels.com/cdn-cgi/image/f=auto,q=80/https://statics.myclickfunnels.com/image/1094198/file/670d93e0195cc8ddcc082993e48b1810.png" alt="Akassh Ashok Gupta" className='w-full md:w-10/12' />
            </div>
            <div className='flex flex-col flex-1 gap-5 md:gap-6'>
              <h3 className={`text-base md:text-xl text-center md:text-left text-white font-bold ${sora.className}`}>
                Let Akassh answer your biggest and smallest &quot;YouTube Growth&quot; Challenges/Doubts/Questions.
              </h3>
              <div className="flex flex-col gap-5">
                <div className="flex flex-row gap-2">
                  <BsCheckLg className={`${style.textRed} text-2xl w-5 md:text-4xl md:w-10`} />
                  <span className=' flex-1 text-sm md:text-lg text-white'>Need help in applying the course in your unique youtube niche?<br /> <span className='font-semibold'> Ask Akassh directly!</span></span>
                </div>
                <div className="flex flex-row gap-2">
                  <BsCheckLg className={`${style.textRed} text-2xl w-5 md:text-4xl md:w-10`} />
                  <span className=' flex-1 text-sm md:text-lg text-white'>Feeling alone in this struggle? <br /><span className='font-semibold'> Celebrate your wins and get rewarded in these calls.</span></span>
                </div>
                <div className="flex flex-row gap-2">
                  <BsCheckLg className={`${style.textRed} text-2xl w-5 md:text-4xl md:w-10`} />
                  <span className=' flex-1 text-sm md:text-lg text-white'>Not able to stay disciplined?<br /><span className='font-semibold'> Get your accountability partner who will always keep a check on you.</span></span>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full md:w-8/12">
                <Link activeClass='activestatus' spy={true} to='paymentPage' smooth={true} duration={1000} offset={-150} className={`flex flex-col items-center cursor-pointer ${style.bgRed} rounded-lg px-2 py-1 md:px-5 md:py-3 hover:scale-105 shadow-sm drop-shadow-sm`}>
                  <span className='text-white text-xl md:text-3xl font-medium'>Book Now at 50% discount</span>
                  <span className='text-white text-center text-sm md:text-base font-light'>and reserve your spot at a discounted price!</span>
                </Link>
                {
                  data && (
                    <Link2 className='self-center text-xl text-white hover:underline' href={`${url}/${data.no.query}?product=${data.no.product}`} >
                      No, I don't want this offer
                    </Link2>
                  )
                }
              </div>
            </div>
          </div>
        </section>
        <section className="z-10 flex flex-col py-10 px-5 md:px-40 gap-5 bg-white/5">
          <div className={`flex flex-col gap-10 items-center`}>
            <div className={`flex flex-col gap-2 ${sora.className}`}>
              <h2 className={`text-xl md:text-4xl text-center text-white font-bold`}>
                What all will you get?
              </h2>
            </div>
            <div className="flex flex-col gap-12 w-full">
              <AccRibbonBonus data={['community2', 'donot', 'scriptSecret',]} loc={loc} />
              <AccRibbonBonus data={['acc1', 'acc2', 'acc3',]} loc={loc} />
              <AccRibbonBonus data={['acc4', 'acc5', 'acc6',]} loc={loc} />
              <div className="flex flex-col self-center gap-2 w-full md:w-8/12">
                <Link activeClass='activestatus' spy={true} to='paymentPage' smooth={true} duration={1000} offset={-150} className={`flex flex-col items-center cursor-pointer ${style.bgRed} rounded-lg px-2 py-1 md:px-5 md:py-3 hover:scale-105 shadow-sm drop-shadow-sm`}>
                  <span className='text-white text-xl md:text-3xl font-medium'>Book Now at 50% discount</span>
                  <span className='text-white text-center text-sm md:text-base font-light'>and reserve your spot at a discounted price!</span>
                </Link>
                {
                  data && (
                    <Link2 className='self-center text-xl text-white hover:underline' href={`${url}/${data.no.query}?product=${data.no.product}`} >
                      No, I don't want this offer
                    </Link2>
                  )
                }
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className={`flex flex-col relative`}>
        <img src="https://i.ibb.co/PWVzSQt/texture-BG3.jpg" alt="texture" className="z-0 absolute top-0 left-0 w-full h-full object-cover opacity-10" />
        <section className="z-10 flex flex-col py-10 px-5 md:px-40 gap-5 md:gap-14">
          <div className={`flex flex-col items-center gap-2 ${sora.className}`}>
            <h2 className={`text-sm md:text-xl ${style.textRed} font-medium`}>
              <span className='font-semibold'>Meet Your Coach, Guide, and Mentor</span>
            </h2>
            <h3 className={`text-xl md:text-5xl text-white font-medium`}>
              Akassh Ashok Gupta
            </h3>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            <div className={`flex flex-col w-full md:w-6/12 rounded-xl`}>
              <img src="https://i.ibb.co/c1qy6Mc/akassh-3.png" alt="Akassh Ashok Gupta" className='rounded-xl shadow-lg drop-shadow-lg' />
            </div>
            <div className="flex flex-col flex-1">
              <p className={`text-base md:text-xl text-white font-normal`}>
                Hey there, I'm Akassh Ashok Gupta! Thanks for stopping by to learn more about me. I'm excited to share how I can help you navigate the world of YouTube and turn it into a powerhouse for generating multiple revenue streams and business leads.<br /><br />With over <span className={`${style.textRed} font-bold`}>19 years of experience in the corporate world</span> and more than <span className={`${style.textRed} font-bold`}>5 years dedicated to mastering the art of YouTube</span>, I bring a unique blend of skills to the table. My background as a business consultant, coupled with my status as an influencer, sets me apart as the ideal mentor for this journey.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            <div className={`flex flex-col w-full md:w-6/12 rounded-xl order-1 md:order-2`}>
              <img src="https://i.ibb.co/Tt0R4KB/akassh-2.png" alt="Akassh Ashok Gupta" className='rounded-xl shadow-lg drop-shadow-lg' />
            </div>
            <div className="flex flex-col flex-1 order-2 md:order-1">
              <p className={`text-base md:text-xl text-white font-normal`}>
                Imagine this: in less than a year after leaving a high-profile leadership position, I managed to build an impressive online presence with over <span className={`${style.textRed} font-bold`}>1 million followers</span> across various social media platforms. This success is a result of my distinctive approach to consulting and influence, all fueled by the vast experience I gained from mentoring some of the <span className={`${style.textRed} font-bold`}>world's biggest brands.</span><br /><br />What sets me apart further are my <span className={`${style.textRed} font-bold`}>incredible collaborations with legends</span> like Sonu Nigam and Shruti Haasan. Additionally, I've gained the admiration of top YouTube influencers including Ashish Chanchlani, Harsh Beniwal, Triggered Insaan, Sourav Joshi, and many more.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            <div className={`flex flex-col w-full md:w-6/12 rounded-xl`}>
              <img src="https://i.ibb.co/wsTGfLb/akassh-1.png" alt="Akassh Ashok Gupta" className='rounded-xl shadow-lg drop-shadow-lg' />
            </div>
            <div className="flex flex-col flex-1">
              <p className={`text-base md:text-xl text-white font-normal`}>
              I believe in the power of YouTube not just as a platform for entertainment but as a strategic tool for business growth.<br/><br/>Let's embark on this exciting journey together, and <span className={`${style.textRed} font-bold`}>I'll guide you every step of the way in leveraging YouTube to its fullest potential.</span><br/><br/>Whether you're looking to diversify your revenue streams or attract valuable business leads, I've got the expertise to make it happen. Let's make your YouTube venture a resounding success!
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5 self-center w-full md:w-8/12">
            <Link activeClass='activestatus' spy={true} to='paymentPage' smooth={true} duration={1000} offset={-150} className={`flex flex-col items-center cursor-pointer ${style.bgRed} rounded-lg px-2 py-1 md:px-5 md:py-3 hover:scale-105 shadow-sm drop-shadow-sm`}>
              <span className='text-white text-xl md:text-3xl font-medium'>Book Now at 50% discount</span>
              <span className='text-white text-center text-sm md:text-base font-light'>and reserve your spot at a discounted price!</span>
            </Link>
            {
              data && (
                <Link2 className='self-center text-xl text-white hover:underline' href={`${url}/${data.no.query}?product=${data.no.product}`} >
                  No, I don't want this offer
                </Link2>
              )
            }
          </div>
        </section>
        <section className="z-10 flex flex-col py-10 px-5 md:px-40 gap-5 md:gap-10 bg-white/5">
          <div className={`flex flex-col gap-2 ${sora.className}`}>
            <h2 className={`text-xl md:text-4xl text-center text-white font-bold`}>
              Who must take this Course?
            </h2>
          </div>
          <div className="flex flex-col">
            <WhoIsThisFor />
          </div>
          <div className="flex flex-col gap-5 self-center w-full md:w-8/12">
            <Link activeClass='activestatus' spy={true} to='paymentPage' smooth={true} duration={1000} offset={-150} className={`flex flex-col items-center cursor-pointer ${style.bgRed} rounded-lg px-2 py-1 md:px-5 md:py-3 hover:scale-105 shadow-sm drop-shadow-sm`}>
              <span className='text-white text-xl md:text-3xl font-medium'>Book Now at 50% discount</span>
              <span className='text-white text-center text-sm md:text-base font-light'>and reserve your spot at a discounted price!</span>
            </Link>
            {
              data && (
                <Link2 className='self-center text-xl text-white hover:underline' href={`${url}/${data.no.query}?product=${data.no.product}`} >
                  No, I don't want this offer
                </Link2>
              )
            }
          </div>
        </section>
        <section className="z-10 flex flex-col pt-10 px-5 md:px-40 gap-5 md:gap-10">
          <div className={`flex flex-col gap-2 ${sora.className}`}>
            <h2 className='text-xl md:text-3xl text-center text-red-500/90 font-bold'>
              YouTubeneur Accelerator Course Structure
            </h2>
          </div>
          <YoutubeneurStruction />
        </section>
      </div>
      <section className="relative flex flex-col py-20 px-5 md:px-40 gap-5 bg-white/5">
        <img src="https://i.ibb.co/jJ3gDDP/texture-BG.png" alt="texture" className="z-0 absolute top-0 left-0 w-full h-full object-cover opacity-20" />
        <div className={`z-10 flex flex-col gap-2 ${sora.className}`}>
          <PaymentSection loc={loc} data={data} />
        </div>
      </section>
      <div className={`flex flex-col relative`}>
        <img src="https://i.ibb.co/PWVzSQt/texture-BG3.jpg" alt="texture" className="z-0 absolute top-0 left-0 w-full h-full object-cover opacity-10" />
        <section className="z-10 flex flex-col py-10 px-5 md:px-40 gap-5 md:gap-10">
          <div className={`flex flex-col gap-10 ${sora.className}`}>
            <h2 className='text-xl md:text-3xl text-center text-red-500/90 font-bold'>
              Featured Testimonials From The Community & Clients
            </h2>
            <div className="flex flex-col">
              <Testimonials />
            </div>
          </div>
        </section>
        <section className="z-10 flex flex-col py-10 px-5 md:px-40 gap-5 md:gap-10 bg-white/5">
          <div className={`flex flex-col gap-2 ${sora.className}`}>
            <h2 className={`text-xl md:text-3xl text-center text-white font-bold`}>
              Frequently Asked Questions
            </h2>
          </div>
          <div className={`flex w-full md:w-8/12 self-center flex-col ${sora.className}`}>
            <FAQ data={faqData} bgcolor={{ question: 'bg-white/5 border-white border-2', answer: 'bg-white/10' }} textSize={{ question: 'text-base md:text-xl text-white', answer: 'text-sm md:text-base text-white' }} />
          </div>
        </section>
      </div>
      <FunnelFooter />
      {
        videoPlayervisible && <VideoPlayer setVideoPlayervisible={setVideoPlayervisible} />
      }
    </div >
  )
}
