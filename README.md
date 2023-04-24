## This is an overview in react of all Mines and Magic units for the Starcraft 2 version of the game made by Zolden.

Right now, the rewards builders' troops haven't been added yet, only the base builders and the researchable units have.

Personally, I found this overview to be very helpful for me. I always have it open on my second monitor when playing.
I believe it is definitely helpful when deciding what tree you'll research.
It could help other newer players and maybe more experienced players as well.

Now we'll talk about how to set this overview up locally.
It takes less than 5 minutes.

This is just the source files to a React project, so to run this you'll need to run 3 commands. You need npm installed on your computer.
This can be done here: https://nodejs.org/en/download/

After that you'll need to run the first command in the correct directory.
I will explain how to for Windows pc's, I'm not sure how to do it on Mac/Linux/...

If you're on Windows the start can be done in 2 ways:
The first is very easy, but I'm not sure if this option is accessible for everyone.
You just navigate to the right folder in your pc, then right-click and click "Open in (Windows) Terminal)"

The second way is typing "cmd" (= command prompt) in your windows search bar and pressing enter.
After loading you need to navigate to the correct folder using the cd command. For example:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cd C:/Users/Jofke/Documents/mam-overview

Replace everything after cd with the correct path to where you saved the folder.
After that run this command:  
  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;npm install

This will create the 'node_modules' folder in the folder, which is needed to run the project. You only need to run this command once.

These are the commands you need to run to actually see the overview, run these in the correct folder as well:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;npm start
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;npm run server

The first command just starts the react project, the second command starts the fake database server.
This second command is needed is because the info of all unit prices is stored in the db.json file and to be able to retrieve it you need
to start this fake server.

After running these commands your browser should open the overview.

I personally have a .bat (batch) script file on my Windows desktop that looks like this:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cd C:\[path to where I have the file]\mam-overview
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;start "" cmd /c "start npm start & start npm run server"
 
I would highly recommend doing the same thing because otherwise it's quite annoying to use the overview since it's not deployed on a public domain.
I click the batch file (run it) everytime I start playing SC2 Mines and Magic and it automatically opens the overview in the browser for me.
This way I can look at it whenever I need the information.
