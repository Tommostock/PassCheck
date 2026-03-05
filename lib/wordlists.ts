/**
 * wordlists.ts — Embedded data for attack simulations
 *
 * These lists are used to simulate real-world attacks.
 * In reality, attackers use lists with millions of entries.
 * We embed a representative sample so the simulation works
 * entirely in the browser with no internet required.
 */

import allEnglishWords from 'an-array-of-english-words';

// ─────────────────────────────────────────────────────────
// FULL ENGLISH DICTIONARY — All 274,000+ English words,
// filtered to password-relevant lengths (3–20 characters).
// Used to detect any real English word used as a password.
// Stored as a Set for O(1) lookups.
// ─────────────────────────────────────────────────────────
export const ENGLISH_DICTIONARY: Set<string> = new Set(
  (allEnglishWords as string[]).filter(w => w.length >= 3 && w.length <= 20)
);

// ─────────────────────────────────────────────────────────
// COMMON PASSWORDS — The most frequently breached passwords.
// If a user's password is in this list, a dictionary attack
// would crack it in milliseconds.
// ─────────────────────────────────────────────────────────
export const COMMON_PASSWORDS: string[] = [
  'password', '123456', '123456789', 'qwerty', 'abc123',
  'password1', '111111', '1234567', 'iloveyou', 'admin',
  'letmein', 'welcome', 'monkey', 'login', 'princess',
  'solo', 'master', 'dragon', 'pass', 'hello',
  'shadow', 'superman', 'michael', 'football', 'baseball',
  'trustno1', 'batman', 'access', 'mustang', 'hockey',
  'test', 'flower', 'sunshine', 'whatever', 'jessica',
  'ninja', 'andrew', 'tiger', 'charlie', 'jordan',
  'hunter', 'buster', 'soccer', 'harley', 'ranger',
  'password123', 'qwerty123', 'Password1', 'password!',
  '1q2w3e4r', 'qwertyuiop', '1qaz2wsx', '12341234',
  '1234567890', '0987654321', 'password2', 'admin123',
  'welcome1', 'root', 'toor', 'secret', 'pass123',
  '654321', '666666', '123123', '7777777', 'qwerty1',
  'zxcvbnm', 'asdfghjkl', 'abcdefg', '1111111', '2222222',
  'myspace1', 'fuckyou', 'superman1', 'batman1', 'soccer1',
  'hockey1', 'golfer', 'testing', 'daniel', 'george',
  'thomas', 'jordan1', 'pokemon', 'spongebob', 'starwars',
  'harrypotter', 'minecraft', 'iloveyou1', 'abc1234',
  'letmein1', 'sunshine1', 'Summer2023', 'Winter2023',
  'Spring2024', 'Fall2023', 'P@ssword', 'P@ssw0rd',
  'Passw0rd', 'P@$$word', 'pass@123', 'Admin@123',
  'qwerty!', '!password', 'hello123', 'test123', 'user',
  'login123', 'demo', 'guest', 'change_me', 'changeme',
];

// ─────────────────────────────────────────────────────────
// DICTIONARY WORDS — Common English words used as base words
// in hybrid attacks. Attackers combine these with numbers
// and symbols (e.g. "apple123", "summer!", "dragon@2024").
// ─────────────────────────────────────────────────────────
export const DICTIONARY_WORDS: string[] = [
  'apple', 'summer', 'winter', 'dragon', 'tiger',
  'eagle', 'shadow', 'silver', 'golden', 'crystal',
  'falcon', 'hunter', 'ranger', 'warrior', 'thunder',
  'mystic', 'phoenix', 'blazing', 'frozen', 'cosmic',
  'legend', 'vortex', 'nebula', 'galaxy', 'stellar',
  'mighty', 'brave', 'swift', 'sharp', 'proud',
  'coffee', 'pizza', 'cherry', 'berry', 'peach',
  'forest', 'ocean', 'desert', 'valley', 'mountain',
  'rocket', 'comet', 'meteor', 'solar', 'lunar',
  'crimson', 'violet', 'indigo', 'scarlet', 'amber',
  'castle', 'kingdom', 'empire', 'citadel', 'fortress',
  'spring', 'autumn', 'morning', 'evening', 'midnight',
  'monkey', 'penguin', 'dolphin', 'jaguar', 'panther',
  'electric', 'digital', 'quantum', 'matrix', 'cyber',
  'master', 'ninja', 'pirate', 'knight', 'wizard',
  'secret', 'hidden', 'mystic', 'ancient', 'forgotten',
  'danger', 'power', 'storm', 'blaze', 'surge',
  'alpha', 'omega', 'sigma', 'delta', 'gamma',
  'echo', 'nova', 'pulse', 'wave', 'beam',
  'robot', 'android', 'cyborg', 'droid', 'mech',
];

// ─────────────────────────────────────────────────────────
// COMMON SUFFIXES — Numbers and symbols attackers append
// to dictionary words in hybrid attacks.
// ─────────────────────────────────────────────────────────
export const COMMON_SUFFIXES: string[] = [
  '1', '12', '123', '1234', '12345', '123456',
  '1!', '123!', '!', '@', '#', '!@#',
  '1990', '1991', '1992', '1993', '1994', '1995',
  '1996', '1997', '1998', '1999', '2000', '2001',
  '2020', '2021', '2022', '2023', '2024', '2025',
  '@123', '#123', '!123', '007', '69', '99', '00',
];

// ─────────────────────────────────────────────────────────
// KEYBOARD WALKS — Sequences typed by sliding fingers across
// the keyboard. These are checked in dictionary attacks too.
// ─────────────────────────────────────────────────────────
export const KEYBOARD_WALKS: string[] = [
  'qwerty', 'qwertyuiop', 'asdfgh', 'asdfghjkl',
  'zxcvbn', 'zxcvbnm', '1qaz2wsx', '1q2w3e4r',
  'qazwsx', 'wsxedc', 'edcrfv', 'rfvtgb',
  '123qwe', 'qwe123', 'asd123', 'zxc123',
  '1234qwer', 'qwer1234',
];

// ─────────────────────────────────────────────────────────
// COMMON DICTIONARY WORDS — Words found in real cracking
// dictionaries (RockYou, Hashcat, CrackStation). Any password
// that IS one of these words, or starts with one + a short
// suffix, is cracked in milliseconds via dictionary attack.
//
// Research: "liverpool" appears 970,000+ times in breach data,
// "arsenal" 600,000+, "chelsea" 730,000+ (Specops Software, 2024).
// ─────────────────────────────────────────────────────────
export const COMMON_DICTIONARY_WORDS: string[] = [
  // UK & European football clubs
  'arsenal', 'chelsea', 'liverpool', 'everton', 'tottenham', 'spurs',
  'manchester', 'newcastle', 'leicester', 'southampton', 'brighton',
  'fulham', 'wolves', 'wolverhampton', 'westham', 'brentford',
  'burnley', 'blackburn', 'sunderland', 'portsmouth', 'sheffield',
  'rangers', 'celtic', 'hearts', 'hibernian', 'aberdeen',
  'barcelona', 'madrid', 'juventus', 'milan', 'inter', 'munich',
  'dortmund', 'psg', 'ajax', 'benfica', 'porto', 'atletico',

  // US sports teams
  'lakers', 'celtics', 'warriors', 'knicks', 'bulls', 'rockets',
  'yankees', 'dodgers', 'redsox', 'cubs', 'braves', 'astros',
  'patriots', 'cowboys', 'steelers', 'eagles', 'giants', 'bears',
  'packers', 'broncos', 'raiders', 'dolphins', 'seahawks', 'chiefs',

  // Common male names
  'james', 'john', 'david', 'michael', 'william', 'robert', 'thomas',
  'richard', 'charles', 'joseph', 'daniel', 'matthew', 'andrew',
  'paul', 'mark', 'steven', 'kevin', 'brian', 'george', 'edward',
  'jason', 'ryan', 'jacob', 'gary', 'nicholas', 'eric', 'jonathan',
  'stephen', 'larry', 'justin', 'scott', 'brandon', 'samuel',
  'frank', 'alexander', 'patrick', 'jack', 'dennis', 'tyler',
  'aaron', 'henry', 'adam', 'nathan', 'jordan', 'chris', 'peter',

  // Common female names
  'emma', 'olivia', 'sophia', 'isabella', 'mia', 'abigail', 'emily',
  'charlotte', 'ella', 'madison', 'grace', 'chloe', 'victoria',
  'riley', 'lily', 'hannah', 'natalie', 'luna', 'zoey', 'avery',
  'penelope', 'hazel', 'violet', 'aurora', 'savannah', 'audrey',
  'bella', 'claire', 'lucy', 'anna', 'caroline', 'samantha',
  'rachel', 'jessica', 'ashley', 'amanda', 'sarah', 'stephanie',
  'melissa', 'nicole', 'jennifer', 'elizabeth', 'michelle', 'laura',

  // Countries & major cities
  'london', 'paris', 'tokyo', 'berlin', 'madrid', 'rome', 'moscow',
  'amsterdam', 'sydney', 'chicago', 'toronto', 'dubai', 'singapore',
  'beijing', 'shanghai', 'mumbai', 'delhi', 'istanbul', 'cairo',
  'lagos', 'mexico', 'brazil', 'argentina', 'colombia',
  'england', 'france', 'germany', 'spain', 'italy', 'russia',
  'canada', 'australia', 'ireland', 'scotland', 'wales', 'india',
  'china', 'japan', 'turkey', 'egypt', 'nigeria', 'kenya',
  'glasgow', 'edinburgh', 'dublin', 'belfast', 'bristol', 'oxford',
  'cambridge', 'birmingham', 'leeds',

  // Months, days & seasons
  'january', 'february', 'march', 'april', 'june', 'july', 'august',
  'september', 'october', 'november', 'december',
  'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday',
  'summer', 'winter', 'spring', 'autumn',

  // Animals
  'dragon', 'tiger', 'lion', 'eagle', 'wolf', 'bear', 'shark',
  'panther', 'leopard', 'jaguar', 'falcon', 'hawk', 'cobra',
  'python', 'viper', 'raven', 'phoenix', 'unicorn', 'dolphin',
  'penguin', 'monkey', 'gorilla', 'cheetah', 'rhino', 'buffalo',

  // Pop culture & gaming
  'batman', 'superman', 'spiderman', 'ironman', 'avengers', 'thor',
  'captain', 'hulk', 'wolverine', 'deadpool', 'marvel', 'disney',
  'minecraft', 'fortnite', 'roblox', 'pokemon', 'pikachu', 'zelda',
  'mario', 'luigi', 'bowser', 'starwars', 'jedi', 'vader', 'yoda',
  'matrix', 'harry', 'potter', 'hermione', 'gandalf', 'hobbit',
  'frodo', 'netflix', 'google', 'amazon', 'facebook', 'twitter',

  // Common English words heavily present in breach databases
  'sunshine', 'rainbow', 'princess', 'chocolate', 'butterfly',
  'strawberry', 'blueberry', 'pineapple', 'banana', 'orange',
  'thunder', 'lightning', 'diamond', 'emerald', 'sapphire',
  'crystal', 'silver', 'golden', 'shadow', 'master', 'hunter',
  'ranger', 'warrior', 'wizard', 'ninja', 'pirate', 'knight',
  'secret', 'danger', 'power', 'storm', 'rocket', 'freedom',
  'justice', 'victory', 'champion', 'legend', 'hero', 'morning',
  'midnight', 'coffee', 'pizza', 'cookie', 'cheese', 'pepper',
  'soccer', 'hockey', 'tennis', 'cricket', 'boxing', 'racing',
  'music', 'guitar', 'piano', 'keyboard', 'family', 'mother',
  'father', 'sister', 'brother', 'friend', 'happy', 'lucky',
  'magic', 'sweet', 'angel', 'devil', 'alpha', 'omega', 'sigma',
  'cyber', 'digital',
];

// ─────────────────────────────────────────────────────────
// DISPLAY WORDS — Shown in the terminal animation during
// attacks. These scroll past to make the simulation look
// realistic and educational.
// ─────────────────────────────────────────────────────────
export const DISPLAY_WORDS_DICT: string[] = [
  ...COMMON_PASSWORDS.slice(0, 40),
  ...KEYBOARD_WALKS.slice(0, 8),
];

export const DISPLAY_WORDS_HYBRID: string[] = [
  ...DICTIONARY_WORDS.slice(0, 20).map(w => `${w}123`),
  ...DICTIONARY_WORDS.slice(0, 10).map(w => `${w}!`),
  ...DICTIONARY_WORDS.slice(0, 10).map(w => `${w}2024`),
  ...DICTIONARY_WORDS.slice(0, 10).map(w => `${w}@1`),
];
