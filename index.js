let app = new Vue({
    el: '#app',
    data: {
        message: 'hello! 👋'
    }
});

let app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
});

let app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true,
    }
});

let app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
            
        ]
    }
});

let app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js! :-)'
    },
    methods: {
        reverseMessage() {
            this.message = this.message.split('').reverse().join('')
        }
    }
});

let app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Change me!'
    }
});

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo. text }}</li>'
});

let app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: 'Steak' },
            { id: 1, text: 'Eggs' },
            { id: 2, text: 'Avocados' }
        ]
    }
});