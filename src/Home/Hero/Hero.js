import Link from "next/link";


export const Hero = () => {
    return (
        <div className="lg:pt-10">
            <div className="grid gap-10 lg:grid-cols-2">
                <div data-aos="fade-right" data-aos-duration="1000" className="home-div">
                    <a
                        href="/"
                        aria-label="Go Home"
                        title="Logo"
                        className="inline-block mb-2"
                    >
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                            <svg
                                className="w-10 h-10 text-deep-purple-accent-400"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                    </a>
                    <h5 className="mb-4 text-2xl md:text-4xl lg:text-5xl font-extrabold text-center">
                        Boost Your Shopping
                        <br />
                        <span className="inline-block pt-2">
                            with IT Zone
                        </span>
                    </h5>
                    <p className="mb-6 text-gray-900 text-center">
                        IT Zone is one of the top eCommerce sites in Bangladesh the most popular and oldest, selling electronics, appliances, and clothing among other things. According to popularity, this is Bangladesh’s most popular online shopping site at the moment. Fashion accessories, jewelry, footwear, furniture, gadgets, and even automobiles may all be found on this massive online shopping mall.
                    </p>
                    <hr className="mb-5 border-gray-300" />
                    <div className="flex items-center justify-center gap-4">
                        <Link href='/courses'
                            className="text-white text-sm text-center nav-bg p-2 rounded duration-300 hover:text-sky-400"
                        >
                            Explore Courses
                        </Link>
                        <Link href='/register'
                            className="text-white text-sm text-center nav-bg p-2 rounded duration-300 hover:text-sky-400"
                        >
                            Create an account
                        </Link>
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-duration="1000">
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                        src="images/eCommerce-tips-1.webp"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};