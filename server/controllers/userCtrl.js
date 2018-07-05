let id = 1;

module.exports = {
  postInformation: (req, res) => {
    const { firstName, lastName, phone, service } = req.body;
    const { users } = req.session;

    users.push({ id, firstName, lastName, phone, service });
    let index = users.findIndex(user => user.id === id);
    let user = users[index];
    id++;

    console.log(user);
    res.status(200).json(user);
  }
};
