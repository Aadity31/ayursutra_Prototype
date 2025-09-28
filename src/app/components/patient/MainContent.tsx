"use client";
import React from 'react';
import Header from './Header';
import DashboardContent from './DashboardContent.tsx';
import HospitalContent from './HospitalContent.tsx';
import AnalyticsContent from './AnalyticsContent.tsx';
import SettingsContent from './SettingsContent.tsx';
import BillsContent from './BillsContent.tsx';

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
