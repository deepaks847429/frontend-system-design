const users=[
  {
  name: "Deepak", 
  age:"22"},
{name:"sadiya",
   age:"23"},
{name: "samriddhi",
  age:"21" },
{name: "sakshi",
age:"24"}];

function sortingByAge(){
  const data= users.sort((a, b)=>a.age-b.age);
  return data;
}

module.exports=sortingByAge;