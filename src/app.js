import React from 'react';
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
            <MonsterForm onMonsterAdded={handleMonsterAdded} />
            <MonsterList monsters={monsters} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('monster-form'));