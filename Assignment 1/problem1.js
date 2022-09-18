const http = require('http')
const url = require('url')


const data = [
    {
        "name": "john",
        "year": 1998,
        "month": 11,
        "date": 23
    },
    {
        "name": "peter",
        "year": 1997,
        "month": 12,
        "date": 2
    },
    {
        "name": "henry",
        "year": 1999,
        "month": 2,
        "date": 28
    },
    {
        "name": "george",
        "year": 1995,
        "month": 1,
        "date": 1
    },
    {
        "name": "kelly",
        "year": 1996,
        "month": 7,
        "date": 9
    },
    {
        "name": "kelly",
        "year": 1996,
        "month": 9,
        "date": 9
    },
    {
        "name": "kelly",
        "year": 1996,
        "month": 12,
        "date": 9
    }
]

const server = http.createServer((req, res) => {
    const parsedURL = url.parse(req.url, true)
    /*console.log(parsedURL.query)*/


    if (parsedURL.pathname === "/age" && req.method === "GET") {
        const querydatauname = parsedURL.query.name
        const querydatayear = parsedURL.query.year
        const querydatamonth = parsedURL.query.month
        const querydatadate = parsedURL.query.date

        const result = data.find((item) => item.name == querydatauname && item.year == querydatayear && item.month == querydatamonth && item.date == querydatadate)
        console.log(result)
        if (result) {
            res.writeHead(200)
            let d = new Date();
            let yearNow = d.getFullYear();
            let monthNow = d.getMonth() + 1;
            let dateNow = d.getDay();

            let age = yearNow - querydatayear;
            if (monthNow < querydatamonth || (monthNow == querydatamonth && dateNow < querydatadate)) {
                age -= 1;
            }

            res.end(JSON.stringify({
                "name": querydatauname,
                "age": age
            }))


        }
        else {
            res.writeHead(300)
            res.end(JSON.stringify({ "msg": "enter name, year, month, & date" }))
        }
    }
    else {
        res.writeHead(404)
        res.end('404 page not found')
    }
})
server.listen(8080, () => console.log('server started'))




































// const http = require("http");
// const url = require("url")
// const findage = require("findage");

// const server = http.createServer((req, res) => {
//     const parsedurl = url.parse(req.url, true)
//     const qname = parsedurl.query.name
//     const qdatay = parsedurl.query.year
//     const qdatam = parsedurl.query.month
//     const qdatad = parsedurl.query.day
//     const f = qdatam.concat("/" + qdatad + "/")
//     const ff = f.concat(qdatay)
//     const fff = findage.fullAge(ff);
//     console.log(fff);

//     // document.getElementById("name").innerText = qname;
//     document.getElementById("age").innerText = fff

//     if (parsedurl.pathname === "/age") {
//         res.end(fff);
//     }
//     else {
//         res.end("page not found")
//     }
// })
// server.listen(8080, () => {
//     console.log("server was listning at 8080 port");
// })

