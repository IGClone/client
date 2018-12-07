Vue.component("listinguser",{
    template: `
    <div>
            <div class="card pb-0">
                <div class="card-body pb-0">
                <h5 class="font-weight-light">
                    Users List
                </h5>
                </div>
            </div>
                
            <div class="card" >
                <div class="card-body pb-0">
                    <div class="row mb-2" v-for="user, index in userslist" >
                        <div class="col-8">
                                <h5>{{user.name}}</h5>
                        </div>
                        <div class="col-4 p-2">
                                <button @click="follow(user, index)" class="btn btn-primary btn-sm">
                                    <i class="fab fa-instagram fa-1.5x">
                                    </i> follow
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `,
    props: ["userslist"],
    methods: {
        follow(followingUser, index){
            this.$emit("following", {followingUser: followingUser, index: index})
        }
    }
})