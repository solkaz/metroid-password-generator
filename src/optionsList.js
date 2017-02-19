export const inventorySection = {
  title: 'Samus\' inventory',
  modifiers: [
    {
      type: 'TOGGLE',
      props: { title: 'Samus has Bombs', bitIndex: 72 },
    },
    {
      type: 'TOGGLE',
      props: { title: 'Samus has High jump boots', bitIndex: 73 },
    },
    {
      type: 'TOGGLE',
      props: { title: 'Samus has Long Beam', bitIndex: 74 },
    },
    {
      type: 'TOGGLE',
      props: { title: 'Samus has Screw Attack', bitIndex: 75 },
    },
    {
      type: 'TOGGLE',
      props: { title: 'Samus has Metroid Ball', bitIndex: 76 },
    },
    {
      type: 'TOGGLE',
      props: { title: 'Samus has Varia', bitIndex: 77 },
    },
    {
      type: 'TOGGLE',
      props: { title: 'Samus has Wave Beam', bitIndex: 78 },
    },
    {
      type: 'TOGGLE',
      props: { title: 'Samus has Ice Beam', bitIndex: 79 },
    },
  ]
};

export const zebetiteSection = {
  title: 'Zebetites defeated',
  modifiers: [
    {
      type: 'TOGGLE',
      props: { title: 'Zebetite 1', bitIndex: 53 },
    },
    {
      type: 'TOGGLE',
      props: { title: 'Zebetite 2', bitIndex: 54 },
    },
    {
      type: 'TOGGLE',
      props: { title: 'Zebetite 3', bitIndex: 55 },
    },
    {
      type: 'TOGGLE',
      props: { title: 'Zebetite 4', bitIndex: 56 },
    },
    {
      type: 'TOGGLE',
      props: { title: 'Zebetite 5', bitIndex: 57 },
    },
  ]
};

export const bossesDefeatedSection = {
  title: 'Bosses Defeated',
  modifiers: [
    {
      type: 'TOGGLE',
      props: { title: 'Kraid', bitIndex: 126 },
    },
    {
      type: 'TOGGLE',
      props: { title: 'Ridley', bitIndex: 124 },
    },
    {
      type: 'TOGGLE',
      props: { title: 'Mother Brain', bitIndex: 58 },
    }
  ],
};

export const modifierSections = [
  inventorySection,
  zebetiteSection,
  bossesDefeatedSection,
];

const optionsList = [
  { title: 'Metroid Ball Taken', bitIndex: 0 },
  { title: 'Missile Container (Brinstar)', bitIndex: 1 },
  { title: 'Red Door (Long Beam)', bitIndex: 2 },
  { title: 'Red Door (Tourian Bridge)', bitIndex: 3 },
  { title: 'Energy Tank (Brinstar)', bitIndex: 4 },
  { title: 'Red Door (bombs)', bitIndex: 5 },
  { title: 'Bombs Taken', bitIndex: 6 },
  { title: 'Red Door (Ice Beam Brinstar)', bitIndex: 7 },
  { title: 'Missile Container (Brinstar)', bitIndex: 8 },
  { title: 'Energy Tank (Brinstar)', bitIndex: 9 },
  { title: 'Red Door (Varia)', bitIndex: 10 },
  { title: 'Varia Taken', bitIndex: 11 },
  { title: 'Energy Tank', bitIndex: 12 },
  { title: 'Missile Container (Norfair)', bitIndex: 13 },
  { title: 'Missile Container (Norfair)', bitIndex: 14 },
  { title: 'Red Door (Ice Beam Norfair)', bitIndex: 15 },
  { title: 'Missile Container (Norfair)', bitIndex: 16 },
  { title: 'Missile Container (Norfair)', bitIndex: 17 },
  { title: 'Missile Container (Norfair)', bitIndex: 18 },
  { title: 'Missile Container (Norfair)', bitIndex: 19 },
  { title: 'Missile Container (Norfair)', bitIndex: 20 },
  { title: 'Missile Container (Norfair)', bitIndex: 21 },
  { title: 'Missile Container (Norfair)', bitIndex: 22 },
  { title: 'Red Door (High Jump boots)', bitIndex: 23 },
  { title: 'High Jump Boots Taken', bitIndex: 24 },
  { title: 'Red Door (Screw Attack)', bitIndex: 25 },
  { title: 'Screw Attack Taken', bitIndex: 26 },
  { title: 'Missile Container (Norfair)', bitIndex: 27 },
  { title: 'Missile Container (Norfair)', bitIndex: 28 },
  { title: 'Red Door (Wave Beam)', bitIndex: 29 },
  { title: 'Energy Tank (Norfair)', bitIndex: 30 },
  { title: 'Missile Container (Norfair)', bitIndex: 31 },
  { title: 'Red Door (Kraid\'s Lair)', bitIndex: 32 },
  { title: 'Missile Container (Kraid\'s Lair)', bitIndex: 33 },
  { title: 'Missile Container (Kraid\'s Lair)', bitIndex: 34 },
  { title: 'Red Door (Kraid\'s Lair)', bitIndex: 35 },
  { title: 'Energy Tank (Kraid\'s Lair)', bitIndex: 36 },
  { title: 'Red Door (Kraid\'s Lair)', bitIndex: 37 },
  { title: 'Red Door (Kraid\'s Lair)', bitIndex: 38 },
  { title: 'Missile Container (Kraid\'s Lair)', bitIndex: 39 },
  { title: 'Missile Container (Kraid\'s Lair)', bitIndex: 40 },
  { title: 'Red Door (Kraid\'s Room)', bitIndex: 41 },
  { title: 'Energy Tank (Kraid\'s Room)', bitIndex: 42 },
  { title: 'Missile Container (Ridley\'s Lair)', bitIndex: 43 },
  { title: 'Red Door (Ridley\'s Lair)', bitIndex: 44 },
  { title: 'Energy Tank (Ridley\'s Lair)', bitIndex: 45 },
  { title: 'Missile Container (Ridley\'s Lair)', bitIndex: 46 },
  { title: 'Yellow Door (in Ridley\'s Room)', bitIndex: 47 },
  { title: 'Energy Tank (Room Behind Ridley)', bitIndex: 48 },
  { title: 'Missile Container (Ridley\'s Lair)', bitIndex: 49 },
  { title: 'Yellow Door (Tourian)', bitIndex: 50 },
  { title: 'Red Door (Tourian)', bitIndex: 51 },
  { title: 'Red Door (Tourian)', bitIndex: 52 },
  { title: 'Zebetite 1 Defeated', bitIndex: 53 },
  { title: 'Zebetite 2 Defeated', bitIndex: 54 },
  { title: 'Zebetite 3 Defeated', bitIndex: 55 },
  { title: 'Zebetite 4 Defeated', bitIndex: 56 },
  { title: 'Zebetite 5 Defeated', bitIndex: 57 },
  { title: 'Mother Brain Defeated', bitIndex: 58 },
  { title: 'Samus in Swimsuit', bitIndex: 71 },
  { title: 'Samus has bombs', bitIndex: 72 },
  { title: 'Samus has high jump boots', bitIndex: 73 },
  { title: 'Samus has Long Beam', bitIndex: 74 },
  { title: 'Samus has Screw Attack', bitIndex: 75 },
  { title: 'Samus has Metroid Ball', bitIndex: 76 },
  { title: 'Samus has Varia', bitIndex: 77 },
  { title: 'Samus has Wave Beam', bitIndex: 78 },
  { title: 'Samus has Ice Beam', bitIndex: 79 },
  { title: 'Ridley Defeated', bitIndex: 124 },
  { title: 'Ridley Statue Raised', bitIndex: 125 },
  { title: 'Kraid Defeated', bitIndex: 126 },
  { title: 'Kraid Statue Raised', bitIndex: 127 },
];

export default optionsList;
