/**
 * Comment.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  autoPK: false,
  autoCreatedAt: false, 
  autoUpdatedAt: false, 
  attributes: {
    Co_num: {
      type: 'integer',
      primaryKey: true,
      required: true
    },
    Fan_num: {
      model: 'fan'
    },
    Co_text: {
      type: 'text',
      required: true
    },
    Co_time: {
      type: 'time',
      required: true
    },
    Br_num: {
      type: 'broadcast'
    },
    Co_date: {
      type: 'date',
      required: true
    }
  }
};

