import { Input } from "@/components/ui/input";
import { Minus } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-blue-900">
      <div className=" h-full max-w-[1140px] w-full px-[120px] pt-16 pb-16">
        <div className="">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[250px]">
              <div className="flex-col-reverse">
                <div className="grid md:grid-cols-12 grid-cols-1  justify-between gap-12">
                  <div className="md:col-span-8">
                    <p className="text-white ">Scan. Detect. Remove.</p>
                    <div className="flex md:flex flex-wrap gap-4 m-2">
                      <img
                        src="https://i.ibb.co/2dfYPdT/svg-2.png"
                        alt=""
                        className="h-6 w-6"
                      />
                      <img
                        src="https://i.ibb.co/mcHY3jM/svg-3.png"
                        alt=""
                        className="h-6 w-6"
                      />
                      <img
                        src="https://i.ibb.co/2yH7CXD/svg-4.png"
                        alt=""
                        className="h-6 w-6"
                      />
                    </div>

                    <div className="grid md:grid-cols-12 grid-cols-1 gap-4 text-white ">
                      <p className=" text-xs md:col-span-6">
                        <span className="border-b border-white">
                          Privacy Policy
                        </span>
                      </p>
                      <p className="border-b border-white text-xs md:col-span-6">
                        <span className="border-b border-white">
                          Terms of Service
                        </span>
                      </p>
                    </div>
                    <p className="text-xs w-full mt-8 text-white">
                      Copyright © 2022 Certo Software Limited | Registered in
                      England & Wales No. 10072356
                    </p>
                    <p className="text-sm mt-2 text-white">
                      Designed & developed by{" "}
                      <span className="border-b border-white ">
                        Bigger Picture
                      </span>
                    </p>
                  </div>

                  <div className="text-white md:col-span-4">
                    <h1 className="border-b border-white  text-2xl">Miro.</h1>
                    <ul className="text-yellow-200 pt-10">
                      <li className="flex items-center">
                        <Minus />
                        iPhone
                      </li>
                      <li className="flex items-center pt-2">
                        <Minus />
                        Android
                      </li>
                      <li className="flex items-center  pt-2">
                        <Minus />
                        Help
                      </li>
                      <li className="flex items-center  pt-2">
                        <Minus />
                        About
                      </li>
                      <li className="flex items-center  pt-2">
                        <Minus />
                        Insights
                      </li>
                    </ul>
                  </div>
                </div>

                <p className="mt-20 text-white text-sm">
                  Apple, the Apple logo, and iPhone are trademarks of Apple
                  Inc., registered in the U.S. and other countries. App Store is
                  a service mark of Apple Inc. Android, Google Play and the
                  Google Play logo are trademarks of Google LLC.
                </p>
              </div>

              <div className=" bg-yellow-500 rounded-3xl pt-4 px-4 w-max-[130px] h-[220px]">
                <h1 className="font-bold ">Sign up to our newsletter</h1>
                <p className="mt-4">
                  Receive the latest mobile security news, exclusive discounts &
                  offers straight to your inbox!
                </p>

                <Input
                  type="email"
                  placeholder="Email address"
                  className="mt-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
