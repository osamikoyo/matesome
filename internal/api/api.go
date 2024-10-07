package api

import (
	"log/slog"
	"net/http"
	"os"

	"github.com/labstack/echo/v4"

	"matesome/internal/db"
	"matesome/internal/models"
	"matesome/internal/tools"
)

func Home(c echo.Context) error {
	return c.File("public/src/index.html")
}
func Login(c echo.Context) error {
	loger := slog.New(slog.NewJSONHandler(os.Stdout, nil))
	var user models.User

	if err := c.Bind(&user); err != nil{
		loger.Error(err.Error())
		return err
	}

	user.Token = tools.GenerateToken(user)
	db := db.New()
	errs := db.Update_user_Token(user)
	if errs != nil {
		loger.Error(errs.Error())
		return errs
	}

	return c.JSON(http.StatusOK, user)
}
func Auth(c echo.Context) error {
	loger := slog.New(slog.NewJSONHandler(os.Stdout, nil))
	var u models.User

	if err := c.Bind(&u); err != nil{
		loger.Error(err.Error())
		return err
	}

	return c.JSON(http.StatusOK, u)
}

func Register(c echo.Context) error {
	loger := slog.New(slog.NewJSONHandler(os.Stdout, nil))
	var u models.User

	if err := c.Bind(&u); err != nil {
		loger.Error(err.Error())
		return err
	}

	db := db.New()
	return db.Register_User(u)
}