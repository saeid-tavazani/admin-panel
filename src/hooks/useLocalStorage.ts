import { useState, useEffect } from "react";
import Cookie from "js-cookie";

export function useLocalStorage<T>(key: string, initalValue: T | (() => T)) {
  const [value, setValue] = useState<T>(() => {
    const jsonValue = Cookie.get(key);
    if (jsonValue != undefined) {
      return JSON.parse(jsonValue);
    }
    if (typeof initalValue === "function") {
      return initalValue as () => T;
    } else {
      return initalValue;
    }
  });
  useEffect(() => {
    if (value) {
      Cookie.set(key, JSON.stringify(value), { expires: 7 });
    }
  }, [key, value]);
  return [value, setValue] as [typeof value, typeof setValue];
}
