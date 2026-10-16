import { NavBar } from '../Components/homePageComponents/NavBar'
import { Hero } from '../Components/homePageComponents/Hero'
import { Stats } from '../Components/homePageComponents/Stats'
import { Feature } from '../Components/homePageComponents/Feature'
import About from '../Components/homePageComponents/About'
import Contact from '../Components/homePageComponents/Contact'
import Footer from '../Components/homePageComponents/Footer'

const Home = () => {
    return (
        <div>
            <NavBar />
            <Hero />
            <Stats />
            <Feature />
            <About />
            <Contact/>
            <Footer />
        </div>
    );
}

export default Home;