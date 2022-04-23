const profile = {
        userName: "marco carcamo",
        numTravels: 15,
        numMessages: 7,
        paymentMethod: "Credit Card",
        showProfileInfo: function () {
                return `User ${this.userName} has made ${this.numTravels} travels and received ${this.numMessages} messages, payment method selected is ${this.paymentMethod}`
        }
}

const travel = {
        user: "Marco Carcamo",
        travelDate: "21/04/2022",
        travelDuration: "15 minutes",
        driverName: "José González",
	carModel: "Nissan Versa 2020",	
        showTravelInfo: function (){
                return ` Travel date: ${this.travelDate}, the travel duration was ${this.travelDuration}, driver's name was ${this.driverName}, car model was ${this.carModel}`
        }
}
console.log(profile.showProfileInfo());
console.log(travel.showTravelInfo());
