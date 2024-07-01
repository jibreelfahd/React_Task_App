import TaskSchema from "../../db/models/taskModel.js";

export const createTask = async (req, res) => {
  try {
    const { task } = req.body;

    const tasks = await TaskSchema.create({ task });
    return res.status(200).json({ tasks });
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      error: err.message,
      message: "Something happened, Try Again Later",
    });
  }
};

export const getTask = async (req, res) => {
  try {
    const tasks = await TaskSchema.find({});

    return res.status(200).json({ tasks });
  } catch (err) {
    console.log(err);

    return res.status(500).json({
      error: err.message,
      message: "Something happened, Try Again Later",
    });
  }
};
