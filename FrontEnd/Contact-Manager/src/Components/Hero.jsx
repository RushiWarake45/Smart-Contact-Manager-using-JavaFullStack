import { FaArrowRight } from "react-icons/fa";

export const Hero = () => {
    return (
        <>
            <div className="hero flex items-center justify-evenly p-4">
                <div className="left_hero max-w-[500px]">
                    <div className="left_hero_text1 flex flex-col gap-5">
                        <h1 className="text-4xl font-semibold text-gray-800 font-[Inter] text-6xl">Your Contacts, <span className="text-[#483AEA] text-7xl">Beautifully </span>Organized</h1>
                        <p className="text-xl text-[#6B7280]">Personify is a contact management app that helps you organize your contacts and keep them up to date.</p>
                        <div className="left_hero_btns">
                            <button className="bg-[#483AEA] text-white px-4 py-2 rounded flex items-center gap-2">Get Started <FaArrowRight /></button>

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