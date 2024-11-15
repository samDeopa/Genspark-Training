import styles from "./ListItem.module.css";

function ListItem({
  task,
  handleDelete,
}: {
  task: { desc: string; id: number };
  handleDelete: (id: number) => void;
}) {
  return (
    <div className={styles.item}>
      <p>{task.desc}</p>{" "}
      <button onClick={() => handleDelete(task.id)}>Del</button>
    </div>
  );
}
export default ListItem;
