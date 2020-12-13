import fs from 'fs';

/**
 *
 * @param path Path of the file to check if it exists.
 * @returns boolean
 */
export default function checkFileExists(path: string): boolean {
  return fs.existsSync(path);
}
