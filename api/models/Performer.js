/**
 * Performer.js
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
      type: 'integer',
      required: true,
      //primaryKey: true,
      autoIncrement: true,
      collection: 'fan',
      via: 'F_num',
      through: 'follow'
      //dominant: true
    },
    P_name: {
      type: 'string',
      required: true
    },
    P_cdate: {
      type: 'date',
      required: true
    },
    P_email: {
      type: 'email',
      required: true
    },
    P_scname: {
      type: 'integer'
    }
  }
};

