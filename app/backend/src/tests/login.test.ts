import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import User from '../database/models/User';
import { Response } from 'superagent';
import { correctMock, noEmailMock, noPasswordMock, token, userMock, wrongEmailMock, wrongPasswordMock } from './mocks/userMock';
import generateToken, { decodeToken } from '../helpers/tokenGenerate';

chai.use(chaiHttp);
const { expect } = chai;

describe('Testando a rota de Login', () => {
  beforeEach(sinon.restore);

  it('Verifica se retorna um token em caso de sucesso no login', async() => {
    const tk = await generateToken(userMock)    
    const response = await chai.request(app).post('/login').send(correctMock)
    const decoded = decodeToken(tk)

    expect(response.status).to.be.equal(200);
    expect(userMock).to.be.deep.equal(decoded.payload);
  })

  it('Verifica se retorna a mensagem correta caso o email esteja incorreto', async () => {
    const response = await chai
      .request(app)
      .post('/login')
      .send(wrongEmailMock);

    expect(response.status).to.be.equal(401);
    expect(response.body).to.be.deep.equal({ message: 'Incorrect email or password'});
  });

  it('Verifica se retorna a mensagem correta caso o password esteja incorreto', async () => {
    const response = await chai
      .request(app)
      .post('/login')
      .send(wrongPasswordMock);

    expect(response.status).to.be.equal(401);
    expect(response.body).to.be.deep.equal({ message: 'Incorrect email or password'});
  });

  it('Verifica se retorna a mensagem correta caso o email não seja passado', async () => {
    const response = await chai
      .request(app)
      .post('/login')
      .send(noEmailMock);

    expect(response.status).to.be.equal(400);
    expect(response.body).to.be.deep.equal({ message: 'All fields must be filled'});
  });  

});
