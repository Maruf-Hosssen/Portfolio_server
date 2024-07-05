import mongoose from 'mongoose';
import dotenv from 'dotenv';

import app from './app';
import config from './app/config';
dotenv.config();
const port = 5000;
async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    app.listen(port, () => {
      // eslint-disable-next-line no-console
      console.log(`Portfolio app listening on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
}
main();
