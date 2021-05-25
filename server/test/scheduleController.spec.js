import chai, {
  expect
} from 'chai';
import chaiHttp from 'chai-http';
import mongoose, { mongo } from 'mongoose';
import config from '../config/index';
import App from '../../app';

chai.use(chaiHttp);

describe('Schedule controller', () => {
  before((done) => {
    mongoose.connect(config.DB_TEST, () => {
      mongoose.connection.db.dropDatabase(() => {
        done();
      });
    });
  });

  describe('Create a schedule', () => {

    it('should create a schedule', (done) => {
      chai.request(App)
        .post('/api/createwallet')
        .set({
          'content-type': 'application/json',
        })
        .send(JSON.stringify(userObject))
        .end((err, res) => {
          expect(res.status).to.equal(201);
          expect(res.body.message).to.equal('schedule created successfully');
          done();
        });
    });
  });

});
