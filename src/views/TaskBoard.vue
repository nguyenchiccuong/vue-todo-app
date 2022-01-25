<template>
  <NavBar />
  <div class="d-flex justify-content-center mt-5 mb-5">
    <div class="p-4 w-50 rounded rounded-3 border border-secondary">
      <Header />
      <AddTask @addTask="addTask" />
      <br />
      <div class="overflow-auto task-list mt-3">
        <Task
          :task="task"
          :key="task.id"
          v-for="task in tasks"
          @toogleTask="toogleTask(task.id)"
          @deleteTask="deleteTask(task.id)"
        />
      </div>
      <br />
      <div class="d-flex justify-content-center">
        <router-link to="/about">About</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import AddTask from "../components/AddTask";
import Task from "../components/Task";

export default {
  name: "TaskBoard",
  data() {
    return {
      tasks: [],
    };
  },
  components: { NavBar, Header, AddTask, Task},
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

<style scoped>
.task-list {
  height: 20rem;
}
</style>