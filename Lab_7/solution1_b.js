//Self Pattern Method

let group = {

    title: "Our Group",

    students: ["John", "Pete", "Alice"],

    showList: function () {

        const grouping = this;

        grouping.students.forEach(function (student) {

            console.log(grouping.title + ": " + student

            );

        });

    }

};

group.showList();

