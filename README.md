# About

This application is developed to search and count for names in a file.
It provides a rest api which accepts a name to be searched in a text file and returns count.
Contains functionality to search and count names from 1 file and search it in another and creates
new file with descending order of count.
Input files are present in `resources` directory.
This application is developed and tested on `node v12.18.3`.

## Installation

Clone this repo and run following commands for installation.
```
cd wbb
npm install
```

## Usage

Use following commands to run application in `development mode`.
Note: Run each command in separate terminal in a given sequence.
```
npm run build:watch
npm run start:dev
```

Use following command to run application in `production mode`.
```
npm start
```

To generate file with name and count use below command.
```
npm run count
```
File will be generated in `resources\name-count.txt`.