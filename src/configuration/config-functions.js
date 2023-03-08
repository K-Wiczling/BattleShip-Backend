import { gameConfig } from "./game-config.js"

// Get configurationto build lobby
export const getLobbyConfiguration = () => {
    return {
        enemyTpes: gameConfig.enemyTypes,
        aiDifficulty: gameConfig.aiDifficulty,
        fleetType: gameConfig.fleetTypes,
        boardSize: gameConfig.boardSize
    }
}

// Returns the fleet arrangement for specific Boardsize and FleetType
export const getFleetForBoard = (boardSize = gameConfig.boardSize.clasic) => {
    
    // Shorting names because of multiple usage
    const gcb = gameConfig.boardSize;

    switch (boardSize) {
        case gcb.clasic:
            return [gameConfig.ccFleet, gameConfig.clFleet, gameConfig.csFleet]

        case gcb.big:
            return [gameConfig.bcFleet, gameConfig.blFleet, gameConfig.bsFleet]

        case gcb.small:
            return [gameConfig.scFleet, gameConfig.slFleet, gameConfig.ssFleet]

        default:
            return []
    }
}