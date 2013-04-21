// Dataset
(function(){
    var profile = {
        name: "Titus Johnson",
        email: "titus@simplepixel.org",
        site: "simplepixel.org",

        history: [
            {
                start: "2002",
                end: "2009",
                title: "Freelance Web Development",
                company: "",
                tasks: [
                    "Developed and managed websites.",
                    "Started with Frontpage 2002, moved to Dreamweaver MX 2005. Worked with Homesite.",
                    "Worked on GeoCities, Lycos, vBulletin, ezBoard, MySpace. Oh the memories."
                ],
                accomplishments: []
            },
            {
                start: "2008",
                end: "2009",
                title: "Web Development Supervisor",
                company: "50 Below Sales & Marketing",
                tasks: [
                    "Supervised a department of 15 front-end developers, graphic designers, QA specialists, and domain administrators. ",
                    "Wrote upgrades to a proprietary Coldfusion-based task tracker to better manage task assignment and automation. ",
                    "Responsible for new employee training and mentorship."
                ],
                accomplishments: [
                    "Planned and executed a company-wide transition from NAS to SVN for critical client files. ",
                    "Developed and executed a training program to train 50+ designers and web developers on the use of SVN. ",
                    "Wrote several PHP-based applications to manage internal task flow and task tracking. "
                ]
            },
            {
                start: "2009",
                end: "2010",
                title: "Manager - Web Development Department",
                company: "50 Below Sales & Marketing",
                tasks: [],
                accomplishments: [
                    "Managed 50 Below’s front-end development department. ",
                    "Grew the team from 15 employees to 32 over one year. ",
                    "Added 4 supervisors and instituted a new training program to manage the onboarding process. ",
                    "Moved production capacity from 15 websites per week to 50 through the use of new technology and the implementation of better internal processes."
                ]
            },
            {
                start: "2010",
                end: "Present",
                title: "Web Developer",
                company: "50 Below Sales & Marketing",
                tasks: [
                    "Responsible for managing 50 Below’s public web presence. ",
                    "Manage content and layout via Wordpress for the company’s corporate site. ",
                    "Create new portals and landing pages for events, email campaigns, and product launches. ",
                    "Write internal administration dashboards and utilities to automate repetitive tasks, bring transparency to reporting, and increase salesperson productivity."
                ],
                accomplishments: [
                    ""
                ]
            },
            {
                start: "2011",
                end: "Present",
                title: "Lead Developer",
                company: "Cliquorstore.com",
                tasks: [
                    "Lead developer for this LAMP-based application. ",
                    "Primary development of the front-end including all layout, styling, and most scripting. ",
                    "Secondary developer for the back-end application. ",
                    "Write integrations with Stripe and Campaign Monitor. ",
                    "Write basic internal CRM for managing B2B clients and site users. ",
                    "Manage up to 3 other developers. ",
                    "Coordinate schedules and deadlines between development team and sales and marketing teams."
                ],
                accomplishments: []
            }
            // {
            //     start: "",
            //     end: "",
            //     title: "",
            //     company: "",
            //     tasks: [],
            //     accomplishments: []
            // }
        ],

        skills: [
            "PHP",
            "MySQL",
            "JavaScript: including jQuery and KnockoutJS",
            "CSS: including LESS and SASS",
            "HTML",
            "XHTML",
            "HTML5",
            "Apache Configuration",
            "Linux: Debian-based distributions",
            "SVN",
            "Git",
            "OSX and *nix CLI.",
            "Drupal and Wordpress webmaster & theme development",
            "Minor Wordpress plugin authoring",
            "Experience with many PHP OSS packages: phpBB, vBulletin, PHPNuke, Cotonti, Wikimedia. ",
            "CakePHP, CodeIgniter, Symphony2, Flourishlib. ",
            "Minor experience with Ruby and Python. Rails, Web.py, Flask.",
            "Photoshop. 7 through CS5",
            "Minor experience with Illustrator, InDesign, and Flash"
        ],

        public: [
            {
                url: ["http://lifetimerun.com"],
                description: "Adobe Business Catalyst custom site theme development. Multiple 3rd party feed integrations, and Javascript workarounds for Business Catalyst feature shortcomings."
            },
            {
                url: ["http://investor.arinet.com"],
                description: "Micro site designed to provide a company overview and financial information for ARI. Front-end development, site scraping scripts to remove need for duplicate update tasks, 3rd party API integration. Fully responsive with display modes optimized for Phone, Tablet, and Desktop displays."
            },
            {
                url: ["http://www.50below.com/powersports/platform/"],
                description: "A request to “Make it like Apple did with the iPhone” turned into this slideshow. By combining existing jQuery plugins and writing my own bridge script I was able to fulfill the request very quickly."
            },
            {
                url: ["http://atd.50below.com/"],
                description: "Product portal highlights major product features and provides an interesting talking point during in-person sales pitches. A majority of the application exists behind the user authorization page, where a custom-built referral system allows external sales people to seamlessly interact with the internal marketing team’s email campaign vetting strategy by enabling individual customers to refer colleagues."
            },
            {
                url: [
                    "http://tires.50below.com/events/",
                    "http://www.50below.com/hme/events/",
                    "http://www.50below.com/powersports/events/"
                ],
                description: "Custom cross-industry application designed to allow Marketing to test attendance participation for industry related events. Designed so that Marketing can roll out an email campaign targeting business owners in an industry, inviting them to meet with the Sales team at an industry event. Business owners can schedule a meeting at a specific time, which in turn helped the Sales team plan staffing levels and activities at the event. This scheduler was a major piece in making 50 Below’s industry attendance profitable."
            },
            {
                url: ["http://cliquorstore.com"],
                description: "Lead development and developer organization for this bootstrapped startup aiming to provide deals on Liquor to Minnesota. Javascript, PHP, 3rd party API integration, customer support, sweeping the floors. "
            },
            {
                url: ["http://github.com/titusjohnson"],
                description: ""
            }
        ]
    };

    function HistoricalEvent(data) {
        var self = this;
        self.start = data.start;
        self.end = data.end;
        self.title = data.title;
        self.company = data.company;
        self.tasks = data.tasks;
        self.accomplishments = data.accomplishments;
        return self;
    }

    function Skill(data) {
        var self = this;
        self.description = data;
        return self;
    }
    function PublicCode(data) {
        var self = this;
        self.urls = data.urls;
        self.description = data.description;
        return self;
    }

    function ProfileViewModel(profile) {
        var self = this;
        self.name = profile.name;
        self.email = profile.email;
        self.site = profile.site;
        self.history = [];
        self.skills = [];
        self.public = [];

        for(var x in profile.history) {
            self.history.push(new HistoricalEvent(profile.history[x]));
        }
        for(var y in profile.skills) {
            self.skills.push(new Skill(profile.skills[y]));
        }
        for(var z in profile.public) {
            self.public.push(new PublicCode(profile.public[z]));
        }

        return self;
    }
    ko.applyBindings(new ProfileViewModel(profile), document.getElementById("resume"));
}());