#!/bin/bash
sudo su
sudo apt update -y
sudo apt install apache2 -y
sudo service apache2 start
cd /var/www/html
sudo echo "<html><h1>Hello, World! This webpage belongs to Raghav....</h1><iframe width="875" height="492" src="https://www.youtube.com/embed/22bLNq6iCjU" title="Jai Shree Ram | Hansraj Raghuwanshi | Ayodhya Ram Mandir Song 2024 | Yug Ram Raj Ka" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></html>" >> index.html
exit
