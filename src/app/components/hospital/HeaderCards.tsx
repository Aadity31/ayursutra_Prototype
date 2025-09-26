import { FC } from "react";
import { KPI } from "../../types";

interface Props {
  cards: KPI[];
}

const HeaderCards: FC<Props> = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, idx) => (
        <div key={idx} className="bg-white shadow-md rounded-xl p-4 flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">{card.title}</p>
            <p className="text-xl font-bold text-gray-900">{card.value}</p>
            <p className={`text-sm ${card.status === "up" ? "text-green-600" : "text-red-600"}`}>
              {card.change}
            </p>
          </div>
          <div className="text-indigo-600 text-3xl">{card.icon}</div>
        </div>
      ))}
    </div>
  );
};

export default HeaderCards;
