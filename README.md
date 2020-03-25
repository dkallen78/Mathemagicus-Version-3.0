# [Mathemagicus-Version-3.5](https://dkallen78.github.io/Mathemagicus-Version-3.0/mathemagicusV3.5.html)

This is an updated version of Mathemagicus. I hope this is the final proof-of-concept before I have something comercially viable.

As of now, all of my assets are borrowed from somewhere else so this is not suitable for wide or comercial distribution.

Included as of now (2019/07/29) are the .html, .js, .css, and assett files. I'm going to upload a .rar later.

### Up next: Thorough debug


### Notes to self:

#### Short term

Find a better principle for subraction hints

#### Long term

Training Hall/Challenges

Awards/Titles

Library

Sprites

Make damage numbers sway

## 2020.03.23

### Update

I've been chilling on Mathemagicus for a bit because I wanted to put in some work on other projects that I've had on the backburner. But today I put in a little "back" button that someone recommended I put into the initial screens. I'm not entirely happy with it but it works like it's supposed to. Baby steps.

## 2020.03.20

### Update

I found a pretty big bug that had to do with accidentally passing an event instead of a variable. I also found a few smaller bugs that were much easier to fix. I put in an increment to the player's damage (+1 after levels 20 and 40) and health (+5 after levels 10 and 30). I started to look at the subtraction hints and I stopped pretty quickly. They're not bad, but they have a few issues that I need to work out. I think I'm going to have to rewrite it because untangling it intimidates me. Is this tech debt?

## 2020.03.19

### Update

Nothing big today. I put in some new bits to wait until a monster's image is loaded before showing the next problem. It works how I wanted it to, but I still need to speed up the image loading. The nuclear option is loading all monsters for a catacomb every time it's visited. Hopefully tomorrow I'll take on the hints. We'll see how motivated I am.

## 2020.03.18

### Update

I got the rest of the biggish things done! I made a boss that I'm reasonably happy with. I made a BASIC tutorial for the controls. I made a save and continue feature. I'm really pleased with myself. I also worked some more on my landing page for www.mathemagicus.com and converted almost all of my colors (I just rememberd one I missed) to hsl so I could have a more consistent visual theme. I need to put a special test button back in for testing and I need to address a few more short-term issues, but I can call this a complete game!

## 2020.03.17

### Update

Today's project was implementing image preloading. I don't have it completely done but I've covered the worst case scenarios (ie the images that have been visibly slow to load when playing from the server and not the hard drive). It's a really neat technique and I put my own spin on it. But it works, the slowest images to load are now ready to go when they're needed.

I also cleaned up my www.mathemagicus.com landing page so it looks better and is more inviting to educators. I'm happy w/ what I've gotten done today.

## 2020.03.16

### Update

I updated the subtraction, multiplication, and division introductions (the ones that come before the key challenges); I added the scrolls back in w/ the updated spell information, though this time they don't show up on screen when earned, rather they occupy a page of the Liber Mathemagicus; I fixed the numbers in the subtraction and multiplication challenges; and I did a minor spell rework so that the Euler spell was an upgrade to the Fibonacci spell, and I renamed the Euler2 spell to Kovalevskaya because I wanted another woman mathematician in the game. I'm pretty happy w/ the day's work. 

## 2020.03.15

### Update

My brain is a little fried. I've been making small fixes and hunting down bugs for most of the day. After an extended battle with DOM event listeners I'm ready to take a break for the night. 

Maybe.

A big struggle was making the notifications available to keyboard interaction. The problem was I already had a keyup event listener working for my menu so I had to figure out how to put another one on top of the one I had w/out screwing it up. I did it and it actually works a lot better. I relearned/remembered about document.addEventListener() and had a lot of success w/ stopping propagation. Just like any change I seem to make, it exposed another bug that took an hour to eradicate. 

I added a notification so the player knows to go to the Mage Guild to get their first key; I gave the monsters different HP; I took out a function that slowed down gameplay; and I made the combat spell menu mouse clickable (I have to remember to make a button to make it appear as well...).

## 2020.03.14

### Update

I wasn't going to do any work on this today since I made a video instead but I decided to set up www.mathemagicus.com and when I was getting that to work right I found a big bug. Who would have thought that input.value = "" and input.value = null would do different things. It's starting to feel like duct tape and bubble gum but as long as it's working I'm on the right path. Tomorrow I'll do more work on my to do list. For now, enjoy being able to use the spell menu properly!

## 2020.03.13

### Update

I think I'm done putting new features into the game until I've finished what I have. I have so many little bugs and weird things to address that I've been doing that today. I started playing through the game and made a to do list as I went. One of those was adding a new trigger to the game that activates when the player learns their first spell to tell them how to use the spell menu. 

My big issue today was an errant onkeypress that got left in with all my onkeyup events. Even though I was setting my onkeyup events to null to "turn them off," this one onkeypress just stayed active and wreaked havoc w/ gameplay. But I got it, and I don't think there are any more onkeypress events to worry about. 

The end point for this process (before I put any more functionality in the game) is to make a final boss for the player to beat so they can say they beat the game. Then I can say it's in beta and start looking for an artist maybe... We'll see, tomorrow I'm going to keep polishing.

## 2020.03.12

### Update

Even though I got it started last night, I think I have finished the spell UI I intended to make. Changing the way spells were called and displayed caused a lot of bugs I had to chase out of my code but I feel confident that it's mostly under control. 

I also tackled an issue I had with how the time bar would decrease. I had to re-understand something I wrote months ago that I didn't comment very well but after figuring it out I'm very happy with the results. I need to stress test the time features more but I'm happy enough to work on something else for a while. 

Tomorrow (or maybe tonight) I'm going to break ground on the Library interface of the Mage Guild. That's going to be a big chunk of code but I want it so I'm going to do it. The problem is I know what I want it to do, but I don't know how I want it to look or how I want it to be done... If it's like the other parts of this I've worked on I'll get something that works, decide I want to change it, break it, then fix it again.

## 2020.03.11

### Update

I didn't have a lot of time today but I finished up the last challenge. I went with mirror numbers to increment the spells and the challenge was about a different form of of compensation.

I didn't start on the spell UI today... I did work on other UI things instead. The game can now be navigated exclusively with keyboard. It's not a perfect solution. The options menu for instance will need an overhaul if I add any more options to it. the element.focus() method isn't working like I want it to either so I'll have to figure out what's going on there as well. 

I'll just be doing minor updates until I go to bed but hopefully tomorrow I'll start breaking gound on the spell UI.

## 2020.03.10

### Update

I'm almost done improving the challenges to earn the spells. Before I had the player count up and down by 2s, 3s, 5s, and 10s (important skills) but I'm happier w/ what I have now which is Decomposition, more Distributive Property, and Compensation. All that's left is the 10s. I also had the player earn the spells by getting numbers that ended in 2, 3, 5, and 10 respectively. Now these spells are earned after spending a set amount of total time answering questions (20 seconds presently), how much damage the player takes (currently 5), and answering 5 questions in under 2 seconds. I'll work on the 10s tomorrow. I'm thinking maybe mirror numbers...?

Once that's all done, I need to do the spells differently. Currently there is an icon bar above the player's avatar w/ a bunch of symbols that are no longer relevant to the spells they are attached to. I'm thinking of maybe having the player push the space bar for a window to pop up w/ a list of available spells and a key to press (probably a number) to activate it. That way I don't have to worry about the icons at all.

The other issue I have to resolve are the pages for the individual spells in the Liber Mathemagicus. Previously I had a scroll that would appear on screen when a player earned a spell. The book would have a facsimile of that scroll. The problem is that all of my spells were earned by having answers equal to geometric numbers. Since that's not the case anymore, I have to completely redesign them if I want to keep them, and I want to keep them. 

## 2020.03.09

### Update

I don't know why I've avoided string templates for so long. They're pretty cool and I've been replacing some of the clunkier strings I have w/ the templates. Since I've been playing w/ my strings a lot I've also been improving the descriptions of a lot of things. I've been getting a lot of milage out of my new showText() function and my (poorly named) parseMath() function which parses my custom shortcode into HTML so my strings don't get super ugly. I'm super happy with the results. 

What I'm not happy with is how the player unlocks the last 5 spells. The first 3 are hint spells that I give the player unlimited uses of. The next two are based off of triangle numbers and square numbers and the player gets to cast one spell for each time an answer equals one of those numbers. I love geometrical numbers and those are really cool. In a previous version I used them a lot more but I decided I wanted the player to have more opportunities to use these spells. The problem is there aren't a lot of good integer sequences out there.

Further, the challenges for these spells, as they stand now, are pretty weak: adding and subtracting by 2, 3, 5, and 10. The last one is powers of 2 which I kind of like actually... Maybe I could do something based on place value or rounding for the other ones...

## 2020.03.08

### Update

I have audited most of the MIT CS 6.001 online course and I'm going back through putting stuff in and changing other things. On a personal note, I think I'm finally starting to understand recursion! 

I removed the typer function I borrowed from somewhere online because people hated the typing effect and replaced it w/ a smaller recursive function that I can use in a lot of places and I saved a bunch of code.

I cut a lot of the chaff out of the Mage Guild code to make it more compact and found ways to refactor the similar code. I think I shaved off about 500 lines of code...

All of the spell challenges are in the game and unlockable. I've improved them a bit but I think I can do a few days of work and really make them shine. The new showText() function gives me a lot of flexibility with what I can explain onscreen so I'm going to take advantage of that more as well.

With some of my new MIT knowledge I implemented a circular number class for when I need to loop over my arrays and other menu items. Because of this and my new understanding of Python I'm really hoping for operator overloading in the near future for Javascript. 

I've been going through the CSS as well trying to cut down the 1500+ lines of CSS.

Currently, I'm going through the program looking for ways to implement keyboard functionality on every screen.

## 2019.08.26

### Update

I put in most of the other challenges today. I don't really like them but they're in there and can be changed later. I want to talk to math teachers to find out what kinds of drills and skills students need and cater to that. I have one more to put in which shouldn't take too long. After that, I need to make sure they're unlockable in the game when they're supposed to be.

I also fixed a bug I discovered. The timer bar was slower than actual time. So the time I was keeping wasn't the same as the time on the bar. Not a big issue but it needed to be fixed. I found a way to make the timer bar directly dependent on the system time and not the setInterval() function I used to run it roughly every 10ms. It was a simple solution and it made the class I use to manage the timer a bit simpler as well. Good times.

## 2019.08.25

### Update

It's Sunday so I didn't work too hard today. I learned the basics of using fetch to get my JSON files. I'm not sure if i'm going to keep using that or XMLHTTPRequest... I got some good advice on how to use my IDE (Atom) to run a local server for easier testing of my program and how it gets files. I also started changing some things so that I had Chrome and Firefox support. It turns out Chrome doesn't like .ontransitionend. Who knew? I also started putting in support for other languages by making all of my text in a JSON file that gets loaded at the beginning of the game. I'm not going to play a lot more with that until I get a good idea of what the text in the rest of the game will be.

## 2019.08.24

### Update

I've put all the spells into the game. I still have to do all of the challenges for them but I've got the magic in. I also put in a button to let you leave the catacombs whenever. I'll probably have to take out that every 5 monsters "intermission" function that I didn't really like anyway. I also fixed some bugs and other stuff.

## 2019.08.23

### Update

I've put in the Reduce Terms spell, but it doesn't quite work the same. Since my terms aren't global variables anymore I can't just divide them in half like I used to. Instead, I produce new terms that have a smaller range. This doesn't guarantee a problem w/ smaller terms but I kind of like the chance that it backfires.

Putting in the spells is tricky because for everyone I put in, I have to make an accompanying challenge. Converting the old spells into my new system isn't too hard, but the new challenges slow me down because I can't decide exactly how I want to do them.

I've also put in a lot of work with the notification system. When there are notifications now a little box blinks on top of the play area. When the mouse hovers over this box, the notification(s) show up in a drop down. I've thought about making them clickable but I'm not sure that's possible w/out an overhaul. I'll look into it.

I made the options menu functional as well. Only the text speed option is functional at this point but I'm very happy w/ how it works.

## 2019.08.22

### Update

I feel like I did good work today. I shoe-horned the Fireball spell into the game and I started setting up the Options menu. The Fireball spell is a bit less ugly than it was before and I am very proud of the class I made to handle the individual menu items for my Options menu. 

## 2019.08.20

### Update

I made a new splash screen for my "company" Shadycrzy Games and I revamped the opening screen menu to be a little more stylish. The good part is I love the way it looks. The bad part is that I'll probably end up wanting to update other menus I have... 

## 2019.08.19

### Update

I've made a "quiz" for earning 4 spells so far but 3 are for the hint spell. I have to do the rest next and figure out how to handle subtraction hints because they don't use distribution or association.

## 2019.08.16

### Update

I've added a new menu for giving the player spells (when they've unlocked them). It's a more traditional looking menu than my left to right scrolling one. Spells are going to unlock after specific levels in the game and there will be a small "test" associated with them. Hopefully it's not as ugly as the code for the Catacomb keys...

## 2019.08.15

### Update

I've put in the boss monsters but I don't know what rewards they will give. I've put in some rough notifications as well but I feel like there's more functionality to be added to that later. I ran into an issue in the Liber Mathemagicus because I changed one of the spell variables. I had to change some stuff up and write some new functions but everything works the way it did before now. I had a browser update last night and now my XMLHttpRequest doesn't work anymore, so that's the mountain i'm climbing today.

## 2019.08.13

### Update

I put in the functionality to open up new catacombs. The player has to complete an untimed challenge that's only available after passing a certain level. It's ugly code but I refactored some of it today. I know it can be improved, I just need to crunch it out and do it.  

## 2019.08.12

### Update

Duct tape and bubble gum. I made the subtraction challenge and put together a Mages' Guild interface but it's ugly and I don't like it. The code is ugly, I'm too close to the interface to decide if it's ugly yet. Tomorrow I want to try to address what I hate about the program structure. Ugh.

## 2019.08.11

### Update

I didn't get a lot done in the past two days but I've begun to create the functionality for the "Mages' Guild." This is my answer to "How to level up." I'm tired so it's probably ugly but that's okay for now.

## 2019.08.09

### Update

I feel like I got a bunch done today. I've got the hint functionality in. This time it's an endless use spell. I've also got the Algebra and Sequence problems back in there. The flashing screen bit was tricky but I think I handled it well by making it a class. I want to go back to the hints though because the function is such a mess and the hints are kind of crap for anything but addition. But that logic is a pain in the ass which is why it's so ugly. After I get it put back together I'll worry about that.

## 2019.08.07

### Update

I've got the basics of the game mostly put together. I don't have magic. I don't have multiple problem types. I don't have the ability to level up or unlock more difficult problems. I can put a problem on the screen, check if it's right, kill a monster, and take damage. I did a lot of work with the time down functionality as well. Instead of a bunch of variables and a function I've got a class. I'm digging this class stuff now that I'm figuring it out. I'll probably put more in there. 

## 2019.08.06

### Update

I'm starting to put in the code for the combat. This was one of the first things I made in v2.0 so it's the ugliest. It's also the part I added to the most after the fact so it works but it isn't elegant or pretty. I'm working to fix that while changing how the game works. 

As of now I've got the bits that make the combat screen, the function to check key presses, randomly determine problem type, get problem terms (no sequence or arithmetic yet), and display a problem. And I've got a class for making monsters. I also made the timer function into a class. I don't know why, it just seemed like a good idea at the time. 

## 2019.08.02

### Update

More consensing of code to make more things simpler (I hope). I'm putting the final touches on the menu before the player enters the catacombs and actually does some math. 

## 2019.08.01

### Update

I've condensed more of the code but I haven't added a lot in yet. My big project for the day was putting in an extra menu layer when the player chooses a dungeon so they can choose their difficulty. I've also started taking a closer look at the CSS. I should have been rewriting that from the start as well... Still, I'm happy w/ what I've gotten done w/out even having a full day of work.

## 2019/07/31

### Update

I've got the Liber Mathemagicus up and running. I've cut out a lot of the redundancy. Right now I'm at under 2,100 lines, which is aver 300 fewer than v2.0. I've probably got some more to clean up but I'm happy with where thing are right now. 

## 2019/07/30

### Update

I'm building the overworld menu. The biggest change so far is instead of having the four dungeons laid out in a table, I have a menu similar to the one I used for character selection. In fact, I made the whole menu making process a function that takes customized objects as variables. I also made the player variable from an object into a class. I even used a getter! 

I'm in the middle of putting in the Liber Mathemagicus. I have to change a bunch of variables along the way and I'm also making the code easier to read by using helper functions. I'm happy w/ how it's going but no one wants to look at my older work to say if I'm improving. I'm going to have to rely on my own opinion of myself. I like it.

## 2019/07/29

### Update

I've rewritten all the functions for the game intro and any helper functions that they need. The code I'm using isn't drastically different than that of version 2.0 but I'm trying to organize it, clean it up, and make it more legible. 

In contrast to the last version, this one has no global variables!
