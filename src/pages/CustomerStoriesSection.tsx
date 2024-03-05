import { ArrowRight } from "lucide-react";

const CustomerStoriesSection = () => {
  return (
    <div className="h-full max-w-[1240px] w-full px-[120px] flex flex-col items-center justify-center ">
      <h1 className="text-3xl font-bold text-center">
        Loved by the world's best teams
      </h1>

      <button className="flex items-center text-blue-500 mt-4">
        <span className="border-b border-blue-500">
          see all customer stories
        </span>
        <ArrowRight />
      </button>
    </div>
  );
};

export default CustomerStoriesSection;
