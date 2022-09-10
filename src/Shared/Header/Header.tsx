import React from "react";
import GlobalSVGSelector from "../../assets/images/icons/global/GlobalSVGSelector";
import s from "./Header.module.scss";
import Select from "react-select";

const Header = () => {
  const options = [
    { value: "city-1", label: "Н.Новгород" },
    { value: "city-2", label: "Ростов на Дону" },
    { value: "city-3", label: "Москва" },
  ];

  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: "#6AC5F0",
      width: "200px",
      height: "35px",
      border: "none",
      borderRadius: "10px",
      zIndex: 100,
    }),
  };

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSVGSelector id="header-logo" />
        </div>
        <div className={s.title}>Your Weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme}>
          <GlobalSVGSelector id="change_theme" />
        </div>
        <Select
          defaultValue={options[0]}
          styles={colorStyles}
          options={options}
        />
      </div>
    </header>
  );
};

export default Header;
