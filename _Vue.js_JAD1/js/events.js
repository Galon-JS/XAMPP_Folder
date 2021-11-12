const app = new Vue({
    el: '#app',
    data: {
        count: 0
    },
    methods: {
        alert_name: function () {
            const inputYourName = document.querySelector('#your_name')
            alert('You entered: ' + inputYourName.value)
        },
        increase_count: function () {
            this.count++
        },
        decrease_count: function () {
            this.count--
        }
    }
})