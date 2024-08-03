
import axios from "axios";
import { useEffect, useState } from "react";
import "./dictionary.css"

const Dictionary = () => {
  const [dictionary, setDictionary] = useState([]);
  const [selectedDefinition, setSelectedDefinition] = useState({});

  useEffect(() => {
    fetchDictionary();
  }, []);

  const fetchDictionary = async () => {
    try {
      const { data } = await axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/king");
      setDictionary(data[0].meanings); 
    } catch (err) {
      console.error("Error fetching dictionary data", err);
    }
  };

  const fetchDefinition = async (partOfSpeech) => {
    try {
      const definition = dictionary.find(
        (item) => item.partOfSpeech === partOfSpeech
      );
      setSelectedDefinition(definition);
    } catch (err) {
      console.error("Error fetching definition", err);
    }
  };

  const selectHandler = (event) => {
    const partOfSpeech = event.target.value;
    fetchDefinition(partOfSpeech);
  };

  return (
    <>
      <select onChange={selectHandler}>
        {dictionary.map((each, index) => (
          <option key={index} value={each.partOfSpeech}>
            {each.partOfSpeech}
          </option>
        ))}
      </select>
      {Object.keys(selectedDefinition).length > 0 && (
        <div className="box">
          <h3>Definitions:</h3>
          <ul>
            {selectedDefinition.definitions.map((def, index) => (
              <li key={index}>{def.definition}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Dictionary;

