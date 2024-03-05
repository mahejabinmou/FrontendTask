const FeatureSection = () => {
  return (
    <div
      className="h-full max-w-[1240px] w-full px-[120px] mt-20 
    justify-between items-center"
    >
      <h1 className="text-center  mb-8 text-3xl font-bold">
        Collaborate without <br /> constraints
      </h1>
      <div
        className="grid grid-cols-1 md:grid-cols-3
       justify-around items-center gap-x-[160px]  "
      >
        <div>
          <h1 className="text-xl font-bold">Free forever</h1>
          <p className="mt-4 text-sm">
            Our free plan gives you unlimited team members, 3 boards, and 300+
            expert-made templates. Signing up with your work email lets you
            bring in your team faster. See our pricing plans for more features.
          </p>
        </div>

        <div>
          <h1 className="text-xl font-bold">Easy integrations</h1>
          <p className="mt-4 text-sm">
            Miro has 100+ powerful integrations with tools you already use like
            G Suite, Slack, and Jira, so your workflow is seamless. View the
            full list in our Marketplace .{" "}
          </p>
        </div>

        <div>
          <h1 className="text-xl font-bold">Security first</h1>
          <p className="mt-4 text-sm">
            We treat your data like you would — with the utmost care. We follow
            industry-leading security standards and give you tools to protect
            intellectual property. Learn more at our Trust Center .{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
