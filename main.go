package main

import (
    "github.com/julienschmidt/httprouter"
    "net/http"
    "log"
    "html/template"
    cnt "zarcie/controllers"
)

func handle(e error) {
    if (nil != e) {
        log.Fatal(e)
    }
}

func render(w http.ResponseWriter, t string, params interface{}) {
    tpl, err := template.ParseFiles("./templates/" + t)
    handle(err)

    err = tpl.Execute(w, params);
    handle(err)
}

func main() {
    router := httprouter.New()

    //Static files
    router.ServeFiles("/css/*filepath", http.Dir("./public/css"))
    router.ServeFiles("/js/*filepath", http.Dir("./public/js"))

    router.GET("/", index)
    router.GET("/days.json", cnt.Days)
    router.GET("/order/:date", cnt.OrderDetails)
    log.Print("Zarcie: up!")
    log.Fatal(http.ListenAndServe(":8080", router))
}

func index(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
    render(w, "index.html", struct { Name string }{ Name: "iris" })
}
