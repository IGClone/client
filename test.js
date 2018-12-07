Vue.component ("test-for", {
    data() {
        return {
            name: 'asdasdasd'
        }
    },
    props:['totalfeed'],
    template: `<div>
    test
    {{totalfeed}}
    </div>`
})