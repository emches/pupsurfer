const AWS = require("aws-sdk");
const fs = require('fs');
const petfinder = require('petfinder')('06bc89b5e6aab3e0c39ecbec5c494f50','5e2bfb05c24ad30af7bf30d99791c0a2');

AWS.config.update({
    region: "us-west-2",
    endpoint: "http://localhost:8000"
});

const docClient = new AWS.DynamoDB.DocumentClient();

let offset = 0
let pupCount = 0

function getPups(){
  petfinder.findPet("NY",{"animal": "dog", "count":1000, "offset": offset, "format":"json"},  function(err, pups) {
    if (err) {
      console.log("error grabbing pets...exiting", err)
      return
    }

    //var allMovies = JSON.parse(fs.readFileSync('moviedata.json', 'utf8'));
    pups.forEach(function(pup) {
        var params = {
            TableName: "Pups",
            Item: {
                "Id":  pup.id,
                "Name":  pup.name,
                "Status": pup.status,
                "Age":  pup.age,
                "Description": pup.description,
                "Contact": pup.contact,
                "Media": pup.media,
                "Breeds": pup.breeds
            }
        };

        docClient.put(params, function(err, data) {
           if (err) {
               console.error("Unable to add pup", pup.name, ". Error JSON:", JSON.stringify(err, null, 2));
           } else {
               console.log("PutItem succeeded:", pup.name, pup.contact);
           }
        });
    });
    if (offset >= 1000) {
      console.log("at max pup count!");
      return
    }
    offset+=1000;
    pupCount+=pups.length;
    getPups()

  });
}

getPups()
