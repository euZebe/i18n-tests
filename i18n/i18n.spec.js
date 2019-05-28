/**
 * This test file asserts that for context, all translation files have the same keys
 */

const fs = require("fs");

function testTranslationFiles(fileNames, rootFolder) {
  // get the first one as the reference
  const referenceFile = fileNames[0];
  const referenceTranslations = require(`./${rootFolder}/${referenceFile}`);

  // iterate over others
  fileNames.slice(1).forEach(fileName => {
    it(`${fileName} should have the same translations keys as ${referenceFile}`, () => {
      const currentTranslations = require(`./${rootFolder}/${fileName}`);

      // translation file's keys should be as many as the reference's
      expect(Object.keys(referenceTranslations)).toHaveLength(
        Object.keys(currentTranslations).length
      );

      // merging both translation files should give as many keys as the reference file's
      expect(
        Object.keys({
          ...referenceTranslations,
          ...currentTranslations
        })
      ).toHaveLength(Object.keys(referenceTranslations).length);
    });
  });
}

function testTranslationFilesInsideAFolder(path) {
  describe(`${path} configuration`, () => {
    // list i18n json files
    const fileNames = fs
      .readdirSync(`${__dirname}/${path}`)
      .filter(fn => fn.match(/\.json$/i));

    testTranslationFiles(fileNames, path);
  });
}

// test context folders
fs.readdirSync(__dirname).forEach(path => {
  if (fs.lstatSync(`${__dirname}/${path}`).isDirectory()) {
    testTranslationFilesInsideAFolder(path);
  }
});

// test root folder
testTranslationFilesInsideAFolder('.');
