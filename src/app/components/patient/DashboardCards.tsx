import React from 'react';
import { 
  CalendarDaysIcon,
  ChartBarSquareIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  ArrowTrendingUpIcon,
  SparklesIcon,
  StarIcon
} from '@heroicons/react/24/outline';

interface CardData {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  gradient: string;
  hoverGradient: string;
  count?: number;
  subtitle?: string;
  trend?: string;
  trendIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const DashboardCards: React.FC = () => {
  const cards: CardData[] = [
    {
      title: 'Appointments',
      icon: CalendarDaysIcon,
      gradient: 'from-teal-500 via-teal-600 to-cyan-600',
      hoverGradient: 'from-teal-600 via-teal-700 to-cyan-700',
      count: 12,
      subtitle: 'Sessions completed',
      trend: '+2 this week',
      trendIcon: ArrowTrendingUpIcon
    },
    {
      title: 'Progress',
      icon: ChartBarSquareIcon,
      gradient: 'from-green-500 via-emerald-600 to-teal-600',
      hoverGradient: 'from-green-600 via-emerald-700 to-teal-700',
      count: 85,
      subtitle: '% Health improvement',
      trend: '+15% this month',
      trendIcon: ArrowTrendingUpIcon
    },
    {
      title: 'Reports',
      icon: DocumentTextIcon,
      gradient: 'from-blue-500 via-indigo-600 to-purple-600',
      hoverGradient: 'from-blue-600 via-indigo-700 to-purple-700',
      count: 3,
      subtitle: 'Health reports available',
      trend: '1 new report',
      trendIcon: SparklesIcon
    },
    {
      title: 'Feedback',
      icon: ChatBubbleLeftRightIcon,
      gradient: 'from-purple-500 via-pink-500 to-rose-600',
      hoverGradient: 'from-purple-600 via-pink-600 to-rose-700',
      count: 4.8,
      subtitle: 'Average rating',
      trend: '5 reviews pending',
      trendIcon: StarIcon
    }
  ];

  const handleCardClick = (cardTitle: string) => {
    console.log(`${cardTitle} card clicked`);
    // Add navigation logic here with smooth transitions
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {cards.map((card, index) => {
        const Icon = card.icon;
        const TrendIcon = card.trendIcon;

        return (
          <div
            key={index}
            onClick={() => handleCardClick(card.title)}
            className="group relative cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Animated Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} rounded-2xl transform transition-all duration-300 group-hover:scale-105 shadow-lg group-hover:shadow-2xl`}></div>

            {/* Hover Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${card.hoverGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

            {/* Glassmorphism Layer */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20"></div>

            {/* Animated Particles */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <div className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
              <div className="absolute top-8 right-8 w-1 h-1 bg-white/20 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
            </div>

            {/* Content */}
            <div className="relative z-10 p-6 text-white">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-lg font-bold transition-all duration-300 group-hover:text-white/90">{card.title}</h3>
                    {card.trend && TrendIcon && (
                      <div className="flex items-center space-x-1 bg-white/20 rounded-full px-2 py-1">
                        <TrendIcon className="w-3 h-3" />
                        <span className="text-xs font-medium">{card.trend}</span>
                      </div>
                    )}
                  </div>

                  {card.count && (
                    <p className="text-3xl font-bold mb-1 transition-all duration-300 group-hover:scale-110 origin-left">
                      {card.title === 'Feedback' ? `${card.count}/5` : card.count}
                      {card.title === 'Progress' && '%'}
                    </p>
                  )}

                  {card.subtitle && (
                    <p className="text-white/80 text-sm font-medium transition-all duration-300 group-hover:text-white/70">
                      {card.subtitle}
                    </p>
                  )}

                  {card.trend && !TrendIcon && (
                    <div className="mt-2 inline-flex items-center bg-white/20 rounded-full px-2 py-1">
                      <span className="text-xs font-medium">{card.trend}</span>
                    </div>
                  )}
                </div>

                {/* Floating Icon */}
                <div className="relative">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110 group-hover:rotate-12">
                    <Icon className="w-7 h-7 transition-all duration-300 group-hover:scale-110" />
                  </div>

                  {/* Floating Animation Ring */}
                  <div className="absolute inset-0 border-2 border-white/30 rounded-2xl animate-ping opacity-0 group-hover:opacity-100"></div>
                </div>
              </div>

              {/* Progress Bar for specific cards */}
              {card.title === 'Progress' && (
                <div className="w-full bg-white/20 rounded-full h-1.5 mb-2 overflow-hidden">
                  <div 
                    className="bg-white h-1.5 rounded-full transition-all duration-1000 ease-out transform origin-left group-hover:scale-x-110"
                    style={{width: `${card.count}%`}}
                  ></div>
                </div>
              )}

              {/* Star Rating for Feedback card */}
              {card.title === 'Feedback' && (
                <div className="flex items-center space-x-1 mb-2">
                  {Array.from({ length: 5 }, (_, i) => (
                    <StarIcon
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(card.count as number) ? 'text-yellow-300 fill-current' : 'text-white/20'}`}
                    />
                  ))}
                  <span className="text-xs text-white/80 ml-2">({card.count}/5)</span>
                </div>
              )}

              {/* Interactive Bottom Section */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/20">
                <span className="text-xs text-white/70 font-medium">
                  {card.title === 'Appointments' && 'Next: Tomorrow'}
                  {card.title === 'Progress' && 'Improving'}
                  {card.title === 'Reports' && 'Updated today'}
                  {card.title === 'Feedback' && 'Recent reviews'}
                </span>

                <div className="flex items-center space-x-1 text-white/80 group-hover:text-white transition-colors duration-300">
                  <span className="text-xs font-medium">View</span>
                  <svg className="w-3 h-3 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Shine Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardCards;