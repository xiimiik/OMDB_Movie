import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export const useStorage = (initialValue: string[], key: string) => {
  const getValue = () => {
    const cookie = Cookies.get(key);

    if (cookie) {
      return JSON.parse(cookie);
    }

    return initialValue;
  };

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    Cookies.set(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};
