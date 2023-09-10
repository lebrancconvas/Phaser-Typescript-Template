import { Phaser } from '../phaser';
import { scenes } from '../scenes';
import { IConfig } from '../@types';

export const config: IConfig = {
  type: Phaser.AUTO,
  parent: 'canvas',
  width: window.innerWidth,
  height: window.innerHeight,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 }
    }
  },
  scene: scenes
};
