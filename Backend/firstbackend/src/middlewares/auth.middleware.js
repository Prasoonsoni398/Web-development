export const sampleMiddleware = async (req, res, next) => {
  console.log("I am a Sample Middleware 1 ");
  next();
};
export const sampleMiddleware2 = async (req, res, next) => {
  console.log("I am a Sample Middleware 2 ");
  next();
};
