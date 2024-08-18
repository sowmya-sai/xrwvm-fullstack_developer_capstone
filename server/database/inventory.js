/*jshint esversion: 8 */
import { Int32 } from 'mongodb';
import { Schema as _Schema, model as _model } from 'mongoose';

const Schema = _Schema;

const cars = new Schema({
dealer_id: {
    type: Number,
    required: true
},
make: {
    type: String,
    required: true
  },
model: {
    type: String,
    required: true
  },
bodyType: {
    type: String,
    required: true
  },
year: {
    type: Number,
    required: true
  },
mileage: {
    type: Number,
    required: true
  }
});

export default _model('cars', cars);
