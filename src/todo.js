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
    setTitle: function (t) {
      this.title = t;
    },
    setDescription: function(d) {
      this.description = d;
    },
    setDueDate: function(dd) {
      this.description = dd;
    },
    setPriority: function(p) {
      this.priority = p;
    }
  }
}
