// Import module
var petfinder = require('petfinder')('06bc89b5e6aab3e0c39ecbec5c494f50','5e2bfb05c24ad30af7bf30d99791c0a2');

// Get list of breeds
// petfinder.getBreedList('dog', function(err, breeds) {
//   console.log(breeds[breeds.length-1])
//   console.log("count", breeds.length)
// });


// $.getJSON('http://api.petfinder.com/pet.find?format=json&key=06bc89b5e6aab3e0c39ecbec5c494f50&callback=?')
//   .done(function(petApiData) { alert('Data retrieved!'); })
//   .error(function(err) { alert('Error retrieving data!');
// });


// petfinder.getPetsInShelter('CA1117', {'count':10, 'output': 'full', 'format':'json'}, function(err, pup) {
//   console.log(pup)
// });
let offset = 0;
pupsLeft = true;
pupCount = 0
incTry = 1000
offsetFreeze = false;

function getPups() {
    console.log('running...')
    petfinder.findPet("10003",{"animal": "dog", "count":incTry, "offset": offset, "format":"json"},  function(err, pups) {
        // pup.forEach(function(a){
        //     console.log(a.name)
        // })
        // console.log(pup)
        if (err) {
            if (incTry === 1) {
                console.log("nothing left!")
                return
            }
            if (!offsetFreeze){
                offsetFreeze = true
                console.log("offset is now: ", offset )
            }

            incTry = Math.round(incTry /2)
            console.log("incTry is now: ", incTry)
            getPups()
            return
        }

        if (offsetFreeze) {

        }
        console.log(pups.length)
        if (!offsetFreeze){
            offset+=1000
        } else {
            console.log(`adding ${Math.round(incTry /2)} to ${offset}` )
            offset+=Math.round(incTry)
            incTry = Math.round(incTry /2)
        }

        pupCount+=pups.length
        console.log("new offset", offset)
        console.log("count", pupCount)

        getPups()
    });

}
getPups()
// petfinder.findShelter("11211",{},  function(err, pup) {
//   console.log(pup)
// });


// let pups = petfinder.findPet("11211",{'count':2},  function(err, foundPups) {
//   console.log("found pups", foundPups)
//   return foundPups
// }).then();

// console.log("the pups", pups)