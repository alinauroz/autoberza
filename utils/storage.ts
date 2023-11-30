export const set = (key: string, data: unknown) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const get = (key: string) => {
  if (typeof window === 'undefined') return null;
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  } else {
    return null;
  }
};
