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

module.exports = {
    getHouses, 
    deleteHouse, 
    createHouse,
    updateHouse
};