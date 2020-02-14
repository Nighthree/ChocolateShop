<template>
  <div class="bg-lightChoco">
    <HomeHeader class="nav-border mb-5"></HomeHeader>
    <div class="minHeight">
      <form class="form-signin mb-5 border bg-white rounded" @submit.prevent="singin">
        <h1 class="h3 mb-3 font-weight-normal">會員登入</h1>
        <label for="inputEmail" class="sr-only">信箱</label>
        <input
          type="email"
          id="inputEmail"
          class="form-control"
          placeholder="Email"
          required
          autofocus
          v-model="user.username"
        />
        <label for="inputPassword" class="sr-only">密碼</label>
        <input
          type="password"
          id="inputPassword"
          class="form-control"
          placeholder="密碼"
          required
          v-model="user.password"
        />
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> 記住我
          </label>
        </div>
        <button class="btn btn-lg btnChoco btn-block" type="submit">登入</button>
      </form>
    </div>
    <HomeFooter></HomeFooter>
  </div>
</template>

<script>
import HomeHeader from "./Header";
import HomeFooter from "./HomeFooter";

export default {
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  components: {
    HomeHeader,
    HomeFooter
  }
};
</script>

<style scoped>
html,
body {
  height: 100%;
}

body {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
