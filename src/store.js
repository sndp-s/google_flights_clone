import { create } from 'zustand';
import dayjs from 'dayjs';

const useStore = create((set) => ({
  originAirport: null,
  setOriginAirport: (airport) => set({ originAirport: airport }),

  destinationAirport: null,
  setDestinationAirport: (airport) => set({ destinationAirport: airport }),

  journeyDate: dayjs(),
  setJourneyDate: (journeyDate) => set({ journeyDate }),
}));

export default useStore;
