class Overworld {
    constructor(config){
        this.element = config.element;
        this.canvas = document.querySelector(".game-canvas");
        this.ctx = canvas.getContext("2d");
        this.map = null;
    }

    startGameLoop(){
        const step = () => {
            //Clear the canvas to prep for the next frame
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            //Create the camera to follow the player
            const cameraPerson = this.map.gameObjects.hero;
            //Draw the lower layer
            this.map.drawLowerImage(this.ctx, cameraPerson);


        }
    }

    bindActionInput(){
        
    }

    startMap(mapConfig){
        this.map = new OverworldMap(mapConfig);

    }

    init(){

    }
}