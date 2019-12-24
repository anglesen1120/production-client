export const transformSecondsToTimeFormat = seconds =>
  `${Math.floor(seconds / 60)}:${`0${Math.floor(seconds % 60)}`.slice(-2)}`;
