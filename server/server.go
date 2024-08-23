package main
import (
	"net/http"
	"fmt"
	"log"
)
func main() {
	http.HandleFunc("/foo", fooHandler)
	fmt.Println("Server listening on port 8080...🍌")
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func fooHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println("hello from server")
}


