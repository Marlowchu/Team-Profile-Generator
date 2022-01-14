

// function that takes the array of containers and adds it to pre-made html
function generateHtml (data) {

return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>

    <title>My Team</title>
</head>
<body>

    <h1 style="background-color: red; text-align: center; color: seashell; height: 110px;">MY TEAM</h1>


<div class= "container">

  <div class= "row justify-content-center" id= "print">${data.join(' ')}</div>
  
</div>   
</body>
</html>`
  
}


module.exports = generateHtml;