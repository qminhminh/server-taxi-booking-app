const mongoose = require('mongoose');
// model trip request
const tripScheme = mongoose.Schema({
    tripID: {
        type: String,
        default: '',
        require: true,
    },
    publishDateTime: {
        type: String,
        default: '',
        require: true,
    },
    userName: {
        type: String,
        default: '',
        require: true,
    },
    userPhone: {
        type: String,
        default: '',
        require: true,
    },
    userID: {
        type: String,
        default: '',
        require: true,
    },
    pickUpLatLng: {
        latitude: {
            type: String,
            default: '',
        },
        longitude: {
            type: String,
            default: '',
        }
    },
    dropOffLatLng: {
        latitude: {
            type: String,
            default: '',
            require: true,
        },
        longitude: {
            type: String,
            default: '',
        }
    },
    pickUpAddress: {
        type: String,
        default: '',
        require: true,
    },
    dropOffAddress: {
        type: String,
        default: '',
        require: true,
    },
    driverID: {
        type: String,
        default: '',
        require: true,
    },
    carDetails: {
        carColor: {
            type: String,         
         },
        
         carModel: {
            type: String,
         },
        
         carNumber: {
            type: String,
         },
    },
    driverLocation: {
        latitude: {
            type: String,
            default: '',           
        },
        longitude: {
            type: String,
            default: '',          
        }
    },
    driverName: {
        type: String,
        default: '',
    },
    driverPhone: {
        type: String,
        default: '',
    },
    driverPhoto: {
        type: String,
        default: '',
    },
    fareAmount: {
        type: String,
        default: '',
    },
    status:{
        type: String,
        default: 'new',
    },
    fareAmount: {
        type: String,
    },
    

});

const TripRequest = mongoose.model('TripRequests', tripScheme);
module.exports = TripRequest;