---
title: "Development Log"
description: "Insight of what I've learning make this emulator that will hopefully help you in yours"  
---

# Development Log 

This page goes over things I've ran across in developing this emulator that could hopefully help other people in making their own.  

### Opcode Complications  

#### DXYN Instruction, VX & VY and What they Mean 

- VX represents the second nibble of the opcode (not the x coordinate directly).  Same for VY  

- VX is just a name for representing a Cpu register (V0, V1, V2 . . . etc. VF).  Same for VY  

- Each sprite data is alway 8 bits long (ex. 00001111, 00000001, 00001011, etc.)  
 
- the annn instruction stores this sprite data in the address of register I, and increments N times (that's what the N stands for in DXYN)  

The VX and VY esepcially confused me until I realized what those where referring to.  Turns out VX and VY is used a fair bit in various documentation to refer to different nibbles in the opcode, the DXYN instruction is just one of them.  As a newbie to Chip 8 emulation, this naming scheme was something I wasn't privy to, but since it's used consistently throughout various different documentation, I eventually caught on.  

#### Fx33  

This is a strange one and can be a little confusing interpreting this instruction from documentation.  Basically you want to take the number in register VX and store each digit sequentially in memory.  The key here is that they need to be a decimal number (a normal base 10 number).  Not binary, not hexadecimal.  Initially this confused me, but basically after you understand BCD, how to access each digit and what I just mentioned, it's not confusing.    


### Lesson's Learned 

#### Small Mistake in Cowgod's Documentation 

If you're following <a href = "http://devernay.free.fr/hacks/chip8/C8TECH10.HTM#3xkk" target = "_blank">cowgod's tutorial</a> I noticed there is a mistake in their documentation.  It mentions that the stack pointer "can be 8 bit", but this is wrong.  This should be 16 bit, not 8.  

Because of this, when I attempted to set my stack pointer, the 3 nibble address at the top of the stack truncated into 2 nibbles!  Don't make the same mistake.  And remember, it's always best to refer to several resources/documentation and compare between them as there can be mistakes.  


### Recommended Order 

If you're completely new to emulation and don't know where to start, I have a recommended initial first few steps to take that I've found helped me.  

So the order I recommend is to start on the IBM logo boot ROM, it only includes 4 instructions and will get your emulator and it's instruction loop up and running.  Then move to Timendus' test suite and try to get those ROMs fully running and working.  While working through his <a href = "https://github.com/Timendus/chip8-test-suite?tab=readme-ov-file#corax-opcode-test" target = "_blank">Corax+ opcode test ROM</a>, I recommending implementing the **2nnn** and **1nnn** (if not already implemented for the IBM logo ROM) opcodes first.  As these instructions can really break your emulator if the jump or pushing and popping off the stack mechanics aren't implemented correctly.  

I learned this very quickly when I was first starting out.  After getting my first ROM to be fully implemented (IBM logo boot ROM) I was so excited and thought "let's try to tackle a full game like space invaders or tetris", but I quickly realized after running these games that my emulator lacked the instructions to properly run them.  So I was trying to figure out how to go about implementing these ROMs.  Eventually I found Timendus' test suite which helped iron out some of the opcodes needed to run these games.  He also includes a Screen test, flag test, keypad test and more which have been a huge help and <a href = "https://github.com/Timendus/chip8-test-suite?tab=readme-ov-file" target = "_blank"> I recommend checking out</a>.   





