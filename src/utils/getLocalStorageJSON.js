export const getLocalStorageJSON = () => {
  const localStorageKey = localStorage.key(0);
  const localStorageValue = localStorage.getItem(localStorageKey);
  const resultObj = JSON.parse(localStorageValue) || [];
  return resultObj;
};
