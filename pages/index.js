import Banner from "../components/Banner/Banner";
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
      <section className="getStarted text-center">
        <div className="container">
          <h2>Ready to get started?</h2>
          <p>
            It only takes 3 minutes to get your account set up <br />
            and ready for trading
          </p>
          <br />
          <br />
          <a href="#" className="btn btn-green">
            Open account
          </a>
        </div>
      </section>
    </div>
  );
}
