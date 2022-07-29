import { nanoid } from "nanoid";

const NotesDb = [
  {
    id: nanoid(),
    category: "todo",
    title: "To Do",
    content: "",
    date: "",
    time: "15:24pm",
  },
  {
    id: nanoid(),
    title: "Important",
    category: "important",
    content: "",
    date: "",
    time: "15:24p",
  },
  {
    id: nanoid(),
    title: "Shopping",
    category: "shopping",
    content: "",
    date: "",
    time: "15:24pm",
  },
  {
    id: nanoid(),
    title: "Meetings",
    category: "meetings",
    content: "",
    date: "",
    time: "15:24pm",
  },
];

export default NotesDb;
