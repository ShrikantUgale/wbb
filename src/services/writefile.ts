import fs from 'fs';
import path from 'path';
import { INameAndCount } from '../controller';

/**
 * Takes array of type `INameAndCount` and writes it to `name-count.txt`,
 * Uses `fs.createWriteStream()` to write file.
 * @param nameCountArr Array of type `INameAndCount`
 */
const writefile = (nameCountArr: INameAndCount[]) => {
    try {
        const nameCountPath = path.join('resources', 'name-count.txt');
        const writeStream = fs.createWriteStream(nameCountPath);

        nameCountArr.forEach(value => writeStream.write(`${value.name}: ${value.count}\n`));

        writeStream.on('finish', () => {
            console.info(`File is written to the path ${nameCountPath}`);
        });

        writeStream.on('error', (error) => Promise.reject(error));
        writeStream.end();

    } catch (error) {
        return Promise.reject(error);
    }
};

export default writefile;
