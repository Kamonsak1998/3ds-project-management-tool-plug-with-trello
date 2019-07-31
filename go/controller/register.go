package controller

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"

	"github.com/Kamonsak1998/3ds-project-management-tool-plug-with-trello/go/service"
)

var DataMember = dataMember{}
func AddUser(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "Application/json") // จัดรูปแบบ
	db := service.DB
	var dbemail string
	var status = regis{}
	postData := &dataMember{}

	b, err := ioutil.ReadAll(r.Body)
	if err != nil {
		return
	}
	json.Unmarshal(b, &postData)

		db.QueryRow("SELECT email FROM tb_member WHERE email=?", postData.Email).Scan(&dbemail)
	hash, _ := hashPassword(postData.Password)
	fmt.Printf("password :%s hash :%s", postData.Password, hash)
	if strings.ToLower(postData.Email) != strings.ToLower(dbemail) {

			db.Query("INSERT INTO tb_member (id, email, password, firstname, lastname, phone) VALUES (?, ?, ?, ?, ?, ?)",
				nil, strings.ToLower(postData.Email), hash, postData.Firstname, postData.Lastname, postData.Phone, nil)
			w.WriteHeader(http.StatusCreated)
			status = regis{RegisStat: true, Message: "Register Successful"}

		} else {
			w.WriteHeader(http.StatusBadRequest)
			status = regis{RegisStat: false, Message: "Email have use in database"}
		}
	json.NewEncoder(w).Encode(status)

}
