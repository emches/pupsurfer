var zipcodes = require('zipcodes');
var us = require('us')
// zipObjs = []
// var rad = zipcodes.radius(11211, 50);
// console.log(rad)

console.log(us.states)

const popZips = [
{"zipcode": "79936",  "city": "El Paso TX"},
{"zipcode": "90011",  "city": "Los Angeles CA"},
{"zipcode": "60629",  "city": "Chicago IL"},
{"zipcode": "90650",  "city": "Norwalk CA"},
{"zipcode": "90201",  "city": "Bell Gardens CA"},
{"zipcode": "77084",  "city": "Houston TX"},
{"zipcode": "92335",  "city": "Fontana CA"},
{"zipcode": "78521",  "city": "Brownsville TX"},
{"zipcode": "77449",  "city": "Katy TX" },
{"zipcode": "78572",  "city": "Mission TX"},
{"zipcode": "90250",  "city": "Hawthorne CA"},
{"zipcode": "90280",  "city": "South Gate CA"},
{"zipcode": "11226",  "city": "Brooklyn NY"},
{"zipcode": "90805",  "city": "Long Beach CA"},
{"zipcode": "91331",  "city": "Pacoima CA"},
{"zipcode": "08701",  "city": "Lakewood NJ"},
{"zipcode": "90044",  "city": "Los Angeles CA"},
{"zipcode": "92336",  "city": "Fontana CA"},
{"zipcode": "00926",  "city": "San Juan PR"},
{"zipcode": "94565",  "city": "Pittsburg CA"},
{"zipcode": "10467",  "city": "Bronx NY"},
{"zipcode": "92683",  "city": "Westminster CA"},
{"zipcode": "75052",  "city": "Grand Prairie TX"},
{"zipcode": "91342",  "city": "Sylmar CA"},
{"zipcode": "92704",  "city": "Santa Ana CA"},
{"zipcode": "30044",  "city": "Lawrenceville GA"},
{"zipcode": "10025",  "city": "New York NY"},
{"zipcode": "92503",  "city": "Riverside CA"},
{"zipcode": "92804",  "city": "Anaheim CA"},
{"zipcode": "78577",  "city": "Pharr TX"},
{"zipcode": "75217",  "city": "Dallas TX"},
{"zipcode": "92376",  "city": "Rialto CA"},
{"zipcode": "93307",  "city": "Bakersfield CA"},
{"zipcode": "10456",  "city": "Bronx NY"},
{"zipcode": "10002",  "city": "New York NY"},
{"zipcode": "91911",  "city": "Chula Vista CA"},
{"zipcode": "91744",  "city": "La Puente CA"},
{"zipcode": "75070",  "city": "Mckinney TX"},
{"zipcode": "77036",  "city": "Houston TX"},
{"zipcode": "93722",  "city": "Fresno CA"},
{"zipcode": "92345",  "city": "Hesperia CA"},
{"zipcode": "60618",  "city": "Chicago IL"},
{"zipcode": "93033",  "city": "Oxnard CA"},
{"zipcode": "93550",  "city": "Palmdale CA"},
{"zipcode": "95076",  "city": "Watsonville CA"},
{"zipcode": "11230",  "city": "Brooklyn NY"},
{"zipcode": "11368",  "city": "Corona NY"},
{"zipcode": "37013",  "city": "Antioch TN"},
{"zipcode": "11373",  "city": "Elmhurst NY"},
{"zipcode": "79912",  "city": "El Paso TX"},
{"zipcode": "37211",  "city": "Nashville TN"},
{"zipcode": "30043",  "city": "Lawrenceville GA"},
{"zipcode": "11206",  "city": "Brooklyn NY"},
{"zipcode": "10453",  "city": "Bronx NY"},
{"zipcode": "92154",  "city": "San Diego CA"},
{"zipcode": "11355",  "city": "Flushing NY"},
{"zipcode": "95823",  "city": "Sacramento CA"},
{"zipcode": "77479",  "city": "Sugar Land TX"},
{"zipcode": "91706",  "city": "Baldwin Park CA"},
{"zipcode": "10458",  "city": "Bronx NY"},
{"zipcode": "92553",  "city": "Moreno Valley CA"},
{"zipcode": "90706",  "city": "Bellflower CA"},
{"zipcode": "23464",  "city": "Virginia Beach VA"},
{"zipcode": "11212",  "city": "Brooklyn NY"},
{"zipcode": "60617",  "city": "Chicago IL"},
{"zipcode": "91709",  "city": "Chino Hills CA"},
{"zipcode": "11214",  "city": "Brooklyn NY"},
{"zipcode": "11219",  "city": "Brooklyn NY"},
{"zipcode": "91910",  "city": "Chula Vista CA"},
{"zipcode": "22193",  "city": "Woodbridge VA"},
{"zipcode": "77429",  "city": "Cypress TX"},
{"zipcode": "93535",  "city": "Lancaster CA"},
{"zipcode": "66062",  "city": "Olathe KS"},
{"zipcode": "93257",  "city": "Porterville CA"},
{"zipcode": "30349",  "city": "Atlanta GA"},
{"zipcode": "60647",  "city": "Chicago IL"},
{"zipcode": "77584",  "city": "Pearland TX"},
{"zipcode": "10452",  "city": "Bronx NY"},
{"zipcode": "77573",  "city": "League City TX"},
{"zipcode": "11377",  "city": "Woodside NY"},
{"zipcode": "11207",  "city": "Brooklyn NY"},
{"zipcode": "77494",  "city": "Katy TX"},
{"zipcode": "75211",  "city": "Dallas TX"},
{"zipcode": "11234",  "city": "Brooklyn NY"},
{"zipcode": "28269",  "city": "Charlotte NC"},
{"zipcode": "11235",  "city": "Brooklyn NY"},
{"zipcode": "94544",  "city": "Hayward CA"},
{"zipcode": "10029",  "city": "New York NY"},
{"zipcode": "60625",  "city": "Chicago IL"},
{"zipcode": "89110",  "city": "Las Vegas NV"},
{"zipcode": "92509",  "city": "Riverside CA"},
{"zipcode": "77083",  "city": "Houston TX"},
{"zipcode": "91335",  "city": "Reseda CA"},
{"zipcode": "85364",  "city": "Yuma AZ"},
{"zipcode": "87121",  "city": "Albuquerque NM"},
{"zipcode": "10468",  "city": "Bronx NY"},
{"zipcode": "90255",  "city": "Huntington Park CA"},
{"zipcode": "93065",  "city": "Simi Valley CA"},
{"zipcode": "91710",  "city": "Chino CA"},
{"zipcode": "10462",  "city":  "Bronx NY"}
];