import AirportInput from "../AirportInput/AirportInput";
import useStore from "../../store";

const OriginAirportInput = (props) => {
  const originAirport = useStore((state) => state.originAirport);
  const setOriginAirport = useStore((state) => state.setOriginAirport);

  return (
    <AirportInput
      label={'Where from?'}
      selectedAirport={originAirport}
      onAirportChange={setOriginAirport}
      {...props}
    />
  )
};

export default OriginAirportInput;
