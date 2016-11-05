package csv

import (
    "bufio"
    "encoding/csv"
    "os"
    "log"
)

func handle(e error) {
    if (nil != e) {
        log.Fatal(e)
    }
}

func GetAll(file string) (records [][]string, err error) {
    f, err := os.Open(file)
    handle(err)

    // Create a new reader.
    r := csv.NewReader(bufio.NewReader(f))

    return r.ReadAll()
}
