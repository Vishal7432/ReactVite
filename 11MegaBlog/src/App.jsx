import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/AuthSlice";
import authService from "./appwrite/Auth"; // Assuming you have an authService to check authentication
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    // Simulate an authentication check (replace with real logic)
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ uesData: userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);
  return !loading ? (
    <div className="App flex flex-wrap min-h-screen bg-gray-400 justify-center ">
      <h1>Welcome to 11MegaBlog</h1>
      <div className="w-full flex flex-col justify-center items-center">
        <Header />
        <Footer />
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default App;
