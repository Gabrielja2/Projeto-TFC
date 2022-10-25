import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import { Response } from 'superagent';
import { matches } from './mocks/matchMock';

chai.use(chaiHttp);
const { expect } = chai;

describe('Testando a rota /teams', () => {
  beforeEach(sinon.restore);

  it('Verifica se retorna todas as partidas corretamente e o status correto', async() => {
    const response = await chai
      .request(app)
      .get('/matches');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(matches);
  })
 
});
