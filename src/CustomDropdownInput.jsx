import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const CustomDropdownForm = () => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState('');

    // Dropdown options
    const options = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango'];

    // Handle dropdown selection
    const handleSelect = (item) => {
        setSelectedItem(item);
        setValue('fruit', item);  // Set value in form state
        setDropdownVisible(false);  // Hide dropdown
    };

    // Handle form submission
    const onSubmit = (data) => {
        console.log('Form submitted: ', data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label>Fruit</label>
                <input
                    type="text"
                    value={selectedItem}
                    placeholder="Select a fruit..."
                    readOnly
                    {...register('fruit', { required: 'Please select a fruit' })}
                    onClick={() => setDropdownVisible(!dropdownVisible)}
                />
                {errors.fruit && <span className="error">{errors.fruit.message}</span>}

                {/* Render dropdown */}
                {dropdownVisible && (
                    <ul className="dropdown-menu">
                        {options.map((option, index) => (
                            <li key={index} onClick={() => handleSelect(option)}>
                                {option}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default CustomDropdownForm;