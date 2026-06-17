/**
 * type CharacterProfile = {
 *   record: string;        // e.g. "12W - 3L"
 *   signatureMove: string;
 *   knownAllies: string;   // comma-separated names, or "None"
 *   status: "Heated" | "Cooling Off" | "At Peace";
 *   funFact: string;
 * };
 */

export const STATUS_META = {
  Heated: { emoji: '🔴', color: 'text-red-400' },
  'Cooling Off': { emoji: '🟠', color: 'text-orange-400' },
  'At Peace': { emoji: '🟢', color: 'text-emerald-400' },
}

export const characterData = {
  Kyle: {
    record: '12W - 3L',
    signatureMove: 'The drive-by force-merge',
    knownAllies: 'None',
    status: 'Heated',
    funFact: 'Has never once opened a Figma link.',
  },
  Priya: {
    record: '9W - 2L',
    signatureMove: 'The "Re: Re: Re:" email chain escalation',
    knownAllies: 'Devon',
    status: 'Heated',
    funFact: 'Keeps a personal changelog of everyone who has ever overridden her review.',
  },
  Marcus: {
    record: '5W - 6L',
    signatureMove: 'Saying "my analysis" in front of leadership',
    knownAllies: 'None',
    status: 'Cooling Off',
    funFact: 'Has given the same all-hands talking point four times across three teams.',
  },
  Devon: {
    record: '7W - 1L',
    signatureMove: 'The receipts-in-the-thread reply',
    knownAllies: 'Priya',
    status: 'Cooling Off',
    funFact: 'Has a personal Notion page titled "Things I Actually Did."',
  },
  Aisha: {
    record: '4W - 0L',
    signatureMove: 'The calendar screenshot, unprompted',
    knownAllies: 'Sana',
    status: 'At Peace',
    funFact: 'Has blocked every Friday afternoon since 2022 and nobody knows for what.',
  },
  Tom: {
    record: '2W - 5L',
    signatureMove: 'The "quick sync" that runs 45 minutes',
    knownAllies: 'Felix',
    status: 'At Peace',
    funFact: 'Has never once successfully found a time that works for everyone.',
  },
  Sana: {
    record: '8W - 4L',
    signatureMove: 'The force-push with a strongly worded commit message',
    knownAllies: 'Aisha',
    status: 'Heated',
    funFact: 'Writes commit messages longer than most of her PR descriptions.',
  },
  Felix: {
    record: '3W - 9L',
    signatureMove: 'Renaming branches to make a point',
    knownAllies: 'Tom',
    status: 'Cooling Off',
    funFact: 'Once renamed a branch four times in a single afternoon.',
  },
  Owen: {
    record: '6W - 6L',
    signatureMove: 'The 600-line PR nobody asked for',
    knownAllies: 'None',
    status: 'Heated',
    funFact: 'Has a Slack status that has read "focusing" for eleven straight months.',
  },
  Bex: {
    record: '11W - 1L',
    signatureMove: 'The one-word review comment',
    knownAllies: 'None',
    status: 'Heated',
    funFact: 'Has left the comment "no." on a PR more times than anyone can count.',
  },
}
