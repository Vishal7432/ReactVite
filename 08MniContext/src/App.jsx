import { useState } from "react";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import UserContextProvider from "./Context/UserContextProvider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserContextProvider>
      <h1>Vite + React Context Api</h1>
      <Login />
      <Profile />
      <button onClick={() => setCount((count) => count + 1)}>
        Count is {count}
      </button>
    </UserContextProvider>
  );
}

export default App;
