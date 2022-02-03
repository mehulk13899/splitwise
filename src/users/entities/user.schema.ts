import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
  },
  password: {
    type: String,
  },
  balance: {
    type: Number,
  },
  phone: {
    type: String,
  },
  currency: {
    type: String,
    default: 'USD',
  },
});

