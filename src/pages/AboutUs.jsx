import React from 'react';
import droneTrainingImg from '../assets/images/instructor1.jpg';
import droneTraining2Img from '../assets/images/trainer-og.jpg';
import mission from '../assets/images/mission.jpg';
import { Link } from 'react-router-dom';


const About = () => {
    return (
        <div className="bg-gray-50 text-gray-800">
            {/* About Us Section */}
            <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h5 className="text-sky-600 font-semibold uppercase tracking-wide">About Us</h5>
                        <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-6">
                            Horizon Drone Academy
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Horizon Drone Academy is a pioneering institution in unmanned aerial systems, recognized as one of the most trusted names in the drone and aviation training industry. With over a decade of experience, we’ve equipped thousands of students with the skills and certifications needed to excel in the rapidly growing drone sector.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Backed by state-of-the-art technology and a commitment to safety and excellence, we empower individuals and organizations to harness the full potential of drone technology confidently and effectively.
                        </p>
                    </div>
                    <div>
                        <img
                            src={droneTraining2Img}
                            alt="Drone flying over horizon"
                            className="rounded-xl shadow-lg object-cover w-full h-96"
                        />
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section id="mission" className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
                    <div>
                        <h5 className="text-sky-600 font-semibold uppercase tracking-wide">Our</h5>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">Mission</h2>
                        <div className="w-16 h-0.5 bg-sky-500 mt-4 mb-6"></div>
                        <p className="text-gray-700 leading-relaxed text-base">
                            Our mission is to be the preferred drone training and commercial operations organization for Government, corporates, and the industry sector by providing quality, high standards, and reliable services.
                        </p>
                    </div>
                    <div>
                        <img
                            src={mission}
                            alt="Drone flying against blue sky"
                            className="rounded-xl shadow-lg object-cover w-full h-80"
                        />
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section id="vision" className="py-20 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
                    <div className="order-2 lg:order-1">
                        <img
                            src={droneTrainingImg}
                            alt="Drone over forested valley"
                            className="rounded-xl shadow-lg object-cover w-full h-80"
                        />
                    </div>
                    <div className="order-1 lg:order-2">
                        <h5 className="text-sky-600 font-semibold uppercase tracking-wide">Our</h5>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">Vision</h2>
                        <div className="w-16 h-0.5 bg-sky-500 mt-4 mb-6"></div>
                        <p className="text-gray-700 leading-relaxed text-base">
                            Our long-term vision is to contribute and empower the ever-growing youth in Kenya by equipping them with drone technology skills and enabling economic prosperity for young entrepreneurs who can make a living through innovation, safety, and sustainable aerial solutions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section id="our-story" className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto text-center">
                    <h5 className="text-sky-600 font-semibold uppercase tracking-wide">Our Story</h5>
                    <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-8">
                        How It All Started
                    </h2>
                    <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed text-base">
                        Horizon Drone Academy began with a vision to make drone technology accessible and beneficial to everyone. Over the years, we’ve grown into a fully accredited drone training center, trusted by individuals, corporates, and government institutions alike. Our story is one of innovation, passion, and commitment to creating a future where drone technology transforms industries and empowers communities.
                    </p>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-sky-900 py-16 text-center text-white">
                <div>
                <h2 className="text-3xl font-bold mb-4">Ready to Take Flight?</h2>
                <p className="text-lg mb-6">
                    Join our professional drone training programs and become a certified drone pilot.
                </p>
                <Link
                    to="/training" // Update this link with your actual route
                    className="inline-block bg-white text-sky-900 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-sky-100 transition duration-300"
                >
                    View Training Courses
                </Link>
                </div>
            </section>
        </div>
    );
};

export default About;
