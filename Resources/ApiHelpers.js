'use strict';

const request = require('supertest');

module.exports = {
    create: async(serviceurl, endpointName, sample) => request('')
        .post(`${serviceurl}/${endpointName}`)
        .set('Content-type', 'application/json')
        .send(sample),
    get: async(serviceurl, endpointName, apiKey, phone) => request('')
        .get(`${serviceurl}/${endpointName}/?api_key=${apiKey}&phone=${phone}`),
    update: async(serviceurl, endpointName, sample) => request('')
        .patch(`${serviceurl}/${endpointName}`)
        .set('Content-type', 'application/json')
        .send(sample)
}