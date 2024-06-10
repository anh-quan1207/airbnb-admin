<script>
  export default {
    data() {
      return {
        email: ""
      };
    },
    methods: {
      handleSubmit() {
        console.log(this.email);
      }
    }
  }
</script>

<template>
  <section class="container">
    <h1>Form</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="text" class="form-control" id="email" v-model="email" placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="password" placeholder="Password">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </section>
</template>

<style scoped>

</style>