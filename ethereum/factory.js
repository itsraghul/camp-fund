import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  '0xcF5B526a133f84532fD7cDE89dbdE9f2c7e9Bd06'
);

export default instance;
