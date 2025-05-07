import ProductComponent from "../components/pageComponents/Product";
import HomeComponent from "../components/pageComponents/Home";
import ContactUsComponent from "../components/pageComponents/ContactUs";
import AboutUsComponent from "../components/pageComponents/AboutUs";
// import RegisterComponent from "../components/pageComponents/Register";
// import LoginComponent from "../components/pageComponents/Login";
import Requirement from "../components/pageComponents/Requirement";
const Home = () => {
  return (
    <div className="grow min-h-full flex flex-col text-gray-900  dark:text-white">
      <HomeComponent />
      <ProductComponent />
      <AboutUsComponent />
      <ContactUsComponent />
      {/* <RegisterComponent />
      <LoginComponent /> */}
      <Requirement />
    </div>
  );
};

export default Home;
