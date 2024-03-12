import React, { useState } from 'react';

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [fruits, setFruits] = useState([
        { id: 1, name: 'Apple', selected: false },
        { id: 2, name: 'Banana', selected: false },
        { id: 3, name: 'Orange', selected: false },
    ]);

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const handleToggle = (fruitId) => {
        setFruits((prevFruits) =>
            prevFruits.map((fruit) =>
                fruit.id === fruitId ? { ...fruit, selected: !fruit.selected } : fruit
            )
        );
    };

    const filteredFruits = fruits.filter((fruit) =>
        fruit.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='mt-5 pt-5'>
            <input
                type="text"
                placeholder="Search..."
                onChange={(e) => handleSearch(e.target.value)}
            />

            <ul>
                {filteredFruits.map((fruit) => (
                    <li key={fruit.id}>
                        <label>
                            <input
                                type="checkbox"
                                checked={fruit.selected}
                                onChange={() => handleToggle(fruit.id)}
                            />
                            {fruit.name}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
