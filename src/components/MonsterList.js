-db/src/components/MonsterList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MonsterList = () => {
    const [monsters, setMonsters] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchMonsters = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/monsters');
                setMonsters(response.data);
                setError('');
            } catch (error) {
                console.error('Error fetching monsters:', error);
                setError('Failed to fetch monsters.');
            }
        };
        fetchMonsters();
    }, []);

    return (
        <div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul>
                {monsters.map((monster) => (
                    <li key={monster.id}>{monster.name} - {monster.type} - {monster.hitPoints} HP</li>
                ))}
            </ul>
        </div>
    );
};

export default MonsterList;