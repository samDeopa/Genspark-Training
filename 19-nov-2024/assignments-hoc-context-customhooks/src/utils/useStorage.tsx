const useStorage = () => {
  const getData = (key: string) => {
    return window.localStorage.getItem(key);
  };
  const setData = (key: string, value: string) => {
    return window.localStorage.setItem(key, value);
  };
  const clearAll = () => {
    window.localStorage.clear();
  };
  const hasData = (key: string) => {
    return window.localStorage.getItem(key) ? true : false;
  };
  const setAll = (list: { key: string; value: string }[]) => {
    list.forEach((item) => window.localStorage.setItem(item.key, item.value));
  };
  const getAll = (list: string[]) => {
    return list.map((item) => window.localStorage.getItem(item));
  };
  return { getData, setData, clearAll, hasData, setAll, getAll };
};

export { useStorage };
