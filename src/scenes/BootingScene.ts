// Booting Scene.
import { Phaser } from '../phaser';

export default class BootingScene extends Phaser.Scene {
  constructor() {
    super('booting-scene');
  }

  preload() {

  }

  create() {
    this.scene.start('title-scene');
  }

  update() {

  }
};

