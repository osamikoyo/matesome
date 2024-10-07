package tools

import (
	"crypto/sha512"
	"fmt"

	"matesome/internal/models"
)

func GenerateToken(u models.User) string {
	var str string
	res := sha512.Sum512([]byte(u.Email + u.Password + u.Username))
	for i := 0; i < len(res); i++ {
		str = fmt.Sprintf("%s%s", str, string(res[i]))
	}
	return str
}
