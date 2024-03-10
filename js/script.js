
const { createApp } = Vue;

createApp({
  data() {
    return {
      isLoading: false,
      leadEmailId: "",
      leadNameValue: "",
      leadMessageToMe: "",
      navbarBrandHeader: "Sanket Shinde",
      SERVICE_ID: "service_iu6lm5r",
      TEMPLATE_ID: "template_91lq7uj",
      PUBLIC_KEY: "eSiKRxI75N8U__SNG",
      monthInWords: {
        1: "Jan",
        2: "Feb",
        3: "Mar",
        4: "Apr",
        5: "May",
        6: "June",
        7: "July",
        8: "Aug",
        9: "Sept",
        10: "Oct",
        11: "Nov",
        12: "Dec",
      },
      personalInfo: {
        firstName: "Sanket",
        lastName: "Shinde",
        phoneNumber: "+1(514)569-9165",
        email: "sanketshinde0717@gmail.com",
        profileHeadline:
          "I am a passionate Software Developer, inclined towards learning and implementing new techniologies. I love web development and I'm a Salesforce Enthusiast. Client service has been my motivation throughout my journey as a developer. Looking forward to hearing from you!",
      },
      socialMediaInfo: {
        github: "https://github.com/sanketshinde07",
        linkedIn:
          "https://www.linkedin.com/in/sanketshinde07/",
      },
      leadModule: {
        name: "",
        email: "",
        msg: "",
      },
      educationalInfo: {
        schooling: [
          {
            instituteName:
              "DY Patil College Of Engineering",
            location: {
              city: "Pune",
              country: "India",
            },
            fromYear: 2015,
            toYear: 2019,
            degreeDetails: {
              fullName: "Bachelor of Engineering",
              shorthand: "B.E. (Computer)",
              major: "Computer Engineering",
              score: 79,
              unit: "%",
            },
            courses: [
              {
                title: "Data Structures and Algorithms",
              },
              {
                title: "Introduction to Cyber Security",
              },
              {
                title:
                  "Object Oriented & Multicore Programming",
              },
              {
                title: "Operating Systems",
              },
              {
                title: "Data Mining",
              },
              {
                title: "Business Intelligence & Analytics",
              },
            ],
          },
          {
            instituteName: "Concordia University",
            location: {
              city: "Montreal",
              country: "Canada",
            },
            fromYear: 2022,
            toYear: 2023,
            isOngoing: true,
            degreeDetails: {
              fullName: "Master of Engineering",
              shorthand: "MEng",
              major: "Software Engineering",
              score: 3.7,
              unit: "CGPA",
            },
            courses: [
              {
                title: "Advanced Programming Practices",
              },
              {
                title:
                  "Software Comprehension & Maintenance",
              },
              {
                title: "Software Engineering Processes",
              },
              {
                title: "Software Design Methodologies",
              },
              {
                title:
                  "Systems Requirements & Specifications",
              },
              {
                title: "Software Refactoring",
              },
              {
                title: "Software Project Management",
              },
            ],
          },
        ],
      },
      awards: [
        {
          title: "Tata Elxsi",
          authority: "Eternus Solutions Private Limited",
          year: 2019,
          month: 10,
          url: "",
        },
      ],
      certifiations: [
        {
          title: "Certification of Excellence",
          authority: "Eternus Solutions Private Limited",
          year: 2019,
          month: 10,
          url: "",
        },
        {
          title: "Completion Certification",
          authority: "Udemy",
          year: 2022,
          month: 10,
          url: "",
        },
        {
          title: "Completion Certification",
          authority: "Udemy",
          year: 2023,
          month: 2,
          url: "",
        },
      ],
      skillSet: [
        {
          domain: "Frontend Development",
          skillItems: [
            { label: "HTML5" },
            { label: "CSS3" },
            { label: "JavaScript" },
            { label: "Bootstrap5" },
            { label: "ReactJS" },
            { label: "Vue.js" },
            { label: "Node.js" },
          ],
          description:
            "As a Frontend Web Development, I work on technologies and frameworks such as HTML5, CSS3, JavaScript, Bootstrap 5, ES6+, ReactJS, Vue.js, node.js and many more. I've always been keen to learn new frameworks and technologies.",
          experienceYears: 2,
          experienceLevel: "Intermediate",
        },
        {
          domain: "Backend Development",
          skillItems: [
            { label: "C#" },
            { label: "Entity Framework" },
            { label: "ADO.NET"},
            { label: "ASP.NET Core Web API}"},
            { label: "REST APIs" },
            { label: "Windows Presentation Framework" },
            { label: "LINQ" },
          ],
          description:
          "Experienced in developing microservices with C#, specializing in Entity Framework, ADO.NET, and ASP.NET Core Web API for building robust RESTful APIs. Proficient in Windows Presentation Framework and skilled in LINQ for efficient data manipulation",
          experienceYears: 4,
          experienceLevel: "Advanced",
        },
        {
          domain: "Database",
          skillItems:[
            { label: "MongoDB"},
            { label: "PostgreSQL"},
            { label: "MySQL"},
            { label: "SQLite"}
          ],
          description:
          "Proficient in working with various SQL and NoSQL databases, including MongoDB, PostgreSQL, MySQL, and SQLite. Experienced in database management and optimization to support efficient data storage and retrieval.",
          experienceYears: 4,
          experienceLevel: "Intermediate",
        }
      ],
      projectsInfo: {
        projects: [
          {
            title: "Online Portfolio Website",
            technologies: [
              "HTML5",
              "CSS3",
              "Vue.js",
              "Bootstrap 5",
            ],
            repoURL:
              "",
            showcaseImageURL: "./img/pro-new-ss.PNG",
            projectURL:
              "",
            numberOfStars: 1,
            description:
              "Own Online Portfolio showcasing my profile details.",
          },
          {
            title: "Feedback App",
            technologies: ["ReactJS", "CSS3"],
            repoURL:
              "",
            showcaseImageURL: "./img/fa-ss.PNG",
            projectURL:
              "",
            numberOfStars: 1,
            description:
              "Web app allowing users to give feedback in form of a rating and related text description. ",
          },
          {
            title: "Task Tracker App",
            technologies: [
              "ReactJS",
              "CSS3",
              "Bootstrap 5",
            ],
            repoURL:
              "",
            showcaseImageURL: "./img/tt-ss.PNG",
            projectURL:
              "",
            numberOfStars: 1,
            description:
              "A tiny web app that helps us track our daily tasks list by acting as a rough checklist. Also lets us set reminders for tasks at specific times.",
          },
        ],
      },
      workExpInfo: {
        totalYears: 3,
        expList: [
          {
            id: 1,
            employer: "Tata Elxsi",
            website: "https://www.tataelxsi.com/#",
            designation: "Senior Software Engineer",
            role: "Full Stack Developer",
            description:
              "I worked on a couple of Salesforce AppExchange product development projects and got awarded for my contribution as a HotStepper. Got to learn packaging basics in salesforce since I worked on managed and unmanaged packages. I also worked on a service based project majorly focusing on REST API integrations and user interface using Visualforce and Lightning Aura components.",
            fromYear: 2022,
            fromMonth: 2,
            toYear: 2022,
            toMonth: 7,
          },
          {
            id: 0,
            employer: "Tata Elxsi",
            website: "https://www.tataelxsi.com/#",
            designation: "Engineer",
            role: "Software Devloper",
            description:
              "I got trained on c# platform as a developer along with some basics of database operations.",
            fromYear: 2019,
            fromMonth: 10,
            toYear: 2021,
            toMonth: 1,
          },
        ],
      },
    };
  },
  methods: {
    sendEmail: function () {
      this.isLoading = true;
      emailjs.init("5xyBESWnqZKYYACnY");
      emailjs.send(
        "service_1t8xttp",
        "template_worp1sv",
        {
          from_name: this.leadNameValue,
          reply_to: this.leadEmailId,
          message: this.leadMessageToMe,
        },
        "5xyBESWnqZKYYACnY"
      )
      .then(res => {
        alert("Email sent successfully");
        this.isLoading=false;            })
      .catch();
    },
    onContactMeClick: function () {
      console.log(this.leadNameValue);
      console.log(this.leadEmailId);
      console.log(this.leadMessageToMe);
      this.sendEmail();
    },
    toggleAccordion(itemId) {
      var element = document.getElementById(itemId);
      element.classList.toggle('show');
    }
  },
  computed: {
    fullName() {
      return (
        this.personalInfo.firstName +
        " " +
        this.personalInfo.lastName
      );
    },
    isValidForm() {
      return (
        this.leadNameValue &&
        this.leadEmailId &&
        this.leadMessageToMe
      );
    },
    emailLink() {
      return "mailto:" + this.personalInfo.email;
    },
  }
}).mount("#pageBody");
