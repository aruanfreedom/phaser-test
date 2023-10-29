import Phaser from "phaser";
import { Example } from "./src/scenes/Example.js";

const config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  scene: Example,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
    },
  },
};

new Phaser.Game(config);
