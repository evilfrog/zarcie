package controllers

import (
    "github.com/julienschmidt/httprouter"
    "net/http"
    "log"
    resp "zarcie/api"
    lists "zarcie/models/lists"
)

func handle(e error) {
    if (nil != e) {
        log.Fatal(e)
    }
}

type MenuItem struct {
    Name string `json:"name"`
}

func Days(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
    var menus [][]MenuItem
    var firstMenu []MenuItem

    lists := lists.GetLists()
    for _, item := range lists {
        firstMenu = append(firstMenu, MenuItem{item})
    }
    menus = append(menus, firstMenu)

    resp.Envelope(w, 200, menus, "List of days.")
	return
}
