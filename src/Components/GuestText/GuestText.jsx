import React from "react";
import "./guest-text.css";

const GuestText = () => {
  return (
    <div className="main-guest-component">
      <div className="title">Дорогі наші друзі та рідні!</div>
      <div className="description">
        {"ви отримали це посилання, а значить ми поспішаємо повідомити вам важливу новину!".toUpperCase()}
      </div>
      <div className="title">Ми одружуємось !</div>
      <div className="description">
        {"і ми дуже хочемо поділити з вами це щасливе свято".toUpperCase()}
      </div>
      <div className="footer-title-guest">
        {"чекаємо вас ан нашому весіллі м 17:00".toUpperCase()}
      </div>
    </div>
  );
};

export default GuestText;
