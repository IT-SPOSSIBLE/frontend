import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import  Home  from "../pages/Home";
import  Product  from "../pages/Product";
import  Register  from "../pages/Register";
import  Login  from "../pages/Login";
import  Pannel  from "../pages/PannelAdmin";
import  Requirement  from "../pages/Requirement";
import More from '../pages/More'
interface RoutConfiguration{
    path:string;
    name:string;
    element:React.FC;
    isPublic:boolean;
    fornav:boolean;
}

interface Routes{
    HOME:RoutConfiguration;
    PRODUCT:RoutConfiguration;
    CONTACTUS:RoutConfiguration;
    ABOUTUS:RoutConfiguration;
    LOGIN:RoutConfiguration;
    REGISTER:RoutConfiguration;
    PANNEL:RoutConfiguration;
    REQUIREMENT:RoutConfiguration;
    MORE:RoutConfiguration;
}
export const ROUTES: Routes = {
    HOME: {
        path: "/",
        name: "Mwanzo", // Home
        element: Home,
        isPublic: true,
        fornav: true
    },
    PRODUCT: {
        path: "/product",
        name: "Bidhaa", // Products
        element: Product,
        isPublic: true,
        fornav: true
    },
    REQUIREMENT: {
        path: "/requirent",
        name: "Mahitaji", // Requirements
        element: Requirement,
        isPublic: true,
        fornav: true
    },
    CONTACTUS: {
        path: "/contact",
        name: "Wasiliana Nasi", // Contact Us
        element: ContactUs,
        isPublic: true,
        fornav: true
    },
    ABOUTUS: {
        path: "/about",
        name: "Kuhusu Sisi", // About Us
        element: AboutUs,
        isPublic: true,
        fornav: true
    },
    REGISTER: {
        path: "/register",
        name: "Jisajili", // Register
        element: Register,
        isPublic: true,
        fornav: false
    },
    LOGIN: {
        path: "/login",
        name: "Ingia", // Login
        element: Login,
        isPublic: true,
        fornav: true
    },
    PANNEL: {
        path: "/pannel",
        name: "Dashibod", // Admin Panel
        element: Pannel,
        isPublic: true,
        fornav: false
    },
    MORE: {
        path: "/more",
        name: "More", // Admin Panel
        element: More,
        isPublic: true,
        fornav: false
    },
}


export const routes:RoutConfiguration[]=Object.values(ROUTES);
export const navButtons: RoutConfiguration[] = routes.filter(
    (route) => route.fornav
  );
  