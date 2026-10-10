import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Hero = () => {
    return (
        <>
            <div className="hero flex items-center justify-evenly p-4">
                <div className="left_hero max-w-[500px]">
                    <div className="left_hero_text1 flex flex-col gap-5">
                        <h1 className="text-4xl font-semibold text-gray-800 font-[Inter] text-6xl">Your Contacts, <span className="text-[#483AEA] text-7xl">Beautifully </span>Organized</h1>
                        <p className="text-xl text-[#6B7280]">Personify is a contact management app that helps you organize your contacts and keep them up to date.</p>
                        <div className="left_hero_btns">
                            <Link to="/sign-up">
                                <button className="bg-[#483AEA] text-white px-4 py-2 rounded flex items-center gap-2 cursor-pointer hover:bg-[#3a2db8] transition duration-300">Get Started <FaArrowRight /></button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="right_hero">
                    <img src="hero.png" alt="Hero Image" className="w-140" />
                </div>
            </div>
        </>
    );

}