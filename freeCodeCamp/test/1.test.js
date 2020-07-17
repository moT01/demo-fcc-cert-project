// assert docs: https://nodejs.org/api/assert.html#assert_assert
const assert = require('assert');
const { getIndexFile, getDirectoryContents } = require('./utils');

describe('SUBTASKS 1.1', function () {
  let indexFile, projectDirectory;
  before(async () => {
    indexFile = await getIndexFile();
    projectDirectory = await getDirectoryContents('..');
  });

  it(':1 index.html should exist', function () {
    const result = projectDirectory.indexOf('index.html') >= 0;
    const message = 'index.html should exists';
    assert.ok(result, message);
  });

  it(':2 A doctype should be added', function () {
    const result = /<!doctype html>/i.test(indexFile);
    const message = 'A doctype should be added';
    assert.ok(result, message);
  });

  it(':3 html tags should be added', function () {
    const result = /<html>/i.test(indexFile);
    const message = 'html tags should be added';
    assert.ok(result, message);
  });

  it(':4 head tags should be added', function () {
    const result = /<head>/i.test(indexFile);
    const message = 'head tags should be added';
    assert.ok(result, message);
  });

  it(':5 body tags should be added', function () {
    const result = /<body>/i.test(indexFile);
    const message = 'body tags should be added';
    assert.ok(result, message);
  });
});
