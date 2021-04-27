function initVue() {

  var app = new Vue ({
    el: "#app",
    data: {
      navBar:[
        {
          type: 'Home',
          menu: ['Lorem Ipsum','Lorem Ipsum','Lorem Ipsum']
        },
        {
          type:'Pages',
          menu: ['Lorem Ipsum','Lorem Ipsum','Lorem Ipsum']
        },
        {
          type: 'Courses',
          menu: ['Lorem Ipsum','Lorem Ipsum','Lorem Ipsum']
        },
        {
          type: 'Features',
          menu: ['Lorem Ipsum','Lorem Ipsum','Lorem Ipsum']
        },
        {
          type: 'Blog',
          menu: ['Lorem Ipsum','Lorem Ipsum','Lorem Ipsum']
        },
        {
          type: 'Shop',
          menu: ['Lorem Ipsum','Lorem Ipsum','Lorem Ipsum']
        }
      ],

      numberInfo: [
        {
          number: '1.926',
          info:'FINISHED SESSIONS'
        },
        {
          number: '3.092+',
          info:'ENROLLED LEARNERS'
        },
        {
          number: '200',
          info:'ONLINE INSTRUCTORS'
        },
        {
          number: '100%',
          info:'SATISFACTION RATE'
        }
      ],
      checks: [
        'Select & customize courses to your preferences','Change the tutor and make arrangements',
        'Participate in events to join others',
        'Get the desired certificate delivered at house'
      ],
      
      counter: null,
    },


    methods: {
      openMenù(index){
        (this.counter == index) ? this.counter = null : this.counter = index;
      }
    }
  });
}

function init() {
  initVue();
}
document.addEventListener("DOMContentLoaded", init);
