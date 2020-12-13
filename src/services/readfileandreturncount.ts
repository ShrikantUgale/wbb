import fs from 'fs';
import readline from 'readline';
import { getwordcount } from '../services';

/**
 * Function to read file line by line and
 * count name in each line.
 * Uses `fs` and `redline` modules and `fs.createReadStream(), readline.createInterface()`
 * functions for creating stream and reading file line by line.
 * @param path Path of oliver-twist file.
 * @param name Name which needs to be counted in `oliver-twist.txt` file.
 * @returns `Promise` count of the name present in `oliver-twist.txt` file.
 */
export default async function readfileAndReturnCount(path: string, name: string): Promise<number> {
  try {

    return new Promise((resolve, reject) => {
      const readStream = fs.createReadStream(path);
      let wordCount: number = 0;

      const readInterface = readline.createInterface({
        input: readStream,
        terminal: false,
      });

      readInterface.on('line', (line: string) => {
        if (line.trim()) {
          const count = getwordcount(name, line);
          wordCount += count;
        }
      });

      readInterface.on('error', (error) => reject(error.message));

      readInterface.on('close', () => {
        resolve(wordCount);
      });
    });
  } catch (error) {
    return Promise.reject(new Error(error.message));
  }
}
