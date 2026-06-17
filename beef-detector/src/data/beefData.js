/**
 * ============================================================
 *  BEEF DETECTOR — DATA CONTRACT
 *  Person 5: match this exact shape when wiring the real API.
 * ============================================================
 *
 * Temperature must be one of: "lukewarm" | "simmering" | "drake_kendrick"
 * detectedAt must be an ISO 8601 timestamp string.
 *
 * type Beef = {
 *   id: string;
 *   parties: [string, string];        // the two people involved
 *   originStory: string;               // short paragraph, how it started
 *   temperature: "lukewarm" | "simmering" | "drake_kendrick";
 *   dissTrackTitle: string;             // predicted diss track title
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
    dissTrackTitle: 'Not Like Reviewers',
    resolution: 'Mandatory pairing session + revoke Kyle\'s force-merge permissions for 30 days.',
    detectedAt: '2026-06-10T14:32:00Z',
  },
  {
    id: 'beef-002',
    parties: ['Marcus', 'Devon'],
    originStory:
      'Marcus took credit for Devon\'s incident postmortem in the all-hands, calling it "my analysis" three separate times.',
    temperature: TEMPERATURE.SIMMERING,
    dissTrackTitle: 'Postmortem (Yours, Not Mine)',
    resolution: 'Public Slack shoutout to Devon in #engineering, authored by Marcus.',
    detectedAt: '2026-06-14T09:15:00Z',
  },
  {
    id: 'beef-003',
    parties: ['Aisha', 'Tom'],
    originStory:
      'Tom keeps scheduling 8am meetings without checking Aisha\'s calendar, which clearly says "no meetings before 10."',
    temperature: TEMPERATURE.LUKEWARM,
    dissTrackTitle: 'Calendar Blocked (Interlude)',
    resolution: 'Tom adds a recurring "check calendar first" reminder. Aisha forgives, reluctantly.',
    detectedAt: '2026-06-15T17:48:00Z',
  },
  {
    id: 'beef-004',
    parties: ['Sana', 'Felix'],
    originStory:
      'Felix renamed Sana\'s feature branch "fix-the-thing-properly-this-time" in a force-push, implying her first fix wasn\'t proper.',
    temperature: TEMPERATURE.SIMMERING,
    dissTrackTitle: 'Force Push, Force Quit',
    resolution: 'Branch naming convention RFC, co-authored by both, posted before EOD Friday.',
    detectedAt: '2026-06-16T11:02:00Z',
  },
  {
    id: 'beef-005',
    parties: ['Owen', 'Bex'],
    originStory:
      'Bex left a one-word review comment — "no." — on Owen\'s 600-line refactor PR, no further explanation given.',
    temperature: TEMPERATURE.DRAKE_KENDRICK,
    dissTrackTitle: 'No. (Extended Mix)',
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
