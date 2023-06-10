Feature: To demonstrate the UI Automation using karata

  Background:  Configure the Driver

    Given driver 'https://demo.nopcommerce.com/'


  Scenario:  Verify the title of the page

    Then match driver.title == 'nopCommerce demo store'

  Scenario:  Verify the user navigate to login page
    When click ("//a[contains(text(),'Log in')]")
    * def actualText = text ("//h1[contains(text(),'Welcome, Please Sign In!')]")

