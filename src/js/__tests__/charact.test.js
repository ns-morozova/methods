import { Character } from '../app.js';

test('class Character', () => {
  const character = new Character('Charlie', 'Bowman');
  expect(character.name).toBe('Charlie');
  expect(character.type).toBe('Bowman');

  character.health = 80;
  character.levelUp();
  expect(character.level).toBe(2);
  expect(character.health).toBe(100);

  character.defence = 50;
  character.damage(20);
  expect(character.health).toBe(90);
});
