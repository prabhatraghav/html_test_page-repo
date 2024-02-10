ge#!/bin/bash
sudo apt update -y
sudo apt install apache2 -y
sudo service apache2 start
cd /var/www/html
sudo touch homepage.html
sudo echo "<html><h1>Hello, World! This webpage belongs to Raghav....</h1><a href="https://youtu.be/zqGW6x_5N0k">ANIMAL: ARJAN VAILLY | Ranbir Kapoor | Sandeep Vanga | Bhupinder B, Manan B | Bhushan K</a></html>" > homepage.html
