import React, { useContext } from "react";
import { MyContext } from "../App.js";

import Select from "./Select.js";
import DateSelect from "./DateSelect.js";

const Form = () => {
  const { nullNegotiationData, negotiation, setNegotiation } =
    useContext(MyContext);

  const updateData = (name, value) => {
    setNegotiation({
      ...negotiation,
      [name]: value,
    });
  };

  const floors = Array.from({ length: 25 }, (_, index) => 3 + index);
  const rooms = Array.from({ length: 10 }, (_, index) => 1 + index);

  return (
    <div className="form">
      <h1>Хотите забронировать переговорочную?</h1>
      <p>Заполните все поля, и мы с вами свяжемся</p>
      <div className="form-line">
        <Select
          name="Башня"
          value={negotiation.tower}
          setValue={(value) => updateData("tower", value)}
          variants={["A", "B"]}
        />
        <Select
          name="Этаж"
          value={negotiation.floor}
          setValue={(value) => updateData("floor", value)}
          variants={floors}
        />
      </div>
      <div className="form-line">
        <DateSelect
          value={negotiation.date}
          setDate={(value) => updateData("date", value)}
        />
        <Select
          name="Переговорочная"
          value={negotiation.room}
          setValue={(value) => updateData("room", value)}
          variants={rooms}
        />
      </div>
      <div className="form-line">
        <div className="select-wrapper">
          <input
            className="select-view comment"
            type="text"
            value={negotiation.comment}
            onChange={(event) => updateData("comment", event.target.value)}
            placeholder="Напишите комментарий"
          />
        </div>
      </div>
      <div className="form-line">
        <button className="button" onClick={() => console.log(negotiation)}>
          Вывести данные в консоль
        </button>
        <button
          className="button"
          onClick={() => setNegotiation(nullNegotiationData)}
        >
          Очистить данные
        </button>
      </div>
    </div>
  );
};

export default Form;
