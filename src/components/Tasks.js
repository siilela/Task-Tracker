import Task from "./Task";

// const tasks = [
//   {
//     id: 1,
//     text: "Dentist appointment",
//     day: "14 Febr 2023",
//     reminder: true,
//   },
//   {
//     id: 2,
//     text: "Parents meeting",
//     day: "21 Apr 2033",
//     reminder: true,
//   },
//   {
//     id: 3,
//     text: "Horse riding lessons",
//     day: "15 Febr 2023",
//     reminder: false,
//   },
// ];

const Tasks = ({tasks}) => {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </>
  );
};

export default Tasks;
