/**
 * @typedef {object} confObj
 * @property {string} apiToken
 * @property {string} [tokenIssuer]
 */

/**
 * @typedef {object} searchObj
 * @property {string} term
 * @property {number} lat
 * @property {number} lng
 * @property {number} apiKey
 * @property {number} [voucherHash]
 */

/**
 * @typedef {object} reverseGeoObj
 * @property {number} lat
 * @property {number} lng
 * @property {number} apiKey
 * @property {number} [voucherHash]
 */

/**
* @typedef {object} pointObj
* @property {number} lat
* @property {number} lng
*/

/**
 * @typedef {object} directionObj
 * @property {pointObj} origin
 * @property {pointObj} destination
 * @property {Array<pointObj>} waypoints
 * @property {number} avoidTrafficZone
 * @property {number} avoidOddEvenZone
 * @property {number} alternative
 * @property {number} apiKey
 * @property {number} [voucherHash]
 */

/**
 * @typedef {object} directionObj
 * @property {Array<pointObj>} origins
 * @property {Array<pointObj>} destinations
 * @property {number} apiKey
 * @property {number} [voucherHash]
 */

/**
 * @typedef {object} mapMatchingObj
 * @property {Array<pointObj>} path
 * @property {number} apiKey
 * @property {number} [voucherHash]
 */
