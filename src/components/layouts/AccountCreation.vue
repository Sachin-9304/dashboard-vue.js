<template>
<div>
    <base-header title="Account Creation"></base-header>
    <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="name">Your Name</label>
      <input id="name" name="name" type="text" v-model="userName"/>
    </div>
    <div class="form-control">
      <label for="email">Your Email</label>
      <input id="email" name="email" type="email" v-model="userEmail"/>
    </div>
    <div class="form-control">
      <label for="password">Password</label>
      <input id="password" name="password" type="password" v-model="userPassword"/>
    </div>
    <div>
      <button>Save Data</button>
    </div>
  </form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      userName: '',
      userEmail: '',
      userPassword: null
    };
  },
  methods: {
    submitForm() {
        fetch('https://dashboard-4835d-default-rtdb.firebaseio.com/users.json',{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          name:this.userName,
          email:this.userEmail,
          password:this.userPassword
        }),
      })
      this.userName='';
      this.userEmail='';
      this.userPassword=null;
    }
  }
}
</script>


<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>