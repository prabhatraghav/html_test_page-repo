#!/bin/bash
sudo apt update -y
sudo apt install apache2 -y
sudo service apache2 start
cd /var/www/html
sudo mv index.html bckup-index.html
sudo wget https://raw.githubusercontent.com/prabhatraghav/html_test_page-repo/main/homepage/index.html
sudo wget https://raw.githubusercontent.com/prabhatraghav/html_test_page-repo/main/homepage/home.html
sudo wget https://raw.githubusercontent.com/prabhatraghav/html_test_page-repo/main/homepage/style.css
sudo wget https://raw.githubusercontent.com/prabhatraghav/html_test_page-repo/main/mediaplayer/mediaplayer.html
sudo wget https://raw.githubusercontent.com/prabhatraghav/html_test_page-repo/main/mediaplayer/media-player.css
sudo wget https://raw.githubusercontent.com/prabhatraghav/html_test_page-repo/main/mediaplayer/media-player.js
sudo touch homepage.html
sudo echo "<html><h1>Hello, World! This webpage belongs to Raghav....</h1><a href="https://youtu.be/zqGW6x_5N0k">ANIMAL: ARJAN VAILLY | Ranbir Kapoor | Sandeep Vanga | Bhupinder B, Manan B | Bhushan K</a></html>" > homepage.html
sudo mkdir files
sudo chmod 755 files
cd /var/www/html/files
sudo wget https://raw.githubusercontent.com/prabhatraghav/html_test_page-repo/main/media/osanam.mp3
sudo wget https://raw.githubusercontent.com/prabhatraghav/html_test_page-repo/main/media/bazaar.mp4
sudo chmod 755 *
sudo service apache2 restart
