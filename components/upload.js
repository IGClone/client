const Upload = {
    template : '#upload-template',
    data(){
        return  {
            images : [],
            description: ''
        }
    }, 
    methods : {
        closeModal(){
            $('#upload-photo').modal('hide')
        },
        previewImage(e){
            let image = e.target.files[0]
            this.images.push( image)
        },
        clear(){
            this.images = [],
            this.description = ''
        },
        uploadFotoSingle(){
            let formData = new FormData()
            this.images.forEach(image => {
                formData.append('images', image)
            })
            formData.append('description', this.description)
            axios.post('http://localhost:3000/post',formData, { headers:{'Content-Type': 'multipart/form-data', token : localStorage.getItem('token')}} )
            .then( ({ data }) => {
               this.clear()
               this.closeModal()
               this.$emit('upload-success')
            })
            .catch(({ response }) =>{
                console.log( response.data)
            })
            
        }
    },
    created(){
        this.clear()
    }
}