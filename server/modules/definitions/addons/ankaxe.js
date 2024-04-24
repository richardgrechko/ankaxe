const { combineStats, addAura, makeAuto } = require('../facilitators.js');
const { gunCalcNames, smshskl, base } = require('../constants.js');
const g = require('../gunvals.js');
module.exports = ({ Config }) => {
  Config.SPAWN_CLASS = ["ankaxe_node", "ankaxe_base"]
  //Ankaxe4
  
    Class.ankaxe_circle = {
        PARENT: ["genericTank"],
        LABEL: "Circle",
        MIRROR_MASTER_ANGLE: true
    };
    Class.ankaxe_triangle = {
        PARENT: ["genericTank"],
        LABEL: "",
        SHAPE: 3,
        MIRROR_MASTER_ANGLE: true
    };
    Class.ankaxe_flipped_triangle = {
        PARENT: ["genericTank"],
        LABEL: "",
        SHAPE: 3.5,
        MIRROR_MASTER_ANGLE: true
    };
    Class.ankaxe_square = {
        PARENT: ["genericTank"],
        LABEL: "",
        SHAPE: 4,
        MIRROR_MASTER_ANGLE: true
    };
    Class.ankaxe_pentagon = {
        PARENT: ["genericTank"],
        LABEL: "",
        SHAPE: 5,
        MIRROR_MASTER_ANGLE: true
    };
    Class.ankaxe_flipped_pentagon = {
        PARENT: ["genericTank"],
        LABEL: "",
        SHAPE: 5.5,
        MIRROR_MASTER_ANGLE: true
    };
   Class.ankaxe_hexagon = {
        PARENT: ["genericTank"],
        LABEL: "",
        SHAPE: 6,
        MIRROR_MASTER_ANGLE: true
    };
    Class.ankaxe_heptagon = {
        PARENT: ["genericTank"],
        LABEL: "",
        SHAPE: 7,
        MIRROR_MASTER_ANGLE: true
    };
    Class.ankaxe_flipped_heptagon = {
        PARENT: ["genericTank"],
        LABEL: "",
        SHAPE: 7.5,
        MIRROR_MASTER_ANGLE: true
    };
  // Weapons
    Class.ankaxe_node = {
        PARENT: ["genericTank"],
        LABEL: "Node"
    };
    Class.ankaxe_mono = {
        PARENT: ["genericTank"],
        LABEL: "Mono",
        GUNS: [
            {
              POSITION: [18, 8, 1, 0, 0, 0, 0],
              PROPERTIES: {
                  SHOOT_SETTINGS: combineStats([g.basic]),
                   TYPE: "bullet",
                   COLOR: "grey"
                }
            }
        ],
    };
    Class.ankaxe_pelling = {
        PARENT: ["genericTank"],
        LABEL: "Pelling",
        GUNS: [
            {
              POSITION: [17, 3, 1, 0, 0, 0, 0],
              PROPERTIES: {
                  SHOOT_SETTINGS: combineStats([g.basic, g.pelleter]),
                   TYPE: "bullet",
                   COLOR: "grey"
                }
            },
            {
              POSITION: [4.5, 9, -1.4, 8.5, 0, 0, 0],
            },
        ],
    };
    Class.ankaxe_caltrop = {
        PARENT: ["genericTank"],
        LABEL: "Caltrop",
        GUNS: [
            {
              POSITION: [14, 6, 1, 0, 0, 0, 0],
              PROPERTIES: {
                   COLOR: "grey"
                }
            },
            {
              POSITION: [3, 6, 1.5, 14, 0, 0, 0],
              PROPERTIES: {
                  SHOOT_SETTINGS: combineStats([g.trap, g.morereload, g.halfdamage]),
                   TYPE: "trap",
                   COLOR: "grey"
                }
            },
        ],
    };
    Class.ankaxe_watcher = {
        PARENT: ["genericTank"],
        LABEL: "Watcher",
        GUNS: [
            {
              POSITION: [8, 8, 1.5, 5, 0, 0, 0],
              PROPERTIES: {
                  SHOOT_SETTINGS: combineStats([g.drone, g.morereload, g.halfdamage]),
                   TYPE: "drone",
                   COLOR: "grey"
                }
            },
        ],
    };
  // Mono upgrades
    Class.ankaxe_duo = {
        PARENT: ["genericTank"],
        LABEL: "Duo",
        GUNS: [
            {
              POSITION: [18, 8, 1, 0, 0, 0, 0],
              PROPERTIES: {
                  SHOOT_SETTINGS: combineStats([g.basic]),
                   TYPE: "bullet",
                   COLOR: "grey"
                }
            }
        ],
    };
  // Pelling upgrades
    Class.ankaxe_pelleter = {
        PARENT: ["genericTank"],
        LABEL: "Pelleter",
        GUNS: [
            {
              POSITION: [17, 3, 1, 0, 2.5, 0, 0],
              PROPERTIES: {
                  SHOOT_SETTINGS: combineStats([g.basic, g.pelleter]),
                   TYPE: "bullet",
                   COLOR: "grey"
                }
            },
            {
              POSITION: [17, 3, 1, 0, -2.5, 0, 0.5],
              PROPERTIES: {
                  SHOOT_SETTINGS: combineStats([g.basic, g.pelleter]),
                   TYPE: "bullet",
                   COLOR: "grey"
                }
            },
            {
              POSITION: [4.5, 9, -1.4, 8.5, 0, 0, 0],
            },
        ],
    };
  // Bodies
    Class.ankaxe_base = {
        PARENT: ["genericTank"],
        LABEL: "Base",
        TURRETS: [
          {
            POSITION: [10, 0, 0, 0, 360, 1],
            TYPE: ["ankaxe_circle"]
          }
        ],
    };
    Class.ankaxe_sentry = {
        PARENT: ["genericTank"],
        LABEL: "Sentry",
        TURRETS: [
          {
            POSITION: [10, 0, 0, 0, 360, 1],
            TYPE: ["autoTurret", { CONTROLLERS: ["nearestDifferentMaster"], INDEPENDENT: true, }]
          }
        ],
    };
    Class.ankaxe_whirlwind = {
        PARENT: ["genericTank"],
        LABEL: "Whirlwind",
        AI: {
            SPEED: 2
        },
        GUNS: (() => {
          let output = [];
          for (let i = 0; i < 3; i++) output.push(
            {
              POSITION: { LENGTH: 0.1, WIDTH: 7, DELAY: 0 },
              PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, {reload: 2}]),
                TYPE: ["satellite", { ANGLE: i*120 }]
              }
            },
          );
          return output;
        })(),
        TURRETS: [
          {
            POSITION: [10, 0, 0, 0, 360, 1],
            TYPE: ["ankaxe_triangle", { CONTROLLERS: [["spin", {speed: 0.1}]] }]
          }
        ],
    };
    Class.ankaxe_node.UPGRADES_TIER_0 = ["ankaxe_mono", "ankaxe_pelling", "ankaxe_caltrop", "ankaxe_watcher"];
      Class.ankaxe_mono.UPGRADES_TIER_0 = ["ankaxe_duo"];
      Class.ankaxe_pelling.UPGRADES_TIER_0 = ["ankaxe_pelleter"];
    Class.ankaxe_base.UPGRADES_TIER_0 = ["ankaxe_sentry", "ankaxe_whirlwind"];
};
