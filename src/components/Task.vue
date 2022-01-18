<template>
  <div :class="[task.reminder ? 'bg-white' : 'bg-warning', 'card mb-2 ']">
    <div class="card-header">{{ task.id }}</div>
    <div class="card-body">
      <h5 class="card-title">{{ task.text }}</h5>
      <p class="card-text">
        {{ task.day }}
      </p>
      <button type="submit" class="btn btn-primary">Edit</button>
      <button type="submit" class="btn btn-danger float-end">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: ["task"],
};
</script>

<style>
</style>