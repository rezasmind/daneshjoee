let lessons = [[3,"riazi"],[2,"masaleh"],[1,"Danesh Khanevade"],[3,"fizik"]];

let sorting = (array) => {
    array.sort(function(a, b) {
        return a[0] - b[0];
        }
    );
    
    array =  array.reverse()
}

sorting(lessons);

console.log(lessons);

