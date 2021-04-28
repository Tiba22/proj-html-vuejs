function initVue() {

  var app = new Vue ({
    el: "#app",
    data: {
      navBar: [
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

      courses: [
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

      blogs: [
        {
          img: 'home-personal-finance-blog-03-480x325.jpg',
          class: 'BUSINESS',
          info: 'Ten Benefits Of Rentals That May Change Your Perspective',
          view: [' Dec 28, 2020', ' 1062 views']
        },
        {
          img: 'home-personal-finance-blog-02-480x325.jpg',
          class: 'BUSINESS',
          info: '10 Things Successful Mompreneurs Do Different',
          view: [' Dec 28, 2020', ' 1025 views']
        },
        {
          img: 'home-personal-finance-blog-01-480x325.jpg',
          class: 'BUSINESS',
          info: 'How Stay Calm from the First Time.',
          view: [' Dec 28, 2020', ' 901 views']
        }
      ],

      linkHelps: [
        {
          icon:'far fa-flag',
          type: 'Idea Discussion',
          info: 'Get teamed up with the specialists who work and teach coding for years at famous universities.'
        },
        {
          icon:'fas fa-cog',
          type: 'Web Development',
          info: 'Learn to start building a wabpage from scratch. You decide your own pace, course and speed.'
        },
        {
          icon:'far fa-life-ring',
          type: 'System Administration',
          info: 'Learners are encouraged to study the mechanism and structure of system administration.'
        },
        {
          icon:'fas fa-tv',
          type: 'Graphic Design',
          info: 'Have a passion for graphics and arts? Show your talents whit confidence and self-assertiveness'
        },
      ],

      infoFooter: [
        {
          id: 'Address',
          address: ['382 NE 191st ST # 87394 Miami, FL 33179-3899',
          '+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)',
          'support@maxcoach.com'
        ]
        },
        {
          id: 'Explore',
          address: [
            'Start here',
            'Blog',
            'About us'
          ]
        },
        {
          id: '',
          address: [
            'Success story',
            'Courses',
            'Contact us'
          ]
        },
        {
          id: 'Information',
          address: [
            'Membership',
            'Purchase guide',
            'Privacy policy',
            'Terms of services'
          ]
        }
      ],

      iconsSocial: [
        'fab fa-facebook-square',
        'fab fa-twitter',
        'fab fa-instagram',
        'fab fa-linkedin'
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
