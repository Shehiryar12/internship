/*
      Syntax:-

      string.padStart(targetLength,padstring)
  
*/ 



// const person="Javad"
// const result=person.padStart(6,0)
// console.log(result) 


// const school="RPS"
// const add=school.padStart(9,"-")
// console.log(add)


// const student="Imran"
// const personality=student.padStart(14," ")
// console.log(personality)



// function number(num,totalLength){
//     return num.toString().padStart(totalLength,0)
// }
// const cal=number(8,5)
// console.log(cal)



function number(num,Length){
  return num.toString().padStart(Length,"1")
} 
const cal=number(6,7)
console.log(cal)