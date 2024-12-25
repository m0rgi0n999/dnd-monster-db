import React, { useState } from 'react';

const MonsterForm = ({ onAddMonster }) => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [hitPoints, setHitPoints] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newMonster = { name, type, hitPoints, description };
        onAddMonster(newMonster);
        setName('');
        setType('');
        setHitPoints('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Type:</label>
                <input
                    type="text"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Hit Points:</label>
                <input
                    type="number"
                    value={hitPoints}
                    onChange={(e) => setHitPoints(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Description:</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Add Monster</button>
        </form>
    );
};

export default MonsterForm;