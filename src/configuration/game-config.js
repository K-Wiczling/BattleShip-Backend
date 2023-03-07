export const gameConfig = {
  //Posible enemy types
  enemyTypes: {
    AI: "enemyTypeAI",
    Multi: "enemyTypeMulti",
  },

  //AI Difficulty levels
  aiDifficulty: {
    none: "aiDifficultyNone", //Multiplayer
    easy: "aiDifficultyEasy",
    medium: "aiDifficultyMedium",
    hard: "aiDifficultyHard",
  },

  //What kind of fleet player want to play with
  fleetTypes: {
    clasic: "fleetTypeClasic",
    Long: "fleetTypeLong",
    Short: "fleetTypeShort",
  },

  //Board sizes
  boardSize: {
    clasic: "boardSizeClasic-10x10",
    small: "boardSizeSmall-5x5",
    big: "boardSizeBig-15x15",
  },

  //All posible states that Tile can be at
  tileState: {
    hit: "hit",
    empty: "empty",
    hitted: "hitted",
    ship: "ship",
    notAllowed: "notAllowed",
  },

  // Clasic 10x10 game field for drawing
  clasicBoard: [
    ["x", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    ["A", "", "", "", "", "", "", "", "", "", ""],
    ["B", "", "", "", "", "", "", "", "", "", ""],
    ["C", "", "", "", "", "", "", "", "", "", ""],
    ["D", "", "", "", "", "", "", "", "", "", ""],
    ["E", "", "", "", "", "", "", "", "", "", ""],
    ["F", "", "", "", "", "", "", "", "", "", ""],
    ["G", "", "", "", "", "", "", "", "", "", ""],
    ["H", "", "", "", "", "", "", "", "", "", ""],
    ["I", "", "", "", "", "", "", "", "", "", ""],
    ["J", "", "", "", "", "", "", "", "", "", ""],
  ],
  // small 5x5 game field for drawing
  smallBoard: [
    ["x", 1, 2, 3, 4, 5],
    ["A", "", "", "", "", ""],
    ["B", "", "", "", "", ""],
    ["C", "", "", "", "", ""],
    ["D", "", "", "", "", ""],
    ["E", "", "", "", "", ""],
  ],
  // big 15x15 game field for drawing
  bigBoard: [
    ["x", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    ["A", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["B", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["C", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["D", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["E", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["F", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["G", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["H", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["I", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["J", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["K", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["L", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["M", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["N", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["O", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ],
  
  //Standard game states
  gameState: {
    pre: "pre",
    setup: "setup",
    game: "game",
    end: "end",
  },

  // Classic board 10x10 Fleet arrangements
  

  // Big board 15x15 Fleet arrangements

  // Small board 5x5 Fleet arrangements
  
};

