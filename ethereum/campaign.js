import web3 from './web3';
import CampaignFunder from './build/CampaignFunder.json';

export default (address) => {
  return new web3.eth.Contract(CampaignFunder.abi, address);
};
