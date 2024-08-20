const PetDetail = ({ selected, handleFormView, handleRemovePet }) => {
    if (!selected)
        return (
            <div>
                <h1>NO DETAILS</h1>
            </div>
        );
    return (
        <div>
            <h1>{selected.name}</h1>
            <h2>Age: {selected.age}</h2>
            <h2>Breed: {selected.breed}</h2>
            <div>
                <button onClick={() => handleFormView(selected)}>Edit</button>
                <button onClick={() => handleRemovePet(selected._id)}>Delete</button>
            </div>
        </div>
    );
};

export default PetDetail;