import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import DealOfTheWeek from "../DealOfTheWeek/DealOfTheWeek";
import DeviceFeatures from "../DeviceFeatures/DeviceFeatures";
import LatestTrend from "../LatestTrend/LatestTrend";
import Recommended from "../Recommended/Recommended";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <DealOfTheWeek />
      <DeviceFeatures />
      <Recommended />
      <LatestTrend />
      <Categories />
    </div>
  );
};

export default Home;
