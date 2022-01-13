// var div = $('.print');


// var div = document.querySelector(".print")

let team1 = []

function generateHtml (data) {

team1 = data

console.log("generateHtml")

return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>

    <title>Document</title>
</head>
<body>

    <h1 style="background-color: red; text-align: center; color: seashell; height: 150px;">MY TEAM</h1>


<div class= "container">

  <div class= "row" id= "print">${team1.forEach(makeDiv())}</div>
  
</div>   
</body>
</html>`

// team1.forEach(makeDiv())
    
}



function makeDiv (item) {
    console.log("makeDiv")
// div.innerhtml(item)
// div.appendChild(item);


return item

}

function makeDiv1 () {
    console.log("makeDiv1")
// div.innerhtml(item)
// div.appendChild(item);



return item

}




module.exports = generateHtml;