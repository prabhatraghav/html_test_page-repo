ge#!/bin/bash
sudo apt update -y
sudo apt install apache2 -y
sudo service apache2 start
cd /var/www/html
sudo echo "<html><h1>Hello, World! This webpage belongs to Raghav....</h1></html>" > homepage.html
