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
    const res = await fetch("")
    
  }
}

export default App
