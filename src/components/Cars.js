
import Car from "./Car";

const Cars = ({cars, setCarUpdate,setCarDelete}) => {
    return (
        <div>
            {cars.map(car=><Car key={cars.id} car={car} setCarDelete={setCarDelete} setCarUpdate={setCarUpdate}/>)}
        </div>
    );
};

export default Cars;