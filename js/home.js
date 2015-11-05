var header=function(){
    return m("header",m("a[href='/']",{config: m.route},[
        m("h1","Daka NagaRohith"),
        m("h4", "డాకా నాగరోహిత్ / डाका नागरोहित")
    ]));
};

var tabs=[
    {text: "Projects", url: "/projects"},
    {text: "About", url: "/aboutme"}
];

var landingpage= function(){
    return m("table.nav",
             m("tr", [
                m("td", m("a[href='/projects']", {config: m.route},"Projects") ),
                m("td", m("a[href='/aboutme']", {config: m.route},"About Me") )
                ]
              )
            );
        };


var Home ={};
var Projects={};
var About ={};

Home.view = function(){
    return m(".container",[
        header(),
        landingpage()
    ]);
};

Projects.view = function(){
    return m(".container",[
        header(),
        landingpage(),
       // projs()
    ]);
};

About.view = function(){
    return m(".container",[
        header(),
        landingpage(),
       // aboutme()
    ]);
};

m.route.mode = "search";

m.route(document, "/", {
    "/": Home,
    "/projects": Projects,
    "/aboutme": About
});
