import React from 'react';

const AddCity = (props) => {
    const add = props.town;

    //   const s =  add.map((el) => {
    //         console.log(el);
    //     })
    return (
        <div className="header">
            {add.map((el) => (
                <div className="city" key={el.text}>{el.text }</div>
            ))} 
        </div>
    )
}

export default AddCity;