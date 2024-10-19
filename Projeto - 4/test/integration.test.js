const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');

chai.use(chaiHttp);

describe('Testes de Integração do Servidor HTTP', () => {
    it('Deve retornar "Hello World" na rota GET /', (done) => {
        chai
            .request(app)
            .get('/')
            .end((err, res) => {
                chai.expect(res).to.have.status(200);
                chai.expect(res.text).to.equal('Hello World');
                done();
            });
    });

    it('Deve retornar JSON com mensagem de sucesso na rota POST /data', (done) => {
        const inputData = { name: 'John Doe', age: 30 };

        chai
            .request(app)
            .post('/data')
            .send(inputData)
            .end((err, res) => {
                chai.expect(res).to.have.status(200);
                chai.expect(res.body).to.be.an('object');
                chai.expect(res.body).to.have.property('message', 'Sucesso');
                chai.expect(res.body.data).to.deep.equal(inputData);
                done();
            });
    });
});