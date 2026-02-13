import { useState, useEffect } from "react";

export default function Joker() {
  let [joke, setJoke] = useState({});

  const URL = "https://official-joke-api.appspot.com/random_joke";

  const getNewJoke = async () => {
    let reponse = await fetch(URL);
    let jsonReponse = await reponse.json();
    setJoke({ setup: jsonReponse.setup, punchline: jsonReponse.punchline });
  };

  useEffect(() => {
    async function getFirstJoke() {
      let reponse = await fetch(URL);
      let jsonReponse = await reponse.json();
      console.log(jsonReponse);
      setJoke({ setup: jsonReponse.setup, punchline: jsonReponse.punchline });
    }
    getFirstJoke();
  }, []);

  return (
    <div>
      <h3>Jokes!</h3>
      <h2>{joke.setup}</h2>
      <h2>{joke.punchline}</h2>
      <button onClick={getNewJoke}>New Jokes</button>
    </div>
  );
}
