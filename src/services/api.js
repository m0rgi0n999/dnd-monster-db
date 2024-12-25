export const fetchMonsters = async () => {
    const response = await fetch('/api/monsters');
    if (!response.ok) {
        throw new Error('Failed to fetch monsters');
    }
    return await response.json();
};

export const addMonster = async (monster) => {
    const response = await fetch('/api/monsters', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(monster),
    });
    if (!response.ok) {
        throw new Error('Failed to add monster');
    }
    return await response.json();
};

export const deleteMonster = async (id) => {
    const response = await fetch(`/api/monsters/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Failed to delete monster');
    }
    return await response.json();
};