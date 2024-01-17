import React, {useState} from 'react';

function MyComponent(){

    const [name, setName] = useState();

    const updateName = () => {
        setName("Spongebob");
    }

    return(<div>
            <p>Nmae: {name}</p>
            <button onClick={updateName}>Set Name</button>
           </div>);
}

export default MyComponent