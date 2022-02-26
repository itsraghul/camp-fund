const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const campaignFunderPath = path.resolve(
  __dirname,
  'contracts',
  'CampaignFunder.sol'
);

const source = fs.readFileSync(campaignFunderPath, 'utf8');

const input = {
  language: 'Solidity',
  sources: {
    'CampaignFunder.sol': {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*'],
      },
    },
  },
};

const output = JSON.parse(solc.compile(JSON.stringify(input))).contracts[
  'CampaignFunder.sol'
];

fs.ensureDirSync(buildPath);

for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract + '.json'),
    output[contract]
  );
}
