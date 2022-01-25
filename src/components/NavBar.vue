<template>
  <div class="d-plex navbar justify-content-around">
    <div class="p-2 bd-highlight">
      <a class="navbar-brand" href="#">TODO APP</a>
    </div>
    <div class="p-2 bd-highlight w-25"></div>
    <div class="p-2 bd-highlight">
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {{ user.length > 0 ? user[0].account : "" }}
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a class="dropdown-item" href="#" @click="handleLogOut">Log out</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  computed: {
    user() {
      return this.$store.getters.getUser;
    },
  },
  methods: {
    handleLogOut() {
      this.$router.push({ path: "/" });
      this.$store.dispatch("clear", {});
    },
  },
};
</script>

<style scoped>
.navbar {
  height: 5rem;
}
</style>