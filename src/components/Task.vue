<template>
  <div
    :class="[
      task.reminder ? 'bg-white' : 'bg-warning',
      'card mb-2 disableSelect',
    ]"
  >
    <div class="card-header" @dblclick="handleDbClick(task.id)">
      {{ task.id }}
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ task.text }}</h5>
      <p class="card-text">
        {{ task.day }}
      </p>
      <button type="submit" class="btn btn-primary">Edit</button>
      <button
        type="submit"
        class="btn btn-danger float-end"
        @click="$emit('deleteTask', task.id)"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: ["task"],
  methods: {
    handleDbClick(id) {
      this.$emit("toogleTask", id);
    },
  },
  emits: ["deleteTask"],
};
</script>

<style>
.disableSelect {
  user-select: none;
}
</style>