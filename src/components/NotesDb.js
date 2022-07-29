import { nanoid } from "nanoid";

const NotesDb = [
  {
    id: nanoid(),
    category: "todo",
    title: "Things to do in home",
    content: "Do laundry, clean kitchen, clean bathroom, clean bed",
    date: "7/29/2022",
    time: "15:24pm",
  },
  {
    id: nanoid(),
    title: "Important",
    category: "important",
    content: "Call office, buy milk, buy eggs",
    date: "7/29/2022",
    time: "15:24p",
  },
  {
    id: nanoid(),
    title: "Shopping",
    category: "shopping",
    content: "Buy milk, buy eggs, buy bread",
    date: "7/29/2022",
    time: "15:24pm",
  },
  {
    id: nanoid(),
    title: "Meetings",
    category: "meetings",
    content: " Call office, send emails",
    date: "7/29/2022",
    time: "15:24pm",
  },
];

export default NotesDb;
