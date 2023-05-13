import Banner from "../components/Banner/Banner";
import GetStarted from "../components/GetStarted/GetStarted";
import InstantWithDraws from "../components/InstantWithDraws/InstantWithDraws";
import Numbers from "../components/Numbers/Numbers";
import TradingStratigy from "../components/TradingStrategy/TradingStratigy";

export default function Home() {
  return (
    <div className="wrapper">
      <Banner />
      <InstantWithDraws />
      <TradingStratigy />
      <Numbers/>
      <GetStarted heading={'Ready to get started?'} paragraph={' It only takes 3 minutes to get your account set up <br /> and ready for trading'}/>
    </div>
  );
}
