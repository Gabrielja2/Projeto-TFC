import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import { Response } from 'superagent';
import { createdMatchMock, editedGoalsMock, finishedMatchMock, goalsBodyMock, matches, matchesInProgress, newMatchMock, tokenMock } from './mocks/matchMock';
import MatchesModel from '../database/models/Matche';
import { IMatch } from '../interfaces/match';

chai.use(chaiHttp);
const { expect } = chai;

describe('Testando a rota /matches', () => {  
 
  afterEach(() => {
    sinon.restore();
  });

  it('Verifica se retorna todas as partidas corretamente e o status correto', async() => {
    sinon.stub(MatchesModel, 'findAll').resolves(matches as any)
    const response = await chai
      .request(app)
      .get('/matches');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(matches);
  })

  it('Verifica se retorna todas as partidas inProgress corretamente e o status correto', async() => {
    sinon.stub(MatchesModel, 'findAll').resolves(matchesInProgress as any)
    const response = await chai
      .request(app)
      .get('/matches?inProgress=true');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(matchesInProgress);
  })  

  // it('Verifica se é possível criar uma partida corretamente e retorna o status correto', async() => {
  //   sinon.stub(MatchesModel, 'create').resolves(createdMatchMock as any)  
  //   const response = await chai
  //     .request(app)
  //     .post('/matches')
  //     .send(newMatchMock);      

  //   expect(response.status).to.be.equal(201);
  //   expect(response.body).to.be.deep.equal(createdMatchMock);
  // })

  // it('Verifica se não é possível criar uma partida com times com o mesmo id', async() => {
  //   sinon.stub(MatchesModel, 'create').resolves({"message": "It is not possible to create a match with two equal teams"} as any)  
  //   const response = await chai
  //     .request(app)
  //     .post('/matches')
  //     .send(newMatchSameIdMock);

  //   expect(response.status).to.be.equal(422);
  //   expect(response.body).to.be.deep.equal({"message": "It is not possible to create a match with two equal teams"});
  // })

    // it('Verifica se não é possível criar uma partida com times com id inextitente no banco de dados', async() => {
  //   sinon.stub(MatchesModel, 'create').resolves({"message": "It is not possible to create a match with two equal teams"} as any)  
  //   const response = await chai
  //     .request(app)
  //     .post('/matches')
  //     .send(newMatchWrongMock);

  //   expect(response.status).to.be.equal(404);
  //   expect(response.body).to.be.deep.equal({"message": "There is no team with such id!"});
  // })

  it('Verifica se não é possível criar uma partida sem um token válido', async() => {
    sinon.stub(MatchesModel, 'create').resolves({"message": "Token must be a valid token"} as any)  
    const response = await chai
      .request(app)
      .post('/matches')
      .send(newMatchMock);

    expect(response.status).to.be.equal(401);
    expect(response.body).to.be.deep.equal({"message": "Token must be a valid token"});
  })

  it('Verifica se é possivel atualizar uma partida corretamente e retorna o status correto', async() => {
    const response = await chai
      .request(app)
      .patch('/matches/1')
      .send(goalsBodyMock);

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(editedGoalsMock);
  })

  it('Verifica se é possivel finalizar uma partida corretamente e retorna o status correto', async() => {
    const response = await chai
      .request(app)
      .patch('/matches/1/finish');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(finishedMatchMock);
  })
 
});
