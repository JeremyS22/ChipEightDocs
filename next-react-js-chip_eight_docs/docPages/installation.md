---
title: "Installation"
description: "How to install and run ChipEight on Windows 11 and Ubuntu Linux" 
---

<h1 id ="installation-id"> Installation </h1>


This page goes over the steps to install ChipEight.  
> <div className = "blockquoteShading">Note that only debian linux, specifically Ubuntu, and Windows 11 have been tested.  Other operating systems will be added later.</div>  

<h2 id ="linux-id"> Linux </h2>

This section will show you how to install these tools to get ChipEight built and running: 
>**Git**  
>**SDL2**  
>**Mingw32**

1. Open your terminal and install **Git** by typing 
<p className = "codeBlock">sudo apt install git-all</p> 
1. Pick a location to clone the ChipEight repository and type 
   
<p className = "codeBlock"> git clone https://github.com/JeremyS22/ChipEight.git</p> 
    
>*If for some reason the link doesn't work, go to <a href = "https://github.com/JeremyS22/ChipEight" target = "_blank">ChipEight's repository on Github</a> and copy the page's url (whether it's the address bar or from clicking on the green "code" button)* 

3. Type 
<p className = "codeBlock">cd ChipEight</p> 
4. ChipEight uses **SDL2** and **lmingw32**, you'll have to install these libraries (If prompted for either of these type 'y'): 
   - **SDL2:**
<p className = "codeBlock"> sudo apt-get install libsdl2-dev </p>
   - **lmingw32** 
<p className = "codeBlock">sudo apt-get install gcc-mingw-w64 </p> 
1. Build and compile the code by typing  
<p className = "codeBlock">g++ -g -I src/include -I src/include/SDL2 -L src/lib -o src/bin/ChipEight main.cpp Cpu.cpp Screen.cpp Memory.cpp Keypad.cpp Debugger.cpp ChipEight.cpp -lmingw32 -lSDL2main -lSDL2 -lSDL2_ttf</p>
1. Finally run the builded linux executable by typing 
<p className = "codeBlock">./src/bin/ChipEight</p> 

<div className = "blockquoteShading">Note: The ChipEight emulator is still in early development, so it's very likely some roms won't be fully or playable at all. </div>  

