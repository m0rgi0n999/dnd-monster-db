import React, { useState } from 'react';
import axios from 'axios';

const MonsterForm = ({ onMonsterAdded }) => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [hitPoints, setHitPoints] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newMonster = { name, type, hitPoints };
        await axios.post('/api/monsters', newMonster);
        onMonsterAdded(newMonster);
        setName('');
        setType('');
        setHitPoints('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <label>
                Type:
                <input type="text" value={type} onChange={(e) => setType(e.target.value)} required />
            </label>
            <label>
                Hit Points:
                <input type="number" value={hitPoints} onChange={(e) => setHitPoints(e.target.value)} required />
            </label>
            <button type="submit">Add Monster</button>
        </form>
    );
};

export default MonsterForm;