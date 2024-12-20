import React from 'react';
import {
    Briefcase,
    Building2,
    Users,
    CheckCircle
} from 'lucide-react';

const Hero = () => {
    const stats = [
        { icon: <Briefcase className="w-6 h-6" />, value: '10K+', label: 'Job Listings' },
        { icon: <Building2 className="w-6 h-6" />, value: '2.5K+', label: 'Companies' },
        { icon: <Users className="w-6 h-6" />, value: '50K+', label: 'Job Seekers' },
    ];

    const features = [
        'Remote & Flexible Jobs',
        'Top Companies Hiring',
        'Verified Employers',
        'Secure Applications'
    ];

    return (
        <div className="relative min-h-screen">
            {/* Background Images Layer */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0">
                    <img
                        src="/api/placeholder/1920/1080"
                        alt="Office background"
                        className="w-full h-full object-cover opacity-10"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray to-transparent" />
                <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                <div className="absolute bottom-40 right-20 w-40 h-40 bg-blue-300/20 rounded-full blur-3xl" />
            </div>

            {/* Content Section */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-white space-y-8">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm">
                            <span className="animate-pulse mr-2">🔥</span>
                            Over 100+ jobs added
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                            Your Dream Career
                            <span className="block mt-2 text-blue-200">Starts Here</span>
                        </h1>

                        <p className="text-lg text-blue-100 max-w-xl">
                            Connect with top employers and discover opportunities that match your skills.
                            Join thousands of professionals finding their perfect career path.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                    <CheckCircle className="w-5 h-5 text-blue-200" />
                                    <span className="text-blue-100">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Stats Section Aligned to the Right */}
                    <div className="flex justify-end">
                        <div className="grid grid-cols-3 gap-6">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center p-4 rounded-lg bg-white/10 backdrop-blur-lg">
                                    <div
                                        className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 text-white mb-3">
                                        {stat.icon}
                                    </div>
                                    <div className="font-bold text-2xl text-white">{stat.value}</div>
                                    <div className="text-sm text-blue-100">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
