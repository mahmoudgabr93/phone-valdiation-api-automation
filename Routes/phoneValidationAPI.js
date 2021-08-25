'use strict';

const _ = require('lodash');
const objectId = require('objectid')

const assertions = require('../Resources/assertions');
const testData = require('../TestData/testData');
const apiHelpers = require('../Resources/ApiHelpers');

describe('Phone validation API Test suite', () => {
    let usPhoneNumber, egPhoneNumber, uaePhoneNumber;
    let apiKey, invalidApiKey;
    async function sleep(msec) {
        return new Promise((resolve) => setTimeout(resolve, msec));
      }

    before(() => {
        usPhoneNumber = _.cloneDeep(testData.valid_us_phone);
        egPhoneNumber = _.cloneDeep(testData.valid_eg_mobile);
        uaePhoneNumber = _.cloneDeep(testData.valid_uae_phone);
        apiKey = _.cloneDeep(testData.valid_api_key);
        invalidApiKey = _.cloneDeep(testData.invalid_api_key);
    })

    afterEach(async() => {
        await sleep(1000);
    });

    it('Check that phone validation API returns 200 OK status codewhen user send a valid phone number and valid api key', async() => {
        const response = 
            await apiHelpers.get('https://phonevalidation.abstractapi.com', 'v1', apiKey, usPhoneNumber)
        assertions.assertSuccessStatusCode(response);
    });

    it('Check that phone validation API returns 401 Not Authorized status code when user send an ivalid api key', async() => {
        const response = 
            await apiHelpers.get('https://phonevalidation.abstractapi.com', 'v1', invalidApiKey, usPhoneNumber)
        assertions.assertNotAuthorizedRequestStatusCode(response);
    });

    it('Check that phone validation API returns 400 Bad request status code when user send an empty phone number', async() => {
        const response = 
            await apiHelpers.get('https://phonevalidation.abstractapi.com', 'v1', apiKey, '')
        assertions.assertBadRequestStatusCode(response);
    });

    it('Check that phone validation API returns location as Egypt when user send an egyptian phone number', async() => {
        const response = 
            await apiHelpers.get('https://phonevalidation.abstractapi.com', 'v1', apiKey, egPhoneNumber)
        assertions.assertSuccessStatusCode(response);
        assertions.assertResponseBody(response.body.location, 'Egypt');
    });

    it('Check that phone validation API returns location as UAE when user send an uae phone number', async() => {
        const response = 
            await apiHelpers.get('https://phonevalidation.abstractapi.com', 'v1', apiKey, uaePhoneNumber)
        assertions.assertSuccessStatusCode(response);
        assertions.assertResponseBody(response.body.location, 'United Arab Emirates');
    });

    it('Check that phone validation API returns location as United Arab Emirates when user send an uae phone number', async() => {
        const response = 
            await apiHelpers.get('https://phonevalidation.abstractapi.com', 'v1', apiKey, uaePhoneNumber)
        assertions.assertSuccessStatusCode(response);
        assertions.assertResponseBody(response.body.location, 'United Arab Emirates');
    });

    it('Check that phone validation API returns country name as United States when user send a phone number from california', async() => {
        const response = 
            await apiHelpers.get('https://phonevalidation.abstractapi.com', 'v1', apiKey, usPhoneNumber)
        assertions.assertSuccessStatusCode(response);
        assertions.assertResponseBody(response.body.country.name, 'United States');
    });
});
