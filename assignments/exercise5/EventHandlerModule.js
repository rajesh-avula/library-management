var EventEmitter = require('events').EventEmitter;
var util = require('util');

var RegisterClass = function(initial_no){
    this.count = initial_no;
};

util.inherits(RegisterClass,EventEmitter);

RegisterClass.prototype.increment = function(){
    var self=this;
    this.count++;
    if(this.count % 2 === 0){
        self.emit("even");
    }
    else{
        globalcount=this.count;
    }
}
var evenEmitter = new RegisterClass(10);
evenEmitter.on("even",function(){
    console.log("The global count ::" + this.count);
    globalcount = this.count;
});

exports.evenEvent = function () {
    evenEmitter.increment();
    return globalcount;
}