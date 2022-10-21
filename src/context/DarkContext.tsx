import { createContext, ReactNode, useState } from "react";
interface ContextProps {
  mode: any;
  handleChange: (event: any) => void;
}
const DarkModeContext: React.Context<ContextProps> = createContext({
  mode: "",
  handleChange: (event: any) => {},
});

export const DarkModeContextProvider = (props: { children: ReactNode }) => {
  const [mode, setMode] = useState<any>("light");
  const handledark = () => {
    setMode(() => (mode === "light" ? "dark" : "light"));
  };
  return (
    <DarkModeContext.Provider value={{ mode: mode, handleChange: handledark }}>
      {props.children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContext;
