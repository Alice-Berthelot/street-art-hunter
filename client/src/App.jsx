import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "./components/NavBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/App.css";
import Footer from "./components/Footer";
import HeaderMobile from "./components/HeaderMobile";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const { users, pictures } = useLoaderData();
  console.log(pictures);
  return (
    <>
      <HeaderMobile />
      <ScrollToTop />
      <ToastContainer />
      <Navbar />
      <Outlet context={{ users, pictures }} />
      <Footer />
    </>
  );
}

export default App;
