/**
 * Broadcast.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoPK: false,
  autoCreatedAt: false, 
  autoUpdatedAt: false, 
  attributes: {
    Br_num: {
      type:'integer',
      primaryKey: true,
      required: true,
      unique: true
    },
    P_num:{
      model: 'performer',
      required: true
    },
    Br_date: {
      type: 'date'
    },
    Br_time: {
      type: 'time'
    },
    Br_type:{
      type: 'string'
    },
    Br_desc: {
      type: 'text',
      required: true
    },
    Ev_num: {
      model: 'event'
    }
  }
};

