import { Swordsman } from '../app.js';

test('class Swordsman', () => {
  const swordsman = new Swordsman('Sam');
  expect(swordsman.name).toBe('Sam');
  expect(swordsman.type).toBe('Swordsman');
});
