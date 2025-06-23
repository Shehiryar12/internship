const fruits=[
    {name:"apple",price:100},
    {name:"orange",price:300},
    {name:"grapes",price:400},
]

function info({price}){
   return price>200 ? "ok" : "low";
}

const result=Object.groupBy(fruits,info)
console.log(result)
