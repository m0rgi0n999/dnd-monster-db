import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import MonsterForm from './components/MonsterForm';
import MonsterList from './components/MonsterList';

const App = () => {
    const [monsters, setMonsters] = useState([]);

    const handleMonsterAdded = (newMonster) => {
        setMonsters([...monsters, newMonster]);
    };

    return (
        <div>
            <section id="monster-form">
                <MonsterForm onMonsterAdded={handleMonsterAdded} />
            </section>
            <section id="monster-list">
                <MonsterList monsters={monsters} />
            </section>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));