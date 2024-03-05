const WorkSection = () => {
  return (
    <div
      className="h-full max-w-[1240px] w-full px-[120px]
      grid grid-cols-12 justify-between items-center gap-x-[140px] "
    >
      <div className="col-span-4">
        <h1 className="text-3xl font-bold">Work together, wherever you work</h1>
        <p className="mt-4 text-sm text-left">
          Our free plan gives you unlimited team members, 3 boards, and 300+
          expert-made templates. Signing up with your work email lets you bring
          in your team faster. See our pricing plans for more features.
        </p>
      </div>

      <div className="col-span-7">
        <img src="src/assets/images/hybridwork.png" alt="" />
      </div>
    </div>
  );
};

export default WorkSection;
