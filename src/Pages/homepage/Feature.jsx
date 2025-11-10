import React from "react";
import "../../stylesheets/BackgroundVideo.css";

const Feature = () => {
    return (
        <section className="bgcolor">
            <div className="container px-6 py-10 mx-auto">
                <div className="flex-container">
                    <div className="grid w-full grid-cols-1 gap-16 lg:w-1/2 md:grid-cols-2">
                        <div className="value">
                            <div className="feature-item">
                                <span className="icon-container">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 20l-5.447-2.724A2 2 0 013 15.382V6.618a2 2 0 011.553-1.947L9 2m0 0l6 3m-6-3v18m6-15v18m0-18l5.447 2.724A2 2 0 0121 6.618v8.764a2 2 0 01-1.553 1.947L15 20"
                                        />
                                    </svg>

                                </span>
                                <h1 className="component-title">We've Tested in:</h1>
                                <p className="component-description">10+ Cities</p>
                            </div>
                            <div className="feature-item">
                                <span className="icon-container">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 21v-4a2 2 0 012-2h2a2 2 0 002 2v4m6-16v4m0 4v4m0 4h-4m0 0h-4m4 0h4m0-4h4"
                                        />
                                    </svg>


                                </span>
                                <h1 className="component-title">Highest Speed:</h1>
                                <p className="component-description">75 km/h</p>
                            </div>
                        </div>

                        <div className="value">
                            <div className="feature-item">
                                <span className="icon-container">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M14 10h4.5a2.5 2.5 0 010 5H14m-4 0H5.5a2.5 2.5 0 010-5H10M14 10V7a2 2 0 10-4 0v3m0 5v3a2 2 0 104 0v-3"
                                        />
                                    </svg>

                                </span>
                                <h1 className="component-title">Kilometer Travel:</h1>
                                <p className="component-description">55000 km</p>
                            </div>
                            <div className="feature-item">
                                <span className="icon-container">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 10h11m4 0h3m-9-4v8m4-8v8m-7 4v-4h4v4"
                                        />
                                    </svg>

                                </span>
                                <h1 className="component-title">User-Friendly Navigation:</h1>
                                <p className="component-description">Seamless </p>
                            </div>
                        </div>
                    </div>

                    {/* <div className="hidden lg:flex lg:w-1/2 lg:justify-center">
                        <img
                            className="img-container"
                            src="http://localhost:8000/media/Blog/1_AEMt0731z0Xa1HoYeaCKeA.webp"
                            alt="Feature"
                        />
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default Feature;
