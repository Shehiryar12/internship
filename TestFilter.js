 const obj=[
    {
         name:"nouman",
         fatherName:"hammad",
         class:10,
         Subject:"math",
         age:25,
    },

    {
         name:"inam",
         fatherName:"ahmed",
         class:7,
         Subject:"english",
         age:18,
    },

    {
         name:"shehri",
         fatherName:"zahid",
         class:6,
         Subject:"History",
         age:15,
    },

    {
         name:"usman",
         fatherName:"ali",
         class:3,
         Subject:"physics",
         age:9,
    },

   {
         name:"babar",
         fatherName:"azam",
         class:9,
         Subject:"english",
         age:13,
   }, 

]

const number=obj.filter(person => person.name!="babar")
 console.log(number)
//  (topic=>topic.subject==="english")