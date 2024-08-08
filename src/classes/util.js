const utils = {
    withGrid(n){
        //Returns an integer n multiplied by whatever the grid size is
        //We will just use 16 until I come up with something else
        return n * 16;
},
asGridCoords(x, y){
    return `${x*16}, ${y*16}`;
}
}