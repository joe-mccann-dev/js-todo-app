function setTitle(title) {
  this.title = title;
}

function setDescription(description) {
  this.description = description;
}

function setDueDate(dueDate) {
  this.dueDate = dueDate;
}

function setPriority(priority) {
  this.priority = priority;
}


export default function Todo(
  title,
  description = '',
  dueDate = '',
  priority = '',
) {

  return {
    title,
    description,
    dueDate,
    priority,
    setTitle,
    setDescription,
    setDueDate,
    setPriority,
  }
}
