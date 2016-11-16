/**
 * Event.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  autoPK: false,
  autoCreatedAt: false, 
  autoUpdatedAt: false, 
  attributes: {
    Ev_num: {
      type: 'integer',
      primaryKey: true,
      required: true,
      unique: true
    },
    Ev_date: {
      type: 'date',
      required: true
    },
    Ev_time: {
      type: 'time',
      required: true
    },
    P_num: {
        model: 'performer'
    },
    Ev_name: {
      type: 'string',
      required: true
    },
    Ev_street: {
      type: 'string',
      required: true
    },
    Ev_city: {
      type: 'string',
      required: true
    },
    Ev_state: {
      type: 'string',
      required: true
    },
    Ev_zipcode: {
      type: 'integer',
      required: true
    }
  }
};

