let Canvas_tutorial = function(){
    this.image = null;
    this.x = null;
    this.y = null;
    this.init = function(image,x,y){
        this.image = image;
        this.x = x;
        this.y = y;
        return this;
    }
}