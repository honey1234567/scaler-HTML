#### Testing 
**Definition**
checking whether your application matches the given specification


**Types of Testing** 
` Way to you test`
* Manual testing  -> user manually  test the applications
* Automated testing -> use a framework to test your application/code 

`Areas of testing`
* Unit Test : Verifying the smallest units (components) of the app in isolation to ensure individual functionality.
*  Functional test/integration test: Verifying that a module /functionality of the app works and interact with different modules
* End to end Testing : How much closer your application is to the specification 
* Regression testing : Testing whether a new features/module/ component have negatively impact the existing application
* stress testing : how your application works in  exterm condition
* Security Testing : if there are any vulnerabilities 
* Peformance Testing : how our responsive our app is to the end client 



## writing a unit test for React component
## flow
<!-- /***
 * 1. is your component correctly rendered -> default ()
 * 2. when you interact with it -> it works correctly or not
 *      click + -> 0 -> 1
 *      click - -> 0-> -1
 * **/  -->

 ## Pre-req
 * text -> UI [count=0] -> VDOM
 * onclick -> event [inc,dec] -> fire events

 ### Tech solution
 * React-testing library
    * gives you access to VDOM , events, screen
* JEST : js test runner and it also verifies the actual output
    * test ,describe , expect

 ### Things to test in a unit test
* inital render
* on re-render
* snapshot test

## TDD -> Test driven Development(red-green)
`Usecase`: requirements are stable
* first write all the testcases -> write the component
* refractor all your testcases -> optimize your component

