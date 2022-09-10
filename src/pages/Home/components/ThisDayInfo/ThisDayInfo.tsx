import React from "react";
import s from "./ThisDayInfo.module.scss";
import ThisDayItemCard from "./ThisDayItemCard";

export interface Item {
  iconId: string;
  title: string;
  value: string;
}

const ThisDayInfo = () => {
  const items = [
    {
      iconId: "temp",
      title: "Температура",
      value: "36° - ощущается как 40°",
    },
    {
      iconId: "pressure",
      title: "Давление",
      value: "765 мм ртутного столба - нормальное",
    },
    {
      iconId: "precipitation",
      title: "Осадки",
      value: "Без осадков",
    },
    {
      iconId: "wind",
      title: "Ветер",
      value: "3 м/с юго-западный, легкий ветер",
    },
  ];

  return (
    <div className={s.this__day_info}>
      <div className={s.this__day_items}>
        {items.map((item: Item) => (
          <ThisDayItemCard key={item.iconId} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ThisDayInfo;
