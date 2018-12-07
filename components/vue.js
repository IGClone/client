const app = new Vue ({
    el: "#app",
    data: {
        totalFeed: [
            {
                userName: "kevinTanuhardi",
                imgUrl: "http://cdn2.tstatic.net/makassar/foto/bank/images/dono-kasiono-indro_20180508_172559.jpg"
            },
            {
                userName: "andreHok",
                imgUrl: "https://9to5mac.com/wp-content/uploads/sites/6/2018/08/colorware.jpg?quality=82&strip=all&w=1500"
            }
        ],
        usersList : [],
        followedUser: [],
        host: "http://localhost:3000"
    },created: function(){
        this.getAllUser()
    },
    methods: {
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
})