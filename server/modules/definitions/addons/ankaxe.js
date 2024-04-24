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
    Class.ankaxe_flank = {
        PARENT: ["genericTank"],
        LABEL: "Flank",
        GUNS: [
            {
              POSITION: [18, 8, 1, 0, 0, 0, 0],
              PROPERTIES: {
                  SHOOT_SETTINGS: combineStats([g.basic]),
                   TYPE: "bullet",
                   COLOR: "grey"
                }
            },
            {
              POSITION: [18, 8, 1, 0, 0, 120, 0],
              PROPERTIES: {
                  SHOOT_SETTINGS: combineStats([g.basic]),
                   TYPE: "bullet",
                   COLOR: "grey"
                }
            },
            {
              POSITION: [18, 8, 1, 0, 0, 240, 0],
              PROPERTIES: {
                  SHOOT_SETTINGS: combineStats([g.basic]),
                   TYPE: "bullet",
                   COLOR: "grey"
                }
            },
        ],
    };
    Class.ankaxe_machineGun = {
        PARENT: ["genericTank"],
        LABEL: "Machine Gun",
        GUNS: [
            {
              POSITION: [12, 8, 1.4, 8, 0, 0, 0],
              PROPERTIES: {
                  SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                   TYPE: "bullet",
                   COLOR: "grey"
                }
            }
        ],
    };
    Class.ankaxe_auto2 = {
        PARENT: ["genericTank"],
        LABEL: "Auto 2",
        TURRETS: [
            {
              POSITION: [22, 0, 0, 0, 360, 0],
              TYPE: Class.ankaxe_auto2Body = {
                PARENT: ["genericTank"],
                LABEL: "",
                FACING_TYPE: "autospin",
                TURRETS: [
                    {
                       POSITION: [200/22, 8, 0, 0, 210, 0],
                       TYPE: "autoTurret"
                    },
                    {
                       POSITION: [200/22, 8, 0, 180, 210, 0],
                       TYPE: "autoTurret"
                    },
                ],
              }
            }
        ],
    };
// Machine Gun upgrades
Class.ankaxe_minigun = {
    PARENT: "genericTank",
    LABEL: "Minigun",
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.2
    },
    GUNS: [
        {
            POSITION: [21, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [19, 8, 1, 0, 0, 0, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [17, 8, 1, 0, 0, 0, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.ankaxe_gunner = {
    PARENT: "genericTank",
    LABEL: "Gunner",
    DANGER: 6,
    GUNS: [
        {
            POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, { speed: 1.2 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, { speed: 1.2 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, { speed: 1.2 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, { speed: 1.2 }]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.ankaxe_sprinkler = {
    PARENT: "genericTank",
    LABEL: "Sprinkler",
    DANGER: 6,
    GUNS: [
        {
            POSITION: [23, 5, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.lowPower, g.pelleter, { recoil: 1.15 }]),
                TYPE: "bullet"
            }
        },
            {
              POSITION: [12, 8, 1.4, 8, 0, 0, 0],
              PROPERTIES: {
                  SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                   TYPE: "bullet",
                   COLOR: "grey"
                }
            }
    ]
}

// Minigun upgrades
Class.ankaxe_streamliner = {
    PARENT: "genericTank",
    LABEL: "Streamliner",
    DANGER: 7,
    BODY: {
        FOV: 1.3,
    },
    GUNS: [
        {
            POSITION: [25, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [23, 8, 1, 0, 0, 0, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [21, 8, 1, 0, 0, 0, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 8, 1, 0, 0, 0, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [17, 8, 1, 0, 0, 0, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner]),
                TYPE: "bullet",
            },
        },
    ],
}

// Gunner upgrades
Class.ankaxe_nailgun = {
    PARENT: "genericTank",
    LABEL: "Nailgun",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.1,
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [
        {
            POSITION: [19, 2, 1, 0, -2.5, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 2, 1, 0, 2.5, 0, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 2, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5.5, 7, -1.8, 6.5, 0, 0, 0],
        },
    ],
}

// Sprinkler upgrades
Class.ankaxe_sprayer = {
    PARENT: "genericTank",
    LABEL: "Sprayer",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [25, 4, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.lowPower, g.pelleter, { recoil: 1.15 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [23, 6, 1, 0, 0, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.lowPower, g.pelleter, { recoil: 1.15 }]),
                TYPE: "bullet"
            }
        },
            {
              POSITION: [12, 8, 1.4, 8, 0, 0, 0],
              PROPERTIES: {
                  SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                   TYPE: "bullet",
                   COLOR: "grey"
                }
            }
    ],
}
Class.ankaxe_atomizer = {
    PARENT: "genericTank",
    LABEL: "Atomizer",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [5, 5, 1.3, 18.5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.lowPower, g.machineGun, { recoil: 1.15 }, g.atomizer]),
                TYPE: "bullet",
            },
        },
            {
              POSITION: [12, 8, 1.4, 8, 0, 0, 0],
              PROPERTIES: {
                  SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                   TYPE: "bullet",
                   COLOR: "grey"
                }
            }
    ],
}
Class.ankaxe_focal = {
    PARENT: "genericTank",
    LABEL: "Focal",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [25, 5, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.lowPower, g.machineGun, { recoil: 1.15 }]),
                TYPE: "bullet",
            },
        },
            {
              POSITION: [14, 8, 1.4, 8, 0, 0, 0],
              PROPERTIES: {
                  SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                   TYPE: "bullet",
                   COLOR: "grey"
                }
            }
    ],
}
  // Auto 2 upgrades
    Class.ankaxe_auto3 = {
        PARENT: ["genericTank"],
        LABEL: "Auto 3",
        TURRETS: [
            {
              POSITION: [22, 0, 0, 0, 360, 0],
              TYPE: Class.ankaxe_auto3Body = {
                PARENT: ["genericTank"],
                LABEL: "",
                FACING_TYPE: "autospin",
                TURRETS: [
                    {
                       POSITION: [200/22, 8, 0, 0, 210, 0],
                       TYPE: "autoTurret"
                    },
                    {
                       POSITION: [200/22, 8, 0, 120, 210, 0],
                       TYPE: "autoTurret"
                    },
                    {
                       POSITION: [200/22, 8, 0, 240, 210, 0],
                       TYPE: "autoTurret"
                    },
                ],
              }
            }
        ],
    };
  // Auto 3 upgrades
    Class.ankaxe_auto5 = {
        PARENT: ["genericTank"],
        LABEL: "Auto 5",
        TURRETS: [
            {
              POSITION: [22, 0, 0, 0, 360, 0],
              TYPE: Class.ankaxe_auto5Body = {
                PARENT: ["genericTank"],
                LABEL: "",
                FACING_TYPE: "autospin",
                TURRETS: [
                    {
                       POSITION: [200/22, 8, 0, 0, 210, 0],
                       TYPE: "autoTurret"
                    },
                    {
                       POSITION: [200/22, 8, 0, 72, 210, 0],
                       TYPE: "autoTurret"
                    },
                    {
                       POSITION: [200/22, 8, 0, 144, 210, 0],
                       TYPE: "autoTurret"
                    },
                    {
                       POSITION: [200/22, 8, 0, 216, 210, 0],
                       TYPE: "autoTurret"
                    },
                    {
                       POSITION: [200/22, 8, 0, 288, 210, 0],
                       TYPE: "autoTurret"
                    },
                ],
              }
            }
        ],
    };
    Class.ankaxe_auto4 = {
        PARENT: ["genericTank"],
        LABEL: "Auto 4",
        TURRETS: [
            {
              POSITION: [22, 0, 0, 0, 360, 0],
              TYPE: Class.ankaxe_auto4Body = {
                PARENT: ["genericTank"],
                LABEL: "",
                FACING_TYPE: "autospin",
                TURRETS: [
                    {
                       POSITION: [200/22, 8, 0, 0, 210, 0],
                       TYPE: "auto4gun"
                    },
                    {
                       POSITION: [200/22, 8, 0, 90, 210, 0],
                       TYPE: "auto4gun"
                    },
                    {
                       POSITION: [200/22, 8, 0, 180, 210, 0],
                       TYPE: "auto4gun"
                    },
                    {
                       POSITION: [200/22, 8, 0, 270, 210, 0],
                       TYPE: "auto4gun"
                    },
                ],
              }
            }
        ],
    };
    Class.ankaxe_bulletHell = {
        PARENT: ["genericTank"],
        LABEL: "Bullet Hell",
        TURRETS: [
            {
              POSITION: [22, 0, 0, 0, 360, 0],
              TYPE: Class.ankaxe_bulletHellBody = {
                PARENT: ["genericTank"],
                LABEL: "",
                FACING_TYPE: "autospin",
                TURRETS: [
                    {
                       POSITION: [6, 8, 0, 0, 120, 0],
                       TYPE: "autoTurret"
                    },
                    {
                       POSITION: [6, 8, 0, 45, 120, 0],
                       TYPE: "autoTurret"
                    },
                    {
                       POSITION: [6, 8, 0, 90, 120, 0],
                       TYPE: "autoTurret"
                    },
                    {
                       POSITION: [6, 8, 0, 135, 120, 0],
                       TYPE: "autoTurret"
                    },
                    {
                       POSITION: [6, 8, 0, 180, 120, 0],
                       TYPE: "autoTurret"
                    },
                    {
                       POSITION: [6, 8, 0, 225, 120, 0],
                       TYPE: "autoTurret"
                    },
                    {
                       POSITION: [6, 8, 0, 270, 120, 0],
                       TYPE: "autoTurret"
                    },
                    {
                       POSITION: [6, 8, 0, 315, 120, 0],
                       TYPE: "autoTurret"
                    },
                ],
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
          for (let i = 0; i < 4; i++) output.push(
            {
              POSITION: { LENGTH: 0.1, WIDTH: 7, DELAY: 0 },
              PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, {reload: 2}]),
                TYPE: ["satellite", { ANGLE: i*90 }]
              }
            },
          );
          return output;
        })(),
        TURRETS: [
          {
            POSITION: [10, 0, 0, 0, 360, 1],
            TYPE: ["ankaxe_square", { CONTROLLERS: [["spin", {speed: 0.1}]] }]
          }
        ],
    };
    Class.ankaxe_node.UPGRADES_TIER_0 = ["ankaxe_mono", "ankaxe_pelling", "ankaxe_caltrop", "ankaxe_watcher"];
      Class.ankaxe_mono.UPGRADES_TIER_1 = ["ankaxe_duo", "ankaxe_machineGun"];
        Class.ankaxe_machineGun.UPGRADES_TIER_2 = ["ankaxe_minigun", "ankaxe_gunner", "ankaxe_sprinkler"];
      Class.ankaxe_pelling.UPGRADES_TIER_1 = ["ankaxe_pelleter"];
    Class.ankaxe_base.UPGRADES_TIER_0 = ["ankaxe_sentry", "ankaxe_whirlwind"];
};
