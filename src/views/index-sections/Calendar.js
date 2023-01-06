import * as React from 'react';
import dayjs from 'dayjs';
// import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

var toArray = require('dayjs/plugin/toArray')
dayjs.extend(toArray)

export default function Calendar(props) {
  const [value, setValue] = React.useState(dayjs('2022-04-07'));


  return (
    <div className='calendar-div'>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        orientation="portrait"
        openTo="day"
        value={value}
        // shouldDisableDate={false}
        onChange={(newValue) => {
          setValue(newValue);
          props.handleCalChange(newValue.toArray())
        }}
        // renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
    </div>
  );
}
