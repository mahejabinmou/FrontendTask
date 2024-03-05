import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <div className="bg-blue-900 h-full max-w-[1140px] w-full px-[120px] pt-16 pb-16">
      <div className="">
        <div>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex-col-reverse">
              <div className="flex gap-8">
                <div>
                  <p className="text-white">Scan. Detect. Remove.</p>
                  <div className="flex gap-4">
                    <img
                      src="src/assets/images/svg (2).png"
                      alt=""
                      className="h-6 w-6"
                    />
                    <img
                      src="src/assets/images/svg (3).png"
                      alt=""
                      className="h-6 w-6"
                    />
                    <img
                      src="src/assets/images/svg (4).png"
                      alt=""
                      className="h-6 w-6"
                    />
                  </div>

                  <div className="flex gap-4 text-white ">
                    <p className="border-b border-white text-sm">
                      Privacy Policy
                    </p>
                    <p className="border-b border-white text-sm">
                      Terms of Service
                    </p>
                  </div>
                  <p className="text-sm mt-8 text-white">
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

                <div className="text-white">
                  <h1 className="border-b border-white  text-2xl">Miro.</h1>
                  <ul>
                    <li>iPhone</li>
                    <li>Android</li>
                    <li>Help</li>
                    <li>About</li>
                    <li>Insights</li>
                  </ul>
                </div>
              </div>

              <p className="mt-20 text-white text-sm">
                Apple, the Apple logo, and iPhone are trademarks of Apple Inc.,
                registered in the U.S. and other countries. App Store is a
                service mark of Apple Inc. Android, Google Play and the Google
                Play logo are trademarks of Google LLC.
              </p>
            </div>

            <div className=" bg-yellow-600 rounded-3xl p-4  w-max-[130px] h-[230px]">
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
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
