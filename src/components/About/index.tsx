'use client'
import Image from 'next/image'
import { Title } from '../Title'
import { Button } from '@/components/ui/button'

const AboutMe = () => {

  return (
    <section className="container mx-auto flex ~gap-4/14 font-fira items-start justify-between ~py-2/10 " id="about-me">
      <div className=''>
        <div className="~text-lg/3xl text-white items-center">
          <Title
            width={60}
            title="about-me"
          ></Title>
        </div>
        <div className='flex gap-4 max-w-[1300px] py-5'>
          <div className='w-full flex  text-gray-400 ~text-sm/lg gap-4 px-4 flex-col'>
            <p>Hello, i’m Said Mazouz!</p>
            <p>I’m a self-taught front-end developer based in khouribga, Morroco. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. </p>
            <p>Transforming my creativity and knowledge into websites has been my passion for over a year. Combined with my strong problem-solving skills, I always strive to learn about the newest technologies and frameworks.</p>
            <Button
              className="rounded-none border border-purple-400 hover:bg-purple-400 w-fit ~px-2/5 ~text-xs/lg "
              variant="ghost"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Said-Mazouz-cv.pdf";
                link.download = "said-mazouz-cv.pdf";
                link.click()
              }}
            >
             &lt; Download My Cv &gt;
            </Button>
          </div>
        </div>
      </div>
      <div className='w-full  sm:flex justify-end hidden'>
        <Image
          src="/personal-img.png"
          alt="Personal image"
          width={343}
          height={386}
        />
      </div>
    </section>
  )
}
export { AboutMe }
