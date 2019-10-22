const PodNeshanService = require('pod-neshan-service');

// Variable Declaration & Initialization
let podNeshan = new PodNeshanService({
  apiToken: 'API TOKEN'
});

// *****************************************************************
// #1
// function: search
let addSearchData = {
  // ------ REQUIRED ------
  scApiKey: 'API KEY',
  term: 'SEARCH TERM',
  lat: 0,
  lng: 0

  // ------ OPTIONAL ------
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
};

podNeshan.search(addSearchData)
  .then(function (result) {
    console.log('function: search ============>', JSON.stringify(result, null, 2));
  })
  .catch(function (error) {
    console.log('error search ============>', error);
  });

// *****************************************************************
// #2
// function: reverseGeo
let reverseGeoData = {
  // ------ REQUIRED ------
  scApiKey: 'API KEY',
  lat: 0,
  lng: 0

  // ------ OPTIONAL ------
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
};

podNeshan.reverseGeo(reverseGeoData)
  .then(function (result) {
    console.log('function: reverseGeo ============>', JSON.stringify(result, null, 2));
  })
  .catch(function (error) {
    console.log('error reverseGeo ============>', error);
  });

// *****************************************************************
// #3
// function: direction
let directionData = {
  // ------ REQUIRED ------
  scApiKey: 'API KEY',
  origin: { lat: 0, lng: 0 },
  destination: { lat: 0, lng: 0 }

  // ------ OPTIONAL ------
  // waypoints: [{lat: 0, lng: 0}, {lat: 0, lng: 0}]
  // avoidTrafficZone: true | false
  // avoidOddEvenZone: true | false
  // alternative: true | false
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
};

podNeshan.direction(directionData)
  .then(function (result) {
    console.log('function: direction ============>', JSON.stringify(result, null, 2));
  })
  .catch(function (error) {
    console.log('error direction ============>', error);
  });

// *****************************************************************
// #4
// function: noTrafficDirection
let noTrafficDirectionData = {
  // ------ REQUIRED ------
  scApiKey: 'API KEY',
  origin: { lat: 0, lng: 0 },
  destination: { lat: 0, lng: 0 }

  // ------ OPTIONAL ------
  // waypoints: [{lat: 0, lng: 0}, {lat: 0, lng: 0}]
  // avoidTrafficZone: true | false
  // avoidOddEvenZone: true | false
  // alternative: true | false
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
};

podNeshan.noTrafficDirection(noTrafficDirectionData)
  .then(function (result) {
    console.log('function: noTrafficDirection ============>', JSON.stringify(result, null, 2));
  })
  .catch(function (error) {
    console.log('error noTrafficDirection ============>', error);
  });

// *****************************************************************
// #5
// function: distanceMatrix
let distanceMatrixData = {
  // ------ REQUIRED ------
  scApiKey: 'API KEY',
  points: [{ origin: { lat: 36.3141962, lng: 59.5412054 }, destination: { lat: 36.32203769, lng: 59.4759667 } }]

  // ------ OPTIONAL ------
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
};

podNeshan.distanceMatrix(distanceMatrixData)
  .then(function (result) {
    console.log('function: distanceMatrix ============>', JSON.stringify(result, null, 2));
  })
  .catch(function (error) {
    console.log('error distanceMatrix ============>', error);
  });

// *****************************************************************
// #6
// function: noTrafficDistanceMatrix
let noTrafficDistanceMatrixData = {
  // ------ REQUIRED ------
  scApiKey: 'API KEY',
  points: [{ origin: { lat: 36.3141962, lng: 59.5412054 }, destination: { lat: 36.32203769, lng: 59.4759667 } }]

  // ------ OPTIONAL ------
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
};

podNeshan.noTrafficDistanceMatrix(noTrafficDistanceMatrixData)
  .then(function (result) {
    console.log('function: noTrafficDistanceMatrix ============>', JSON.stringify(result, null, 2));
  })
  .catch(function (error) {
    console.log('error noTrafficDistanceMatrix ============>', error);
  });

// *****************************************************************
// #7
// function: mapMatching
let mapMatchingData = {
  // ------ REQUIRED ------
  scApiKey: 'API KEY',
  path: [{ lat: 0, lng: 0 }, { lat: 0, lng: 0 }]

  // ------ OPTIONAL ------
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
};
podNeshan.mapMatching(mapMatchingData)
  .then(function (result) {
    console.log('function: mapMatching ============>', JSON.stringify(result, null, 2));
  })
  .catch(function (error) {
    console.log('error mapMatching ============>', error);
  });
