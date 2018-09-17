import { mensaje } from './test-unitario';

describe('Ejemplo de pruebas unitarias', () => {
    xit('debería devolver un mensaje Hola más el texto', () => {
        const resp = mensaje('Mundo');

        expect(resp).toEqual('Hola Mundo!');
    });
    it('debería conetener el texto y ser > 4 caracteres', () => {
        const resp = mensaje('Pedro');

        expect(resp).toContain('Pedro');
        expect(resp.length).toBeGreaterThan(4);
    });
});
