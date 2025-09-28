
"use client";
import React, { useState } from 'react';
import Sidebar from '../../components/patient/Sidebar';
import MainContent from '../../components/patient/MainContent';
import AyuuChatbot from '../../components/patient/AyuuChatbot';

const Dashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('dashboard');

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />
      
      <div className="flex-1 flex flex-col">
        <MainContent activeSection={activeSection} />
      </div>
      
      <AyuuChatbot />
    </div>
  );
};

export default Dashboard;
