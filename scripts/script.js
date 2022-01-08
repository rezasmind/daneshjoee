let lessons = [];

document.getElementById("add-course").addEventListener("click", function(){
        
        let courses = document.getElementById("courses");

        courses.innerHTML += `<div class="course">
        <input type="value" placeholder="واحد">
        <input type="course-name" placeholder="نام درس ">
        <button class="dlt-course" id="dlt-course" onClick="dlt(this)"> حذف درس </button>
        </div>`

        document.getElementById("dlt-course").addEventListener("click", function(){
            this.parentElement.remove();

            console.log(this.parentElement);
        })

})

var dlt = (elmnt) => {
    elmnt.parentElement.remove();
    console.log(elmnt.parentElement);
}


document.getElementById("plan").addEventListener("click", function(){

    var course = document.getElementsByClassName("course")

    for (let i = 0; i < course.length; i++) {
        lessons.push([parseInt(course[i].children[1].value), course[i].children[0].value])
    }

})