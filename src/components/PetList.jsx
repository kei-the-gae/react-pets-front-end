const PetList = ({ petList, updateSelected }) => {
    const pets = petList.map(pet => (
        <a key={pet._id} onClick={() => updateSelected(pet)}>
            <li>{pet.name}</li>
        </a>
    ));
    return (
        <div>
            <h1>Pet List</h1>
            {!petList.length ? <h2>No Pets Yet!</h2> : <ul>{pets}</ul>}
        </div>
    );
};

export default PetList;