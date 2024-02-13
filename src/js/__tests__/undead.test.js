import { Undead } from '../app.js';

test('class Undead', () => {
  const undead = new Undead('Uliana');
  expect(undead.name).toBe('Uliana');
  expect(undead.type).toBe('Undead');
});
