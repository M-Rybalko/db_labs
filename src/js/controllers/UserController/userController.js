'use strict';

const connection = require("../../connection/connection");
const { incrementUserId, transformUpdateParams, validateUserCreation } = require('./utils/userUtils')

const getAllUsers = async (req, res) => {
  const script = `SELECT * FROM opinio.user`;
  connection.execute(script, (err, results) => {
    if (err) res.sendStatus(500);
    if (results.length > 0) res.send(results);
    else res.sendStatus(404);
  });
};

const getUser = async (req, res) => {
  const script = `SELECT * FROM opinio.user WHERE (id) = ${req.params.id}`;
  connection.execute(script, (err, results) => {
    if (err) res.sendStatus(500);
    if (results.length > 0) res.send(results);
    else res.sendStatus(404);
  });
};

const createUser = async (req, res) => {
  const id = await incrementUserId();
  const msg = validateUserCreation(req.body)
  if (msg) {
    res.status(400).send(msg);
    return;
  }
  const script = `INSERT INTO opinio.user (id, mail, password, name, age, gender) VALUES ('${id}', '${req.body["mail"]}', '${req.body["password"]}', '${req.body["name"]}', '${req.body["age"]}', '${req.body["gender"]}')`;
  connection.execute(script, (err, results) => {
    if (err) res.sendStatus(500);
    if (results) {
      res.send(results);
    }
    else res.sendStatus(404);
  });
}

const deleteUser = async (req, res) => {
  const script = `DELETE FROM opinio.user WHERE (id) = ${req.params.id}`;
  connection.execute(script, (err, results) => {
    if (err) res.sendStatus(500);
    if (results) res.send(results);
    else res.sendStatus(404);
  });
}

const updateUser = async (req, res) => {
  const updatedValues = transformUpdateParams(req.body);
  const script = `UPDATE opinio.user SET ${updatedValues} WHERE (id) = '${req.params.id}'`;
  if(updatedValues) {
    connection.execute(script, (err, results) => {
      if (err) res.sendStatus(500);
      if (results) res.send(results);
      else res.sendStatus(404);
    });
  } else res.status(400).send('Empty request body.');
}

module.exports = { getAllUsers, getUser, createUser, deleteUser, updateUser }



