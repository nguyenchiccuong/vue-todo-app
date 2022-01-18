<template>
  <button
    type="button"
    :class="[available ? 'btn-danger' : 'btn-success', 'btn float-end']"
    @click="handleBtnAddTask"
  >
    {{ available ? "Close add task" : "Add task" }}
  </button>

  <br />

  <form class="mt-5" v-show="available">
    <div class="mb-3">
      <label class="form-label">Task name</label>
      <label class="form-label text-danger"> (*) </label>
      <input
        type="text"
        class="form-control"
        aria-describedby="Task name"
        placeholder="Task name"
      />
    </div>
    <div class="mb-3">
      <label class="form-label">Task description</label>
      <input
        type="text"
        class="form-control"
        aria-describedby="Task description"
        placeholder="Task description"
      />
    </div>
    <div class="mb-3">
      <label class="form-label">Date & time</label>
      <input
        type="datetime-local"
        class="form-control"
        aria-describedby="Task description"
        placeholder="Task description"
      />
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" />
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
    };
  },
  methods: {
    handleBtnAddTask() {
      this.available = !this.available;
    },
  },
};
</script>

<style>
</style>