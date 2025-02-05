import { DatePicker } from "@mui/x-date-pickers";
import dayjs from 'dayjs';
import useStore from "../../store";

const JourneyDatePicker = (props) => {
  const journeyDate = useStore((state) => state.journeyDate);
  const setJourneyDate = useStore((state) => state.setJourneyDate);

  return (
    <DatePicker
      label='Select Date'
      value={journeyDate}
      onChange={setJourneyDate}
      minDate={dayjs()}
      {...props}
    />
  );
};

export default JourneyDatePicker;
