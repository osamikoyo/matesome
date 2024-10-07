package db

import (
	"log/slog"
	"os"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"

	"matesome/internal/models"
)

type Database struct {
	*gorm.DB
}

func New() Database {
	loger := slog.New(slog.NewJSONHandler(os.Stdout, nil))

	db, err := gorm.Open(sqlite.Open("storage/main.db"), &gorm.Config{})
	if err != nil {
		loger.Error(err.Error())
	}
	return Database{db}
}
func (d *Database) Update_user_Token(u models.User) error {
	res := d.Model(&u).Where("email = ?", u.Email).Update("token", u.Token)
	if res.Error != nil {
		return res.Error
	}
	return nil
}
func (d *Database) Register_User(u models.User) error {
	loger := slog.New(slog.NewJSONHandler(os.Stdout, nil))
	res := d.Create(&u)
	if res.Error != nil {
		loger.Error(res.Error.Error())
		return res.Error
	}

	return nil
}
