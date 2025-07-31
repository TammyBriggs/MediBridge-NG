export const generateToken = (user, message, statusCode, res) => {
  const token = user.generateJsonWebToken();
  // Determine the cookie name based on the user's role
  const cookieName = user.role === 'Admin' ? 'adminToken' : 'patientToken';

  res
    .status(statusCode)
    .cookie(cookieName, token, {
      httpOnly: true,
      secure: true, // ensures cookie is sent only over HTTPS
      sameSite: 'None', // allows cross-origin cookies
      maxAge: process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000,
    })
    .json({
      success: true,
      message,
      user,
      token,
    });
};