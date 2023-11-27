const express = require('express');
const { getAllUsers, getUser, createUser, deleteUser, updateUser } = require('./controllers/UserController/userController');

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/users/', getAllUsers);
app.get('/user&id=:id/', getUser);
app.post('/user/create/', createUser);
app.put('/user/update&id=:id/', updateUser);
app.delete('/user/delete&id=:id/', deleteUser);

app.listen(port, () => {
  console.log('Server running on port ' + port);
});