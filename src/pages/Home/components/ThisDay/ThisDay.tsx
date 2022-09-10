import React from "react";
import GlobalSVGSelector from "../../../../assets/images/icons/global/GlobalSVGSelector";
import s from "./ThisDay.module.scss";

interface Props {}

const ThisDay = (props: Props) => {
  return (
    <div className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.top__block_wrapper}>
          <div className={s.this__temperature}>36°</div>
          <div className={s.this__currant_day}>Сегодня</div>
        </div>
        <GlobalSVGSelector id="sun" />
      </div>
      <div className={s.bottom__block}>
        <div className={s.this__time}>
          Время: <span>20:22</span>
        </div>
        <div className={s.this__city}>
          Город: <span>Н.Новгород</span>
        </div>
      </div>
    </div>
  );
};

export default ThisDay;
