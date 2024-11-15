import { useState } from "react";
import styles from "./ListContainer.module.css";
import ListItem from "../ListItem/ListItem";

const ListContainer = () => {
  const [taskList, setTaskList] = useState<{ desc: string; id: number }[]>([]);
  const [input, setInput] = useState<string>("");

  const handleDelete = (id: number) => {
    const ind = taskList.findIndex((task) => task.id === id);
    const tempArr = [...taskList];
    tempArr.splice(ind, 1);
    setTaskList(tempArr);
  };

  const handleAdd = () => {
    if (input == "") {
      return;
    }
    setTaskList([
      ...taskList,
      { desc: input, id: (Math.random() * 0x100000) | 0 },
    ]);
    setInput("");
  };
  return (
    <div className={styles.container}>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAdd}>Add To List</button>
      </div>
      <div className={styles.itemList}>
        {taskList.map((task) => (
          <ListItem task={task} handleDelete={handleDelete}></ListItem>
        ))}
      </div>
    </div>
  );
};
export default ListContainer;
