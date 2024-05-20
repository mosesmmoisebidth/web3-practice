var addTwoNumbers  = artifacts.require('sum')
module.exports = function(deployer) {
  // Use deployer to state migration tasks.
  deployer.deploy(addTwoNumbers);
};
