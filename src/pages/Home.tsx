import Banner from "./Banner";
import CustomerStoriesSection from "./CustomerStoriesSection";
import FeatureSection from "./FeatureSection";
import LearnMoreSection from "./LearnMoreSection";
import ReportSection from "./ReportSection";
import Team from "./Team";
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
      <Team />
    </div>
  );
};

export default Home;
