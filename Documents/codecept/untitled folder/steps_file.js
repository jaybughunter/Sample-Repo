
'use strict';
// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

      loginDefaultUser: function(){
          this.login(process.env.USER||'consensystest6@gmail.com', process.env.PASSWORD||'Consensys123');
      },

      login: function(name, password) {
          this.amOnPage(process.env.BALANC3_URL||'https://app.balanc3.net');
          this.waitForElement('#header-login',200);
          this.click('#header-login');
          this.fillField('#sf-name', name);
          this.fillField('#sf-password', password);
          this.click('#sf-submit');
          this.wait(20);
          this.waitForText('Welcome', 10);
      },

      logout1: function() {
          this.click('Logout');
          this.seeElement('#header-login')
      },

      amOnDashboardTab: function(){
          this.click('//a[@href="#/dashboard"]')
          this.waitForElement('//div[contains(., "Price History")]', 2)
      },

      amOnAddressesTab: function(){
          this.click('//a[@href="#/addresses"]')
          this.waitForElement('//button[contains(., "Add Address")]', 2)
      },

      amOnWalletsTab: function(){
          this.click('//a[@href="#/wallets"]')
          this.waitForElement('//button[contains(text(),"Auto Classify")]', 10)
      },

      amOnReportsTab: function(){
          this.click('//a[@href="#/reports"]')
          this.waitForElement('//a[contains(., "Balance Sheet")]', 2)
      },

      amOnContactsTab: function(){
          this.click('//a[@href="#/contacts"]')
          this.waitForElement('//button[contains(., "Add Contact")]', 2)
      },

      amOnChartOfAcccountsTab: function(){
          this.click('//a[@href="#/chartOfAccounts/allAccounts"]')
          this.waitForElement('//button[contains(., "Add Sub Account")]', 2)
          this.click('//a[@href="#/chartOfAccounts/allAccounts"]')
          this.waitForElement('//button[contains(., "Add Sub Account")]', 2)
      },

      amOnTokenPortalTab: function(){
          this.click('//a[@href="#/token-portal"]')
      },

  });
}
