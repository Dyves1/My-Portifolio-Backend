import jwt from 'jsonwebtoken';
import { getCookie, getToken } from '../UTILS/cookies.js';

const checkIsLoggedIn = (req, res, next) => {
  try {
    const cookie = getCookie(req);
    // CHECK IF COOKIE EXISTS
    if (!cookie) {
      return res
        .status(401)
        .send({ message: 'Please log in to perform this action' });
    }
    // GET TOKEN FROM COOKIE
    const token = getToken(req);
    // IF NOT TOKEN IS FOUND
    if (!token) {
      return res
        .status(400)
        .send({ message: 'Could not verify your authentication' });
    }
    // GET USER ID AND ROLE FROM TOKEN
    const { id, role } = jwt.verify(token, process.env.JWT_SECRET);

    // RETURN USER ID AND ROLE
    res.locals = { id, role };
    // PROCEED IF USER IS ADMIN
    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export default checkIsLoggedIn;