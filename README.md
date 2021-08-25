# phone-valdiation-api-automation
This repo is an automation framework example implemented using Mocha, Chai and super-test in Node.js
In order to run the test cases you will need first to setup node.js on your machine, then open the repo locally using VsCode or a terminal, install package.json using npm install
and to run the test cases use the below command:
npm run API.

Challenges:
Phone validation API returns rate limit 429 error when user hit on the API more than once in each second so I did a workaround to timeout the execution for 1 second after each test case

<img width="1440" alt="Screen Shot 2021-08-25 at 8 33 54 PM" src="https://user-images.githubusercontent.com/32871076/130831703-b463d226-42cd-4d39-b4ff-7d7617ec13d8.png">
