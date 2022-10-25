import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import { Response } from 'superagent';
import { allTeamsMock, oneTeamMock } from './mocks/teamMock';

chai.use(chaiHttp);
const { expect } = chai;

describe('Testando a rota /teams', () => {
  beforeEach(sinon.restore);

  it('Verifica se retorna todos os times corretamente e o status correto', async() => {
    const response = await chai
      .request(app)
      .get('/teams');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(allTeamsMock);
  })

  it('Verifica se retorna o time e o status correto ao pesquisar pelo id', async() => {
    const response = await chai
      .request(app)
      .get('/teams/1');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(oneTeamMock);
  })
});
