import { useState } from "react";
import Button from "./Button";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(newValue) {
    setEnteredTask(newValue);
  }

  function handleClick() {
    if (enteredTask.trim() === "") return;
    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        onChange={(e) => handleChange(e.target.value)}
        value={enteredTask}
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <Button
        onClick={handleClick}
        className="text-stone-700 hover:text-stone-950 cursor-pointer"
      >
        Add Task
      </Button>
    </div>
  );
}
