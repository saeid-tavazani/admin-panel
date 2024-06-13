import { useQuery } from "react-query";
import Axios from "./axios";

type userType = {
  id: number;
  name: string;
  email: string;
  password: string;
};

export const signIn = (email: string, password: string) => {
  return useQuery<userType[], Error>(
    ["user", email, password],
    () =>
      Axios.get(`user?email=${email}&password=${password}`).then(
        (res) => res.data
      ),
    {
      enabled: !!email && !!password,
    }
  );
};
