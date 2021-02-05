<template>
  <v-app>
    <v-app-bar app color="white" flat>
      <v-toolbar-title>Ktown4u.com</v-toolbar-title>
      <v-container class="py-0 fill-height">
        <v-tabs
          class="ml-n9"
          color="grey darken-1"
        >
          <v-tab
            v-for="link in links"
            :key="link"
          >
            {{ link }}
          </v-tab>
        </v-tabs>
      </v-container>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="white"
            dark
            v-bind="attrs"
            v-on="on"
          >
            User.name
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

    </v-app-bar>
    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',

  components: {
    HelloWorld
  },

  data: () => ({
    //
    links: [
      'User',
      'Product',
      'Delivery',
      'System'
    ],
    items: [
      { title: 'Profile' },
      { title: 'Settings' },
      { title: 'Logout' }
    ]
  })
}
</script>
