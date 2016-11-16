/**
 * Fan.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  //autoPK: false,
  autoCreatedAt: false, 
  autoUpdatedAt: false, 
  attributes: {
    F_num: {
      type: 'integer',
      //primaryKey: true,
      required: true,
      unique: true,
      collection: 'performer',
      via: 'P_num',
      through: 'follow'
    },
    F_name: {
      type: 'string',
      required: true
    },
    F_dob:{
      type: 'date',
      required: true
    },
    F_gender: {
      type: 'char',
      required: true
    },
    F_email: {
      type: 'string',
      required: true
    },
    F_scname: {
      type: 'text'
    }
  }
};

