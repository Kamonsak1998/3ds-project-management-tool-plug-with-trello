package main

import (
	"database/sql"
	"fmt"
	"log"
	"github.com/Kamonsak1998/3ds-project-management-tool-plug-with-trello/go/service"
	"github.com/Kamonsak1998/3ds-project-management-tool-plug-with-trello/go/controller"
	_ "github.com/go-sql-driver/mysql"
)

var datamember = dataMember{}
func showDBmember() {
	db := connectDB()
	db.QueryRow("SELECT * FROM 001member Where id=3").Scan(&datamember.ID, &datamember.Email, &datamember.Password, &datamember.Firstname, &datamember.Lastname, &datamember.Phone)
	fmt.Println("ID :", datamember.ID)
	fmt.Println("Email :", datamember.Email)
	fmt.Println("Password :", datamember.Password)
	fmt.Println("FirstName :", datamember.Firstname)
	fmt.Println("LastName :", datamember.Lastname)
	fmt.Println("Phone :", datamember.Phone)

}

func main() {
	fmt.Println("Hello World")
	showDBmember()
	service.HandleRequest()
}
