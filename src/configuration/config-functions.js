import { gameConfig } from "./game-config.js"

export const getLobbyConfiguration = () => {
    return {
        enemyTpes: gameConfig.enemyTypes,
        aiDifficulty: gameConfig.aiDifficulty,
        fleetType: gameConfig.fleetTypes,
        boardSize: gameConfig.boardSize
    }
}

// Returns the fleet arrangement for specific Boardsize and FleetType
export const getFleetForBoard = (boardSize = gameConfig.clasicBoard, FleetType = gameConfig.fleetTypes.clasic) => {

}