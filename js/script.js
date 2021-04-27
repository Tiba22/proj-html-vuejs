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
