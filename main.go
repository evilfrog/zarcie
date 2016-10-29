package main

import "github.com/kataras/iris"

func main() {
    //Static files
    iris.Static("/css", "./public/css", 1)
    iris.Static("/js", "./public/js", 1)

    iris.Get("/", index)("home")
    // iris.Listen(":8080")
    iris.ListenLETSENCRYPT(":443")
    // iris.ListenLETSENCRYPT("zarcie.lock:443")
}

func index(ctx *iris.Context){
   ctx.Render("index.html", struct { Name string }{ Name: "iris" })
}
