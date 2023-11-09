//The Apply aproach 
let group = {

    title: "Our Group",

    students: ["John", "Pete", "Alice"],

    showList: function () {


        this.students.forEach((s) => {

            (function(student){

                console.log(this.title + " : " + student);
            }).apply(this, [s])
        });

    }


};

group.showList();