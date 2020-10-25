const userService = require("./user.service");

module.exports.login = async (req, res) => {
  try {
    userService.login();
  } catch (error) {
    res.status(400).json(error);
  }
};

/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {String} id User's unique ID.
 *
 * @apiSuccess {String} id ID of the User.
 * @apiSuccess {String} firstName First name of the User.
 * @apiSuccess {String} lastName  Last name of the User.
 */
module.exports.getUser = async (req, res) => {
  try {
    userService.getUser(req.params.id);
  } catch (error) {
    res.status(400).json(error);
  }
};
