/**
 * @namespace podNeshanService
 */

// POD Modules
const PodBaseService = require('pod-base-service');
const utils = require('pod-utilities');

// Project Modules
const schemas = require('./schemas');
const apiUrls = require('./urls');
const products = require('./products');

/**
 * podProductService
 * @memberOf podProductService
 */
class PodNeshanService extends PodBaseService {
  /**
   * @description This is the class constructor
   * @param {confObj} confObj
   */
  constructor (confObj) {
    if (!confObj) {
      confObj = {};
    }
    super(schemas, apiUrls, confObj, 'pod-neshan-service', true);
    this.clientInfo = {};
    this.clientInfo.apiToken = confObj.apiToken;
    this.clientInfo.tokenIssuer = confObj.tokenIssuer;
  }

  // #1 API Token
  /**
   * @description This function
   * @param {searchObj} data
   * @returns {Promise}
   */
  search (data) {
    let apiName = 'search';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }

    data.scProductId = products[apiName];
    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;

    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true)
      .then((result) => {
        let processedResult = this.checkResult(result);
        if (processedResult.isError) {
          throw processedResult.result;
        }
        else {
          return processedResult.result;
        }
      });
  }

  // #2 API Token
  /**
   * @description This function
   * @param {reverseGeoObj} data
   * @returns {Promise}
   */
  reverseGeo (data) {
    let apiName = 'reverseGeo';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }

    data.scProductId = products[apiName];
    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;

    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true)
      .then((result) => {
        let processedResult = this.checkResult(result);
        if (processedResult.isError) {
          throw processedResult.result;
        }
        else {
          return processedResult.result;
        }
      });
  }

  // #3 API Token
  /**
   * @description This function
   * @param {directionObj} data
   * @returns {Promise}
   */
  direction (data) {
    let apiName = 'direction';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    data.scProductId = products[apiName];
    data.origin = data.origin.lat + ',' + data.origin.lng;
    data.destination = data.destination.lat + ',' + data.destination.lng;
    if (data.hasOwnProperty('waypoints')) {
      data.waypoints = this.createPointSequence(data.waypoints);
    }
    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;

    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true)
      .then((result) => {
        let processedResult = this.checkResult(result);
        if (processedResult.isError) {
          throw processedResult.result;
        }
        else {
          return processedResult.result;
        }
      });
  }

  // #4 API Token
  /**
   * @description This function
   * @param {directionObj} data
   * @returns {Promise}
   */
  noTrafficDirection (data) {
    let apiName = 'noTrafficDirection';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    data.scProductId = products[apiName];
    data.origin = data.origin.lat + ',' + data.origin.lng;
    data.destination = data.destination.lat + ',' + data.destination.lng;
    data.waypoints = this.createPointSequence(data.waypoints);
    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;

    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true)
      .then((result) => {
        let processedResult = this.checkResult(result);
        if (processedResult.isError) {
          throw processedResult.result;
        }
        else {
          return processedResult.result;
        }
      });
  }

  // #5 API Token
  /**
   * @description This function
   * @param {distanceMatrixObj} data
   * @returns {Promise}
   */
  distanceMatrix (data) {
    let apiName = 'distanceMatrix';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    data.scProductId = products[apiName];
    data.origins = this.createPointSequence(data.origins);
    data.destinations = this.createPointSequence(data.destinations);
    // let seq = this.createPointSequenceFromMatrix(data.points);
    // data.origins = seq.seqOrigins;
    // data.destinations = seq.seqDestinations;

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;

    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true)
      .then((result) => {
        let processedResult = this.checkResult(result);
        if (processedResult.isError) {
          throw processedResult.result;
        }
        else {
          return processedResult.result;
        }
      });
  }

  // #6 API Token
  /**
   * @description This function
   * @param {distanceMatrixObj} data
   * @returns {Promise}
   */
  noTrafficDistanceMatrix (data) {
    let apiName = 'noTrafficDistanceMatrix';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    data.scProductId = products[apiName];
    data.origins = this.createPointSequence(data.origins);
    data.destinations = this.createPointSequence(data.destinations);
    // let seq = this.createPointSequenceFromMatrix(data.points);
    // data.origins = seq.seqOrigins;
    // data.destinations = seq.seqDestinations;
    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;

    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true)
      .then((result) => {
        let processedResult = this.checkResult(result);
        if (processedResult.isError) {
          throw processedResult.result;
        }
        else {
          return processedResult.result;
        }
      });
  }

  // #7 API Token
  /**
   * @description This function
   * @param {mapMatchingObj} data
   * @returns {Promise}
   */
  mapMatching (data) {
    let apiName = 'mapMatching';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    data.scProductId = products[apiName];
    data.path = this.createPointSequence(data.path);
    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;

    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true)
      .then((result) => {
        let processedResult = this.checkResult(result);
        if (processedResult.isError) {
          throw processedResult.result;
        }
        else {
          return processedResult.result;
        }
      });
  }

  createPointSequence (pointArray) {
    let sequence = '';
    for (let i = 0; i < pointArray.length; i++) {
      sequence += pointArray[i].lat + ',' + pointArray[i].lng + '|';
    }
    sequence = sequence.substr(0, sequence.length - 1);
    return sequence;
  }

  createPointSequenceFromMatrix (matrix) {
    let seqOrigins = '';
    let seqDestinations = '';

    for (let i = 0; i < matrix.length; i++) {
      seqOrigins += matrix[i].origin.lat + ',' + matrix[i].origin.lng + '|';
      seqDestinations += matrix[i].destination.lat + ',' + matrix[i].destination.lng + '|';
    }
    seqOrigins = seqOrigins.substr(0, seqOrigins.length - 1);
    seqDestinations = seqDestinations.substr(0, seqDestinations.length - 1);
    return { seqOrigins: seqOrigins, seqDestinations: seqDestinations };
  }

  checkResult (inpObj) {
    let result = {};
    let isError = false;
    try {
      let jsonResult = JSON.parse(inpObj.result.result);
      if (!(inpObj.result.statusCode >= 200 && inpObj.result.statusCode < 300) || (jsonResult.hasOwnProperty('status') && jsonResult.status.toUpperCase() === 'ERROR')) {
        isError = true;
        result = { code: jsonResult.code || null, message: jsonResult.message || null };
        result.originalResult = inpObj;
      }
      else {
        result = inpObj;
        result.result.result = jsonResult;
      }
    }
    catch (e) {
      isError = true;
      result.code = 888;
      result.message = inpObj.result.result;
      result.originalResult = inpObj;
    }

    return { isError: isError, result: result };
  }
}

module.exports = PodNeshanService;
