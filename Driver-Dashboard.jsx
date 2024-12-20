import React, { useState } from 'react';
import {
    Star,
    MapPin,
    Phone,
    Mail,
    Calendar,
    Car,
    Clock,
    Filter,
    Search,
    ChevronDown,
    Award
} from 'lucide-react';

const DriverDashboard = () => {
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const drivers = [
        {
            id: 1,
            name: 'John Cooper',
            rating: 4.8,
            trips: 1240,
            experience: '3 years',
            location: 'New York City',
            vehicle: 'Toyota Camry 2022',
            status: 'active',
            phone: '+1 234-567-8900',
            email: 'john.c@example.com',
            availability: 'Full-time',
            badges: ['Top Rated', 'Premium Driver']
        },
        {
            id: 2,
            name: 'Sarah Williams',
            rating: 4.9,
            trips: 890,
            experience: '2 years',
            location: 'Los Angeles',
            vehicle: 'Honda Accord 2023',
            status: 'active',
            phone: '+1 234-567-8901',
            email: 'sarah.w@example.com',
            availability: 'Part-time',
            badges: ['Excellent Service']
        },
        {
            id: 3,
            name: 'Michael Chen',
            rating: 4.7,
            trips: 2100,
            experience: '5 years',
            location: 'San Francisco',
            vehicle: 'Tesla Model 3',
            status: 'break',
            phone: '+1 234-567-8902',
            email: 'michael.c@example.com',
            availability: 'Full-time',
            badges: ['Long Distance Pro', 'Top Rated']
        }
    ];

    const filterOptions = [
        { value: 'all', label: 'All Drivers' },
        { value: 'active', label: 'Active Now' },
        { value: 'break', label: 'On Break' },
        { value: 'top-rated', label: 'Top Rated' }
    ];

    const filteredDrivers = drivers.filter(driver => {
        const matchesSearch = driver.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            driver.location.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesFilter = selectedFilter === 'all' ||
            (selectedFilter === 'top-rated' && driver.rating >= 4.8) ||
            driver.status === selectedFilter;
        return matchesSearch && matchesFilter;
    });

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Driver Management</h1>
                    <p className="text-gray-600">Manage and monitor your driver fleet</p>
                </div>

                {/* Search and Filter Section */}
                <div className="mb-8 flex flex-col md:flex-row gap-4">
                    {/* Search Bar */}
                    <div className="flex-1">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search drivers by name or location..."
                                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Filter Dropdown */}
                    <div className="w-full md:w-48">
                        <div className="relative">
                            <select
                                className="w-full appearance-none bg-white border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={selectedFilter}
                                onChange={(e) => setSelectedFilter(e.target.value)}
                            >
                                {filterOptions.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        </div>
                    </div>
                </div>

                {/* Drivers Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredDrivers.map(driver => (
                        <div key={driver.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
                            {/* Driver Header */}
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100">
                                    <img
                                        src={`/api/placeholder/150/150`}
                                        alt={driver.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-gray-900">{driver.name}</h3>
                                    <div className="flex items-center gap-1 text-yellow-500">
                                        <Star className="w-4 h-4 fill-current" />
                                        <span className="text-sm">{driver.rating}</span>
                                        <span className="text-gray-400 text-sm">({driver.trips} trips)</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {driver.badges.map((badge, index) => (
                                            <span
                                                key={index}
                                                className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium"
                                            >
                        <Award className="w-3 h-3" />
                                                {badge}
                      </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Driver Info Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center gap-2 text-gray-600">
                                    <MapPin className="w-4 h-4" />
                                    <span className="text-sm">{driver.location}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <Calendar className="w-4 h-4" />
                                    <span className="text-sm">{driver.experience}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <Car className="w-4 h-4" />
                                    <span className="text-sm">{driver.vehicle}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <Clock className="w-4 h-4" />
                                    <span className="text-sm">{driver.availability}</span>
                                </div>
                            </div>

                            {/* Contact Section */}
                            <div className="mt-4 pt-4 border-t border-gray-100">
                                <div className="flex justify-between">
                                    <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                                        <Phone className="w-4 h-4" />
                                        <span className="text-sm">Call</span>
                                    </button>
                                    <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                                        <Mail className="w-4 h-4" />
                                        <span className="text-sm">Message</span>
                                    </button>
                                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors">
                                        View Profile
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DriverDashboard;