import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MonsterList = () => {
    const [monsters, setMonsters] = useState([]);

    useEffect(() => {
        const fetchMonsters = async () => {
            const response = await axios.get('/api/monsters');
            setMonsters(response.data);
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