import { getFleetForBoard } from "../src/configuration/config-functions.js";

describe("getFleetForBoard", () => {
    test("return fleet arrangement for boardSizeSmall-5x5", () => {
      const output = [
        {
          carrier: { size: 5, ammount: 0 },
          battleship: { size: 4, ammount: 1 },
          cruiser: { size: 3, ammount: 2 },
          destroyer: { size: 2, ammount: 3 }
        },
        {
          carrier: { size: 5, ammount: 0 },
          battleship: { size: 4, ammount: 2 },
          cruiser: { size: 3, ammount: 2 },
          destroyer: { size: 2, ammount: 1 }
        },
        {
          carrier: { size: 5, ammount: 0 },
          battleship: { size: 4, ammount: 1 },
          cruiser: { size: 3, ammount: 1 },
          destroyer: { size: 2, ammount: 4 }
        }
      ];

      expect(getFleetForBoard('boardSizeSmall-5x5')).toEqual(output);
    });
    test("return empty array for wrong input", () => {
      expect(getFleetForBoard('wrong input')).toEqual([]);
    });
  }); 