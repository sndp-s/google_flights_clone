import { create } from 'zustand';
import dayjs from 'dayjs';
import TRIP_TYPE from './constants/constants.tripTypes';

const useStore = create((set) => ({
  originAirport: null,
  setOriginAirport: (airport) => set({ originAirport: airport }),

  destinationAirport: null,
  setDestinationAirport: (airport) => set({ destinationAirport: airport }),

  journeyDate: dayjs(),
  setJourneyDate: (journeyDate) => set({ journeyDate }),

  tripType: Object.entries(TRIP_TYPE)[0][0],
  setTripType: (tripType) => set({ tripType }),
}));

export default useStore;
