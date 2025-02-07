import { useState, useEffect } from "react";
import useStore from "../../store";
import { fetchFlightsSearch } from "../../apiservice";
import { debounce } from "@mui/material";

const useSearchResults = () => {
  const originAirport = useStore((state) => state.originAirport);
  const destinationAirport = useStore((state) => state.destinationAirport);
  const journeyDate = useStore((state) => state.journeyDate);
  const tripType = useStore((state) => state.tripType);
  const cabinClass = useStore((state) => state.cabinClass);
  const passengersCount = useStore((state) => state.passengersCount);

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (
      originAirport &&
      destinationAirport &&
      journeyDate &&
      tripType &&
      cabinClass &&
      passengersCount
    ) {
      console.log('hello from use effect')
      const clear = debounce(async () => {
        try {
          setLoading(true);
          const response = await fetchFlightsSearch(
            originAirport.navigation.relevantFlightParams.skyId, // originSkyId
            destinationAirport.navigation.relevantFlightParams.skyId, // destinationSkyId
            originAirport.navigation.relevantFlightParams.entityId, // originEntityId
            destinationAirport.navigation.relevantFlightParams.entityId, // destinationEntityId
            journeyDate.format('YYYY-MM-DD'), // date
            null, // returnDate
            cabinClass, // cabinClass
            passengersCount.adults, // adults
            passengersCount.childrens, // childrens
            passengersCount.infants, // infants
          );

          // ensure that there is data indeed
          // render a load more button in case there are more flights to be fetched (data > context > incomplete)

          // setResults(flights);
        } catch (error) {
          console.log('Failed to fetch flight search results');
          console.error(error);
          setError('Failed to fetch flight search results!');
        } finally {
          setLoading(false);
        }
      }, 200);

      return () => clear();
    }
  }, [
    originAirport,
    destinationAirport,
    journeyDate,
    tripType,
    cabinClass,
    passengersCount
  ]);

  return { results, loading, error }
};

export default useSearchResults;
