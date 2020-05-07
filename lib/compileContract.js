/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
const solc = require('solc');
const fs = require('fs');
const path = require('path');
const Pudding = require('ether-pudding');

const compileContract = (contractName) => {
  const source = fs.readFileSync(
    `${path.join(__dirname, '../contracts')}/${contractName}.sol`, { encoding: 'utf8' }
  ).toString()
    .replace(/\n/g, ' ');
    // console.log(source);

  const compiled = solc.compile(source, 1);
  console.log(compiled);
  console.log(Object.keys(compiled.contracts));
  if (!compiled.contracts[`:${contractName}`]) {
    // console.log('Contract must have same name as file!');
    process.exit(1);
  }
  const { bytecode } = compiled.contracts[`:${contractName}`];
  const interfaces = compiled.contracts[`:${contractName}`].interface;

  const contractData = {
    abi: JSON.parse(interfaces),
    binary: bytecode,
    address: '0x0000011111222223333344444555556666677777'
  };

  const expectedFilepath = `${path.join(__dirname, '../build/contracts')}/${contractName}.sol.js`;
  // console.log(contract_data);
  Pudding.save(contractData, expectedFilepath)
    .then(() => {
      console.log(`${'File api/build/contracts/'}${contractName}.sol.js was created with the JS contract!`);
    })
    .catch((err) => {
      console.log('Error saving contract', err);
    });
};

// eslint-disable-next-line no-undef
run = (contractName) => {
  compileContract(contractName);
};

// Process Routes for API
module.exports = {
  compileContract
};

// Process CLI (i.e. `node lib/compileContract.js smeih`)
// Reference: http://coding.pstodulka.com/2014/10/22/node-modules-as-cli/
if (require.main === module) {
  if (process.argv.length < 3) {
    console.log('Error: Contract Name as argument is required');
    process.exit(1);
  }
  const contractName = process.argv[2];
  // eslint-disable-next-line no-undef
  run(contractName);
}
