const userService = require("./user.service");

/**
 * @api {get} /user Get All Users
 * @apiName GetUsers
 * @apiGroup User
 *
 * @apiParam {Number} page Friends list page number.
 * @apiParam {Number} count Friends to view per page.
 *
 * @apiSuccess {Object[]} users list.
 * @apiSuccess {Number} users.id ID of the User.
 * @apiSuccess {String} users.firstName First name of the User.
 * @apiSuccess {String} users.lastName  Last name of the User.
 * @apiSuccess {String} users.avatar  Avatar of the User.
 */
module.exports.getAllUsers = async (req, res) => {
  try {
    const userData = await userService.getAllUsers(
      parseInt(req.params.page),
      parseInt(req.params.count)
    );
    res.json(userData);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id User's unique ID.
 *
 * @apiSuccess {Number} id ID of the User.
 * @apiSuccess {String} firstName First name of the User.
 * @apiSuccess {String} lastName  Last name of the User.
 * @apiSuccess {String} avatar  Avatar of the User.
 */
module.exports.getUser = async (req, res) => {
  try {
    const userData = await userService.getUser(parseInt(req.params.id));
    res.json(userData);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

/**
 * @api {get} /user/:id/friends/:page/:count Get Friends list
 * @apiName GetFriends
 * @apiGroup User
 *
 * @apiParam {Number} id User's unique ID.
 * @apiParam {Number} page Friends list page number.
 * @apiParam {Number} count Friends to view per page.
 *
 * @apiSuccess {Object[]} friends List of friends.
 * @apiSuccess {Number} friends.user_id_1 ID of the User.
 * @apiSuccess {Number} friends.user_id_2 ID of the User.
 * @apiSuccess {String} friends.firstName First name of the User.
 * @apiSuccess {String} friends.lastName  Last name of the User.
 * @apiSuccess {String} friends.avatar  Avatar of the User.
 */
module.exports.getFriends = async (req, res) => {
  try {
    const friendsData = await userService.getFriends(
      parseInt(req.params.id),
      parseInt(req.params.page),
      parseInt(req.params.count)
    );
    res.json(friendsData);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
