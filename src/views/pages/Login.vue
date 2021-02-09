<template>
  <v-app id="inspire">
    <v-main class="grey lighten-3">
      <v-container fluid class="fill-height">
        <v-row justify="center" no-gutters>
          <v-col md="5">
            <v-card class="pa-10" elevation="5">
              <h1 class="mb-5">로그인 페이지</h1>
              <v-divider class="mb-5"></v-divider>
              <v-form ref="form" lazy-validation>
                <v-text-field
                  v-model="email"
                  label="E-mail"
                  required
                ></v-text-field>
                <v-text-field
                  :type="password"
                  v-model="password"
                  label="Password"
                  required
                ></v-text-field>
                <v-btn color="success">Login</v-btn>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    email: "abc123@abc.com",
    password: "password"
  }),
  methods: {
    async onSubmit(email, password) {
      let credentials = {
        email: email,
        password: password,
      };
      this.$store.dispatch("LOGIN", credentials).then((res) => {
        if (res.status == 200) {
          this.$store.dispatch("USER");
          this.$router.push({ name: "Dashboard" });
        }
      });
    },
  }

}
</script>
