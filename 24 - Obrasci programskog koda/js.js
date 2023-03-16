// var StepCounter = (
//     function(){
//         var koraci = 0;
//         function stepUp(){
//             koraci++;
//         }
//         return{
//             walk: function(){
//                 stepUp();
//             },
//             getTotalSteps: function(){
//                 return koraci;
//             }
//         }
//     }
// );



var StepCounter = {
    koraci: 0,
    walk: function(){
        this.koraci++;
    },
    getTotalSteps: function(){
        return this.koraci;
    }
};

module.exports = StepCounter

// var sc = require("./StepCounter");

// sc.walk();
// consol.log(sc.getTotalSteps());

// sc.walk();
// sc.walk();
// sc.walk();
// consol.log(sc.getTotalSteps());