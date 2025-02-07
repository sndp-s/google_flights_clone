import dayjs from "dayjs";

// Helper function to normalize values (handles special data types)
const normalizeValue = (value) => {
  if (dayjs.isDayjs(value)) {
    // Normalize dayjs object to ISO format (you can change to any other format you prefer)
    return value.toISOString();
  }

  if (Array.isArray(value)) {
    // Normalize arrays by serializing each item separately
    return value.map(item => normalizeValue(item));
  }

  if (typeof value === 'object' && value !== null) {
    // If it's an object, recurse into it and flatten it
    return flattenObject(value);
  }

  // Return primitive values (strings, numbers, booleans, etc.) directly
  return value;
};

// Helper function to flatten an object into key-value pairs
const flattenObject = (obj, prefix = '') => {
  let result = {};

  for (const [key, value] of Object.entries(obj)) {
    const newKey = prefix ? `${prefix}[${key}]` : key;
    
    // If the value is an object or array, recurse into it
    if (typeof value === 'object' && value !== null) {
      Object.assign(result, flattenObject(value, newKey));
    } else {
      result[newKey] = normalizeValue(value);
    }
  }

  return result;
};

// Function to convert your store state to a query string
const buildQueryStringFromState = (state) => {
  const flattenedState = flattenObject(state);
  const urlParams = new URLSearchParams();

  // Loop through the flattened state and append each key-value pair to the URLSearchParams instance
  for (const [key, value] of Object.entries(flattenedState)) {
    if (Array.isArray(value)) {
      // If it's an array, append each value with [] notation
      value.forEach(item => urlParams.append(key, item));
    } else {
      urlParams.append(key, value);
    }
  }

  return urlParams.toString();
};


////////////////////////////////////////////////////////////////

// import dayjs from "dayjs";

// Helper function to decode the value back to the original format
const decodeValue = (value) => {
  if (!isNaN(value)) {
    // If the value is a number, parse it to a number
    return Number(value);
  }

  // If the value is a valid date string (ISO 8601 format), we parse it back to a dayjs object
  if (dayjs(value).isValid()) {
    return dayjs(value);
  }

  // Return the value as-is (string or boolean)
  return value;
};

// Helper function to reconstruct nested objects from flattened query keys
const reconstructObject = (params) => {
  const result = {};

  for (const key in params) {
    const keys = key.split('[').map(k => k.replace(']', '')); // Split keys by [ and ]
    let current = result;

    keys.forEach((k, i) => {
      if (i === keys.length - 1) {
        current[k] = decodeValue(params[key]);
      } else {
        current[k] = current[k] || {};
        current = current[k];
      }
    });
  }

  return result;
};

// Function to parse a query string into an object (similar to your store state)
const parseQueryStringToState = (queryString) => {
  const params = new URLSearchParams(queryString);
  const parsedParams = {};

  // Extract the query parameters as key-value pairs
  for (const [key, value] of params.entries()) {
    parsedParams[key] = value;
  }

  // Reconstruct the object from the flattened query parameters
  return reconstructObject(parsedParams);
};
