import {
  readfileAndReturnCount,
  checkFileExists
} from '../services';
import path from 'path';

/**
 * Interface to define return type of `get name-count` api.
 * `name: count`
 */
interface INameCount {
  [key: string]: number;
}

/**
 * This is a controller function integrates
 * all functions required to count and return a response of type `INameCount`
 * @param name Name which needs to be counted in `oliver-twist` file
 * @returns `Promise` of Object type `INameCount`
 */
export default async function processRequest(name: string): Promise<INameCount> {
  try {

    const olivertwistPath = path.join('resources', 'oliver-twist.txt');
    const isOlivertwist = checkFileExists(olivertwistPath);

    if (isOlivertwist) {
      const wordCount = await readfileAndReturnCount(olivertwistPath, name);

      return { [name]: wordCount };
    } else {
      throw new Error('File does not exist.');
    }
  } catch (error) {
    return Promise.reject(new Error(error.message));
  }
}
