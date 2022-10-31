import * as sinon from 'sinon';
import * as chai from 'chai';
import * as jwt from 'jsonwebtoken';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import User from '../database/models/User';
import { Response } from 'superagent';
import { correctMock, noEmailMock, userMock, wrongEmailMock, wrongPasswordMock } from './mocks/userMock';
import generateToken, { decodeToken } from '../helpers/tokenGenerate';

chai.use(chaiHttp);
const { expect } = chai;

describe('Testando a rota /login', () => {

  it('Verifica se retorna um token em caso de sucesso no login', async() => {
    const token = await generateToken(userMock)    
    const { payload } = decodeToken(token)    
    const response = await chai.request(app).post('/login').send(correctMock)

    expect(response.status).to.be.equal(200);
    expect(userMock).to.be.deep.equal(payload);
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

  it('Verifica se retorna a role correta para cada usuario que realizar o login', async () => {
    const token = await generateToken(userMock)    
    const decoded = decodeToken(token)
    sinon.stub(jwt, 'verify').returns(decoded as any);

    const response = await chai
      .request(app)
      .get('/login/validate')
      .send(decoded);

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal({ "role": 'user'});
  });

});
