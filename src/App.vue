<template>
  <v-app>
    <v-app-bar
      app
      color="red"
      dark
    >
      <div class="d-flex align-center">
        <h2>Red Bus</h2>
      </div>


    </v-app-bar>

    <v-main>
      <BookTicket/>
    </v-main>
  </v-app>
</template>

<script>
import BookTicket from "@/components/BookTicket";
export default {
  name: 'App',
  components: {
    BookTicket,
  },
};
</script>
