import draw1 from 'images/draw1.jpg';
import draw2 from 'images/draw2.jpg';
import factory1 from 'images/factory1.jpg';
import hopscotch1 from 'images/hopscotch1.jpg';
import hopscotch2 from 'images/hopscotch2.jpg';
import pirate1 from 'images/pirate1.jpg';
import pirate2 from 'images/pirate2.jpg';
import portal1 from 'images/portal1.jpg';
import portal2 from 'images/portal2.jpg';
import musketeer1 from 'images/musketeer1.jpg';
import musketeer2 from 'images/musketeer2.jpg';
import tag1 from 'images/tag1.jpg';
import tag2 from 'images/tag2.jpg';
import hanoi1 from 'images/hanoi1.jpg';
import hanoi2 from 'images/hanoi2.jpg';
import masquerade1 from 'images/masquerade1.jpg';
import masquerade2 from 'images/masquerade2.jpg';

const drawAnything = {
  defaultImg: draw2,
  hoverImg: draw1,
  title: 'Multi-device Pictionary',
  pdf: 'draw_anything.pdf',
  time: '1 week',
  year: 'Sep 2012',
  summaryHeading: 'Draw Anything - a multi-device pictionary',
  summaryBody: [
    'Goal - design a fun social game for multiple iOS devices connected via Bluetooth.',
    'We designed a local-multiplayer version of Pictionary, taking \'Draw Something\' as our inspiration and benchmark.',
    'We included four different modes of Pictionary - a) Quick draw; b) Team battle; c) Jigsaw pictionary; d) Telephone pictionary.',
  ],
};

const platformer = {
  defaultImg: factory1,
  hoverImg: factory1,
  title: 'Side-scroll platformer',
  pdf: 'factory_fiasco.pdf',
  time: '1 week',
  year: 'Sep 2012',
  summaryHeading: 'Factory Fiasco - \'Temple Run\' from the side view',
  summaryBody: [
    'This personal project is about designing a side-scrolling, fast-paced, action platformer.',
    'Level design document holds a sample level, aimed for a short-and-fast gameplay with an engaging interest curve.',
    'Temple Run, Ninjump and many other iOS games have been an inspiration for my design.',
  ],
};

const hopscotch = {
  defaultImg: hopscotch1,
  hoverImg: hopscotch2,
  title: 'Creative hopscotch',
  pdf: 'hopscotch.pdf',
  time: '1 week',
  year: 'Jan 2013',
  summaryHeading: 'Creative expansion to Hopscotch',
  summaryBody: [
    'Designed an creative variant of the popular kids-game \'Hopscotch\' adding agency for  strategy.',
    'At every hop, players must co-ordinate their jumps and land in the same full-body pose at the same time.',
    'During playtests, It was interesting to see players trying to communicate effectively. The game encouraged social interactions.',
  ],
};

const pirates = {
  defaultImg: pirate1,
  hoverImg: pirate2,
  title: 'Hand-gestures + Dice',
  pdf: 'pirates.pdf',
  time: '2 weeks',
  year: 'Feb 2013',
  summaryHeading: 'Pirate\'s Cove - Table-top board game',
  summaryBody: [
    'Designed this social gesture-based board game as part of an assignment.',
    'Designed the core actions - Attack, Defend and Loot with appropriate intuitive gestures for each.',
    'Based on these actions, I designed the game around the Pirates theme and added a dice mechanic.',
  ],
};

const portal = {
  defaultImg: portal1,
  hoverImg: portal2,
  title: 'Level design for Portal',
  pdf: 'portal.pdf',
  time: '3 weeks',
  year: 'Apr 2012',
  summaryHeading: 'FPS Level Designs for action-adventure genre',
  summaryBody: [
    'A personal design project for the first person shooters like Portal. Tools :  Maya & AfterEffects.',
    'Designed two levels - a) Egyptian ruins & b) Industrial room, both filled with sudden surprises & heavy combat.',
    'I took references from ancient Egyptian places like Temple of Philae and the great \'Temple of Abu Simbel\'.',
  ],
  video: {
    title: 'portal-gameplay',
    player: 'youtube',
    url: 'zgoK0tH7a3c',
    start: 32,
  },
};

const musketeers = {
  defaultImg: musketeer1,
  hoverImg: musketeer2,
  title: 'Three musketeers expansion',
  pdf: 'musketeer.pdf',
  time: '2 hours',
  year: 'GDC 2012',
  summaryHeading: 'Three Musketeers meet Chess',
  summaryBody: [
    'Designed this game in the design workshop at Game Developers Conference, 2012.',
    'Designed a variant of Three musketeers game with additional features + new character with special moves.',
    'Playtesting the game with external testers enabled us to tackle some design flaws and balance the game.',
  ],
};

const tag = {
  defaultImg: tag1,
  hoverImg: tag2,
  title: 'Tag expansion',
  pdf: 'tag.pdf',
  time: '2 weeks',
  year: 'Feb 2012',
  summaryHeading: '\'Cell\'ular Tag - game expansion',
  summaryBody: [
    'A personal design project - variant of \'Tag\' that was designed to interest adults as well as kids.',
    'Tag is a fast-paced, fun game involving chasing and tagging players - famous for its simplicity and ease of play.',
    'This variant of Tag gives the players a choice between just running hard versus strategy.',
  ],
};

const dice = {
  defaultImg: hanoi1,
  hoverImg: hanoi2,
  title: 'Tower of Hanoi',
  pdf: 'hanoi.pdf',
  time: '2 hours',
  year: 'Jan 2012',
  summaryHeading: 'Dice game + Tower of Hanoi',
  summaryBody: [
    'Designed this strategy based board game as part of a team building activity.',
    'To add some depth to the gameplay, we designed the game around the principles of \'Tower of Hanoi\' concept.',
    'Designed the game keeping a toy as the core element of the game - stackable pyramids with dice.',
  ],
};

const masquerade = {
  defaultImg: masquerade1,
  hoverImg: masquerade2,
  title: 'Social party game',
  pdf: 'masquerade.pdf',
  time: '4 weeks',
  year: 'Apr 2012',
  summaryHeading: 'Masquerade Murder - NFC enabled board game',
  summaryBody: [
    'A personal game design project using NFC/Bluetooth enabled, mobile devices.',
    'Masquerade Murder is an unique social - strategy board game, for 2-5 players.',
    'Players take up the roles, each with their own mission and an unique ability necessary to succeed.',
  ],
};

export const desktopList = [
  [
    drawAnything,
    platformer,
    hopscotch,
  ],
  [
    pirates,
    portal,
    musketeers,
  ],
  [
    tag,
    dice,
    masquerade,
  ],
];

export const mobileList = [
  [
    drawAnything,
    platformer,
  ],
  [
    hopscotch,
    pirates,
  ],
  [
    portal,
    tag,
  ],
  [
    dice,
    masquerade,
  ],
];
