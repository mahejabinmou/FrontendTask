import { Button } from "@/components/ui/button";
import { ArrowRight, StarHalf, StarIcon } from "lucide-react";

const Banner = () => {
  return (
    <div
      className="h-full max-w-[1140px] w-full px-[120px]
      grid md:grid-cols-12 justify-between items-center   gap-x-[104px]"
    >
      <div className="md:col-span-5 mt-4">
        <h1 className="font-bold md:text-5xl text-2xl">
          Take ideas from better to best
        </h1>
        <p className="mt-4">
          Miro is your team's visual platform to connect, collaborate, and
          create — together.
        </p>
        <div className="mt-4">
          <button className=" rounded-full w-full border border-slate-400 p-2  ">
            Enter your work email
          </button>
        </div>
        <div className="mt-2 ">
          <Button className="bg-blue-500 rounded-full  w-full ">
            Sign up free <ArrowRight />
          </Button>
          <p className="text-sm text-slate-400">
            collaborate with your team within a minutes
          </p>
        </div>

        <div className="bg-slate-100 mt-8 grid md:grid-cols-2 place-content-center items-center justify-between p-4 rounded-xl">
          <div className="grid grid-cols-1">
            <div className="flex md:flex items-center">
              <StarIcon className="text-yellow-500 fill-current h-3 w-3" />
              <StarIcon className="text-yellow-500 fill-current h-3 w-3" />
              <StarIcon className="text-yellow-500 fill-current h-3 w-3" />
              <StarIcon className="text-yellow-500 fill-current h-3 w-3" />
              <StarIcon className="text-yellow-500 fill-current h-3 w-3" />
              <StarHalf className="text-yellow-500 fill-current h-3 w-3" />
            </div>
            <p className="text-sm font-bold">Based on 5149+ reviews:</p>
          </div>

          <div className="flex items-center gap-2">
            <img src="https://i.ibb.co/hVWxX1r/Frame.png" alt="" />
            <img src="https://i.ibb.co/wgZ752s/svg.png" alt="" />
            <img src="https://i.ibb.co/4tKfyk3/svg-1.png" alt="" />
          </div>
        </div>
      </div>

      <div className="md:col-span-7 mt-16">
        <img
          src="https://i.ibb.co/QPdwJS8/headerimage-without-text.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
