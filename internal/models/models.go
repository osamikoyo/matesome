package models

type User struct{
	Username string `json:"username"`
	Email 	 string `json:"email"`
	Password string `json:"password"`
	Token    string `json:"token"`
	Stack    string `json:"stack"`
}