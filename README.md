# Mathemagicus-Version-3.0

This is an updated version of Mathemagicus. I hope this is the final proof-of-concept before I have something comercially viable.

As of now, all of my assets are borrowed from somewhere else so this is not suitable for wide or comercial distribution.

Included as of now (2019/07/29) are the .html, .js, .css, and assett files. I'm going to upload a .rar later.

### Up next: the overworld logic.

Now that I have a simple menu in place for a player to choose their level I need to put one more thing into place for the player to choose how much time they have to answer a question. I'm also going to go through the style sheet and try to condense that as well. I've learned a bit more about classes that will help me consense things. 

I'm torn on whether or not to implement a "responsive design" at this point. I like the idea of it, in principle, but I don't like forcing the player into one a one-size-fits-all play area. We'll see...

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
