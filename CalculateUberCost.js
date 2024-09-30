class UberRide {
    constructor(basecost, perkmcost, permincost) {
        this.basecost = basecost;
        this.perkmcost = perkmcost;
        this.permincost = permincost;
    }

    //The calculating to total cost
    calculatecost(distanceInKm, durationInMinutes) {
        const distanceCost = distanceInKm * this.perkmcost; // Total cost based on distance
        const timeCost = durationInMinutes * this.permincost; // Total cost based on time

        // Total fare calculation
        const totalcost = this.basecost + distanceCost + timeCost;
        return totalcost;
    }
}

const uber = new UberRide(2.50, 1.00, 0.25);

//A ride of 10 km and a duration of 15 minutes
const distance = 10;
const duration = 15;

const totalPrice = uber.calculatecost(distance, duration);
console.log(`Total Uber cost: $${totalPrice.toFixed(2)}`); // Output the total cost
