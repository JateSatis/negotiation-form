import React from "react";
import DatePicker from "react-datepicker";

const DateSelect = ({ value, setDate }) => {
  return (
    <DatePicker
      placeholderText="Выбрать время"
      selected={value}
      onChange={(date) => setDate(date)}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="time"
      dateFormat="MMMM d, yyyy h:mm aa"
    />
  );
};

export default DateSelect;
