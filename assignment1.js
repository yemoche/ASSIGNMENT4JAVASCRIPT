/*declaring functions in javascript, we have named types, annoymous & immediately invoked types */

//Named type of function example

function multiply(canny,banny){
    let result = canny*banny;
    console.log (result);
    return result;
  };
  
  let multiplied = multiply (9,9) //this call the multiply function
  
  //declaring annoymous function example
  
  let divided = function (){
    let result = 7/4
    console.log ('7 divided by 4 is ', result);
  }
  divided();
  
  /*declaring immediately invoked function,it runs as soon as the browser finds it, examples is given below */
  
  (function(){
    let result = 78/55;
    console.log ('78 divided by 55 is', result)
  }())
  
  /*closure in function: this is a function inside a function that relies on a variable in the outside function to work. a function could be global or local. examples are given below */
  
  //closure function
  
  function basicMaths() {
      let abbey = 5;
      var vertexSide = 4;
      function multiply(){
          var result = abbey*vertexSide;
          return result;
      }
  
      return multiply;
  }
  
  var theResult = basicMaths();
  
  console.log("The result: ", theResult());
  
  //defining object and object constructors
  
  // object, properties and method functions
  
  let course = new Object();
  
  course.title = 'Javascript';
  course.instructor = 'Marten Rand Henderiksen'
  course.level = 1;
  course.published = true;
  course.views = 1;
  
  console.log(course); 
  console.log(course.title); //this is one way to declare object and its properties
  
  //Another way to declare object and its properties
  
  let coursee = {
      title: "Javascript Essential Training",
      instructor: 'Merten Rand hendriksen',
      level: 1,
      published: true,
      views: 0,
      updateViews: function(){
      return ++coursee.views; //method function declaration applied on views
      }
  };
  console.log(coursee)
  console.log(coursee.views);
  coursee.updateViews();
  console.log(coursee.views);
  coursee.updateViews();
  console.log(coursee.views); 
  
  // declaring the object constructors, this is a template for building many objects, examples shown below
  
  function Course(title,instructor,published,level,views){;
    this.title = title;
    this.instructor = instructor;
    this.level= level;
    this.published = published;
    this.views = views;
    this.updateViews = function(){
      return ++this.views
    };
  };
  
  let courses = [new Course('javascript Essential training','Monica Lewinsky',1,'true', 0), new Course('Emascript fundamental training','Caponica formnersa',2,'true', 1233)];//this is an array format that can accomodate many items, they are index from 0,1......
  
  console.log(courses);
  console.log(courses[0].updateViews());
  console.log(courses[1].updateViews());
  console.log(courses[0].updateViews());//method functions updated
  console.log(courses[1].updateViews());//Mehod function increment updated
  
  