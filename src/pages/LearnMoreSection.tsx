import { ArrowRight } from "lucide-react";

const LearnMoreSection = () => {
  return (
    <div
      className="h-full max-w-[1240px] w-full px-[120px]
      grid grid-cols-12 justify-between items-center gap-x-[100px] "
    >
      <div className="col-span-6">
        <img
          src="src/assets/images/M3_integrations_all_integrations.png"
          alt=""
        />
      </div>

      <div className="col-span-6">
        <h1 className="text-3xl font-bold">
          Connect your tools, close your tabs
        </h1>
        <p className="mt-4 text-sm text-left">
          Whether you want to edit your Google Docs, resolve Jira issues, or
          collaborate over Zoom, Miro has 100+ integrations with tools you
          already use and love.
        </p>
        <p className="flex items-center text-blue-500 mt-4">
          <span className="border-b border-blue-500">Learn more</span>
          <ArrowRight />
        </p>
      </div>
    </div>
  );
};

export default LearnMoreSection;
