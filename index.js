const jsrsasign = require('jsrsasign');
const { execSync } = require("child_process");
const fs = require('fs');

function checkDigest(filename) {
    const filepath = `${__dirname}/files/${filename}`;
    const fileContent = fs.readFileSync(filepath)

    const messageDigest = new jsrsasign.KJUR.crypto.MessageDigest({
        alg: 'sha256',
        prov: 'cryptojs',
    });

    const dataHex = jsrsasign.rstrtohex(fileContent.toString('binary'));
    messageDigest.updateHex(dataHex);
    const digest = messageDigest.digest();

    const opensslDigest = execSync(`openssl dgst -sha256 ${filepath}`).toString().trim().replace(`SHA256(${filepath})= `, '');

    console.log('------- %s -------', filename);
    console.log('jsrsasign: %s', digest);
    console.log('openssl  : %s', opensslDigest);
    console.log('is equal?: %s', opensslDigest.localeCompare(digest) !== 0 ? 'no' : 'yes');
}

console.log('####### Checking txt files #######');
checkDigest('txt/small.txt');
checkDigest(`txt/medium.txt`);
checkDigest(`txt/large.txt`);
checkDigest(`txt/huge.txt`);
console.log('####### Checking bmp files #######');
checkDigest(`bmp/medium.bmp`);
checkDigest(`bmp/large.bmp`);
console.log('####### Checking png files #######');
checkDigest(`png/huge.png`);
console.log('####### Checking pdf files #######');
checkDigest(`pdf/sample.pdf`);