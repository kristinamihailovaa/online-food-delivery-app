import Header from "../Header";
import Bestsellers from "./Bestsellers";
import Carousel from "./Carousel";
import ShortMenu from "./ShortMenu";
import ShortAbout from './ShortAbout';
import Socials from "./Socials";
import Footer from "../Footer";

const Home = () => {
    return <div>
        <Header/>
        <Carousel/>
        <ShortMenu/>
        <Bestsellers/>
        <ShortAbout/>
        <Socials/>
        <Footer/>
    </div>
};

export default Home;