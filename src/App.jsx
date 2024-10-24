import { useState, useCallback } from "react";
import "./App.css";
import garrow from "./assets/garrow.svg";
import img1 from "./img/img1.png";
import img2 from "./img/img2.png";
import img3 from "./img/img3.png";
import FixedNav from "./components/FixedNav";
import Modal from "./components/Modal";
import EventChart from "./components/EventChart";
import EventDashboard from "./components/EventDashboard";
import HamburgerMenu from "./components/Hamburger/HamburgerMenu";

function App() {
  const [lightmode, setLightMode] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [currIdx, setCurrIdx] = useState(0);
  const [openSidebar, setOpenSidebar] = useState(false);

  const imgArray = [img1, img2, img3];

  const handleSidebar = useCallback(() => {
    setOpenSidebar((prevState) => !prevState);
  }, []);

  const toggleLightMode = () => setLightMode((prev) => !prev);
  const toggleModal = () => setModalOpen((prev) => !prev);

  const nextImage = () => setCurrIdx((prev) => (prev + 1) % imgArray.length);

  return (
    <div className={`outerdashboard ${lightmode ? "lightmode" : "darkmode"}`}>
      <FixedNav
        openSidebar={openSidebar}
        lightmode={lightmode}
        toggleLightMode={toggleLightMode}
      />

      <div className="dashboard-content">
        <div className="mobile-nav">
          <div className="LogoBox">
            <div className="bluelogo">Full Logo</div>
          </div>
          <HamburgerMenu
            handleSidebar={handleSidebar}
            openSidebar={openSidebar}
          />
        </div>
        <div className="mb24">
          <h2>Welcome, here's your summary</h2>
        </div>

        <div className="stat mobilefac sb">
          {[
            { label: "Total Events", value: "100,000", change: "+5.0%" },
            { label: "Active Speakers", value: "25", change: "+5.0%" },
            { label: "Total Registrations", value: "300", change: "-5.0%" },
            { label: "Total Revenue", value: "$500,000", change: "+5.0%" },
          ].map((stat, index) => (
            <div key={index} className="stat1">
              <p className="greyp">{stat.label}</p>

              <div className="fac num-con">
                <p
                  className="numbers"
                  style={{ color: lightmode ? "#334155" : "#ffffff" }}
                >
                  {stat.value}
                </p>
                <span className="fac arr-con">
                  <img src={garrow} alt="arrow" />
                </span>
                <span
                  className="stat-change"
                  style={{ color: stat.change !== "+5.0%" ? "red" : "#10B981" }}
                >
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        <h3 className="mt34">Event Registrations per month</h3>
        <div className="mobilefac chartboxsection">
          <div className="chart fac">
            <EventChart />
          </div>
          <div className="carousel fac">
            <img className="carousel-img" src={imgArray[currIdx]} alt="Event" />
            <button onClick={nextImage} className="carbutton">
              &gt;
            </button>
          </div>
        </div>

        <h3 className="event-history mt6">Event History</h3>
        <EventDashboard />
      </div>

      {modalOpen && <Modal toggleModal={toggleModal} />}
    </div>
  );
}

export default App;
