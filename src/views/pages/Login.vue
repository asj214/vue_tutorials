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
                  :rules="emailRules"
                  label="E-mail"
                  required
                ></v-text-field>
                <v-text-field
                  :type="password"
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

}
</script>
