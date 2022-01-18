<template>
  <NavBar />
  <div class="d-flex justify-content-center mt-5 mb-5">
    <div class="p-4 w-50 rounded rounded-3 border border-secondary">
      <Header />
      <AddTask />
      <br />
      <div class="overflow-auto task-list mt-3">
        <Task :task="task" :key="task.id" v-for="task in tasks" />
      </div>
      <br />
      <About />
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import AddTask from "../components/AddTask";
import Task from "../components/Task";
import About from "../components/About";

export default {
  name: "TaskBoard",
  components: { NavBar, Header, AddTask, Task, About },
  props: { tasks: Array },
};
</script>

<style scoped>
.task-list {
  height: 20rem;
}
</style>