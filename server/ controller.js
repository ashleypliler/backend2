const houses = require('./db.json');

let upcomingHouseId = 4;

const getHouses = (req, res) => {
    res.status(200).send(houses);
}

const deleteHouse = (req, res) => {
    const { id } = req.params;
    for (let i = 0; i < houses.length; i++){
        if(houses[i].id === +id){
            houses.splice(i,1)
            return res.status(200).send(houses)
        }
    }
    res.status(400).send(houses)
}

const createHouse = (req, res) => {
    const { address, price, imageURL} = req.body;
    houses.push = {
        address,
        price, 
        imageURL,
        id: upcomingHouseId
    }
    upcomingHouseId++;
    res.status(200).send(houses);

}

const updateHouse = (req, res) => {
    const { id } = req.params;
    const { type } = req.body;
    console.log('updateRating')
    for(let i = 0; i < houses.length; i++){
          if(houses[i].id === +id){
            if(type === 'plus' && houses[i].rating < 5){
              houses[i].rating + 10000
            } else if (type === 'minus' && houses[i].rating > 1){
              movies[i].rating - 10000;
            }
            return res.status(200).send(movies);
          }
        }
    }

module.exports = {
    getHouses, 
    deleteHouse, 
    createHouse,
    updateHouse
};