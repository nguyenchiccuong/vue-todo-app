<template>
  <button
    type="button"
    :class="[available ? 'btn-danger' : 'btn-success', 'btn float-end']"
    @click="handleBtnAddTask"
  >
    {{ available ? "Close add task" : "Add task" }}
  </button>

  <br />

  <form class="mt-5" v-show="available" @submit.prevent="handleAddTask">
    <div class="mb-3">
      <label class="form-label">Task name</label>
      <label class="form-label text-danger"> (*) </label>
      <input
        type="text"
        class="form-control"
        aria-describedby="Task name"
        placeholder="Task name"
        v-model="text"
      />
    </div>
    <div class="mb-3">
      <label class="form-label">Date & time</label>
      <input
        type="date"
        class="form-control"
        aria-describedby="Task description"
        placeholder="Task description"
        v-model="day"
      />
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" v-model="reminder" />
      <label class="form-check-label">Remind</label>
    </div>
    <button type="submit" class="btn btn-success">Add task</button>
  </form>
</template>

<script>
export default {
  name: "AddTask",
  data() {
    return {
      available: false,
      text: "",
      day: "",
      reminder: false,
    };
  },
  methods: {
    handleBtnAddTask() {
      this.available = !this.available;
    },
    handleAddTask() {
      if (!this.text) {
        alert("Please add a task");
        return;
      }
      const newTask = {
        id: Math.floor(Math.random() * 100000),
        text: this.text,
        day: this.day,
        reminder: this.reminder,
      };
      this.$emit("addTask", newTask);
      this.text = "";
      this.day = "";
      this.reminder = false;
      this.available = false;
    },
  },
  emits: ["addTask"],
};
</script>

<style>
</style>