'use strict';

const userBody = require('../constants/requestBodies');
const connection = require("../../../connection/connection");

const incrementUserId = async () => {
  return new Promise((resolve, reject) => {
    const script = `SELECT MAX(id) FROM opinio.user`;
    connection.execute(script, (error, result, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(++result[0]['MAX(id)']);
      }
    });
  });
};

const transformUpdateParams = (body) => {
  const updateParams = Object.entries(body);
  const transformedParams = [];
  for (const param of updateParams) {
    const [ key, value ] = param;
    if (!(key === 'id')) {
      const paramString = `\`${key}\` = '${value}'`;
      transformedParams.push(paramString);
    }
  }
  return transformedParams.join(', ');
}

const validateUserCreation = (body) => {
  const missingParams = [];
  for (const param of Object.keys(userBody)) {
    if (!Object.keys(body).includes(param)) {
      missingParams.push(param);
    }
  }

  if (missingParams.length > 0) {
    const message = `Wrong request body. Missing parameters: ${missingParams.join(', ')}`;
    return message;
  } else return;
}

module.exports = { incrementUserId, transformUpdateParams, validateUserCreation };