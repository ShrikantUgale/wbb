import {
    checkFileExists,
    readUniqueNames,
    namecountarray,
    writefile
} from '../services';
import path from 'path';

/**
 * Interface to define type `{name: string, count: number}`
 */
export interface INameAndCount {
    name: string,
    count: number
}

/**
 * Use `npm run count` command to invoke this function.
 * This is a controller function integrates all functions required
 * to write a `name-count.txt` with the descending order of count.
 */
const processMultipleNames = async () => {
    try {
        const namesPath = path.join('resources', 'first-names.txt');
        const olivertwistPath = path.join('resources', 'oliver-twist.txt');

        const [isOlivertwist, isNamesPath] = await Promise.all([
            checkFileExists(olivertwistPath),
            checkFileExists(namesPath)
        ]);

        if (isNamesPath && isOlivertwist) {
            const namesArr: string[] = await readUniqueNames(namesPath);
            const nameCountArr: INameAndCount[] = await namecountarray(namesArr, olivertwistPath);
            writefile(nameCountArr);

        } else {
            throw new Error('File does not exist.');
        }
    } catch (error) {
        console.info(error.message);
    }

};

export default processMultipleNames;
