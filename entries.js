 const student={
    name:"shehiryar",
    class:10,
    school:"RPS"
 }

// const data=Object.entries(student)
// console.log(data)

// for (const [key, value] of Object.entries(student)) {
// //    console.log(`${key}`);
//   console.log(`${value}`);
// }

// Object.entries(student).forEach(([key,value])=>{

//     console.log(`${key} ${value}`)
// })

for(const key in student){
      console.log(`${key}:${student[key]}`)
}
