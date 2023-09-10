export interface IConfig {
  type: number;
  parent: string;
  width: number;
  height: number;
  physics: IPhysics;
  scene: typeof Phaser.Scene[];
}

export interface IPhysics {
  default: string;
  arcade: IArcade;
};

export interface IArcade {
  gravity: { y: number }
};
