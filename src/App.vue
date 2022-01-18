<template>
  <TaskBoard :tasks="tasks" />
</template>

<script>
import Login from "./pages/Login";
import TaskBoard from "./pages/TaskBoard";

export default {
  name: "App",
  data() {
    return {
      tasks: [],
    };
  },
  components: { Login, TaskBoard },
  methods: {
    deleteTask(id) {
      if (confirm("Sure")) {
        this.tasks = this.tasks.filter((e) => e.id !== id);
      }
    },
    toogleTask(id) {
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      );
    },
    addTask(newTask) {
      this.tasks = [...this.tasks, newTask];
    },
    async fetchTasks() {
      const res = await fetch("api/tasks");
      const data = await res.json();
      return data;
    },
  },
  created() {
    this.fetchTasks().then((e) => {
      this.tasks = e;
    });
  },
};
</script>

<style>
</style>
