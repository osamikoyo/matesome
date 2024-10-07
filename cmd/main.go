package cmd

import "matesome/internal/server"

func main() {
	s := server.New()
	s.Run()
}