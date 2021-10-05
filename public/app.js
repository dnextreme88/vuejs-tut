new Vue({ // instance
    el: '#vue-app', // control only this specified element and its data
    data: { // store all data for this Vue instance
        a: 0,
        b: 0,
        age: 20,
        name: '',
        job: 'Ninja',
        website: 'http://www.thenetninja.co.uk',
        websiteTag: '<a href="http://www.thenetninja.co.uk">The Net Ninja Website</a>',
        x: 0,
        y: 0,
        available: false,
        nearby: false,
        error: false,
        success: false,
        characters: ['Mario', 'Luigi', 'Yoshi', 'Bowser'],
        ninjas: [
            { name: 'Ryu', age: 25 },
            { name: 'Yoshi', age: 35 },
            { name: 'Ken', age: 55},
        ],
        output: 'Your fav food',
    },
    methods: {
        readRefs: function() {
            console.log(this.$refs.test.innerText); // output all $ref variables eg. <input type="text" ref="input" />
            this.output = this.$refs.input.value;
        },
        greet: function(time) {
            // this.job; // Get variable of data with name 'job';
            return 'Good ' +time+ ' ' +this.name;
        },
        reset: function() {
            this.x = 0;
            this.y = 0;
        },
        add: function(inc) {
            this.age += inc;
        },
        subtract: function(dec) {
            this.age -= dec;
        },
        updateXY: function(event) {
            this.x = event.offsetX; // Get offset value of X from event object
            this.y = event.offsetY; // Get offset value of Y from event object
        },
        click: function() {
            alert('You clicked me');
        },
        logName: function() {
            console.log('You entered your name');
        },
        logAge: function() {
            console.log('You entered your age');
        },
    },
    computed: {
        addToA: function() {
            console.log('addToA');
            return this.a + this.age;
        },
        addToB: function() {
            console.log('addToB');
            return this.b + this.age;
        },
        compClasses: function() {
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    },
});

// PUNCHBAG GAME
// new Vue ({
//     el: '#vue-app',
//     data: {
//         health: 100,
//         ended: false
//     },
//     methods: {
//         punch: function() {
//             this.health -= 10;

//             if ( this.health <= 0 ) {
//                 this.ended = true;
//             }
//         },
//         restart: function() {
//             this.health = 100;
//             this.ended = false;
//         }
//     },
//     computed: {
//     }
// });

// Vue.component('greeting', {
//     template: '<p>Hey there, I am {{ name }} . <button v-on:click="changeName">Change name</button></p>',
//     data: function() { // data in a Vue component is a function and returns an object
//         return {
//             name: 'Yoshi'
//         }
//     },
//     methods: {
//         changeName: function() {
//             this.name = 'Mario';
//         }
//     }
// });

// var one = new Vue ({
//     el: '#vue-app-one',
//     data: {
//         title: 'Vue App One'
//     },
//     methods: {

//     },
//     computed: {
//         greet: function() {
//             return 'Hello from app one :)';
//         }
//     }
// });

// var two = new Vue ({
//     el: '#vue-app-two',
//     data: {
//         title: 'Vue App Two'
//     },
//     methods: {
//         changeTitle: function() {
//             one.title = "Title changed";
//         }
//     },
//     computed: {
//         greet: function() {
//             return 'Yo dudes, this is app 2 speaking to ya :)';
//         }
//     }
// });

// two.title = "Changed from outside"; // Runs automatically in the JavaScript