package main

import (
	"os"

	"github.com/gofiber/fiber/v2"
)

func main() {
	port := os.Getenv("PORT")
	app := fiber.New()

	/*app.Get("/", func(c *fiber.Ctx) error {
	        return c.SendString("Hello, World 👋!")
		})*/
	app.Static("/", "./static")

	app.Get("/test", func(c *fiber.Ctx) error {
		return c.SendFile("static/test.html")
	})

	app.Get("/*", func(c *fiber.Ctx) error {
		return c.SendFile("static/404.html")
	})

	app.Listen(":" + port)
}
