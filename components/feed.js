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
                                <div class="fb-share-button mb-3" :data-href="feed.images[0]" data-layout="button_count" data-size="large" data-mobile-iframe="false"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.instagram.com%2Fdeveloper%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
                                <a class="btn btn-primary btn-sm" :href="feed.images[0]"> Download </a>
                        </div>
                    </div>
                <div class="pt-5"></div>
            </div>

        </div>
        `,
        props: ["totalfeed"],
        methods: {
            cobaAja(){
                this.$emit("apa-aja", "woeee liat dong")
            }
        }
})