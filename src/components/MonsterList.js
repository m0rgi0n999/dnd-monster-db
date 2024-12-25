import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MonsterList = () => {
    const [monsters, setMonsters] = useState([]);

    useEffect(() => {
        const fetchMonsters = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/monsters');
                setMonsters(response.data);
            } catch (error) {
                console.error('Error fetching monsters:', error);
            }
        };
        fetchMonsters();
    }, []);

    return (
        <ul>
            {monsters.map((monster) => (
                <li key={monster.id}>{monster.name} - {monster.type} - {monster.hitPoints} HP</li>
            ))}
        </ul>
    );
};

export default MonsterList;