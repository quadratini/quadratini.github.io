const User = {
    template: '<div>User</div>'
}

const router = new VueRouter({
    routes: [
        // dynamic segments start with a colon
        { path: '/user/:id', component: User }
    ]
})
