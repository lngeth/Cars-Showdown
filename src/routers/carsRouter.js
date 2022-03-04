import HomeView from "@/views/HomeView";
import CarView from "@/views/CarView";
import CarsCatalogue from "@/views/CarsCatalogue";
import PageNotFound from "@/views/PageNotFound";

const routes = [
    { path: '/', component: HomeView },
    { path: '/cars', component: CarsCatalogue },
    { path: '/car/:id', component: CarView, name: 'car', props: true},
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: PageNotFound },
]

export default routes;