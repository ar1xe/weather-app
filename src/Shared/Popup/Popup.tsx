import React from "react";
import GlobalSVGSelector from "../../assets/images/icons/global/GlobalSVGSelector";
import { Item } from "../../pages/Home/components/ThisDayInfo/ThisDayInfo";
import ThisDayItemCard from "../../pages/Home/components/ThisDayInfo/ThisDayItemCard";
import s from "./Popup.module.scss";

const Popup = () => {
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
    <>
      <div className={s.blur}></div>
      <div className={s.popup}>
        <div className={s.this__day_items}>
          {items.map((item: Item) => (
            <ThisDayItemCard key={item.iconId} item={item} />
          ))}
        </div>
        <div className={s.close}>
          <GlobalSVGSelector id="close" />
        </div>
      </div>
    </>
  );
};

export default Popup;
