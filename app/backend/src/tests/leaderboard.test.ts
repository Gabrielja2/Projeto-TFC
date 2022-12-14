import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import { Response } from 'superagent';
import sequelize from '../database/models/index';
import { leaderboardAway, leaderboardHome, leaderboard } from './mocks/leaderboardMock';


chai.use(chaiHttp);
const { expect } = chai;

describe('Testando a rota /leaderboard', () => {  
 
  afterEach(() => {
    sinon.restore();
  });

  it('Verifica se retorna leaderboardHome corretamente e o status correto', async() => {
    sinon.stub(sequelize, 'query').resolves([leaderboardHome] as any)
    const response = await chai
      .request(app)
      .get('/leaderboard/home');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(leaderboardHome);
  })

  it('Verifica se retorna leaderboardAway corretamente e o status correto', async() => {
    sinon.stub(sequelize, 'query').resolves([leaderboardAway] as any)
    const response = await chai
      .request(app)
      .get('/leaderboard/away');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(leaderboardAway);
  })

  it('Verifica se retorna leaderboard corretamente e o status correto', async() => {
    sinon.stub(sequelize, 'query').resolves([leaderboard] as any)
    const response = await chai
      .request(app)
      .get('/leaderboard');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(leaderboard);
  })

});