import axios from "axios";
import { useEffect, useState } from "react";
import "./random_joke_generator.css";

const RandomJokeGenerator = () => {
  const [jokes, setJokes] = useState([]);


  useEffect(() => {
    fetchJokesData();
  }, []);

  const fetchJokesData = async () => {
    try {
      const { data, status } = await axios.get(
        "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=10"
      );
      console.log(data);
      setJokes(data.jokes); 
    } catch (err) {
      console.log("err", err);
    }
  };

  const jokeHandler = () => {
    fetchJokesData();
  };

  return (
    <div className="Card">
      <h3 style={{textAlign:"center"}}>Welcome to Random Joke Generator</h3>
      <button onClick={jokeHandler} className="btn1">Get Random Jokes</button>
      <div className="jokes">
        {jokes.map((joke, index) => (
          <div key={index}>
            {joke.type === "single" ? (
              <p>{joke.joke}</p>
            ) : (
              <p>
                {joke.setup} - {joke.delivery}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RandomJokeGenerator;
