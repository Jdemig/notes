# Calendar Syncing Tool Notes

## Login

You'll first need to install Putty and FileZilla

Once you install those connect to the server

Host: 138.197..170
User: fluxteck***
Pass: ***
Post: 22 (or you can leave it empty)

You can use these credentials for both FileZilla and Putty

The tool is in the directory /home/fluxteckssh/sunmountain

You can get to it by typing the follwing

`cd sunmountain`

Inside that folder you'll see a server.js file.

This is the only file you should need to edit

In FileZilla you can edit it by right clicking the file and clicking View/Edit (this is the easiest way although you could edit it will Putty as well)

Run the follwing command to make sure that the proper node version is being used:

`export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"`

To stop the program that is already running type:

`node_modules/forever/bin/forever stopall`

To start the server type:

`node_modules/forever/bin/forever start server.js`

These two commands will only work from inside the sunmountain folder.

You can also type the following to see if the program is already running:

`node_modules/forever/bin/forever start server.js`

Once you're done making changes to the file make sure it's uploaded in FileZilla

Then run the program with:

`node server.js`

Run this command to start the server temporarily. This command is the same as the other server starting command except that it will stop running if you close Putty. This command will also allow you to see any errors directly in the console.

If you want to see any error that popped up while the forever process was running the program go to /home/fluxteckssh/.forever

This will contain a bunch of log files

