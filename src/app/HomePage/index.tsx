import { Button } from "@/components/ui/button";
import Image from "next/image";

const HomePage = () => {
  return (
    <section className="font-fira container mx-auto flex flex-col p-5">
      <div className="flex w-full justify-center items-center">
        <div className="flex w-full text-white flex-col gap-5">
          <h1 className="~text-lg/4xl ">
            Elias is a <span className="text-purple-400">web designer</span> and
            <span className="text-purple-400"> front-end developer</span>
          </h1>
          <p className="text-gray-400 ~text-xs/lg pt-2 max-w-[550px]">
            He crafts responsive websites where technologies meet creativity
          </p>
          <Button
            className="rounded-none border border-purple-400 hover:bg-purple-400 w-fit ~px-2/5 ~text-xs/lg "
            variant="ghost"
          >
            Contact Me !!
          </Button>
        </div>

        <div className="w-full flex flex-col items-center">
          <Image
            src="/personal-image.png"
            alt="Personal image"
            width={469}
            height={386}
          />
          <p className="text-gray-400 ~text-xs/lg flex items-center gap-2 border border-gray-600 w-full max-w-[402px]">
            <span className="w-4 h-4 bg-purple-400"></span>
            Currently working on <span className="text-purple-400">Portfolio</span>
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center text-gray-300 p-20">
        <div className="text-3xl flex flex-col">
          <div className="relative border border-gray-600 p-5">
            <Image
              src="/icons/quotation-mark.png"
              alt="quotation-mark.png"
              width={36}
              height={20}
              className="absolute -top-3 left-2 "
            />
            <p>With great power comes great electricity bill</p>
          </div>
          <div className="relative w-full flex justify-end border border-gray-600 p-5">
            <Image
              src="/icons/quotation-mark.png"
              alt="quotation-mark.png"
              width={36}
              height={20}
              className="absolute -top-3 right-2 "
            />
            <p>With great power</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export { HomePage };
