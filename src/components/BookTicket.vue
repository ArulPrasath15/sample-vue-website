<template>
<v-row>
  <v-col >
    <v-card class="mx-auto mt-10" max-width="500" outlined  elevation="5">
      <v-card-title>Booking Form</v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-form @submit.prevent>
        <v-row>
          <v-text-field class="mx-7 mt-7" v-model="from" label="From" outlined clearable  ></v-text-field>
        </v-row>
        <v-row>
          <v-text-field class="mx-7" v-model="to" label="To" outlined clearable  ></v-text-field>
        </v-row>

        <v-row>

          <v-col
              cols="12"
              sm="6"
              md="12"
          >
            <v-dialog
                ref="dialog"
                v-model="modal"
                :return-value.sync="date"
                persistent
                width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                    class="mx-5"
                    v-model="date"
                    label="Picker in dialog"
                    readonly
                    outlined
                    v-bind="attrs"
                    v-on="on"

                ></v-text-field>
              </template>
              <v-date-picker
                  v-model="date"
                  scrollable
              >
                <v-spacer></v-spacer>
                <v-btn
                    text
                    color="primary"
                    @click="modal = false"
                >
                  Cancel
                </v-btn>
                <v-btn
                    text
                    color="primary"
                    @click="$refs.dialog.save(date)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-dialog>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
        <v-divider></v-divider>
        <v-row class="mt-3">
          <v-col cols="6"  align="center">
            <v-btn type="submit" width="130" color="grey" @click="submit">Find</v-btn>
          </v-col>
          <v-col cols="6" align="center">
            <v-btn type="reset" width="130" color="grey"  >Clear</v-btn>
          </v-col>
        </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </v-col>
</v-row>
</template>

<script>
// import { store } from './store/store'
export default {
  name :'BookTicket',
  data: () => ({
    date: '',
    date1:'Enter',
    menu: false,
    modal: false,
    from:"",
    to:""
  }),
  methods:
    {

      submit:function()
      {
        this.$store.commit('date',this.date)
        this.$store.commit('from',this.from)
        this.$store.commit('to',this.to)
        // console.log(this.$store.state.date)
        this.$router.push('/availabletickets')
      }

    }
}
</script>

<style scoped>

</style>