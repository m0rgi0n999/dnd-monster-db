import React, { useState } from 'react';
import axios from 'axios';

const MonsterForm = ({ onMonsterAdded }) => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [hitPoints, setHitPoints] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newMonster = { name, type, hitPoints };
        try {
            const response = await axios.post('http://localhost:3000/api/monsters', newMonster);
            onMonsterAdded(response.data);
            setName('');
            setType('');
            setHitPoints('');
        } catch (error) {
            console.error('Error adding monster:', error);
        }
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