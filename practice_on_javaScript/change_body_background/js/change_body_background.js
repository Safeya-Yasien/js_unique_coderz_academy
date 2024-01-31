let todayTime = new Date();

let paragraph = document.createElement("p");
paragraph.textContent = "Today's date is: " + todayTime.toDateString();
document.body.appendChild(paragraph);

setTimeout("document.bgColor = 'orange'", 1000);
setTimeout("document.bgColor = '#292929'", 2000);
setTimeout("document.bgColor = '#7f39fb'", 3000);
setTimeout("document.bgColor = '#11101d'", 4000);
setTimeout("document.bgColor = '#bc86fd'", 5000);
setTimeout("document.bgColor = '#010001'", 6000);
setTimeout("document.bgColor = '#aaaaaa'", 7000);
