import React from 'react';

// function Liste(props){
//     // numbers contient un tableau de chiffres envoyée par le pere [1,2,3,4,5]
//     const numbers= props.numbers;
//     const listItems= numbers.map((numbers) =>
//     <li>{numbers}</li>
//     );
//     return(
// <ul>{listItems}</ul>
//     )
// }

function Liste(props){
    // Numbers contient un tableau de chiffres envoyés par le père [4, 9, 3, 8, 2]
    const numbers = props.numbers;

    const listItems = numbers.map((number) => 
    <li key={number.toString()}>
        {number}
    </li>

    );
    return(
        <ul>{listItems}</ul>
    );
}

export default Liste;