import { Zombie } from '../app.js';

test('class Zombie', () => {
  const zombie = new Zombie('Zack');
  expect(zombie.name).toBe('Zack');
  expect(zombie.type).toBe('Zombie');
});
