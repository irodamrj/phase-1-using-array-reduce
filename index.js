const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

function reducer(){
    return batteryBatches.reduce(function(batteries,acc){
        return batteries+acc;
    }, 0)
}

// Code your solution here
let totalBatteries = reducer();
console.log(totalBatteries);
