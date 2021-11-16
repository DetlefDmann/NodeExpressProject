export const getAllTodos = async (req, res) => {
  res.status(200).json("all todos");
};

export const createTodo = async (req, res) => {
  res.status(200).json("create a todo");
};

export const getTodo = async (req, res) => {
  res.status(200).json("get a single todo");
};
