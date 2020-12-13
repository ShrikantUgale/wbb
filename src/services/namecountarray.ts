import { readfileAndReturnCount } from '../services';
import { INameAndCount } from '../controller';

/**
 * Returns sorted array of object `{name: string, count: number}`
 * in descending order of their count.
 * @param namesArr Array of names to be processed
 * @param olivertwistPath Path of oliver-twist file
 * @returns `Promise` Returns array of `INameAndCount` type.
 */
const namecountarray = async (namesArr: string[], olivertwistPath: string):
    Promise<INameAndCount[]> => {

    // This is a time consuming step
    const nameCount = await Promise.all(namesArr.map(async (name): Promise<INameAndCount> => {
        return { name, 'count': await readfileAndReturnCount(olivertwistPath, name) };
    }));

    const sortedCount = nameCount.sort((a, b) => b.count - a.count);

    return sortedCount;
};

export default namecountarray;