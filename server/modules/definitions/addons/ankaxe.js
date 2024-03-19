const { combineStats, addAura, makeAuto } = require('../facilitators.js');
const { gunCalcNames, smshskl, base } = require('../constants.js');
const g = require('../gunvals.js');
module.exports = ({ Class, Config }) => {
  Config.SPAWN_CLASS = ["ankaxe_node", "ankaxe_base"]
  
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
};
