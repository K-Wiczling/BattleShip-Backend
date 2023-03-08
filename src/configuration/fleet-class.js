// Holds sizes of each ship 
export default class Fleet {
    #carrier = 5;
    #battleship = 4;
    #cruiser = 3;
    #destroyer = 2;
    
    // Return object containning sheeps sizes with coresponding ammounts
    getFleet = (carrierAmm=0, battleshipAmm=0, cruiserAmm=0, destroyerAmm=0) => {
        return {
            carrier:{
                size: this.#carrier,
                ammount: carrierAmm
            },
            battleship:{
                size: this.#battleship,
                ammount: battleshipAmm
            },
            cruiser:{
                size: this.#cruiser,
                ammount: cruiserAmm
            },
            destroyer:{
                size: this.#destroyer,
                ammount: destroyerAmm
            }
        }
    }

}