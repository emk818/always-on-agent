/**
 * ============================================================
 *  BEEF DETECTOR — DATA CONTRACT
 *  Person 5: match this exact shape when wiring the real API.
 * ============================================================
 *
 * Temperature must be one of: "lukewarm" | "simmering" | "drake_kendrick"
 * detectedAt must be an ISO 8601 timestamp string.
 *
 * type DissTrack = {
 *   title: string;        // real song title
 *   artist: string;
 *   youtubeUrl: string;   // link to an official video/audio upload
 *   relevance: string;    // short note on why this track fits the beef
 * };
 *
 * type Beef = {
 *   id: string;
 *   parties: [string, string];        // the two people involved
 *   originStory: string;               // short paragraph, how it started
 *   temperature: "lukewarm" | "simmering" | "drake_kendrick";
 *   dissTrack: DissTrack;               // predicted (real) diss track
 *   resolution: string;                // recommended resolution
 *   detectedAt: string;                 // ISO 8601 timestamp
 * };
 *
 * type BeefHistoryEntry = {
 *   id: string;
 *   label: string;       // e.g. "Kyle vs Priya — Slack thread escalation"
 *   timestamp: string;   // ISO 8601 timestamp
 * };
 */

export const TEMPERATURE = {
  LUKEWARM: 'lukewarm',
  SIMMERING: 'simmering',
  DRAKE_KENDRICK: 'drake_kendrick',
}

export const TEMPERATURE_META = {
  [TEMPERATURE.LUKEWARM]: { label: 'Lukewarm', emoji: '🌡️' },
  [TEMPERATURE.SIMMERING]: { label: 'Simmering', emoji: '🔥' },
  [TEMPERATURE.DRAKE_KENDRICK]: { label: 'Drake vs Kendrick', emoji: '💀' },
}

export const beefData = [
  {
    id: 'beef-001',
    parties: ['Kyle', 'Priya'],
    originStory:
      'Kyle merged a PR over Priya\'s "request changes" review while she was at lunch. She found out via a Slack notification titled "Re: Re: Re: please revert".',
    temperature: TEMPERATURE.DRAKE_KENDRICK,
    dissTrack: {
      title: 'Not Like Us',
      artist: 'Kendrick Lamar',
      youtubeUrl: 'https://www.youtube.com/watch?v=H58vbez_m4E',
      relevance:
        'The defining "ultimate disrespect" anthem — fitting for a betrayal this brazen: overriding a review behind someone\'s back is the engineering equivalent of dropping the diss track on Independence Day.',
    },
    resolution: 'Mandatory pairing session + revoke Kyle\'s force-merge permissions for 30 days.',
    detectedAt: '2026-06-10T14:32:00Z',
  },
  {
    id: 'beef-002',
    parties: ['Marcus', 'Devon'],
    originStory:
      'Marcus took credit for Devon\'s incident postmortem in the all-hands, calling it "my analysis" three separate times.',
    temperature: TEMPERATURE.SIMMERING,
    dissTrack: {
      title: 'The Story of Adidon',
      artist: 'Pusha T',
      youtubeUrl: 'https://www.youtube.com/watch?v=LIz9hmISM58',
      relevance:
        'A track built entirely on exposing the truth behind someone else\'s public narrative — exactly the energy Devon needs to set the record straight on whose analysis it actually was.',
    },
    resolution: 'Public Slack shoutout to Devon in #engineering, authored by Marcus.',
    detectedAt: '2026-06-14T09:15:00Z',
  },
  {
    id: 'beef-003',
    parties: ['Aisha', 'Tom'],
    originStory:
      'Tom keeps scheduling 8am meetings without checking Aisha\'s calendar, which clearly says "no meetings before 10."',
    temperature: TEMPERATURE.LUKEWARM,
    dissTrack: {
      title: 'Back to Back',
      artist: 'Drake',
      youtubeUrl: 'https://www.youtube.com/watch?v=XHYG2crLab4',
      relevance:
        'Famously petty rather than vicious — Drake taunted without ever raising his voice, which is exactly the energy of repeatedly, calmly declining an 8am invite.',
    },
    resolution: 'Tom adds a recurring "check calendar first" reminder. Aisha forgives, reluctantly.',
    detectedAt: '2026-06-15T17:48:00Z',
  },
  {
    id: 'beef-004',
    parties: ['Sana', 'Felix'],
    originStory:
      'Felix renamed Sana\'s feature branch "fix-the-thing-properly-this-time" in a force-push, implying her first fix wasn\'t proper.',
    temperature: TEMPERATURE.SIMMERING,
    dissTrack: {
      title: 'No Vaseline',
      artist: 'Ice Cube',
      youtubeUrl: 'https://www.youtube.com/watch?v=rSK8jTzl1Kw',
      relevance:
        'A former collaborator turning on the group and torching the partnership in public — the original force-push betrayal track.',
    },
    resolution: 'Branch naming convention RFC, co-authored by both, posted before EOD Friday.',
    detectedAt: '2026-06-16T11:02:00Z',
  },
  {
    id: 'beef-005',
    parties: ['Owen', 'Bex'],
    originStory:
      'Bex left a one-word review comment — "no." — on Owen\'s 600-line refactor PR, no further explanation given.',
    temperature: TEMPERATURE.DRAKE_KENDRICK,
    dissTrack: {
      title: 'Ether',
      artist: 'Nas',
      youtubeUrl: 'https://www.youtube.com/watch?v=bGKNaF0O55w',
      relevance:
        'Blunt, brutal, and over almost before it starts — the verbal equivalent of a single-word "no." with zero further explanation given.',
    },
    resolution: 'Synchronous design review before any PR over 200 lines. No more drive-by "no."',
    detectedAt: '2026-06-17T08:21:00Z',
  },
]

export const beefHistory = [
  { id: 'hist-001', label: 'Kyle vs Priya — escalated to Drake vs Kendrick after force-merge', timestamp: '2026-06-10T14:32:00Z' },
  { id: 'hist-002', label: 'Marcus vs Devon — credit dispute flagged in all-hands', timestamp: '2026-06-14T09:15:00Z' },
  { id: 'hist-003', label: 'Aisha vs Tom — calendar conflict, lukewarm and holding', timestamp: '2026-06-15T17:48:00Z' },
  { id: 'hist-004', label: 'Sana vs Felix — force-push naming incident', timestamp: '2026-06-16T11:02:00Z' },
  { id: 'hist-005', label: 'Owen vs Bex — "no." review comment incident', timestamp: '2026-06-17T08:21:00Z' },
  { id: 'hist-006', label: 'Priya vs Kyle (resolved) — pairing session completed', timestamp: '2026-06-11T16:00:00Z' },
]
