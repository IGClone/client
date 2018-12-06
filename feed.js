Vue.component (`feed`,{
    template: `<div class="col-md-8" id="feed">
            <div v-for="feed in totalfeed">
                <div class="card pb-0">
                    <div class="card-body pb-0"><h5 class="font-weight-light">{{feed.userName}}</h5></div>
                </div>
                
                <div class="border">
                    <img @click="cobaAja" class="img-fluid" style="width:100%" :src="feed.imgUrl" >
                </div>
                

                    <div class="card" >
                        <div class="card-body pb-0">
                                <div>
                                    <h2>Comment</h2>
                                </div>

                                <!-- facebook button -->
                                <!-- Your share button code -->
                                <div class="fb-share-button" data-href="https://www.instagram.com/developer/" data-layout="button_count" data-size="large" data-mobile-iframe="false"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.instagram.com%2Fdeveloper%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
                        </div>
                    </div>
                <div class="pt-5"></div>
            </div>

        </div>
        `,
        props: ["totalfeed"],
        methods: {
            cobaAja(){
                this.$emit("apaja", "woeee liat dong")
            }
        }
})