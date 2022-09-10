import React from "react";
import s from "./Days.module.scss";

export interface Tab {
  id: string;
  value: string;
}

const Tabs = () => {
  const tabs = [
    {
      id: "1",
      value: "На неделю",
    },
    {
      id: "2",
      value: "На 10 дней",
    },
    {
      id: "3",
      value: "На месяц",
    },
  ];

  return (
    <div className={s.tabs}>
      <div className={s.tabs__wrapper}>
        {tabs.map((tab: Tab) => (
          <div className={s.tab} key={tab.id}>
            {tab.value}
          </div>
        ))}
      </div>
      <div className={s.cancel}>Отменить</div>
    </div>
  );
};

export default Tabs;
