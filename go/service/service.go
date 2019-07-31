package service

import (
	"log"
	"net/http"

	"github.com/Kamonsak1998/3ds-project-management-tool-plug-with-trello/go/controller"
	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

var register = controller.register
func DB(){
	db := connectDB()
}
func connectDB() (db *sql.DB) {
	db, err := sql.Open("mysql", "root:123456@tcp(localhost:3306)/3DSProjectTello")
	if err != nil {
		log.Println(err)
	} else {
		log.Println("Connect Database Success")
	}
	return db
}

//HandleRequest ...
func HandleRequest() {
		r.HandleFunc("/register", register).Methods("POST")
	log.Fatal(http.ListenAndServe(":9000", handlers.CORS(handlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type", "Authorization"}), handlers.AllowedMethods([]string{"GET", "POST", "PUT", "HEAD", "OPTIONS"}), handlers.AllowedOrigins([]string{"*"}))(r)))
}