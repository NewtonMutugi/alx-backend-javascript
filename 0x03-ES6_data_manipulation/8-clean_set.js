function cleanSet (set, startString) {
    const newString = [];
    if (set instanceof Set && startString instanceof String) {
        for (const item of set) {
            if (item && item.startsWith(startString)) {
                newString.push(item.slice(startString.length));
            }
        }
        return myString.join('-');
    }
}

export default cleanSet;
