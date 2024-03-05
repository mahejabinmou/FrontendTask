import Banner from "./Banner";
import CustomerStoriesSection from "./CustomerStoriesSection";
import FeatureSection from "./FeatureSection";
import LearnMoreSection from "./LearnMoreSection";
import ReportSection from "./ReportSection";
import TrustedSection from "./TrustedSection";
import WorkSection from "./WorkSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <TrustedSection />
      <FeatureSection />
      <WorkSection />
      <LearnMoreSection />
      <ReportSection />
      <CustomerStoriesSection />
    </div>
  );
};

export default Home;
