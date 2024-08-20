const PetDetail = ({ selected }) => {
    if (!selected)
        return (
            <div>
                <h1>NO DETAILS</h1>
            </div>
        );
    return (
        <div>
            <h2>{selected.name}</h2>
            <p>Age: {selected.age}</p>
            <p>Breed: {selected.breed}</p>
        </div>
    );
};

export default PetDetail;