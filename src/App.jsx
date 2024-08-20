import { useState, useEffect } from 'react';
import * as petService from './services/petService';

const App = () => {
  const [petList, setPetList] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const pets = await petService.index();
        if (pets.error) {
          throw new Error(pets.error);
        };
        setPetList(pets);
      } catch (err) {
        console.log(err);
      };
    };
    fetchPets();
  }, []);

  return <h1>Hello world!</h1>
};

export default App;