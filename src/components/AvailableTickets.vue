<template>
  <div>
    <template>
      <v-row>
        <v-col >
          <v-card class="mx-auto mt-10" max-width="1000" outlined  elevation="5">
            <v-card-title>Booking Form</v-card-title>
            <v-divider></v-divider>
            <v-card-text >
              <v-row>
                <v-col><h2>Date : {{$store.state.date}}</h2></v-col>
              </v-row>
              <v-row>
                <v-col><h2>From : {{$store.state.from}}</h2></v-col>
              </v-row>
              <v-row>
                <v-col><h2>To : {{$store.state.to}}</h2></v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </template>
  </div>
</template>

<script>
export default {
name: "AvailableTickets"
}
</script>

<style scoped>

</style>