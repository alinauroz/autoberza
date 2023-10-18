export const set = (key: string, data: unknown) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const get = (key: string) => {
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  } else {
    return null;
  }
};
