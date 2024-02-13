import { Magician } from '../app.js';

test('class Magician', () => {
  const magician = new Magician('Maddy');
  expect(magician.name).toBe('Maddy');
  expect(magician.type).toBe('Magician');
});
