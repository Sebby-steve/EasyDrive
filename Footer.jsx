import React, { useState } from 'react';
import {
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    Mail,
    Phone,
    MapPin,
    ArrowUp
} from 'lucide-react';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        setSubscribed(true);
        setEmail('');
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-gray-900 text-gray-300">
            {/* Main Footer Content */}
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-white text-lg font-bold mb-4">EasyDrive</h3>
                        <p className="text-sm">
                            Connecting talented professionals with their dream careers.
                        </p>
                        <div className="flex items-center space-x-2 text-sm">
                            <MapPin size={16} />
                            <span>KK 4 Avenue, Gikondo</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                            <Phone size={16} />
                            <span>+250789094783</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                            <Mail size={16} />
                            <span>easydrive@jobfinder.com</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="/find-jobs" className="hover:text-orange-500 transition-colors">
                                    Find Jobs
                                </a>
                            </li>
                            <li>
                                <a href="/companies" className="hover:text-orange-500 transition-colors">
                                    Companies
                                </a>
                            </li>
                            <li>
                                <a href="/about-us" className="hover:text-orange-500 transition-colors">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="/upload-job" className="hover:text-orange-500 transition-colors">
                                    Post a Job
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="/privacy" className="hover:text-white transition-colors">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="/terms" className="hover:text-white transition-colors">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="/career-advice" className="hover:text-white transition-colors">
                                    Career Advice
                                </a>
                            </li>
                            <li>
                                <a href="/help" className="hover:text-white transition-colors">
                                    Help Center
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">Newsletter</h3>
                        <form onSubmit={handleSubscribe} className="space-y-4">
                            <div className="flex flex-col space-y-2">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="bg-gray-800 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="bg-orange-600 text-black px-4 py-2 rounded hover:bg-white transition-colors"
                                >
                                    Subscribe
                                </button>
                            </div>
                            {subscribed && (
                                <p className="text-gray-400 text-sm">
                                    Thanks for subscribing!
                                </p>
                            )}
                        </form>
                    </div>
                </div>

                {/* Social Links */}
                <div className="border-t border-gray-800 mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex space-x-6 mb-4 md:mb-0">
                            <a href="#" className="hover:text-white transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="hover:text-white transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="hover:text-white transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="hover:text-white transition-colors">
                                <Instagram size={20} />
                            </a>
                        </div>
                        <p className= {'text-sm items-center'}>
                            © {new Date().getFullYear()} EasyDrive. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 bg-orange-600 p-2 rounded-full text-black hover:bg-white transition-colors"
            >
                <ArrowUp size={24} />
            </button>
        </footer>
    );
};

export default Footer;