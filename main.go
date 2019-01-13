package main

import (
	"os"

	"github.com/Equanox/gotron"
)

func main() {
	// Create a new browser window instance
	a := os.Args
	dirname := ""
	if len(a) > 1 {
		dirname = a[1]
	}
	window, err := gotron.New(dirname)
	if err != nil {
		panic(err)
	}

	// Alter default window size and window title.
	window.WindowOptions.Width = 1200
	window.WindowOptions.Height = 980
	window.WindowOptions.Title = "Gotron"

	// Start the browser window.
	// This will establish a golang <=> nodejs bridge using websockets,
	// to control ElectronBrowserWindow with our window object.
	done, err := window.Start()
	if err != nil {
		panic(err)
	}

	// Open dev tools must be used after window.Start
	// window.OpenDevTools()

	// Wait for the application to close
	<-done
}
