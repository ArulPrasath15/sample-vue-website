import Vue from 'vue'
import VueRouter from 'vue-router'
import AvailableTickets from "@/components/AvailableTickets";
import BookTicket from "@/components/BookTicket";
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'BookTicket',
        component: BookTicket
    },
    {
        path: '/availabletickets',
        name: 'AvailableTickets',
        component: AvailableTickets
    },

]

const router = new VueRouter({
    routes
})

export default router
