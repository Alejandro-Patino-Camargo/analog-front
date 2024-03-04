import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface AppContextProps {
  userInput: string;
  setUserInput: Dispatch<SetStateAction<string>>;
  success: boolean;
  setSuccess: Dispatch<SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userInput, setUserInput] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  return (
    <AppContext.Provider
      value={{ userInput, setUserInput, success, setSuccess }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};
