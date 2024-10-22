const sortingByAge= require("./app")

test("testing the sorting feature", ()=>{
  const sortedData= sortingByAge();
  
  expect (sortedData[0].name).toBe("samriddhi");

  test("testing if last of my ex is sakshi after college", ()=>{
    const sortedData= sortingByAge();
    expect(sortedData[sortedData.length-1].name).toBe("sakshi")
  })
})