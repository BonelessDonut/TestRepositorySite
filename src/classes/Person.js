class Person extends GameObject{
    constructor(config){
        super(config);
        this.movingProgressRemaining = 0;
        this.isStanding = false;

        this.isPlayerControlled = config.isPlayerControlled || false;

        this.directionUpdate = {
            "down": ["y", 1], 
            "up": ["y", -1],
            "left": ["x", -1],
            "right": ["x", 1]
        }
    }
}