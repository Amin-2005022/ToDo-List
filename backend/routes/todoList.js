const router = require("express").Router();
const User = require("../models/user");
const TodoList = require("../models/todoList");

router.post("/addTask", async (req, res) => {
  try {
    const { title, body, email } = req.body;

    // Find an existing user by email
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      // Create a new task (list item)
      const list = new TodoList({ title, body, user: existingUser });

      // Save the new task
      await list.save().then(() => 
        res.status(200).json({ list })
      );

      // Add the task to the user's list and save
      existingUser.todoList.push(list);
      existingUser.save();
    }
  } catch (error) {
    console.log(error);
  }
});


router.put("/updateTask/:id", async (req, res) => {
  try {
      const { title, body, email } = req.body;
      const existingUser = await User.findOne({ email });
      if (existingUser) {
          const list = await TodoList.findByIdAndUpdate(req.params.id, { title, body });
          list.save().then(() => res.status(200).json({ message: "Task Updated" }));
      }
  } catch (error) {
      console.log(error);
  }
});


router.get("/gettasks/:id", async (req, res) => {
  const list = await TodoList.find({ user: req.params.id }).sort({ createdAt: -1 });
  if (list.length !== 0) {
      res.status(200).json({ list: list });
  } else {
      res.status(200).json({ message: "No Tasks" });
  }
});

module.exports = router;
