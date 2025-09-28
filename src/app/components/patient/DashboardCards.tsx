import React from 'react';
import { CalendarDaysIcon, PlayIcon, DocumentTextIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

interface CardData {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  bgColor: string;
  hoverColor: string;
  count?: number;
}

const DashboardCards: React.FC = () => {
  const cards: CardData[] = [
    { title: 'Appointment', icon: CalendarDaysIcon, bgColor: 'bg-teal-500', hoverColor: 'hover:bg-teal-600', count: 24 },
    { title: 'Session', icon: PlayIcon, bgColor: 'bg-green-500', hoverColor: 'hover:bg-green-600', count: 8 },
    { title: 'Report', icon: DocumentTextIcon, bgColor: 'bg-blue-500', hoverColor: 'hover:bg-blue-600', count: 12 },
    { title: 'Feedback', icon: ChatBubbleLeftRightIcon, bgColor: 'bg-purple-500', hoverColor: 'hover:bg-purple-600', count: 5 }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <div key={index} className={`${card.bgColor} ${card.hoverColor} rounded-xl p-6 text-white cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-lg`}>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-1">{card.title}</h3>
                {card.count && <p className="text-white text-opacity-80 text-sm mb-2">{card.count} items</p>}
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardCards;
