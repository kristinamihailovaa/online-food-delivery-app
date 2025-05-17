import Bestsellers from "./Bestsellers";
import Carousel from "./Carousel";
import ShortMenu from "./ShortMenu";
import ShortAbout from './ShortAbout';
import Socials from "./Socials";

const Home = () => {
    return <div>
        <Carousel/>
        <ShortMenu/>
        <Bestsellers/>
        <ShortAbout/>
        <Socials/>
    </div>
};

export default Home;