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
})