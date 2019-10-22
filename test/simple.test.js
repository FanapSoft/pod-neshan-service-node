// External Modules
const expect = require('chai').expect;

// Main Module
const PodNeshanService = require('../lib/main');

let apiToken = 'e801898dced840248b0325facb863d8b'; // API TOKEN
let podNeshan = new PodNeshanService({ apiToken: apiToken });

// #1
describe('Method: search', function () {
  this.timeout(100000);
  let addSearchData = {
    // ------ REQUIRED ------
    scApiKey: '174eaa3e86894c83a54a4b538a4c84cc',
    term: 'حافظیه 13',
    lat: 36.3141962,
    lng: 59.5412054

    // ------ OPTIONAL ------
    // scVoucherHash: 'VOUCHER HASH'
  };
  it('correct request', function (done) {
    podNeshan.search(addSearchData)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #2
describe('Method: reverseGeo', function () {
  this.timeout(100000);
  let reverseGeoData = {
    // ------ REQUIRED ------
    scApiKey: '174eaa3e86894c83a54a4b538a4c84cc',
    lat: 36.3141962,
    lng: 59.5412054

    // ------ OPTIONAL ------
    // voucherHash: 'VOUCHER HASH'
  };
  it('correct request', function (done) {
    podNeshan.reverseGeo(reverseGeoData)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #3
describe('Method: direction', function () {
  this.timeout(100000);
  let directionData = {
    // ------ REQUIRED ------
    scApiKey: '174eaa3e86894c83a54a4b538a4c84cc',
    origin: { lat: 36.3141962, lng: 59.5412054 },
    destination: { lat: 36.32203769, lng: 59.4759667 },

    // ------ OPTIONAL ------
    // voucherHash: 'VOUCHER HASH',
    waypoints: [{ lat: 36.32203767, lng: 59.4759665 }, { lat: 36.32203768, lng: 59.4759666 }],
    avoidTrafficZone: false,
    avoidOddEvenZone: true,
    alternative: true
  };
  it('correct request', function (done) {
    podNeshan.direction(directionData)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #4
describe('Method: noTrafficDirection', function () {
  this.timeout(100000);
  let noTrafficDirectionData = {
    // ------ REQUIRED ------
    scApiKey: '174eaa3e86894c83a54a4b538a4c84cc',
    origin: { lat: 36.3141962, lng: 59.5412054 },
    destination: { lat: 36.32203769, lng: 59.4759667 },

    // ------ OPTIONAL ------
    // voucherHash: 'VOUCHER HASH',
    waypoints: [{ lat: 36.32203767, lng: 59.4759665 }, { lat: 36.32203768, lng: 59.4759666 }],
    avoidTrafficZone: false,
    avoidOddEvenZone: true,
    alternative: true
  };
  it('correct request', function (done) {
    podNeshan.noTrafficDirection(noTrafficDirectionData)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #5
describe('Method: distanceMatrix', function () {
  this.timeout(100000);
  let distanceMatrixData = {
    // ------ REQUIRED ------
    scApiKey: '174eaa3e86894c83a54a4b538a4c84cc',
    origins: [{ lat: 36.3141962, lng: 59.5412054 }],
    destinations: [{ lat: 36.32203769, lng: 59.4759667 }, { lat: 36.32203769, lng: 59.4759667 }]

    // ------ OPTIONAL ------
    // voucherHash: 'VOUCHER HASH'
  };
  it('correct request', function (done) {
    podNeshan.distanceMatrix(distanceMatrixData)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #6
describe('Method: noTrafficDistanceMatrix', function () {
  this.timeout(100000);
  let noTrafficDistanceMatrixData = {
    // ------ REQUIRED ------
    scApiKey: '174eaa3e86894c83a54a4b538a4c84cc',
    origins: [{ lat: 36.3141962, lng: 59.5412054 }],
    destinations: [{ lat: 36.32203769, lng: 59.4759667 }]

    // ------ OPTIONAL ------
    // voucherHash: 'VOUCHER HASH'
  };
  it('correct request', function (done) {
    podNeshan.noTrafficDistanceMatrix(noTrafficDistanceMatrixData)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #7
describe('Method: mapMatching', function () {
  this.timeout(10000);
  let mapMatchingData = {
    // ------ REQUIRED ------
    scApiKey: '174eaa3e86894c83a54a4b538a4c84cc',
    path: [{ lat: 36.322331, lng: 59.516958 }, { lat: 36.321328, lng: 59.520284 }]

    // ------ OPTIONAL ------
    // voucherHash: 'VOUCHER HASH'
  };
  it('correct request', function (done) {
    podNeshan.mapMatching(mapMatchingData)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});
