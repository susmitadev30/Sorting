student_name_array= [];

function submit(){

    var name_1 = document.getElementById("name_of_the_students1").value;
    var name_2 = document.getElementById("name_of_the_students2").value;
    var name_3 = document.getElementById("name_of_the_students3").value;
    var name_4 = document.getElementById("name_of_the_students4").value;

    student_name_array.push(name_1);
    student_name_array.push(name_2);
    student_name_array.push(name_3);
    student_name_array.push(name_4);

    console.log(student_name_array);

    document.getElementById("display_name").innerHTML = student_name_array;
    document.getElementById("submit_button").style.display= "none";
    document.getElementById("sort_button").style.display= "inline-block";
}

function sorting(){
    student_name_array.sort();
    console.log(student_name_array);
    document.getElementById("display_name").innerHTML= student_name_array;
}