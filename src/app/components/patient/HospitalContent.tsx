import React, { useState } from 'react';
import { MapPinIcon, PhoneIcon, StarIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const HospitalContent: React.FC = () => {
  const [selectedHospital, setSelectedHospital] = useState<string>('ayuu-dehradun');
  const [userLocation, setUserLocation] = useState<string>('Dehradun, Uttarakhand');
  const [showLocationModal, setShowLocationModal] = useState<boolean>(false);

  // Comprehensive hospital data based on location
  const hospitals = [
    {
      id: 'ayuu-dehradun',
      name: 'Ayuu Wellness Center',
      location: 'Dehradun, Uttarakhand',
      distance: '2.3 km',
      rating: 4.8,
      reviews: 245,
      specialties: ['Panchkarma', 'Ayurvedic Medicine', 'Yoga Therapy', 'Marma Therapy'],
      isCurrentTreatment: true,
      phone: '+91-135-2674589',
      address: 'Clock Tower, Paltan Bazaar, Dehradun - 248001',
      timings: '9:00 AM - 7:00 PM',
      facilities: ['AC Rooms', 'Organic Medicine', 'Expert Doctors', 'Parking'],
      consultationFee: 800,
      treatmentStartDate: 'Sept 20, 2025'
    },
    {
      id: 'himalaya-dehradun',
      name: 'Himalaya Ayurvedic Hospital',
      location: 'Rajpur Road, Dehradun',
      distance: '4.5 km',
      rating: 4.6,
      reviews: 189,
      specialties: ['Panchkarma', 'Skin Treatment', 'Joint Care', 'Detox'],
      isCurrentTreatment: false,
      phone: '+91-135-2663421',
      address: 'Rajpur Road, Near IT Park, Dehradun - 248009',
      timings: '8:00 AM - 8:00 PM',
      facilities: ['Modern Equipment', 'Lab Services', 'Pharmacy', 'Cafeteria'],
      consultationFee: 600
    },
    {
      id: 'ayuu-rishikesh',
      name: 'Ayuu Rishikesh Branch',
      location: 'Rishikesh, Uttarakhand',
      distance: '45 km',
      rating: 4.9,
      reviews: 312,
      specialties: ['Meditation Therapy', 'Panchkarma', 'Yoga', 'Spiritual Healing'],
      isCurrentTreatment: false,
      phone: '+91-135-2431567',
      address: 'Near Ram Jhula, Swarg Ashram, Rishikesh - 249201',
      timings: '6:00 AM - 9:00 PM',
      facilities: ['Riverside Location', 'Yoga Hall', 'Organic Food', 'Accommodation'],
      consultationFee: 900
    },
    {
      id: 'patanjali-haridwar',
      name: 'Patanjali Yogpeeth',
      location: 'Haridwar, Uttarakhand',
      distance: '55 km',
      rating: 4.7,
      reviews: 428,
      specialties: ['Yoga Therapy', 'Ayurvedic Treatment', 'Research', 'Training'],
      isCurrentTreatment: false,
      phone: '+91-1334-265432',
      address: 'Patanjali Yogpeeth, Delhi-Haridwar Highway, Haridwar - 249401',
      timings: '5:00 AM - 8:00 PM',
      facilities: ['Large Campus', 'Research Center', 'Accommodation', 'Food Court'],
      consultationFee: 400
    }
  ];

  const currentHospital = hospitals.find(h => h.isCurrentTreatment);
  const nearbyHospitals = hospitals.filter(h => !h.isCurrentTreatment).sort((a, b) => {
    const distanceA = parseFloat(a.distance);
    const distanceB = parseFloat(b.distance);
    return distanceA - distanceB;
  });

  const handleHospitalSelect = (hospitalId: string) => {
    setSelectedHospital(hospitalId);
    console.log('Hospital selected:', hospitalId);
  };

  const handleLocationChange = (location: string) => {
    setUserLocation(location);
    setShowLocationModal(false);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <StarIcon
        key={index}
        className={`w-4 h-4 ${index < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div>
      {/* Header with location selector */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Find Hospitals Near You</h2>
          <div className="flex items-center space-x-2 mt-2">
            <MapPinIcon className="w-4 h-4 text-gray-500" />
            <span className="text-gray-600">Current location: {userLocation}</span>
            <button 
              onClick={() => setShowLocationModal(true)}
              className="text-teal-600 hover:text-teal-700 text-sm underline"
            >
              Change location
            </button>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-600">Showing hospitals within</div>
          <div className="text-lg font-semibold text-teal-600">100 km radius</div>
        </div>
      </div>

      {/* Current Treatment Hospital */}
      {currentHospital && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
            <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
            Currently Taking Treatment At
          </h3>

          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border-2 border-teal-200 shadow-lg">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-3">
                  <h4 className="text-xl font-bold text-gray-800">{currentHospital.name}</h4>
                  <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                    Current Treatment
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <MapPinIcon className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{currentHospital.address}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <PhoneIcon className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{currentHospital.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">📍 {currentHospital.distance} away</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {renderStars(currentHospital.rating)}
                        <span className="ml-2 text-sm font-medium">{currentHospital.rating}</span>
                        <span className="text-xs text-gray-500 ml-1">({currentHospital.reviews} reviews)</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>Timings:</strong> {currentHospital.timings}
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>Treatment since:</strong> {currentHospital.treatmentStartDate}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-700 mb-2">Specialties:</div>
                  <div className="flex flex-wrap gap-2">
                    {currentHospital.specialties.map((specialty, index) => (
                      <span key={index} className="bg-teal-100 text-teal-700 text-xs px-3 py-1 rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-right ml-6">
                <button className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition-colors mb-3">
                  View Full Details
                </button>
                <div className="text-sm text-gray-600">
                  <div className="font-medium">Consultation Fee:</div>
                  <div className="text-lg font-bold text-teal-600">₹{currentHospital.consultationFee}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Nearby Hospitals */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">
          Other Nearby Hospitals ({nearbyHospitals.length} found)
        </h3>

        <div className="grid gap-6">
          {nearbyHospitals.map((hospital) => (
            <div key={hospital.id} className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-all duration-200">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <h4 className="text-lg font-semibold text-gray-800">{hospital.name}</h4>
                    <div className="flex items-center">
                      {renderStars(hospital.rating)}
                      <span className="ml-2 text-sm font-medium">{hospital.rating}</span>
                      <span className="text-xs text-gray-500 ml-1">({hospital.reviews})</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <MapPinIcon className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{hospital.address}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <PhoneIcon className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{hospital.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">📍 {hospital.distance} away</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-sm text-gray-600">
                        <strong>Timings:</strong> {hospital.timings}
                      </div>
                      <div className="text-sm text-gray-600">
                        <strong>Consultation:</strong> ₹{hospital.consultationFee}
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-700 mb-2">Specialties:</div>
                    <div className="flex flex-wrap gap-2">
                      {hospital.specialties.slice(0, 4).map((specialty, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                          {specialty}
                        </span>
                      ))}
                      {hospital.specialties.length > 4 && (
                        <span className="text-xs text-gray-500">+{hospital.specialties.length - 4} more</span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="text-right ml-6 space-y-3">
                  <div className="space-y-2">
                    <button 
                      onClick={() => handleHospitalSelect(hospital.id)}
                      className={`w-full px-4 py-2 rounded-lg font-medium transition-colors text-sm ${
                        selectedHospital === hospital.id
                          ? 'bg-green-500 text-white'
                          : 'bg-blue-500 text-white hover:bg-blue-600'
                      }`}
                    >
                      {selectedHospital === hospital.id ? '✓ Selected' : 'Select Hospital'}
                    </button>

                    <button className="w-full bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors text-sm">
                      Book Appointment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Location Change Modal */}
      {showLocationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h3 className="text-lg font-semibold mb-4">Change Location</h3>
            <div className="space-y-2">
              {['Dehradun, Uttarakhand', 'Rishikesh, Uttarakhand', 'Haridwar, Uttarakhand', 'Haldwani, Uttarakhand'].map((location) => (
                <button
                  key={location}
                  onClick={() => handleLocationChange(location)}
                  className="w-full text-left p-3 hover:bg-gray-100 rounded border"
                >
                  {location}
                </button>
              ))}
            </div>
            <div className="flex space-x-3 mt-6">
              <button 
                onClick={() => setShowLocationModal(false)}
                className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HospitalContent;