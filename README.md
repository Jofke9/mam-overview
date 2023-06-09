# This is an overview in ReactJS of all Mines and Magic units for the Starcraft 2 version of the game made by Zolden.

All of the troops for the builders and researchable units have now been added.
I recently added a togglable calculator function to the site so you can calculate what researching/placing your units will cost. 

Personally, I found this overview to be very helpful for me. I always have it open on my second monitor when playing.
I believe it is definitely helpful when deciding what tree you'll research.
It could help other newer players and maybe more experienced players as well.

Now we'll talk about how to set this overview up locally.
It takes less than 5 minutes. If you don't want to do this, these are the researchable units prices as they are on the site:

![image](https://github.com/Jofke9/mam-overview/assets/128925439/011ce628-6082-4315-96be-394a0e92adf4)
![image](https://github.com/Jofke9/mam-overview/assets/128925439/5440173b-421d-4e8b-92fa-631ef6738230)

If you do want to take the time to do this, here's how.
The very first thing to do is clone or download this directory and unzip it.
These are just the source files to a React project, so to run this you'll need to run 3 commands. You also need Node.js installed on your computer.
This can be done [here](https://nodejs.org/en/download/).
After that you'll need to run the first command in the correct directory.
I will explain how to for Windows pc's, I'm not sure how to do it on Mac/Linux/...

First we need to navigate to the correct directory within the cmd, if you're on Windows that can be done in 2 ways:<br>
The first is very easy, but I'm not sure if this option is accessible for everyone.
You just navigate to the right folder in your pc, then right-click and click "Open in (Windows) Terminal)"

The second way is typing "cmd" (= command prompt) in your windows search bar and pressing enter.
After loading you need to navigate to the correct folder using the cd command. For example:

```
cd C:/Users/Jofke/Documents/mam-overview
```

Replace everything after cd with the correct path to where you saved the folder.<br><br>
You should be in the folder in which you see something similar to this, but without the node_modules folder <br><br>![Schermafbeelding 2023-04-25 134509](https://user-images.githubusercontent.com/128925439/234266857-b9756406-c77d-47d9-8b14-a89c6f5b2783.png)
<br>
After that run this command:  
  
```
npm install
```

This will create the 'node_modules' folder in the folder, which is needed to run the project. You only need to run this command once.

These are the commands you need to run to actually see the overview, run these in the correct folder as well.
You'll need to open 2 tabs in the cmd, one for each command:

```
npm start
npm run server
```

The first command just starts the react project, the second command starts the fake database server.
This second command is needed is because the info of all unit prices is stored in the db.json file and to be able to retrieve it you need to start this fake server.

After running these commands your browser should open the overview.<br>
If you want to stop the overview, close both the terminal (cmd) tabs and the browser tab.
If you close only the terminal window, the website will still work, but you won't be able to switch between builders properly anymore.

I personally have a .bat (batch) script file on my Windows desktop that looks like this:

```
cd C:\[path to where I have the file]\mam-overview
start cmd /k "git pull && npm start"
start cmd /k "npm run server"
```
 
I would highly recommend doing the same thing because otherwise it's quite annoying to use the overview since it's not deployed on a public domain.
I click the batch file (run it) everytime I start playing SC2 Mines and Magic and it automatically pulls the newest version of the code from git (since I cloned it) and opens the overview in the browser for me. If the tabs open in different cmd windows instead of one window with 2 tabs. Right-click the top of the cmd and go to settings and change the new instance behaviour to attach to most recently used window as seen in this image: ![Schermafbeelding 2023-04-24 162340](https://user-images.githubusercontent.com/128925439/234026539-14c88513-5fd9-41f8-b68f-599f3b82fe25.png)

If you have any questions/suggestions/bugs, contact me via the Mines and Magic [discord](https://discord.gg/qftSmBh9ex). My username on there is Jofke.
Please note that I am still a student and the code could definitely use improvements or can probably be coded more efficiently.


