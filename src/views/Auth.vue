<template>
  <div class="login-admin">
    <b-container class="bv-example-row">
      <b-row align-h="center">
        <b-col cols="6" class="form-login">
          <b-card class="mt-1" header="Login Administrator">
            <b-form>
              <b-form-group id="input-group-1" label="Username:" label-for="input-1">
                <b-form-input
                  id="input-1"
                  type="text"
                  v-model="username"
                  placeholder="Enter username"
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-2" label="Password:" label-for="input-2">
                <b-form-input
                  id="input-2"
                  type="password"
                  v-model="password"
                  placeholder="Enter password"
                ></b-form-input>
              </b-form-group>
              <div class="text-center">
                <b-button type="submit" variant="primary">Submit</b-button>
              </div>
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Auth",
  data() {
    return {
      username: "",
      password: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.login-admin {
  width: 100%;
  height: 655px;
  background-image: url("https://anhdephd.com/wp-content/uploads/2017/04/hinh-nen-powerpoint-cntt.jpg");
  background-size: cover;
}
.bv-example-row {
  height: 100%;
  width: 100%;
}
.form-login {
  margin-top: 10%;
}
.card-header {
  text-align: center;
  font-size: 30px;
  font-weight: bold;
}
.d-block {
  font-weight: bold;
}
</style>