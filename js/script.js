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

      courses:[
        {
          img: 'finance-course-thumbnail-04-480x298.jpg',
          price: 'Free',
          info: 'Personal Finance: Financial Security Thinking & Principles',
          infoCourse: ['2 Lessons','89 Students'],
        },
        {
          img: 'course-02-480x298.jpg',
          price: '$40.00',
          info: 'Learning to Write as a Professional Author',
          infoCourse: ['20 Lessons','50 Students'],
        },
        {
          img: 'stock-full-hd-03-480x298.jpg',
          price: 'Free',
          info: 'Customer-centric Info-tech Strategies',
          infoCourse: ['24 Lessons','802 Students'],
        },
        {
          img: 'stock-full-hd-04-480x298.jpg',
          price: '$19.00',
          info: 'Open Programming Courses for everyone: Python',
          infoCourse: ['17 Lessons','62 Students'],
        },
        {
          img: 'stock-full-hd-06-480x298.jpg',
          price: '$26.00',
          info: 'Academix Listening and Note-taking ',
          infoCourse: ['14 Lessons','67 Students'],
        },
        {
          img: 'course-featured-image-01-480x298.jpg',
          price: '$39.00',
          info: 'Master jQuery in a short Period of Time',
          infoCourse: ['6 Lessons','51 Students'],
        }
      ],
      clients: [
        'client-logo-colored-01.png',
        'client-logo-colored-02.png',
        'client-logo-colored-03.png',
        'client-logo-colored-04.png',
        'client-logo-colored-05.png',
        'client-logo-colored-06.png'
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
