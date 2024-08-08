class OverWorldMap {
    constructor(config){
        this.overworld = null;
        this.gameObjects = config.gameObjects;
        this.walls = config.walls || {};
        this.cutsceneSpaces = config.cutsceneSpaces || {};

        this.lowerImage = new Image();
        this.lowerImage.src = config.lowerSrc;

        this.upperImage = new Image();
        this.upperImage.src = config.upperSrc;

        this.isCutscenePlaying = false;
    }

    drawLowerImage(ctx, cameraPerson){
        ctx.drawImage(this.lowerImage, utils.withGrid(10.5) - cameraPerson.x, utils.withGrid(6) - cameraPerson.y);
    }

    drawUpperImage(ctx, cameraPerson){
        ctx.drawImage(this.upperImage, utils.withGrid(10.5) - cameraPerson.x, utils.withGrid(6) - cameraPerson.y);
    }
}