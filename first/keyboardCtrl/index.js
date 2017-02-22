function MoveBlock() {
    this.side = 0;
    this.color = '';
    this.position = {
        left : 0,
        top : 0,
        right : 0,
        bottom : 0
    };
    this.direction = '';
    this.html = false;
}
MoveBlock.prototype.init = function() {
    var div = document.createElement('div');
    div.setAttribute('id','moveBox');
    document.body.appendChild(div);
}
MoveBlock.prototype.locate = function() {
    this.html
}
MoveBlock.prototype.move = function(direction){  // 移动
    if (this.position[direction] > 10) {
        this.position[direction] -= 10;
    } else {
        this.position[direction] = 0;
    }
}
