package model

import (
	"fmt"
	"strings"
	"time"

	jwt "github.com/dgrijalva/jwt-go"
)

//MySigningKey is Key for genarate token
var MySigningKey = []byte("mysupersecretphrase")

//Refresttoken ...
func Refresttoken(username string) (string, error) {

	token := jwt.New(jwt.SigningMethodHS256)
	claims := token.Claims.(jwt.MapClaims)

	claims["authorized"] = true
	claims["user"] = strings.ToLower(username)
	claims["exp"] = time.Now().Add(time.Second * 30).Unix()
	tokenString, err := token.SignedString(MySigningKey)
	if err != nil {
		fmt.Println(err)
	}
	return tokenString, nil

}

//ExtractClaims ...
func ExtractClaims(tokenStr string) jwt.MapClaims {
	hmacSecretString := "mysupersecretphrase"
	hmacSecret := []byte(hmacSecretString)
	token, err := jwt.Parse(tokenStr, func(token *jwt.Token) (interface{}, error) {
		// check token signing method etc
		return hmacSecret, nil
	})
	if err != nil {
		return nil
	}
	if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
		return claims
	}
	return nil

}
