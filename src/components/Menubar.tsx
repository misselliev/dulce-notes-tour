import React from 'react';

const Menubar: React.FC = () => {
    return (
        <div className="container mx-auto">
            <nav className="flex justify-between p-8 items-center mb-16">
                <a href="#" className="font-sans text-black md:text-white text-sm md:text-4xl font-thin">
                    The 1975 - NOACF
                </a>
                <ul className="list-reset flex">
                    <li>
                        <a href="/" className="text-black md:text-white p-2 md:p-4">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/dates" className="text-black md:text-white p-2 md:p-4 whitespace-no-wrap">
                            Tour Dates
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Menubar;
