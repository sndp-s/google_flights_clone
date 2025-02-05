import { create } from 'zustand';

const useStore = create((set) => ({
  originAirport: null,
  setOriginAirport: (airport) => set({ originAirport: airport }),

  destinationAirport: null,
  setDestinationAirport: (airport) => set({ destinationAirport: airport }),
}));

export default useStore;
