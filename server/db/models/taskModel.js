import { Schema, model } from 'mongoose';

const taskSchema = new Schema ({
  task: {
    type: String,
    required: [true, 'Please input a valid task']
  }
}, { timestamps: true});

const TaskSchema = model('tasks', taskSchema);
export default TaskSchema;