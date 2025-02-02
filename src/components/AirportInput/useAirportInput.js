import { useState } from 'react';

const useAirportInput = (selectedAirport, onAirportChange) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (newInputValue) => {
    setInputValue(newInputValue);
    if (newInputValue === '') {
      onAirportChange(null); // Notify parent to reset selected airport
    }
  };

  const handleBlur = () => {
    if (inputValue !== '' && !selectedAirport) {
      setInputValue(''); // Clear input if no option is selected
    }
  };

  return { inputValue, handleInputChange, handleBlur };
};

export default useAirportInput;
