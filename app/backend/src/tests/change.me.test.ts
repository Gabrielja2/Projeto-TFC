import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import User from '../database/models/User';
import { Response } from 'superagent';
import { userMock, wrongMock, correctMock, noEmailMock, noPasswordMock } from './mocks/userMock';

chai.use(chaiHttp);
const { expect } = chai;

describe('Testando a rota de Login', () => {
  beforeEach(sinon.restore);

  test('Verifica se retorna um token em caso de sucesso no login', async() => {
    sinon.stub(User, 'findOne').resolves(userMock as User);

    const response = await chai.request(app).post('/login').send(correctMock)

    expect(response.status).to.be.equal(200);
    expect(response.body).to.have.property('token');
  })

  test('Verifica se retorna a mensagem correta caso o email ou password estejam incorretos', async () => {
    sinon.stub(User, 'findOne').resolves(userMock as User);


    const response = await chai
      .request(app)
      .post('/login')
      .send(wrongMock);

    expect(response.status).to.be.equal(401);
    expect(response.body).to.be.deep.equal('Incorrect email or password');
  });

  test('Verifica se retorna a mensagem correta caso não tenha o campo email ', async () => {
    const response = await chai
      .request(app)
      .post('/login')
      .send(noEmailMock);

    expect(response.status).to.be.equal(400);
    expect(response.body).to.be.deep.equal('All fields must be filled');
  });

  test('Verifica se retorna a mensagem correta caso não tenha o campo o password', async () => {
    const response = await chai
      .request(app)
      .post('/login')
      .send(noPasswordMock);

    expect(response.status).to.be.equal(400);
    expect(response.body).to.be.deep.equal('All fields must be filled');
  });
});
