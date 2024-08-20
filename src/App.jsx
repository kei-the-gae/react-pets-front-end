import { useState, useEffect } from 'react';
import * as petService from './services/petService';
import PetList from './components/PetList';
import PetDetail from './components/PetDetail';
import PetForm from './components/PetForm';

const App = () => {
  const [petList, setPetList] = useState([]);
  const [selected, setSelected] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

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

  const handleFormView = (pet) => {
    if (!pet.name) setSelected(null);
    setIsFormOpen(!isFormOpen);
  };

  const handleAddPet = async (formData) => {
    try {
      const newPet = await petService.create(formData);
      if (newPet.error) {
        throw new Error(newPet.error);
      };
      setPetList([newPet, ...petList]);
      setIsFormOpen(false);
    } catch (err) {
      console.log(err);
    };
  };

  const handleUpdatePet = async (formData, petId) => {
    try {
      const updatedPet = await petService.updatePet(formData, petId);
      if (updatedPet.error) {
        throw new Error(updatedPet.error);
      };
      const updatedPetList = petList.map(pet => pet._id !== updatedPet._id ? pet : updatedPet);
      setPetList(updatedPetList);
      setSelected(updatedPet);
      setIsFormOpen(false);
    } catch (err) {
      console.log(err);
    };
  };

  return (
    <>
      <PetList
        petList={petList}
        updateSelected={updateSelected}
        handleFormView={handleFormView}
        isFormOpen={isFormOpen}
      />
      {isFormOpen ? (
        <PetForm handleAddPet={handleAddPet} handleUpdatePet={handleUpdatePet} selected={selected} />
      ) : (
        <PetDetail selected={selected} handleFormView={handleFormView} />
      )}
    </>
  );
};

export default App;