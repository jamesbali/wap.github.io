
//let group = {

    //     title: "Our Group",
    
    //     students: ["John", "Pete", "Alice"],
    
    //     showList: function () {
    
    //         this.students.forEach(function (student) {
    
    //             console.log(this.title + ": " + student
    
    //             );
    
    //         });
    
    //     }
    
    // };
    
    // group.showList();
    
 

//Using the Arrow Function

let group = {

        title: "Our Group",
    
       students: ["John", "Pete", "Alice"],
    
        showList: function () {
    
           this.students.forEach(  student =>  {
    
                console.log(this.title + ": " + student
                );
    
             });
         }
    
     };
    
     group.showList();

     //Self Pattern method



     


    