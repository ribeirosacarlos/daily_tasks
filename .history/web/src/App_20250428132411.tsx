import { useEffect, useState } from 'react'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";

type Task = {
  id: string;
  name: string;
  status: "PENDING" | "DONE";
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  async function fetchTasks() {
    const res = await fetch("http://localhost:3333/tasks");
    const data = await res.json();
    setTasks(data);
  }

  async function createTask() {
    if(!newTask.trim()) return;
    
    await fetch("http://localhost:3333/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newTask }),
    });

    setNewTask("");
    fetchTasks();    
  }

  async function toggleTask(task: Task) {
    await fetch(`http://localhost:3333/tasks/${task.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status: task.status == "PENDING" ? "DONE" : "PENDING",
      }),
    });

    fetchTasks();
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="max-w-md mx-auto mt-10 space-y-4">
      <div className="flex gap-2">
        <Input
          placeholder="Digite uma nova tarefa..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && createTask()}
        />
        <Button onClick={createTask}>Adicionar</Button>
      </div>

      <div className="space-y-2">
        {tasks.map((task) => (
          <Card key={task.id}>
            <CardContent className="flex items-center gap-2 p-4">
              <Checkbox
                checked={task.status === "DONE"}
                onCheckedChange={() => toggleTask(task)}
              />
              <span
                className={`${
                  task.status === "DONE" ? "line-through text-gray-400" : ""
                }`}
              >
                {task.name}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default App
