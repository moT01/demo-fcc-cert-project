const fs = require('fs');
const util = require('util');
const path = require('path');

const readdir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);

const getDirectoryContents = async (dir = process.cwd()) => {
  const directoryContents = await readdir(dir);

  if (!directoryContents) {
    throw new Error(`Could not find folder ${dir}`);
  }

  return directoryContents;
};

const getIndexFile = async (dir = process.cwd()) => {
  const pathToIndex = path.join(dir, '..', 'index.html');
  const indexFile = await readFile(pathToIndex);

  if (!indexFile) {
    throw new Error(`Could not find ${pathToIndex}`);
  }
  return indexFile;
};

exports.getDirectoryContents = getDirectoryContents;
exports.getIndexFile = getIndexFile;
