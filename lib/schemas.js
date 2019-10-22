module.exports = {
  moduleConfig: {
    type: 'object',
    properties: {
      apiToken: {
        type: 'string'
      },
      tokenIssuer: {
        type: 'integer',
        enum: [0, 1]
      }
    },
    required: ['apiToken'],
    additionalProperties: false
  },

  // #1
  search: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        term: {
          type: 'string'
        },
        lat: {
          type: 'number'
        },
        lng: {
          type: 'number'
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        }
      },
      required: ['token', 'tokenIssuer', 'term', 'lat', 'lng', 'scApiKey'],
      additionalProperties: false
    }
  },

  // #2
  reverseGeo: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        lat: {
          type: 'number'
        },
        lng: {
          type: 'number'
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        }
      },
      required: ['token', 'tokenIssuer', 'lat', 'lng', 'scApiKey'],
      additionalProperties: false
    }
  },

  // #3
  direction: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        origin: {
          type: 'object',
          properties: {
            lat: {
              type: 'number'
            },
            lng: {
              type: 'number'
            }
          },
          required: ['lat', 'lng'],
          additionalProperties: false
        },
        destination: {
          type: 'object',
          properties: {
            lat: {
              type: 'number'
            },
            lng: {
              type: 'number'
            }
          },
          required: ['lat', 'lng'],
          additionalProperties: false
        },
        waypoints: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              lat: {
                type: 'number'
              },
              lng: {
                type: 'number'
              }
            },
            required: ['lat', 'lng'],
            additionalProperties: false
          }
        },
        avoidTrafficZone: {
          type: 'boolean'
        },
        avoidOddEvenZone: {
          type: 'boolean'
        },
        alternative: {
          type: 'boolean'
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        }
      },
      required: ['token', 'tokenIssuer', 'origin', 'destination', 'scApiKey'],
      additionalProperties: true
    }
  },

  // #4
  noTrafficDirection: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        origin: {
          type: 'object',
          properties: {
            lat: {
              type: 'number'
            },
            lng: {
              type: 'number'
            }
          },
          required: ['lat', 'lng'],
          additionalProperties: false
        },
        destination: {
          type: 'object',
          properties: {
            lat: {
              type: 'number'
            },
            lng: {
              type: 'number'
            }
          },
          required: ['lat', 'lng'],
          additionalProperties: false
        },
        waypoints: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              lat: {
                type: 'number'
              },
              lng: {
                type: 'number'
              }
            },
            required: ['lat', 'lng'],
            additionalProperties: false
          }
        },
        avoidTrafficZone: {
          type: 'boolean'
        },
        avoidOddEvenZone: {
          type: 'boolean'
        },
        alternative: {
          type: 'boolean'
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        }
      },
      required: ['token', 'tokenIssuer', 'origin', 'destination', 'scApiKey'],
      additionalProperties: true
    }
  },

  // #5
  distanceMatrix: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        origins: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              lat: {
                type: 'number'
              },
              lng: {
                type: 'number'
              }
            },
            required: ['lat', 'lng'],
            additionalProperties: false
          },
          minItems: 1
        },
        destinations: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              lat: {
                type: 'number'
              },
              lng: {
                type: 'number'
              }
            },
            required: ['lat', 'lng'],
            additionalProperties: false
          },
          minItems: 1
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        }
      },
      required: ['token', 'tokenIssuer', 'origins', 'destinations', 'scApiKey'],
      additionalProperties: true
    }
  },

  // #6
  noTrafficDistanceMatrix: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        origins: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              lat: {
                type: 'number'
              },
              lng: {
                type: 'number'
              }
            },
            required: ['lat', 'lng'],
            additionalProperties: false
          },
          minItems: 1

        },
        destinations: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              lat: {
                type: 'number'
              },
              lng: {
                type: 'number'
              }
            },
            required: ['lat', 'lng'],
            additionalProperties: false
          },
          minItems: 1
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        }
      },
      required: ['token', 'tokenIssuer', 'origins', 'destinations', 'scApiKey'],
      additionalProperties: true
    }
  },

  // #7
  mapMatching: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        path: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              lat: {
                type: 'number'
              },
              lng: {
                type: 'number'
              }
            },
            required: ['lat', 'lng'],
            additionalProperties: false
          },
          minItems: 2
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        }
      },
      required: ['token', 'tokenIssuer', 'path', 'scApiKey'],
      additionalProperties: true
    }
  }
};
