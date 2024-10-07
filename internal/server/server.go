package server

import (
	"github.com/labstack/echo/v4"

	"matesome/internal/api"
)

type Server struct {
	*echo.Echo
}

func New() Server {
	return Server{echo.New()}
}
func (s Server) Run() {
	s.Static("/", "public")

	s.GET("/", api.Home)
	s.Logger.Panic(s.Start(":2020"))
}
