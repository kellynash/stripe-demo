module.exports = {
  PORT: process.env.PORT || 3000,
  HOSTNAME: process.env.HOSTNAME || 'localhost',
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost:27017/stripe-demo',
  //The following line was in Lance's github code. His didn't have the public key line, either.
  // STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY
  STRIPE_SECRET_KEY: 'sk_test_2C8rv4zwifIGtu7JisjVlG1U',
  STRIPE_PUBLIC_KEY: 'pk_test_D5m8J4GDBwCxuH7Kmt5gxbbt'
};
