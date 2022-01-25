<template>
  <div class="d-flex justify-content-center login-layout">
    <div
      class="p-5 w-25 rounded rounded-3 border login-border border-secondary"
    >
      <h1 class="text-center">Sign In</h1>
      <form @submit="handleLogIn">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Account</label>
          <input
            type="text"
            class="form-control"
            placeholder="Account"
            aria-describedby="emailHelp"
            v-model="account"
          />
          <div class="form-text">
            We'll never share your info with anyone else.
          </div>
          <div class="form-text text-danger" v-show="accountErr">
            {{ accountErrMess }}
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <div class="input-group mb-1">
            <input
              :type="passInputType"
              class="form-control"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="button-addon2"
              v-model="pass"
            />
            <button
              class="btn btn-outline-success"
              type="button"
              @click="showPass"
              @mouseleave="hidePass"
            >
              Show pass
            </button>
          </div>
          <div class="form-text text-danger" v-show="passErr">
            {{ passErrMess }}
          </div>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" />
          <label class="form-check-label" for="exampleCheck1"
            >Remember me</label
          >
        </div>
        <div class="mb-3">
          <button type="submit" class="btn btn-primary w-100">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: function () {
    return {
      passInputType: "password",
      accountErr: false,
      accountErrMess: "",
      passErr: false,
      passErrMess: "",
      account: "",
      pass: "",
    };
  },
  methods: {
    handleLogIn(e) {
      e.preventDefault();
      if (this.account == "") {
        this.accountErrMess = "Account not valid";
        this.accountErr = true;
        setTimeout(() => {
          this.accountErr = false;
        }, 2000);
        return;
      }
      if (this.pass == "") {
        this.passErrMess = "Pass not valid";
        this.passErr = true;
        setTimeout(() => {
          this.passErr = false;
        }, 2000);
        return;
      }
      this.$store.dispatch("addUser", {
        account: this.account,
        pass: this.pass,
      });
      this.$cookies.set("user", {
        account: this.account,
        pass: this.pass,
      });
      this.$router.push({ path: "taskboard" });
    },
    showPass() {
      this.passInputType = "text";
    },
    hidePass() {
      this.passInputType = "password";
    },
  },
  computed: {
    user() {
      return this.$store.getters.getUser;
    },
  },
  created() {
    console.log(this.$store.getters.getUser);
  },
};
</script>

<style scoped>
.login-layout {
  position: relative;
  top: 6rem;
}

.login-border {
  border-width: 5px !important;
}
</style>