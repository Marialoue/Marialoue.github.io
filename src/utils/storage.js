export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};

export const getLocalStorage = (key) => {
  const value = localStorage.getIten(key);
  return value;
};