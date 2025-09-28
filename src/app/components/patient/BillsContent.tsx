import React, { useState } from 'react';
import { 
  CreditCardIcon,
  BanknotesIcon,
  CheckCircleIcon,
  ClockIcon,
  CalendarDaysIcon,
  ArrowDownTrayIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const BillsContent: React.FC = () => {
  const [selectedPayment, setSelectedPayment] = useState<string>('upi');

  return (
    <div className="space-y-8">
      {/* Enhanced Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2">
            Bills & Payments
          </h2>
          <p className="text-gray-600">Manage your treatment payments and billing history</p>
        </div>
        <div className="flex items-center space-x-2 bg-gradient-to-r from-green-50 to-emerald-50 px-4 py-2 rounded-2xl border border-green-200/50">
          <CheckCircleIcon className="w-5 h-5 text-green-600" />
          <span className="text-green-700 font-medium">Payment Secure</span>
        </div>
      </div>

      {/* Enhanced Payment Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          {
            title: 'Total Paid',
            amount: '₹24,500',
            subtitle: 'This program',
            gradient: 'from-green-500 to-emerald-600',
            bgGradient: 'from-green-50 to-emerald-50',
            icon: CheckCircleIcon,
            trend: 'Completed',
            trendColor: 'text-green-600'
          },
          {
            title: 'Pending Amount',
            amount: '₹12,500',
            subtitle: 'Due in 5 days',
            gradient: 'from-orange-500 to-red-500',
            bgGradient: 'from-orange-50 to-red-50',
            icon: ClockIcon,
            trend: 'Urgent',
            trendColor: 'text-red-600'
          },
          {
            title: 'Next Payment',
            amount: '₹6,250',
            subtitle: 'Oct 5, 2025',
            gradient: 'from-blue-500 to-indigo-600',
            bgGradient: 'from-blue-50 to-indigo-50',
            icon: CalendarDaysIcon,
            trend: 'Upcoming',
            trendColor: 'text-blue-600'
          },
          {
            title: 'Program Total',
            amount: '₹37,000',
            subtitle: '21-day program',
            gradient: 'from-purple-500 to-pink-600',
            bgGradient: 'from-purple-50 to-pink-50',
            icon: BanknotesIcon,
            trend: 'Complete',
            trendColor: 'text-purple-600'
          }
        ].map((card, index) => (
          <div
            key={index}
            className={`group relative bg-gradient-to-br ${card.bgGradient} rounded-2xl p-6 border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Gradient Border Effect */}
            <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>

            {/* Floating Icon */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-600 mb-2">{card.title}</h3>
                <p className={`text-3xl font-bold bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent mb-1 transition-transform duration-300 group-hover:scale-110 origin-left`}>
                  {card.amount}
                </p>
                <p className="text-gray-600 text-sm">{card.subtitle}</p>
              </div>

              <div className={`w-12 h-12 bg-gradient-to-r ${card.gradient} rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                <card.icon className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Status Badge */}
            <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${card.trendColor} bg-white/70 backdrop-blur-xl`}>
              <div className="w-2 h-2 rounded-full bg-current mr-2 animate-pulse"></div>
              {card.trend}
            </div>

            {/* Shine Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out rounded-2xl"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Bills Section */}
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-200/50 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100/50 p-6 border-b border-gray-200/50">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">Recent Bills & Invoices</h3>
              <p className="text-gray-600">View and download your treatment bills</p>
            </div>
            <div className="flex space-x-3">
              <button className="group bg-white/70 backdrop-blur-xl text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-100/70 transition-all duration-300 text-sm font-medium flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105 border border-gray-200/50">
                <ArrowDownTrayIcon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span>Download All</span>
              </button>

              <button className="group bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-2 rounded-xl hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2">
                <CreditCardIcon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span>Make Payment</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bills List */}
        <div className="p-6">
          <div className="space-y-4">
            {[
              { 
                id: 'INV-2025-001', 
                date: '2025-09-28', 
                description: 'Panchkarma Session Week 2', 
                amount: 6250, 
                status: 'Paid', 
                hospital: 'Ayuu Wellness Center, Dehradun',
                treatments: ['Abhyanga', 'Swedana', 'Consultation'],
                statusColor: 'from-green-500 to-emerald-600',
                statusBg: 'from-green-50 to-emerald-50'
              },
              { 
                id: 'INV-2025-002', 
                date: '2025-09-21', 
                description: 'Panchkarma Session Week 1', 
                amount: 6250, 
                status: 'Paid', 
                hospital: 'Ayuu Wellness Center, Dehradun',
                treatments: ['Initial Assessment', 'Abhyanga', 'Herbal Medicine'],
                statusColor: 'from-green-500 to-emerald-600',
                statusBg: 'from-green-50 to-emerald-50'
              },
              { 
                id: 'INV-2025-003', 
                date: '2025-09-20', 
                description: 'Registration & Consultation', 
                amount: 2000, 
                status: 'Paid', 
                hospital: 'Ayuu Wellness Center, Dehradun',
                treatments: ['Registration Fee', 'Doctor Consultation', 'Treatment Plan'],
                statusColor: 'from-green-500 to-emerald-600',
                statusBg: 'from-green-50 to-emerald-50'
              },
              { 
                id: 'INV-2025-004', 
                date: '2025-10-05', 
                description: 'Panchkarma Session Week 3', 
                amount: 6250, 
                status: 'Pending', 
                hospital: 'Ayuu Wellness Center, Dehradun',
                treatments: ['Virechana', 'Basti', 'Follow-up Consultation'],
                statusColor: 'from-orange-500 to-red-500',
                statusBg: 'from-orange-50 to-red-50'
              },
              { 
                id: 'INV-2025-005', 
                date: '2025-10-12', 
                description: 'Panchkarma Session Week 4', 
                amount: 6250, 
                status: 'Upcoming', 
                hospital: 'Ayuu Wellness Center, Dehradun',
                treatments: ['Nasya', 'Final Assessment', 'Discharge Planning'],
                statusColor: 'from-blue-500 to-indigo-600',
                statusBg: 'from-blue-50 to-indigo-50'
              }
            ].map((bill, index) => (
              <div
                key={bill.id}
                className="group bg-gradient-to-br from-white to-gray-50/30 rounded-2xl p-6 border border-gray-200/50 hover:shadow-xl transition-all duration-500 transform hover:scale-102 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <h4 className="font-bold text-gray-800 text-lg group-hover:text-gray-900 transition-colors duration-300">
                        Invoice {bill.id}
                      </h4>

                      <div className={`bg-gradient-to-r ${bill.statusBg} border border-gray-200/50 backdrop-blur-xl px-3 py-1 rounded-full`}>
                        <span className={`text-sm font-medium bg-gradient-to-r ${bill.statusColor} bg-clip-text text-transparent`}>
                          {bill.status}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Date:</span> {new Date(bill.date).toLocaleDateString('en-IN')}
                        </p>
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Hospital:</span> {bill.hospital}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Amount:</span> 
                          <span className="font-bold text-gray-900 ml-1">₹{bill.amount.toLocaleString()}</span>
                        </p>
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Description:</span> {bill.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs text-gray-500 font-medium">Treatments:</span>
                      {bill.treatments.map((treatment, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full font-medium hover:bg-gray-200 transition-colors duration-300">
                          {treatment}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Section */}
                  <div className="text-right space-y-3 ml-6">
                    <div className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                      ₹{bill.amount.toLocaleString()}
                    </div>

                    <div className="flex flex-col space-y-2">
                      {bill.status === 'Paid' ? (
                        <>
                          <button className="group bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-4 py-2 rounded-xl text-sm hover:from-gray-200 hover:to-gray-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2">
                            <ArrowDownTrayIcon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                            <span>Download PDF</span>
                          </button>
                          <button className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-4 py-2 rounded-xl text-sm hover:from-green-200 hover:to-emerald-200 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                            Receipt
                          </button>
                        </>
                      ) : bill.status === 'Pending' ? (
                        <>
                          <button className="group bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-4 py-2 rounded-xl text-sm hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2">
                            <CreditCardIcon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                            <span>Pay Now</span>
                          </button>
                          <button className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-4 py-2 rounded-xl text-sm hover:from-blue-200 hover:to-indigo-200 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                            View Details
                          </button>
                        </>
                      ) : (
                        <>
                          <button className="group bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-xl text-sm hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2">
                            <CalendarDaysIcon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                            <span>Schedule</span>
                          </button>
                          <button className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-4 py-2 rounded-xl text-sm hover:from-gray-200 hover:to-gray-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                            Details
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Payment Methods */}
          <div className="mt-12 pt-8 border-t border-gray-200/50">
            <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <SparklesIcon className="w-6 h-6 mr-3 text-teal-600" />
              Available Payment Methods
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  id: 'upi',
                  name: 'UPI Payment',
                  description: 'Instant & Secure',
                  badge: 'Recommended',
                  badgeColor: 'from-green-500 to-emerald-600',
                  gradient: 'from-blue-500 to-indigo-600',
                  bgGradient: 'from-blue-50 to-indigo-50'
                },
                {
                  id: 'card',
                  name: 'Credit/Debit Card',
                  description: 'Visa, Mastercard',
                  badge: '2% processing fee',
                  badgeColor: 'from-blue-500 to-indigo-600',
                  gradient: 'from-green-500 to-emerald-600',
                  bgGradient: 'from-green-50 to-emerald-50'
                },
                {
                  id: 'netbanking',
                  name: 'Net Banking',
                  description: 'All major banks',
                  badge: 'No extra charges',
                  badgeColor: 'from-gray-500 to-gray-600',
                  gradient: 'from-orange-500 to-red-500',
                  bgGradient: 'from-orange-50 to-red-50'
                }
              ].map((method) => (
                <div
                  key={method.id}
                  onClick={() => setSelectedPayment(method.id)}
                  className={`group relative bg-gradient-to-br ${method.bgGradient} rounded-2xl p-6 border cursor-pointer transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                    selectedPayment === method.id 
                      ? 'border-teal-500/50 shadow-2xl scale-105' 
                      : 'border-gray-200/50 shadow-lg hover:shadow-2xl'
                  }`}
                >
                  {/* Selection Indicator */}
                  {selectedPayment === method.id && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                      <CheckCircleIcon className="w-4 h-4 text-white" />
                    </div>
                  )}

                  <div className="flex items-center mb-4">
                    <div className={`w-14 h-10 bg-gradient-to-r ${method.gradient} rounded-xl flex items-center justify-center mr-4 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                      <span className="text-white text-xs font-bold">{method.id.toUpperCase().slice(0, 4)}</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">{method.name}</p>
                      <p className="text-sm text-gray-600">{method.description}</p>
                    </div>
                  </div>

                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${method.badgeColor} bg-clip-text text-transparent bg-white/70 backdrop-blur-xl border border-gray-200/50`}>
                    <div className="w-2 h-2 rounded-full bg-current mr-2"></div>
                    {method.badge}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Quick Actions */}
          <div className="mt-12 pt-8 border-t border-gray-200/50">
            <h4 className="text-xl font-bold text-gray-800 mb-6">Quick Actions</h4>
            <div className="flex flex-wrap gap-4">
              {[
                { label: 'Pay All Pending (₹12,500)', gradient: 'from-teal-500 to-cyan-600', icon: CreditCardIcon },
                { label: 'Download All Receipts', gradient: 'from-blue-500 to-indigo-600', icon: ArrowDownTrayIcon },
                { label: 'Payment History Report', gradient: 'from-purple-500 to-pink-600', icon: BanknotesIcon },
                { label: 'Set Auto-Pay', gradient: 'from-gray-500 to-gray-600', icon: SparklesIcon }
              ].map((action, index) => (
                <button
                  key={index}
                  className={`group bg-gradient-to-r ${action.gradient} text-white px-6 py-3 rounded-2xl font-medium hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg`}
                >
                  <action.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>{action.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillsContent;