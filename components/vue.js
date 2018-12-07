const app = new Vue ({
    components : { 
        'upload-post' : Upload
    },
    el: "#app",
    data: {
        totalFeed: [],
        usersList : [
            {
                userName: "kevinTanuhardi"
            },
            {
                userName: "imanuVi"
            },
            {
                userName: "andreHok"
            },
            {
                userName: "dhimasHary"
            }
        ],
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
        checkLogin() {
            let token = localStorage.getItem("token")
            if (token) {
                this.isLogin = true
            } else {
                this.isLogin = false
            }
        }
    },
    created(){
        this.checkLogin()
        this.readFeed()
    }
})