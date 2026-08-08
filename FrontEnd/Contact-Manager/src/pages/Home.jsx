import { NavBar } from '../Components/homePageComponents/NavBar'
import { Hero } from '../Components/homePageComponents/Hero'
import { Stats } from '../Components/homePageComponents/Stats'
const Home = () => {
    return (
        <div>
            <NavBar />
            <Hero />
            <Stats />
        </div>
    );
}

export default Home;