const assert = require('assert');
const sum = require('../Projeto - 2/math');

describe('Função de soma', () => {
    it('Deve retornar 4 quando somar 2 e 2', () => {
        assert.strictEqual(sum(2, 2), 4);
    });

    it('Deve retornar 4 quando somar -2 e 2', () => {
        assert.strictEqual(sum(-2, 2), 0);
    });

    it('Deve retornar 4 quando somar 2 e 2', () => {
        assert.strictEqual(sum(-2, -2), -4);
    });
});