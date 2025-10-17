let tasks = [];

export const getTasks = () => tasks;

export const addTask = (task) => {
  tasks.push(task);
};

export const removeTask = (id) => {
  tasks = tasks.filter((task) => task.id !== id);
};
