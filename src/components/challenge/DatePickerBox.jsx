import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default function DatePickerBox (props) {
    const [startDate, setStartDate] = useState(new Date());

    const setDate = (nowDate) => {
      setStartDate(nowDate);
      props.setValue(nowDate.toLocaleDateString());

    }
    return (
      <DatePicker format="yyyy-mm-dd" selected={startDate} onChange={setDate} />
    );
  };

  