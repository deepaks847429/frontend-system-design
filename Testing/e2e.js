const puppeteer= require('puppeteer')

(async()=>{
    const browser= await puppeteer.launch({
      headless: false,
      args:["--window-size=1920, 1080"],
    })  
    const page = await browser.newPage();
    await page.goto("https://namastedev.com/")
    console.log("Webpage Loaded");
    await page.setViewport({width:1920, height: 1080})
    const  coursesPageLink= ".menu> li:nth-child(3)>a";
    await page.waitForSelector(coursesPageLink);
    await page.click(coursesPageLink);
    const enrollButton= ".bg-success-btn";
    await page.waitForSelector(enrollButton);
    await page.click(enrollButton);

    await browser.close();

    
})();
