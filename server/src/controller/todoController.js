/** @format */

module.exports = {
  getAll: async (req, res) => {
    return res.status(200).json({ data: { message: 'Success', value: "This is get all tod's" } });
  },
  createTodo: async (req, res) => {
    return res.status(200).json({ data: { message: 'Success', value: 'This is a create todo request' } });
  },
  updateTodo: async (req, res) => {
    return res.status(200).json({ data: { message: 'Success', value: 'This is a updateTodo task' } });
  },
  modifyTodo: async (req, res) => {
    return res.status(200).json({ data: { message: 'Success', value: 'This is a modify todo to complete the task' } });
  },
  removeTodo: async (req, res) => {
    return res.status(200).json({ data: { message: 'Success', value: 'This is to delete a task that is done ' } });
  },
  getTodsOnTitle: async (req,res) => {
    return res.status(200).json({data:{message:'Success', value:'To get all the task based in title'}})
  },
  getAllCompleted: async (req,res) => {
    return res.status(200).json({ data: { message: 'Success', value: 'To get all the task based completed' } });    
  },
  getAllPending: async (req,res) => {
    return res.status(200).json({data:{message:'Success',value:'To get all the pending task'}})
  }
};

