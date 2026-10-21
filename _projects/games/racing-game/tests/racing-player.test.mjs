import test from 'node:test';
import assert from 'node:assert/strict';
import Player from '../levels/RacingPlayer.js';
import {
  createKeyboardPlayer,
  pressKey,
  releaseKey,
} from '@assets/js/GameEnginev1.1/test/keyboard-test-helper.mjs';

const arrows = { up: 38, left: 37, down: 40, right: 39 };
const wasd = { up: 87, left: 65, down: 83, right: 68 };

function fixture(keypress = arrows) {
  return createKeyboardPlayer(Player, { keypress });
}

test('racing inherits arrow scroll prevention and real engine movement', () => {
  const player = fixture();
  assert.equal(pressKey(player, 38).defaultPrevented, true);
  assert.equal(player.velocity.y, -5);
  assert.equal(player.direction, 'up');
  releaseKey(player, 38);
  assert.deepEqual(player.velocity, { x: 0, y: 0 });
  assert.equal(player.constructor.name, 'Player', 'HUD can still find the car');
});

test('WASD and unmapped arrows keep their browser defaults', () => {
  const player = fixture(wasd);
  assert.equal(pressKey(player, 38).defaultPrevented, false);
  assert.deepEqual(player.velocity, { x: 0, y: 0 });
  assert.equal(pressKey(player, 87).defaultPrevented, false);
  assert.equal(player.velocity.y, -5);
});

test('typing fields and browser shortcuts do not move cars or block default behavior', () => {
  const player = fixture();
  for (const tagName of ['INPUT', 'TEXTAREA', 'SELECT']) {
    assert.equal(pressKey(player, 38, { target: { tagName } }).defaultPrevented, false);
  }
  assert.equal(pressKey(player, 38, { target: { isContentEditable: true } }).defaultPrevented, false);
  for (const modifier of ['altKey', 'ctrlKey', 'metaKey']) {
    assert.equal(pressKey(player, 37, { [modifier]: true }).defaultPrevented, false);
  }
  assert.deepEqual(player.pressedKeys, {});
  assert.deepEqual(player.velocity, { x: 0, y: 0 });
});

test('paused and detached games do not capture keys', () => {
  const player = fixture();
  player.gameEnv.gameControl.isPaused = true;
  assert.equal(pressKey(player, 40).defaultPrevented, false);
  player.gameEnv.gameControl.isPaused = false;
  player.gameEnv.container.isConnected = false;
  assert.equal(pressKey(player, 40).defaultPrevented, false);
  assert.deepEqual(player.pressedKeys, {});
  assert.deepEqual(player.velocity, { x: 0, y: 0 });
});

test('a key released while paused does not leave the car moving', () => {
  const player = fixture();
  pressKey(player, 40);
  player.gameEnv.gameControl.isPaused = true;
  releaseKey(player, 40);
  assert.deepEqual(player.pressedKeys, {});
  assert.deepEqual(player.velocity, { x: 0, y: 0 });
});

function setBackgroundPixelColor(player, [red, green, blue]) {
  player.gameEnv.ctx = {
    getImageData(_x, _y, width, height) {
      const data = new Uint8ClampedArray(width * height * 4);
      for (let offset = 0; offset < data.length; offset += 4) {
        data.set([red, green, blue, 255], offset);
      }
      return { data };
    },
  };
  player.data = { mudSlowdown: true };
  player.width = 50;
  player.height = 50;
  player.gameEnv.innerWidth = 1000;
  player.gameEnv.innerHeight = 600;
}

test('mud slows tutorial cars to half speed and restores normal speed off the mud', () => {
  const player = fixture();
  setBackgroundPixelColor(player, [100, 60, 35]);
  player.position = { x: 100, y: 100 };
  pressKey(player, 39);

  player.move();
  assert.equal(player.position.x, 102.5);
  assert.equal(player.velocity.x, 5);
  setBackgroundPixelColor(player, [70, 75, 80]);
  setBackgroundPixelColor(player, [70, 75, 80]);
  player.move();
  assert.equal(player.position.x, 107.5);
});

test('cars without the tutorial mud setting keep their normal speed', () => {
  const player = fixture();
  setBackgroundPixelColor(player, [100, 60, 35]);
  player.position = { x: 100, y: 100 };
  player.data.mudSlowdown = false;
  pressKey(player, 39);

  player.move();
  assert.equal(player.position.x, 105);
});
