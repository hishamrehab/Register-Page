import React from 'react';
import "./App.css"
const CountryOptionsArray = [
    { value: 'egypt', label: 'Egypt' },
    { value: 'afghanistan', label: 'Afghanistan' },
    { value: 'aland island', label: 'Aland Island' },
    { value: 'algeria', label: 'Albania' },
    { value: 'angola', label: 'Algeria' },
    { value: 'anguilla', label: 'Algeria' },
    { value: 'antarctica', label: 'Algeria' },
    { value: 'argentina', label: 'Algeria' },
    { value: 'armenia', label: 'Algeria' },
    { value: 'armenia', label: 'Algeria' },
    { value: 'armenia', label: 'Algeria' },
    { value: 'armenia', label: 'Algeria' },
    { value: 'armenia', label: 'Algeria' },
];
const CountryOptions = () => {
    return (
        // <div
        // style={{ height: '100px', overflowY: 'scroll' }}>
        <>

            {
                CountryOptionsArray.map((item, index) => (
                    <option key={index} value={item.value} className="dropdown-option">
                        {item.label}
                        {console.log(item.label)}
                    </option>
                ))
            }

        </>

        // </div>
    );
};

export default CountryOptions;
