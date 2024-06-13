import { createContext, ReactNode, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

type UserProviderProps = {
  children: ReactNode;
};

type UserType = {
  id: number;
  name: string;
  email: string;
};

type UserContextType = {
  user: UserType | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
};

const UserContext = createContext<UserContextType>({} as UserContextType);

export const useUserContext = () => {
  const context = useContext(UserContext);
  return context;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useLocalStorage<UserType | null>("user-info", null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
