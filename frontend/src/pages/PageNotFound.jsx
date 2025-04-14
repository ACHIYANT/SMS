import pagenotfound from "/page-not-found.png";
import NavBar from "@/components/NavBar";
import Lottie from "lottie-react";
import pnf from "/Users/achiyant/Documents/sms/frontend/src/assets/pnf4.json";
export default function PageNotFound() {
  return (
    <div className="w-screen h-max flex flex-col object-fill">
      <NavBar />
      <Lottie animationData={pnf} loop={true} />
      {/* <img src={pnf} alt="Page Not Found" className="w-full h-full" /> */}
    </div>
  );
}
