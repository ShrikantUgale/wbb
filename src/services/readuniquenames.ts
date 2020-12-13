import fs from 'fs';

/**
 * Reads `first-names.txt` file and returns array of unique names from the file.
 * @param namesPath file path `first-names.txt`
 * @returns `Promise` Array of unique names.
 */
const readUniqueNames = async (namesPath: string): Promise<string[]> => {

    try {
        const firstNames: string[] = fs.readFileSync(namesPath).toString().split('\r');
        return [...new Set(firstNames)];
    } catch (error) {
        return Promise.reject(new Error(error.message));
    }

};

export default readUniqueNames;
