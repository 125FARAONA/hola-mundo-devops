const saludo = require('./index');
const assert = require('assert');

describe('Prueba unitaria', function() {
    it('debe devolver "Hola Mundo"', function() {
        assert.strictEqual(saludo(), 'Hola Mundo');
    });
});
