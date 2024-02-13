import { Bowman } from '../app.js';

test('class Bowman', () => {
  const bowman = new Bowman('Bob');
  expect(bowman.name).toBe('Bob');
  expect(bowman.type).toBe('Bowman');
});
