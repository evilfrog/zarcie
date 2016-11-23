package controllers

import (
    "github.com/julienschmidt/httprouter"
    "net/http"
    "log"
    resp "zarcie/api"
    orders "zarcie/models/orders"
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

    lists := orders.GetLists()
    for _, item := range lists {
        firstMenu = append(firstMenu, MenuItem{item})
    }
    menus = append(menus, firstMenu)

    resp.Envelope(w, 200, menus, "List of days.")
	return
}

func OrderDetails(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
    resp.Envelope(w, 200, orders.GetByDate(ps.ByName("date")), "Order details.")
	return
}
