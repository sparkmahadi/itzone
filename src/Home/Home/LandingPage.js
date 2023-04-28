import { Creative } from "../Creative/Creative";
import { Different } from "../Different/Different";
import { Hero } from "../Hero/Hero";


export const LandingPage = () => {
    return (
        <div className='px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 py-10'>
            <Hero></Hero>
            <Creative></Creative>
            {/* <Different></Different> */}
        </div>
    );
};