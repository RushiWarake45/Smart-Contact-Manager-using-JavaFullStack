import { NavBar } from '../Components/homePageComponents/NavBar'
import { Hero } from '../Components/homePageComponents/Hero'
import { Stats } from '../Components/homePageComponents/Stats'
import { Feature } from '../Components/homePageComponents/Feature'
const Home = () => {
    return (
        <div>
            <NavBar />
            <Hero />
            <Stats />
            <Feature />
        </div>
    );
}

export default Home;