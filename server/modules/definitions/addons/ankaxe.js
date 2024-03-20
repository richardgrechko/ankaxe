const { combineStats, addAura, makeAuto } = require('../facilitators.js');
const { gunCalcNames, smshskl, base } = require('../constants.js');
const g = require('../gunvals.js');
module.exports = ({ Config }) => {
  Config.SPAWN_CLASS = ["ankaxe_node", "ankaxe_base", "ankaxe_model"]
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
  // Models
    Class.ankaxe_model = {
        PARENT: ["genericTank"],
        LABEL: "Model",
    };
    Class.ankaxe_automaton = {
        PARENT: ["genericTank"],
        LABEL: "Automaton",
        TURRETS: [
          {
            POSITION: [8.5, 0, 8, 0, 190, 0],
            TYPE: ["autoTurret", { CONTROLLERS: ["nearestDifferentMaster"] }]
          },
          {
            POSITION: [8.5, 0, -8, 0, 190, 0],
            TYPE: ["autoTurret", { CONTROLLERS: ["nearestDifferentMaster"] }]
          },
        ],
    };
    Class.ankaxe_node.UPGRADES_TIER_0 = [];
    Class.ankaxe_base.UPGRADES_TIER_0 = ["ankaxe_sentry"];
    Class.ankaxe_model.UPGRADES_TIER_0 = ["ankaxe_automaton"];
};
