// Master Alluvium Database
const ALLUVIUM_NODES = [
  {
    id: "hub",
    name: "The Hub",
    secondary: ["Attack Boost", "Physical DMG Boost", "Electric DMG Boost", "Cryo DMG Boost", "Nature DMG Boost", "Critical Rate Boost", "Ultimate Gain Efficiency Boost", "Arts DMG Boost"],
    skill: ["Assault", "Suppression", "Pursuit", "Crusher", "Combative", "Detonate", "Flow", "Efficacy"]
  },
  {
    id: "science_park",
    name: "Originium Science Park",
    secondary: ["Attack Boost", "Physical DMG Boost", "Electric DMG Boost", "Cryo DMG Boost", "Nature DMG Boost", "Critical Rate Boost", "Ultimate Gain Efficiency Boost", "Arts DMG Boost"],
    skill: ["Suppression", "Pursuit", "Inspiring", "Combative", "Infliction", "Medicant", "Fracture", "Efficacy"]
  },
  {
    id: "lodesprings",
    name: "Origin Lodesprings",
    secondary: ["HP Boost", "Physical DMG Boost", "Heat DMG Boost", "Cryo DMG Boost", "Nature DMG Boost", "Critical Rate Boost", "Arts Intensity Boost", "Treatment Efficiency Boost"],
    skill: ["Assault", "Suppression", "Combative", "Brutality", "Infliction", "Detonate", "Twilight", "Efficacy"]
  },
  {
    id: "power_plateau",
    name: "Power Plateau",
    secondary: ["Attack Boost", "HP Boost", "Physical DMG Boost", "Heat DMG Boost", "Nature DMG Boost", "Critical Rate Boost", "Arts Intensity Boost", "Treatment Efficiency Boost"],
    skill: ["Pursuit", "Crusher", "Inspiring", "Brutality", "Infliction", "Medicant", "Fracture", "Flow"]
  },
  {
    id: "wuling_city",
    name: "Wuling City",
    secondary: ["Attack Boost", "HP Boost", "Electric DMG Boost", "Cryo DMG Boost", "Critical Rate Boost", "Ultimate Gain Efficiency Boost", "Arts DMG Boost", "Treatment Efficiency Boost"],
    skill: ["Assault", "Crusher", "Brutality", "Medicant", "Fracture", "Detonate", "Twilight", "Flow"]
  },
  {
    id: "qingbo_stockade",
    name: "Qingbo Stockade",
    secondary: ["HP Boost", "Physical DMG Boost", "Electric DMG Boost", "Cryo DMG Boost", "Arts Intensity Boost", "Ultimate Gain Efficiency Boost", "Arts DMG Boost", "Treatment Efficiency Boost"],
    skill: ["Suppression", "Crusher", "Inspiring", "Combative", "Medicant", "Fracture", "Detonate", "Twilight"]
  },
  {
    id: "marker_stone",
    name: "Marker Stone",
    secondary: ["Attack Boost", "Physical DMG Boost", "Heat DMG Boost", "Electric DMG Boost", "Nature DMG Boost", "Critical Rate Boost", "Ultimate Gain Efficiency Boost", "Arts DMG Boost"],
    skill: ["Assault", "Pursuit", "Inspiring", "Brutality", "Infliction", "Twilight", "Flow", "Efficacy"]
  },
  {
    id: "test_area",
    name: "Test Area",
    secondary: ["HP Boost", "Heat DMG Boost", "Electric DMG Boost", "Cryo DMG Boost", "Nature DMG Boost", "Arts Intensity Boost", "Ultimate Gain Efficiency Boost", "Treatment Efficiency Boost"],
    skill: ["Suppression", "Crusher", "Combative", "Brutality", "Infliction", "Fracture", "Twilight", "Flow"]
  },
  {
    id: "sword_vault_dale",
    name: "Sword Vault Dale",
    secondary: ["Attack Boost", "HP Boost", "Physical DMG Boost", "Heat DMG Boost", "Cryo DMG Boost", "Nature DMG Boost", "Arts Intensity Boost", "Treatment Efficiency Boost"],
    skill: ["Assault", "Pursuit", "Inspiring", "Combative", "Medicant", "Fracture", "Detonate", "Efficacy"]
  },
  {
    id: "yinglung_pass",
    name: "Yinglung Pass",
    secondary: ["Attack Boost", "Physical DMG Boost", "Electric DMG Boost", "Cryo DMG Boost", "Nature DMG Boost", "Critical Rate Boost", "Arts Intensity Boost", "Arts DMG Boost"],
    skill: ["Suppression", "Pursuit", "Combative", "Brutality", "Infliction", "Detonate", "Flow", "Efficacy"]
  },
  {
    id: "north_wuling_ez",
    name: "North Wuling EZ",
    secondary: ["HP Boost", "Physical DMG Boost", "Heat DMG Boost", "Nature DMG Boost", "Critical Rate Boost", "Arts Intensity Boost", "Arts DMG Boost", "Treatment Efficiency Boost"],
    skill: ["Assault", "Suppression", "Pursuit", "Crusher", "Inspiring", "Infliction", "Medicant", "Efficacy"]
  }
];

/**
 * Main Solver Function
 * @param {string} targetSecondary
 * @param {string} targetSkill
 */
function findOptimalFarmingNodes(targetSecondary, targetSkill) {
  const results = {
    optimal: [],
    partialSecondary: [],
    partialSkill: [],
  };

  ALLUVIUM_NODES.forEach(node => {
    const hasSecondary = node.secondary.includes(targetSecondary);
    const hasSkill = node.skill.includes(targetSkill);

    if (hasSecondary && hasSkill) {
      results.optimal.push(node);
    } else if (hasSecondary) {
      results.partialSecondary.push(node);
    } else if (hasSkill) {
      results.partialSkill.push(node);
    }
  });

  return results;
}