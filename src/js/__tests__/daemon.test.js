import { Daemon } from '../app.js';

test('class Daemon', () => {
  const daemon = new Daemon('Dan');
  expect(daemon.name).toBe('Dan');
  expect(daemon.type).toBe('Daemon');
});
