import React from "react";
import s from "./ThisDayInfo.module.scss";
import { Item } from "./ThisDayInfo";
import IndicatorSVGSelector from "../../../../assets/images/icons/global/indicators/indicatorSVGSelector";

interface Props {
  item: Item;
}

const ThisDayItemCard = ({ item }: Props) => {
  const { iconId, title, value } = item;
  return (
    <div className={s.item}>
      <div className={s.indicator}>
        <IndicatorSVGSelector id={iconId} />
      </div>
      <div className={s.indicator__title}>{title}</div>
      <div className={s.indicator__value}>{value}</div>
    </div>
  );
};

export default ThisDayItemCard;
