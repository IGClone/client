const app = new Vue ({
    components : { 
        'upload-post' : Upload
    },
    el: "#app",
    data: {
        host: "http://localhost:3000",
        usersList : [],
        followedUser: [],
        totalFeed: [],
        isLogin: false
    },
    methods: {
        readFeed (){
            axios({
                method : 'GET',
                url : 'http://localhost:3000/post',
                headers : { token : localStorage.getItem('token')}
            })
            .then( ({ data }) => {
                this.totalFeed = data
            })
            .catch( ({ response }) => {
                console.log( response )
            })
        },
        shout(payload) {
            alert(payload)
        },
        getAllUser(){
            this.usersList = []
            axios({
                method: 'GET',
                url: `${this.host}/users`,
            })
            .then(users => {
                this.usersList = users.data.data
            })
            .catch(err => {
                console.log(err)
            })
        },
        following(payload){
            
            axios({
                method: 'PUT',
                url: `${this.host}/users/follow`,
                data: {newFollowingUser: payload.followingUser._id},
                headers: {token: localStorage.getItem("token")}
            })
            .then(users => {
                this.followedUser.push(payload.followingUser)
                alert(users.data.message)
            })
            .catch(err => {
                console.log(err)
            })
        }
    },
    created(){
        this.checkLogin()
        this.readFeed()
        this.getAllUser()
    }
})