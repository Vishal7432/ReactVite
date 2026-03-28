import { createContext, useContext } from "react";

const ThemeContext = createContext({
  themeMode: "light",
  themeDark: () => {},
  themeLight: () => {},
});
export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}
