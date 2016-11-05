package api

import (
    "net/http"
    "encoding/json"
)

type envelope struct {
    Status int `json:"status"`
    Body interface{} `json:"body"`
    Message string `json:"message"`
}

func Envelope(w http.ResponseWriter, status int, body interface{}, message string) {
    w.Header().Set("Content-Type", "application/json; charset=UTF-8")
    w.WriteHeader(status)

    e := envelope{Status: status, Body: body, Message: message}

    json.NewEncoder(w).Encode(e)
}
