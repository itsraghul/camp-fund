//SPDX-License-Identifier:MIT
pragma solidity 0.8.9;

contract CampaignFactory{
    address[] public deployedCampaigns;

    function createCampaign(uint minAmount) public{
        CampaignFunder newCampaign = new CampaignFunder(minAmount,msg.sender);
        deployedCampaigns.push(address(newCampaign));
    }

    function getDeployedCampaigns() public view returns(address[] memory){
          return deployedCampaigns;
    }

}

contract CampaignFunder{

    struct Request {
        string description;
        uint value;
        address payable  recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
        
    }
    
    // Request[] public requests;
    mapping(uint => Request) public requests;
    uint public numRequests;
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    uint public approversCount;
    
    modifier managerOnly(){
       require(manager == msg.sender);
       _;
    }

    constructor(uint minimumAmount,address creator) {
        manager = creator;
        minimumContribution = minimumAmount;
    }

    function contribute() public payable{
        require(msg.value > minimumContribution);
        if(!approvers[msg.sender]){
        approvers[msg.sender] = true;
        approversCount++;
        }
    }

    function createRequest(string memory description,uint value,address payable recipient)
       public managerOnly
       {
           Request storage r = requests[numRequests++];
           r.description = description;
           r.value = value;
           r.recipient = recipient;
           r.complete = false;
           r.approvalCount = 0;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
    }

    function approveRequest(uint index) public {
        Request storage req = requests[index];

        require(approvers[msg.sender]);
        require(!req.approvals[msg.sender]);

        req.approvals[msg.sender] = true;
        req.approvalCount++;
    }

    function finalizeRequest(uint index) public managerOnly{
        Request storage req = requests[index];

        require(!req.complete);
        require(req.approvalCount > (approversCount/2));
        
        req.recipient.transfer(req.value);
        req.complete = true;
    }

    function getSummary() public view returns(uint,uint,uint,uint,address){
        return (minimumContribution,address(this).balance,numRequests,approversCount,manager);
    }

    function getRequestCount() public view returns(uint){
        return numRequests;
    }
}