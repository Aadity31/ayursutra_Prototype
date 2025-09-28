import React from 'react';

const BillsContent: React.FC = () => (
  <div>
    <h2 className="text-2xl font-bold mb-6 text-gray-800">Bills & Payments</h2>
    
    {/* Payment Summary Cards */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <h3 className="text-sm font-medium text-gray-500 mb-2">Total Paid</h3>
        <p className="text-2xl font-bold text-green-600">₹24,500</p>
        <p className="text-sm text-green-600">This program</p>
      </div>
      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <h3 className="text-sm font-medium text-gray-500 mb-2">Pending Amount</h3>
        <p className="text-2xl font-bold text-orange-600">₹12,500</p>
        <p className="text-sm text-orange-600">Due in 5 days</p>
      </div>
      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <h3 className="text-sm font-medium text-gray-500 mb-2">Next Payment</h3>
        <p className="text-2xl font-bold text-blue-600">₹6,250</p>
        <p className="text-sm text-blue-600">Oct 5, 2025</p>
      </div>
      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <h3 className="text-sm font-medium text-gray-500 mb-2">Program Total</h3>
        <p className="text-2xl font-bold text-gray-900">₹37,000</p>
        <p className="text-sm text-gray-600">21-day program</p>
      </div>
    </div>

    <div className="bg-white rounded-lg shadow-sm border">
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Recent Bills & Invoices</h3>
            <p className="text-sm text-gray-600">View and download your treatment bills</p>
          </div>
          <div className="flex space-x-2">
            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm">
              Download All
            </button>
            <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors">
              Make Payment
            </button>
          </div>
        </div>
      </div>
      
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
              treatments: ['Abhyanga', 'Swedana', 'Consultation']
            },
            { 
              id: 'INV-2025-002', 
              date: '2025-09-21', 
              description: 'Panchkarma Session Week 1', 
              amount: 6250, 
              status: 'Paid', 
              hospital: 'Ayuu Wellness Center, Dehradun',
              treatments: ['Initial Assessment', 'Abhyanga', 'Herbal Medicine']
            },
            { 
              id: 'INV-2025-003', 
              date: '2025-09-20', 
              description: 'Registration & Consultation', 
              amount: 2000, 
              status: 'Paid', 
              hospital: 'Ayuu Wellness Center, Dehradun',
              treatments: ['Registration Fee', 'Doctor Consultation', 'Treatment Plan']
            },
            { 
              id: 'INV-2025-004', 
              date: '2025-10-05', 
              description: 'Panchkarma Session Week 3', 
              amount: 6250, 
              status: 'Pending', 
              hospital: 'Ayuu Wellness Center, Dehradun',
              treatments: ['Virechana', 'Basti', 'Follow-up Consultation']
            },
            { 
              id: 'INV-2025-005', 
              date: '2025-10-12', 
              description: 'Panchkarma Session Week 4', 
              amount: 6250, 
              status: 'Upcoming', 
              hospital: 'Ayuu Wellness Center, Dehradun',
              treatments: ['Nasya', 'Final Assessment', 'Discharge Planning']
            }
          ].map((bill) => (
            <div key={bill.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="font-medium text-gray-800">Invoice {bill.id}</h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      bill.status === 'Paid' ? 'bg-green-100 text-green-800' :
                      bill.status === 'Pending' ? 'bg-orange-100 text-orange-800' :
                      bill.status === 'Upcoming' ? 'bg-blue-100 text-blue-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {bill.status}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                    <div>
                      <p className="text-sm text-gray-600"><strong>Date:</strong> {new Date(bill.date).toLocaleDateString('en-IN')}</p>
                      <p className="text-sm text-gray-600"><strong>Hospital:</strong> {bill.hospital}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600"><strong>Amount:</strong> ₹{bill.amount.toLocaleString()}</p>
                      <p className="text-sm text-gray-600"><strong>Description:</strong> {bill.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs text-gray-500 font-medium">Treatments:</span>
                    {bill.treatments.map((treatment, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {treatment}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="text-right space-y-2 ml-4">
                  <div className="text-lg font-bold text-gray-900">₹{bill.amount.toLocaleString()}</div>
                  <div className="flex flex-col space-y-1">
                    {bill.status === 'Paid' ? (
                      <>
                        <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-xs hover:bg-gray-200 transition-colors">
                          Download PDF
                        </button>
                        <button className="bg-green-100 text-green-700 px-3 py-1 rounded text-xs hover:bg-green-200 transition-colors">
                          Receipt
                        </button>
                      </>
                    ) : bill.status === 'Pending' ? (
                      <>
                        <button className="bg-teal-500 text-white px-3 py-1 rounded text-xs hover:bg-teal-600 transition-colors">
                          Pay Now
                        </button>
                        <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-xs hover:bg-blue-200 transition-colors">
                          View Details
                        </button>
                      </>
                    ) : (
                      <>
                        <button className="bg-blue-500 text-white px-3 py-1 rounded text-xs hover:bg-blue-600 transition-colors">
                          Schedule
                        </button>
                        <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-xs hover:bg-gray-200 transition-colors">
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
        
        {/* Payment History Summary */}
        <div className="mt-8 pt-6 border-t">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">5</div>
              <div className="text-sm text-gray-600">Total Invoices</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">3</div>
              <div className="text-sm text-gray-600">Paid Bills</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">1</div>
              <div className="text-sm text-gray-600">Pending Payment</div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-8 pt-6 border-t">
          <h4 className="text-lg font-semibold mb-4 text-gray-800">Available Payment Methods</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
              <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center mr-3">
                <span className="text-white text-xs font-bold">UPI</span>
              </div>
              <div>
                <p className="font-medium text-gray-800">UPI Payment</p>
                <p className="text-sm text-gray-600">Instant & Secure</p>
                <p className="text-xs text-green-600">Recommended</p>
              </div>
            </div>
            
            <div className="flex items-center p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
              <div className="w-12 h-8 bg-green-600 rounded flex items-center justify-center mr-3">
                <span className="text-white text-xs font-bold">CARD</span>
              </div>
              <div>
                <p className="font-medium text-gray-800">Credit/Debit Card</p>
                <p className="text-sm text-gray-600">Visa, Mastercard</p>
                <p className="text-xs text-blue-600">2% processing fee</p>
              </div>
            </div>
            
            <div className="flex items-center p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
              <div className="w-12 h-8 bg-orange-600 rounded flex items-center justify-center mr-3">
                <span className="text-white text-xs font-bold">NET</span>
              </div>
              <div>
                <p className="font-medium text-gray-800">Net Banking</p>
                <p className="text-sm text-gray-600">All major banks</p>
                <p className="text-xs text-gray-500">No extra charges</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 pt-6 border-t">
          <h4 className="text-lg font-semibold mb-4 text-gray-800">Quick Actions</h4>
          <div className="flex flex-wrap gap-3">
            <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors text-sm">
              Pay All Pending (₹12,500)
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm">
              Download All Receipts
            </button>
            <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors text-sm">
              Payment History Report
            </button>
            <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm">
              Set Auto-Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BillsContent;
