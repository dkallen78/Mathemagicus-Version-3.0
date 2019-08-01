# Mathemagicus-Version-3.0

This is an updated version of Mathemagicus. I hope this is the final proof-of-concept before I have something comercially viable.

As of now, all of my assets are borrowed from somewhere else so this is not suitable for wide or comercial distribution.

Included as of now (2019/07/29) are the .html, .js, .css, and assett files. I'm going to upload a .rar later.

### Up next: the overworld logic.

Now that the book is done I need to figure out what else to do before I get to the dungeons/catacombs. I want to implement a system where the player can choose their difficulty/level. That means having different timer speeds and being able to select the problem difficulty after having unlocked it. I need to get that set up before I get too far ahead in any of the dungeon stuff.

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
