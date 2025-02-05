import AirportInput from "../AirportInput/AirportInput";
import useStore from "../../store";

const DestinationAirportInput = (props) => {
  const destinationAirport = useStore((state) => state.destinationAirport);
  const setDestinationAirport = useStore((state) => state.setDestinationAirport);

  return (
    <AirportInput
      label={'Where to?'}
      selectedAirport={destinationAirport}
      onAirportChange={setDestinationAirport}
      {...props}
    />
  )
};

export default DestinationAirportInput;
