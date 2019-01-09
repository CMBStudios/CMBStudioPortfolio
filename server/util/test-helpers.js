import mongoose from 'mongoose';
import mockgoose from 'mockgoose';

export function connectDB(t, done) {
  mockgoose(mongoose).then(() => {
    mongoose.createConnection( 'mongodb://cmb:portfolio2019@ds117759.mlab.com:17759/cmb-studio', err => {
      if (err) t.fail('Unable to connect to test database');
      done();
    });
  });
}

export function dropDB(t) {
  mockgoose.reset(err => {
    if (err) t.fail('Unable to reset test database');
  });
}
