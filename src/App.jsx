import { useState, useEffect } from 'react';
import * as petService from './services/petService';
import PetList from './components/PetList';
import PetDetail from './components/PetDetail';

const App = () => {
  const [petList, setPetList] = useState([]);
  const [selected, setSelected] = useState(null);

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

  const updateSelected = pet => {
    setSelected(pet);
  };

  return (
    <>
      <h1>Hello World</h1>
      <PetList petList={petList} updateSelected={updateSelected} />
      <PetDetail selected={selected} />
    </>
  );
};

export default App;