Vue.component (`header-clone`, {
    template: `
        <nav class="navbar navbar-light navbar-expand-lg" style="background-color: white">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <i class="fab fa-instagram fa-3x"></i>
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                    <a class="nav-link" href="#">Instagram <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
                <div v-if=" !isLogin "> 
                    <!-- LOG IN  -->
                    <button type="button" class="btn btn-outline-success my-2 my-sm-0" data-toggle="modal" data-target="#loginModal">
                        Login
                    </button>
                    <!-- Modal -->
                    <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="container">
                                <div class="modal-content container">
                                    <div class="text-center">
                                        <h5 class="modal-title mt-2">Log In</h5>
                                    </div>
                                    <div class="modal-body">
                                        <form v-on:submit.prevent="login">
                                            <div class="form-group">
                                                <label for="exampleInputPassword1">Email</label>
                                                <input v-model="user.email" type="text" class="form-control" placeholder="Email">
                                            </div>
                                            <div class="form-group">
                                                <input v-model="user.password" type="password" class="form-control" placeholder="Password">
                                            </div>
                                            <button type="submit" class="btn btn-primary">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- SIGN UP -->
                    <!-- Button trigger modal -->
                    
                    <button type="button" class="btn btn-outline-success my-2 my-sm-0 ml-3" data-toggle="modal" data-target="#signUpModal">
                        SignUp
                    </button>
            
                    <!-- Modal -->
                    <div class="modal fade" id="signUpModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="text-center">
                                    <h5 class="modal-title mt-2">Sign Up</h5>
                                </div>
                                <div class="modal-body">
                                    <form v-on:submit.prevent="signUp">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Name</label>
                                            <input v-model="user.name" type="text" class="form-control" aria-describedby="emailHelp" placeholder="Name">
                                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">Email</label>
                                            <input v-model="user.email" type="text" class="form-control" placeholder="Email">
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">Password</label>
                                            <input v-model="user.password" type="password" class="form-control" placeholder="Password">
                                        </div>
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- LOGOUT -->
                <div v-if= "isLogin">
                    <button v-on:click="logout" type="button" class="btn btn-outline-success my-2 my-sm-0">
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    `,
    props:['totalFeed'],
    data() {
        return {
            user : {
                name : "",
                email : "",
                password : ""
            },
            server: "http://localhost:3000",
            isLogin: localStorage.getItem('token') ? true : false
        } 
    },
    methods: {
        login() {
            let self = this
            axios({
                method: "post",
                url: self.server + "/users/login",
                data: {
                    email: self.user.email,
                    password: self.user.password
                }
            })
            .then((result)  => {
                let token = result.data.token
                localStorage.setItem("token", token)
                this.ifLogin() 
                self.user = ""
                $('#loginModal').modal('hide')
            })
            .catch(function(err) {
                console.log(err)
            })
        },
        signUp() {
            let self = this
            axios({
                method: "post",
                url: self.server + "/users/signup",
                data: {
                    name: self.user.name ,
                    email: self.user.email,
                    password: self.user.password
                }
            })
            .then(function() {
                self.user = ""
                console.log("sign up success")
            })
            .catch(function(err) {
                console.log(err)
            })
        },
        ifLogin() {
            let token = localStorage.getItem("token")
            if (token) {
                this.isLogin = true
            } else {
                this.isLogin = false
            }
        },
        logout() {
            localStorage.clear()
            this.ifLogin()
        }
    }, 
    mounted: function() {
        this.ifLogin()
    }
})



  
