import * as mongoose from 'mongoose';


export const ExpensesSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  reciever: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  amount: {
    type: Number,
  },
  group: { type: mongoose.Schema.Types.ObjectId, ref: 'groups' },
  description: {
    type: String,
  },
});