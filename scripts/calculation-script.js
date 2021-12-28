let lessons = [[3,"riazi"],[2,"masaleh"],[1,"Danesh Khanevade"],[3,"fizik"]];
let hours = [5,4,7,8,2,1,10] 
let lessonsHours = [];
let plannerHours = []

let sorting = (array) => {
    array.sort(function(a, b) {
        return a[0] - b[0];
        }
    );
    
    array =  array.reverse()
}

sorting(lessons);

let timePerDay = () => {
    let sum = [];
    for (let i = 0; i < hours.length; i++) {
        sum.push(hours[i] * 60 / 9);
    }
    let perDay = sum;
    return perDay;
}

// console.log(timePerDay(hours))


let xCalculate = () => {
    var x  = []
    var y = []
    //x = Math.round(x);
    // var x  = timePerDay(hours) / sum;    
    
    for (let i = 0; i < hours.length; i++) {
        for(let z = 0; z < lessons.length; z++) {
            y.push([Math.round(lessons[z][0] *  timePerDay()[z]), lessons[z][1] ])
        }

        for(let t = 0; t < lessons.length; t++) {
            x.push(i,y[t])
        }

        
    }

    return x;


}

console.log(xCalculate())

