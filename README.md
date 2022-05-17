# Set Desktop Background as Astronomy Picture of the Day

This allows you to set up a crontab that runs the shell script to pull down the APOD!

The ImageGrabber.js pulls down the image and description from the nasa api using the provided nasa api key. 

Currently this is setup for debian distro with gnome but the ImageGrabber should work on most OS.

Add to crontab like so:


15 0 * * * /home/{path to script}/APOD_Background_pull/setAPODWallpaper.sh >> /var/log/APODOutput.log 2>&1


This will then add the new image every night at midnight.

This gives a nice daily image to learn about space as your desktop background.