A Public Project Funding Web App that uses Ethereum Smart Contract. Need a Metamask account and web extension to fund and contribute or create a project fund.Smart Contract deployed in Rinkeby Test Network.With Azure Chat Bot for customer help in this new form of decentralised sites.An Open-Public Project Fund Raising Site. Uses Ethereum for exchange of funds. User can create their own project fund by deploying the smart contract instance with the help of this site. The Fund Raising Contract Factory have been deployed to Rinkeby Test Network. The Users need a Metamask Account and RinkebyEther to transfer and fund cryptocoins. A Project Fund manager can create a new request for projects and need the approval of contributors.All project changes are open and seen by the contributors which prevents embezzlement.Added Azure Chat bot for customer help.

Built using : Next JS, Solidity , Web3.js ,Truffle/HD-Wallet, SemanticUI ,Azure Bot
Tested using : mocha and ganache-cli

Site URL: https://mr-camp-fund.vercel.app/

Site Description:
1.The Home screen of campfund has the open funding projects listed in the middle with add project button on left that allows users who wanted to create their own project funding. ANd the azure chat bot on the right that allows users to get answers for their questions regarding the use and doubts regarding the functioning of site.
![site1](https://user-images.githubusercontent.com/58110802/156868400-6b7db647-9fc4-4b9a-9f46-b65a48acbf9f.jpg)

2.The Open Funded Projects listed in the middle will have thier Contaract Address displayed with view project button that sends them to project detail page.
![site2](https://user-images.githubusercontent.com/58110802/156868453-dbce76d6-b2f4-42fb-a64e-efdc89eb45a9.jpg)

3.The Add Project Fund page allows users to create their own project . Here you need to supply the minimum contribution amount (in Wei) so that the funders (contributors) need to fund this much minimum amount to take part in this particular crowdfunding project.
![site3](https://user-images.githubusercontent.com/58110802/156868488-424fa50f-2124-4020-8969-30578186c293.jpg)


4.Note: Once you click create prject you will need to pay the contract instance creation with metamask in rinkeby ether and it is the mode of payment for both contributors and manager of projects. 
![site4](https://user-images.githubusercontent.com/58110802/156868564-ee561fff-ce75-4a68-9d6d-0256a8dd0b07.jpg)

5.The View Project (2) Button will take to the project detail page where you can see the amount funded to project,manager,no of people participated,the requests,minimum contribution and stuff.
![site5](https://user-images.githubusercontent.com/58110802/156868630-902a1248-1267-49b2-95b2-3b045851a949.jpg)

6.Here the contributors or users who wanted to take part in the project can contribute the amount more or equal to minimum contribution amount of project and become the approvers of te project.
![site6](https://user-images.githubusercontent.com/58110802/156868688-a3f05cdc-0e93-47bf-9b87-ec88df024c03.jpg)

7.The requests button in the project detail page will take you to requests page.These are the requests manager made for his project adn to use the money.Here the mangager once made the request need the approval from more than 50% of total approvers or contributors to access the fund money for his project and can finalize the request.Thus the people who funded the project will know where thier money goes.
![site7](https://user-images.githubusercontent.com/58110802/156868738-fc34e40e-6b69-4e66-8099-e84e3e9795ef.jpg)

8.The Crete Request page can be accessed only by the manager of the project and he need to give the description and amount (in ether) to use and where the money goes in the request.And need to wait for approval after creation.
![site8](https://user-images.githubusercontent.com/58110802/156868799-e91b60d7-6a1a-4f6a-a47b-05be37c27b53.jpg)


Use of Azure Chat Bot with Azure QnA Maker:

  The purpose of decentralisation in the crowdfunding platforms is to reduce the money embezzelment and wrong use of funded money . But payment using crytocurrency is  a new way for people and many common citizens have not been fully adaptded this new way of payments through cryptocurrency and smart contracts like that of UPI and Netbanking . This poses a crucial problem to normal citizens as they have many doubts in the usage and functioning of such Dapps . The most modern Dapps does not regard this issue and focus on creating the site thinking the users to be fully capable of using crypto . In order for everyone to use we need something that can clarify any doubts that normal users face in this new decentralised platform . Thus we use Azure Chat Bot . This chat bot is integrated with a Knowledge Base made using Azure QnA Maker where the propblems fcaed by users arer answered. This Azure Chat Bot with such integrated questions will help to guide and teach the users with any of the doubts in this new form of environments . Thus the users can be very happily use this decentralised platform without any problems.
  
  Screen shots of Integrated Azure Chat Bot that answers some common customer problems:
![bot1](https://user-images.githubusercontent.com/58110802/156867749-8b97f31f-718c-4bd7-96c2-c85cb3076e89.jpg)
![bot2](https://user-images.githubusercontent.com/58110802/156867759-6987014d-e61a-431e-8ebd-3a5ef0887ed9.jpg)
![bot3](https://user-images.githubusercontent.com/58110802/156867765-db6eaec9-26ee-4ee6-adc5-a6df598601b7.jpg)
![bot4](https://user-images.githubusercontent.com/58110802/156867769-0947b744-cf12-4618-8f79-53f398646420.jpg)


Here you can see the bot answering some common user doubts and problems and thus will be a tremoundous help for the common users who are diving into the world of decentralised applications.Thus azure bot plays an important part for all the users to use the site with ease.
