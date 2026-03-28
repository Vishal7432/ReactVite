import { useState, useEffect } from "react";
import { ThemeProvider } from "./Contexts/Theme";
import ThemeBtn from "../Components/ThemeBtn";
import Card from "../Components/Card";

function App() {
  const [count, setCount] = useState(0);

  const [themeMode, setThemeMode] = useState("light");

  const themeDark = () => {
    setThemeMode("dark");
  };

  const themeLight = () => {
    setThemeMode("light");
  };

  /// Actual work is here, we are providing the themeMode and the functions to change the theme to the entire app using ThemeProvider
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <>
      <ThemeProvider value={{ themeMode, themeDark, themeLight }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <h1 className="text-3xl font-bold underline text-red-500">
            Hello world!
          </h1>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={() => setCount(count + 1)}
          >
            Count is {count}
          </button>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
