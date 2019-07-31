package controller

type dataMember struct {
	ID        int
	Email     string
	Password  string
	Firstname string
	Lastname  string
	Phone     string
}
type regis struct {
	Message   string `json:"message"`
	RegisStat bool   `json:"registat"`
}