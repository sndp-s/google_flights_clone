import { create } from 'zustand';
import dayjs from 'dayjs';
import TRIP_TYPE from './constants/constants.tripTypes';
import CABIN_CLASS_TYPES from './constants/constants.cabinClassTypes';

const useStore = create((set) => ({
  originAirport: null,
  setOriginAirport: (airport) => set({ originAirport: airport }),

  destinationAirport: null,
  setDestinationAirport: (airport) => set({ destinationAirport: airport }),

  journeyDate: dayjs(),
  setJourneyDate: (journeyDate) => set({ journeyDate }),

  tripType: Object.entries(TRIP_TYPE)[0][0],
  setTripType: (tripType) => set({ tripType }),

  cabinClass: Object.entries(CABIN_CLASS_TYPES)[0][0],
  setCabinClass: (cabinClass) => set({ cabinClass }),
}));

export default useStore;
