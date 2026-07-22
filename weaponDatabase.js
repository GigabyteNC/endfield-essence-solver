/**
 * weaponDatabase.js
 * Central database mapping Arknights: Endfield weapons for Essence Solver
 */

const weaponDatabase = [
  // ==========================================
  // SWORDS
  // ==========================================
  { name: "Peco 1", category: "Sword", primaryStat: "Main Attribute Boost", secondaryStat: "ATK", skillStat: "Assault" },
  { name: "Frontier Messenger", category: "Sword", primaryStat: "Strength Boost", secondaryStat: "ATK Boost", skillStat: "Suppression" },
  { name: "Order's Echo", category: "Sword", primaryStat: "Agility Boost", secondaryStat: "Arts Boost", skillStat: "Inspiring" },
  { name: "Opus: Standard", category: "Sword", primaryStat: "Strength Boost", secondaryStat: "Physical DMG Boost", skillStat: "Brutality" },
  { name: "OBJ Blade", category: "Sword", primaryStat: "Agility Boost", secondaryStat: "Ultimate Gain Efficiency Boost", skillStat: "Detonate" },
  { name: "Iron Oath", category: "Sword", primaryStat: "Strength Boost", secondaryStat: "Electric DMG Boost", skillStat: "Suppression" },
  { name: "Radiant Feather", category: "Sword", primaryStat: "Agility Boost", secondaryStat: "Critical Rate Boost", skillStat: "Efficacy" },
  { name: "Steel Tempest", category: "Sword", primaryStat: "Agility Boost", secondaryStat: "Physical DMG Boost", skillStat: "Combative" },
  { name: "Silver Light", category: "Sword", primaryStat: "Main Attribute Boost", secondaryStat: "Attack Boost", skillStat: "Suppression" },
  { name: "Sunblade", category: "Sword", primaryStat: "Strength Boost", secondaryStat: "Heat DMG Boost", skillStat: "Efficacy" },

  // ==========================================
  // GREATSWORDS
  // ==========================================
  { name: "Peco 3", category: "Greatsword", primaryStat: "Main Attribute Boost", secondaryStat: "ATK", skillStat: "Assault" },
  { name: "Heavy Cleaver", category: "Greatsword", primaryStat: "Strength Boost", secondaryStat: "ATK Boost", skillStat: "Suppression" },
  { name: "Titan's Spine", category: "Greatsword", primaryStat: "Will Boost", secondaryStat: "Arts Boost", skillStat: "Inspiring" },
  { name: "Opus: Heavy", category: "Greatsword", primaryStat: "Strength Boost", secondaryStat: "Physical DMG Boost", skillStat: "Brutality" },
  { name: "OBJ Greatsword", category: "Greatsword", primaryStat: "Strength Boost", secondaryStat: "Ultimate Gain Efficiency Boost", skillStat: "Detonate" },
  { name: "Shattered Mountain", category: "Greatsword", primaryStat: "Strength Boost", secondaryStat: "Physical DMG Boost", skillStat: "Suppression" },
  { name: "Earthshaker", category: "Greatsword", primaryStat: "Strength Boost", secondaryStat: "Critical Rate Boost", skillStat: "Efficacy" },
  { name: "Colossus", category: "Greatsword", primaryStat: "Strength Boost", secondaryStat: "Physical DMG Boost", skillStat: "Combative" },

  // ==========================================
  // POLEARMS
  // ==========================================
  { name: "Opero 77", category: "Polearm", primaryStat: "Main Attribute Boost", secondaryStat: "ATK", skillStat: "Assault" },
  { name: "Pathfinder's Beacon", category: "Polearm", primaryStat: "Agility Boost", secondaryStat: "Attack Boost", skillStat: "Inspiring" },
  { name: "Aggeloslayer", category: "Polearm", primaryStat: "Will Boost", secondaryStat: "Arts Boost", skillStat: "Suppression" },
  { name: "Chimeric Justice", category: "Polearm", primaryStat: "Strength Boost", secondaryStat: "Ultimate Gain Efficiency Boost", skillStat: "Brutality" },
  { name: "OBJ Razorhorn", category: "Polearm", primaryStat: "Will Boost", secondaryStat: "Physical DMG Boost", skillStat: "Infliction" },
  { name: "Cohesive Traction", category: "Polearm", primaryStat: "Will Boost", secondaryStat: "Electric DMG Boost", skillStat: "Suppression" },
  { name: "Mountain Bearer", category: "Polearm", primaryStat: "Agility Boost", secondaryStat: "Physical DMG Boost", skillStat: "Efficacy" },
  { name: "Valiant", category: "Polearm", primaryStat: "Agility Boost", secondaryStat: "Physical DMG Boost", skillStat: "Combative" },
  { name: "JET", category: "Polearm", primaryStat: "Main Attribute Boost", secondaryStat: "Attack Boost", skillStat: "Suppression" },
  { name: "Beacon of Duty", category: "Polearm", primaryStat: "Agility Boost", secondaryStat: "Ultimate Gain Efficiency Boost", skillStat: "Efficacy" },
  { name: "Blessing of Lustrous Carmine", category: "Polearm", primaryStat: "Agility Boost", secondaryStat: "Heat DMG Boost", skillStat: "Flow" },
  { name: "Golden Age", category: "Polearm", primaryStat: "Will Boost", secondaryStat: "Treatment Efficiency Boost", skillStat: "Pursuit" },

  // ==========================================
  // HANDCANNONS
  // ==========================================
  { name: "Peco 5", category: "Handcannon", primaryStat: "Main Attribute Boost", secondaryStat: "ATK", skillStat: "Assault" },
  { name: "Howling Guard", category: "Handcannon", primaryStat: "Intellect Boost", secondaryStat: "Attack Boost", skillStat: "Suppression" },
  { name: "Long Road", category: "Handcannon", primaryStat: "Strength Boost", secondaryStat: "Arts Boost", skillStat: "Pursuit" },
  { name: "Opus: The Living", category: "Handcannon", primaryStat: "Agility Boost", secondaryStat: "Arts Boost", skillStat: "Infliction" },
  { name: "OBJ Velocitous", category: "Handcannon", primaryStat: "Agility Boost", secondaryStat: "Ultimate Gain Efficiency Boost", skillStat: "Detonate" },
  { name: "Rational Farewell", category: "Handcannon", primaryStat: "Strength Boost", secondaryStat: "Heat DMG Boost", skillStat: "Pursuit" },
  { name: "Artzy Tyrannical", category: "Handcannon", primaryStat: "Intellect Boost", secondaryStat: "Critical Rate Boost", skillStat: "Fracture" },
  { name: "Navigator", category: "Handcannon", primaryStat: "Intellect Boost", secondaryStat: "Cryo DMG Boost", skillStat: "Infliction" },
  { name: "Wedge", category: "Handcannon", primaryStat: "Main Attribute Boost", secondaryStat: "Critical Rate Boost", skillStat: "Infliction" },
  { name: "Clannibal", category: "Handcannon", primaryStat: "Main Attribute Boost", secondaryStat: "Arts Boost", skillStat: "Infliction" },
  { name: "Brigand's Calling", category: "Handcannon", primaryStat: "Agility Boost", secondaryStat: "Attack Boost", skillStat: "Detonate" },
  { name: "Home Longing", category: "Handcannon", primaryStat: "Agility Boost", secondaryStat: "Cryo DMG Boost", skillStat: "Suppression" },

  // ==========================================
  // ARTS UNITS
  // ==========================================
  { name: "Jiminy 12", category: "Arts Unit", primaryStat: "Main Attribute Boost", secondaryStat: "ATK", skillStat: "Assault" },
  { name: "Hypernova Auto", category: "Arts Unit", primaryStat: "Intellect Boost", secondaryStat: "Arts Boost", skillStat: "Inspiring" },
  { name: "Fluorescent Roc", category: "Arts Unit", primaryStat: "Will Boost", secondaryStat: "Attack Boost", skillStat: "Suppression" },
  { name: "Stanza of Memorials", category: "Arts Unit", primaryStat: "Intellect Boost", secondaryStat: "Attack Boost", skillStat: "Twilight" },
  { name: "Monaihe", category: "Arts Unit", primaryStat: "Will Boost", secondaryStat: "Ultimate Gain Efficiency Boost", skillStat: "Inspiring" },
  { name: "Wild Wanderer", category: "Arts Unit", primaryStat: "Intellect Boost", secondaryStat: "Electric DMG Boost", skillStat: "Infliction" },
  { name: "Freedom to Proselytize", category: "Arts Unit", primaryStat: "Will Boost", secondaryStat: "Treatment Efficiency Boost", skillStat: "Medicant" },
  { name: "OBJ Arts Identifier", category: "Arts Unit", primaryStat: "Intellect Boost", secondaryStat: "Arts Intensity Boost", skillStat: "Pursuit" },
  { name: "Delivery Guaranteed", category: "Arts Unit", primaryStat: "Will Boost", secondaryStat: "Ultimate Gain Efficiency Boost", skillStat: "Pursuit" },
  { name: "Dreams of the Starry Beach", category: "Arts Unit", primaryStat: "Intellect Boost", secondaryStat: "Treatment Efficiency Boost", skillStat: "Infliction" },
  { name: "Opus: Etch Figure", category: "Arts Unit", primaryStat: "Will Boost", secondaryStat: "Nature DMG Boost", skillStat: "Suppression" },
  { name: "Detonation Unit", category: "Arts Unit", primaryStat: "Main Attribute Boost", secondaryStat: "Arts Intensity Boost", skillStat: "Detonate" },
  { name: "Oblivion", category: "Arts Unit", primaryStat: "Intellect Boost", secondaryStat: "Arts Boost", skillStat: "Twilight" },
  { name: "Chivalric Virtues", category: "Arts Unit", primaryStat: "Will Boost", secondaryStat: "HP Boost", skillStat: "Medicant" },
  { name: "Lone Barge", category: "Arts Unit", primaryStat: "Will Boost", secondaryStat: "Attack Boost", skillStat: "Suppression" },
  { name: "Flickers in the Mist", category: "Arts Unit", primaryStat: "Will Boost", secondaryStat: "Electric DMG Boost", skillStat: "Efficacy" },
  { name: "Type 42: Solemn Phalanx", category: "Arts Unit", primaryStat: "Intellect Boost", secondaryStat: "Ultimate Gain Efficiency Boost", skillStat: "Detonate" },
  { name: "Junction Point", category: "Arts Unit", primaryStat: "Intellect Boost", secondaryStat: "Ultimate Gain Efficiency Boost", skillStat: "Efficacy" }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = weaponDatabase;
}