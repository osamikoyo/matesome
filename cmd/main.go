package main

import "matesome/internal/server"

func main() {
	s := server.New()
	s.Run()
}