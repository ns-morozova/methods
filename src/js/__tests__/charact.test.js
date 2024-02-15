import Character from "../class/Character";

test('Правильно создается объект', () => {
  const character = new Character('Don', 'Bowman');
  const correct = {
    attack: undefined,
    defence: undefined,
    health: 100,
    level: 1,
    name: 'Don',
    type: 'Bowman'
  };

  expect(character).toEqual(correct);

  character.health = 80;
  character.levelUp();
  expect(character.level).toBe(2);
  expect(character.health).toBe(100);

  character.defence = 50;
  character.damage(20);
  expect(character.health).toBe(90);
});
