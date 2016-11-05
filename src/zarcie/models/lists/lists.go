package lists

import (
    "io/ioutil"
    "strings"
    "time"
    "sort"
    "log"
    "os"
)

func handle(e error) {
    if (nil != e) {
        log.Fatal(e)
    }
}

func create(name string) {
    f, err := os.Create("./data/lists/" + name + ".csv")
    handle(err)
    defer f.Close()
}

func GetLists() []string {
    var lists []string

    today := time.Now().Format("2006-01-02")
    todayPresent := false

    files, _ := ioutil.ReadDir("./data/lists/")
    for _, f := range files {
        if (false == f.IsDir() && strings.HasSuffix(f.Name(), ".csv")) {
            name := strings.TrimSuffix(f.Name(), ".csv")
            if (name == today) {
                todayPresent = true
            }
            lists = append(lists, name)
        }
    }
    if (!todayPresent) {
        create(today)
        lists = append(lists, today)
    }
    sort.Sort(sort.Reverse(sort.StringSlice(lists)))

    return lists
}
