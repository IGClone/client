Vue.component (`feed`,{
    template: `<div class="col-md-6" id="feed">
            <div v-for="feed in totalfeed">
                <div class="card pb-0">
                    <div class="card-body pb-0"><h5 class="font-weight-light">{{feed.owner.name}}</h5></div>
                </div>
                
                <div class="border">
                    <img @click="cobaAja" class="img-fluid" style="width:100%" :src="feed.images[0]" >
                </div>
                

                    <div class="card" >
                        <div class="card-body pb-0">
                        <h5 class="font-italic">{{ feed.description}}</h5>
                                <div>
                                    <h2>Comment</h2>
                                </div>

                                <!-- facebook button -->
                                <!-- Your share button code -->
                                <div class="fb-share-button mb-3" :data-href="feed.images[0]" data-layout="button_count" data-size="large" data-mobile-iframe="false">Share</div>
                                <a class="btn btn-primary btn-sm" :href="feed.images[0]"> Download </a>
                                
                                <div class="row">
                                    <div v-for="label in feed.labels" class="col-4">
                                        <i class="fas fa-tag text-grey mr-2"></i>       
                                        <span>{{ label }}</span>
                                    </div>
                                </div>
                                <div class="accordion my-3" id="accordionExample">
                                    <div class="card">
                                        <div class="card-header" id="headingOne">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link" type="button" data-toggle="collapse" :data-target="'#k'+feed._id" aria-expanded="true" aria-controls="collapseOne">
                                            Show Comment
                                            </button>
                                        </h5>
                                        </div>
                                        <div :id="'k'+feed._id" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <template v-for="data in feed.comment">
                                        <div class="card-body">
                                            {{data.commenter.name}} : <br>
                                            {{data.commentBody}}
                                        </div>
                                        <hr>
                                        </template>
                                        </div>
                                        </div>
                                        </div>
                                <form @submit.prevent="addComment(feed._id)" class="form-inline mb-2" style="width:100%">
                                    <input v-model="comment" class="form-control" type="text" placeholder="Comment..">
                                </form>
                        </div>
                    </div>
                <div class="pt-5"></div>
               
            </div>

        </div>
        `,
        props: ["totalfeed"],
        data(){
            return{
                comment : ''
            }
        },
        methods: {
            addComment(id){
                axios({
                    method : 'PUT',
                    url : 'http://localhost:3000/post/comment/'+id,
                    headers : { token : localStorage.getItem('token')},
                    data : {
                        comment : this.comment
                    }
                })
                .then( ({ data }) => {
                    console.log( data )
                    this.comment = ''
                    this.$emit('comment_success')
                })
                .catch( error => {
                    alert( error.response.data.message)
                })
            },
            cobaAja(){
                this.$emit("apa-aja", "woeee liat dong")
            }
        }
})