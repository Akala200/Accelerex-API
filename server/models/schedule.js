import mongoose from 'mongoose';

const { Schema } = mongoose;

const Schedule = new Schema({

     monday: [
          {
               type: {type: String},
               value: {type: Number}

          }
     ] ,
     tuesday:  [
          {
               type: {type: String},
               value: {type: Number}

          }
     ],
     wednesday:  [
          {
               type: {type: String},
               value: {type: Number}

          }
     ],
     thursday:  [
          {
               type: {type: String},
               value: {type: Number}

          }
     ],
     friday:  [
          {
               type: {type: String},
               value: {type: Number}

          }
     ], 
     saturday:  [
          {
               type: {type: String},
               value: {type: Number}

          }
     ],
     sunday:  [
          {
               type: {type: String},
               value: {type: Number}

          }
     ],
     createdAt: {type: Date, default: Date.now}
});

const RestaurantSchedule = mongoose.model('schedule', Schedule);

export default RestaurantSchedule;
