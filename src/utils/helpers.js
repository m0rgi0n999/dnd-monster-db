export const validateMonsterData = (data) => {
    const { name, type, hitPoints } = data;
    if (!name || !type || hitPoints < 0) {
        return false;
    }
    return true;
};

export const formatMonsterData = (data) => {
    return {
        ...data,
        name: data.name.trim(),
        type: data.type.toLowerCase(),
        hitPoints: parseInt(data.hitPoints, 10),
    };
};