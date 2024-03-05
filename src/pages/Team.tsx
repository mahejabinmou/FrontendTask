const Team = () => {
  return (
    <div className="h-full max-w-[1240px] w-full px-[120px] mt-20 mb-12 ">
      <div
        className="grid grid-cols-1 md:grid-cols-3 place-content-center
     justify-around items-center md:gap-x-[160px] md:gap-8 "
      >
        <div className="">
          <h1 className="text-4xl">
            <span className="font-bold">vm</span>ware
          </h1>
          <p className="mt-4 text-sm">
            “When the pandemic hit, those of us who thrive on in-person
            collaboration were worried that our creativity and productivity
            would suffer. Miro was the perfect tool to help us with
            collaboration, whiteboarding, and retrospectives while remote.”
          </p>
          <div className="flex gap-2 mt-2">
            <img src="src/assets/images/div.png" alt="" className="w-12 h-12" />
            <div className="grid grid-cols-1">
              <p className="text-sm text-gray-400">Roxanne Mustafa</p>
              <p className="text-sm text-gray-400">
                Design Team Lead at VMware
              </p>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-4xl font-bold">DocuSign</h1>
          <p className="mt-4 text-sm">
            “Miro helps solve one of the major gaps in product design: how to
            manage tasks across product designers whose projects are in
            different tools.”
          </p>

          <div className="flex gap-2 md:mt-14 mt-2">
            <img
              src="src/assets/images/div (1).png"
              alt=""
              className="w-12 h-12"
            />
            <div className="grid grid-cols-1">
              <p className="text-sm text-gray-400">Jane Ashley</p>
              <p className="text-sm text-gray-400">
                Head of Design at DocuSign
              </p>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-4xl font-bold ">frog</h1>
          <p className="mt-4 text-sm">
            “As we used Miro we moved from skepticism to belief to innovation,
            and now we have a tool that’s at the core of what we do and will
            continue to extend into the future.”
          </p>

          <div className="flex gap-2 md:mt-14 mt-2">
            <img
              src="src/assets/images/div (2).png"
              alt=""
              className="w-12 h-12"
            />
            <div className="grid grid-cols-1">
              <p className="text-sm text-gray-400">Laura Baird</p>
              <p className="text-sm text-gray-400">
                Associate Design Director at frog
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
