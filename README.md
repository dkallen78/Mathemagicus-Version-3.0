# Mathemagicus-Version-3.0

This is an updated version of Mathemagicus. I hope this is the final proof-of-concept before I have something comercially viable.

As of now, all of my assets are borrowed from somewhere else so this is not suitable for wide or comercial distribution.

Included as of now (2019/07/29) are the .html, .js, .css, and assett files. I'm going to upload a .rar later.

### Up next: Challenges

Now that I have all of the spells in the game I'm going to start work on the challenges for the player to earn those spells. 

### Notes to self:

Find a good principle for subraction hints

Work on the hints

Improve the division challenge

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
