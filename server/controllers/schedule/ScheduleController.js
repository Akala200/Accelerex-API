/* eslint-disable camelcase */
/* eslint-disable max-len */
import responses from '../../utils/responses';
import tracelogger from '../../logger/tracelogger';
import RestaurantSchedule from '../../models/schedule'
const moment = require('moment');

/**
 * @description Defines the actions to for the users endpoints
 * @class scheduleController
 * 
 */


class scheduleController {
  /**
   *@description Creates a schedule
    *@static
    *@param  {Object} req - request
    *@param  {object} res - response
    *@returns {object} - status code, message and created schedule
    *@memberof scheduleController
    */


    
  static async createSchedule(req, res) {
    
      try {
        const payload = {
          monday: req.body.monday,
          tuesday: req.body.tuesday,
          wednesday: req.body.wednesday,
          thursday: req.body.thursday,
          friday: req.body.friday,
          saturday: req.body.saturday,
          sunday: req.body.sunday,
        }
        // console.log(payload);  new Date(timeStamp).toLocaleDateString('en-US');
        
      
            const post = new RestaurantSchedule (req.body);

          post.save(payload)
          let monday = []; 
          let tuesday  = [];
          let wednesday  = [];
          let thursday  = [];
          let friday  = [];
          let saturday  = [];
          let sunday  = [];
          let lastItemMonday;
          let lastItemTue;
          let lastItemWed;
          let lastItemThur;
          let lastItemFri;
          let lastItemSat;
          let lastItemSun;

          if(req.body.monday) {
            req.body.monday.forEach(function (arrayItem) {
              let time = moment.unix(arrayItem.value).format('hh:mm A')
              monday.push(`${arrayItem.type} - ${time}`);
              lastItemMonday =  monday[monday.length - 1];
          });
          } else {
            lastItemMonday = 'AAAAAAAAAAAAAAA';
          }
     

          if(req.body.tuesday) {
            req.body.tuesday.forEach(function (arrayItem) {
              let time = moment.unix(arrayItem.value).format('hh:mm A')
              tuesday.push(`${arrayItem.type} - ${time}`);
              lastItemTue =  tuesday[tuesday.length - 1] != null ? tuesday[tuesday.length - 1] : 'AAAAAAAAAAAAAAA';
          });
        } else {
          lastItemTue = 'AAAAAAAAAAAAAAA';
        }
   
        

      if(req.body.wednesday) {
        req.body.wednesday.forEach(function (arrayItem) {
          let time = moment.unix(arrayItem.value).format('hh:mm A')
          wednesday.push(`${arrayItem.type} - ${time}`);
          lastItemWed =  wednesday[wednesday.length - 1]  != null ? wednesday[wednesday.length - 1] : 'AAAAAAAAAAAAAAA';
      });
      }  else {
        lastItemWed = 'AAAAAAAAAAAAAAA';
      }
 

      if(req.body.thursday) {
        req.body.thursday.forEach(function (arrayItem) {
          let time = moment.unix(arrayItem.value).format('hh:mm A')
          thursday.push(`${arrayItem.type} - ${time}`);
          lastItemThur =  thursday[thursday.length - 1]  != null ? thursday[thursday.length - 1] : 'AAAAAAAAAAAAAAA';
      });
      } else {
        lastItemThur = 'AAAAAAAAAAAAAAA';
      }
 
  
      if(req.body.friday) {
        req.body.friday.forEach(function (arrayItem) {
           let time = moment.unix(arrayItem.value).format('hh:mm A')
          friday.push(`${arrayItem.type} - ${time}`);
          lastItemFri =  friday[friday.length - 1] != null ? friday[friday.length - 1] : 'AAAAAAAAAAAAAAA';
      });
      } else {
        lastItemFri = 'AAAAAAAAAAAAAAA';
      }

      
      if(req.body.saturday) {
        req.body.saturday.forEach(function (arrayItem) {
           let time = moment.unix(arrayItem.value).format('hh:mm A')
          saturday.push(`${arrayItem.type} - ${time}`);
          lastItemSat =  saturday[saturday.length - 1] != null ? saturday[saturday.length - 1] : 'AAAAAAAAAAAAAAA';
        });
      } else {
        lastItemSat = 'AAAAAAAAAAAAAAA';
      }


      if(req.body.sunday) {
        req.body.Sunday.forEach(function (arrayItem) {
           let time = moment.unix(arrayItem.value).format('hh:mm A')
           sunday.push(`${arrayItem.type} - ${time}`);
          lastItemSun =  sunday[sunday.length - 1] != null ? sunday[sunday.length - 1] : 'AAAAAAAAAAAAAAA';
        });
      } else {
        lastItemSun = 'AAAAAAAAAAAAAAA';
      }

 



      console.log(wednesday[wednesday.length - 1]);

        const response = {
          Monday: monday.length !== 0 ? monday : lastItemSun.includes("open") ? 'open': 'closed',
          Tuesday: tuesday.length !== 0 ? tuesday : lastItemMonday.includes("open") ? 'open': 'closed',
          Wednesday: wednesday.length !== 0 ? wednesday : lastItemTue.includes("open") ? 'open': 'closed',
          Thursday: thursday.length !== 0 ? thursday : lastItemWed.includes("open") ? 'open': 'closed',
          Friday: friday.length !== 0 ? firday : lastItemThur.includes("open") ? 'open': 'closed',
          Saturday: saturday.length !== 0 ? saturday : lastItemFri.includes("open") ? 'open': 'closed',
          Sunday: sunday.length !== 0 ? sunday : lastItemSat.includes("open") ? 'open': 'closed',

        }
        
  
          return res.status(201).json(
            responses.success(201, 'schedule created successfully', response)
          );
        
      } catch (error) {
        tracelogger(error);
      }
    }


    /**
    *@description Gets all restaurant schedule 
    *@static
    *@param {Object} req - request
    *@param {Object} res - response
    *@returns {object} - status code, message
    * @memberof scheduleController
    */
   static async getAllschedules(req, res) {


    try {

      const allschedule = await RestaurantSchedule.find({})

      return res.status(200).json(
        responses.success(200, ' All schedule retrieved successfully', allschedule)
      );
   
    } catch (error) {
      tracelogger(error);
    }
  }


    /**
    *@description Get a day schedule 
    *@static
    *@param {Object} req - request
    *@param {Object} res - response
    *@returns {object} - status code, message
    * @memberof scheduleController
    */

  static async getOneschedule(req, res) {

    try {

      const {
        day
      } = req.params

      const getOnescheduleAccount = await RestaurantSchedule.findOne({day})
       
       return res.status(200).json(
            responses.success(200, 'A day schedule retrieved successfully', getOnescheduleAccount)
          );
    }
       catch (error) {
        tracelogger(error);
      }
    }

  }


export default scheduleController;