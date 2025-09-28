"use client";
import React from 'react';
import Header from './Header';
import DashboardContent from './DashboardContent';
import HospitalContent from './HospitalContent';
import AnalyticsContent from './AnalyticsContent';
import SettingsContent from './SettingsContent';
import BillsContent from './BillsContent';

interface MainContentProps {
  activeSection: string;
}

const MainContent: React.FC<MainContentProps> = ({ activeSection }) => {
  return (
    <div className="flex-1">
      <Header />
      
      <div className="p-6">
        {activeSection === 'dashboard' && <DashboardContent />}
        {activeSection === 'hospital' && <HospitalContent />}
        {activeSection === 'analytics' && <AnalyticsContent />}
        {activeSection === 'settings' && <SettingsContent />}
        {activeSection === 'bills' && <BillsContent />}
      </div>
    </div>
  );
};

export default MainContent;
