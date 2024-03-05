const TrustedSection = () => {
  return (
    <div className="h-full max-w-[1140px] w-full px-[120px] mt-20 ">
      <h1 className="text-center  mb-8">Trusted by 45M+ users</h1>
      <div
        className="grid grid-cols-3 md:grid-cols-5
           justify-between items-center gap-4 md:gap-x-[104px]"
      >
        <img src="src/assets/images/Walmart_Index_Only.svg.png" alt="" />
        <img src="src/assets/images/cisco.svg.png" alt="" />
        <img src="src/assets/images/Volvo_Index_Only.svg.png" alt="" />
        <img src="src/assets/images/deloitte.svg.png" alt="" />
        <img src="src/assets/images/okta.svg.png" alt="" />
      </div>
    </div>
  );
};

export default TrustedSection;
