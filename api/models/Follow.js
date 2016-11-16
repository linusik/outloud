/**
 * Follow.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  //autoPK: false,
  autoCreatedAt: false, 
  autoUpdatedAt: false, 
  attributes: {
    P_num: {
      model: 'performer'
    },
    F_num: {
      model: 'fan'
    }
  }
};

