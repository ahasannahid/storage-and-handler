import React, { useEffect, useState } from 'react';
import { getTotal } from '../../Utilities/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';

// import { add } from '../../Utilities/calculate';
// import add from '../Utilities/calculate';

const Cosmetics = () => {
    // const first = 55;
    // const second = 45;
    // const total = add(first, second)
    // const cosmetics = [
    //     {
    //       "id": "632df5f9ea7fdedf69aadb90",
    //       "price": 352,
    //       "name": "Chase Salinas"
    //     },
    //     {
    //       "id": "632df5f9dddc704efb8a7951",
    //       "price": 28,
    //       "name": "Fox Foster"
    //     },
    //     {
    //       "id": "632df5f9004e2307a5148dff",
    //       "price": 458,
    //       "name": "Leslie Bradley"
    //     },
    //     {
    //       "id": "632df5f9cdd9d808c20e8808",
    //       "price": 479,
    //       "name": "Fletcher Combs"
    //     },
    //     {
    //       "id": "632df5f9422576cee569ca47",
    //       "price": 153,
    //       "name": "Teri Oneil"
    //     },
    //     {
    //       "id": "632df5f9708e8e845b91e634",
    //       "price": 143,
    //       "name": "Marie Daugherty"
    //     },
    //     {
    //       "id": "632df5f9644510c13d13d098",
    //       "price": 48,
    //       "name": "Bobbie Stokes"
    //     }
    //   ]

    const [cosmetics, setCosmetics] = useState([]);

    useEffect( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCosmetics(data))
       
    },[])

    const total = getTotal(cosmetics);


    return (
        <div >
            <h1>Welcome to my Store</h1>
            <p>Total Money Needed: ${total}</p>
            {/* <p>Total: {total}</p> */}
            {
                cosmetics.map(cosmetic => <Cosmetic 
                    key={cosmetic.id}
                    cosmetic = {cosmetic} 
                    ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;