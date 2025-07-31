export const generateToken = (user, message, statusCode, res) => {
  const token = user.generateJsonWebToken();
  // Determine the cookie name based on the user's role
  const cookieName = user.role === 'Admin' ? 'adminToken' : 'patientToken';

  const isProduction = process.env.NODE_ENV === "production";

  res
    .status(statusCode)
    .cookie(cookieName, token, {
      httpOnly: true,
      secure: isProduction, // true in production, false locally
      sameSite: isProduction ? "None" : "Lax", // Lax for dev, None for cross-site in prod
      maxAge: process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000,
      domain: isProduction ? "medibridge-ng-server.vercel.app" : undefined, // ✅ key fix
    })
    .json({
      success: true,
      message,
      user,
      token,
    });
};