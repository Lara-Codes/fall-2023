# fall-2023

	Hi! My name is Lara Palombi and I am a computer science major. Listed below are the computer science classes I have taken: Computer Science I — Computer Science III, Assembly Language and Computer Architecture, Operating Systems, Object Oriented Programming, Discrete Math for Computing, Web & Database Programming, Digital Logic, and Processing.

	I’ve done a few projects. As I mentioned in office hours, I wrote two Spotify web apps. One accesses a user’s library, takes all of the user’s music, and puts it in a single playlist. The second is a random shuffler tool that allows a user to randomly shuffle through their playlists, because Spotify’s shuffle feature favors recently listened to tunes. I implemented the Authorization Code Flow with PKCE and used access tokens to make API calls. In the initial stages of the app, I connected a MongoDB backend and put all of the user’s music into the database. My original idea was to have the user’s “All Songs” playlist to be asynchronously updated as the user adds/deletes songs to their library. However, since I want to get an extended quota for API requests approved by Spotify, I removed the database feature and used JavaScript sets instead and a user can click the “update playlist” button on my app if they want their playlist to reflect their current library. 

	I also wrote a PowerPoint audio transcriber. I was taking an asynchronous class for Intro to Theatre, and the professor gave us our notes in many PowerPoint files. However, there was no text in any of these PowerPoints — there were individual 2-4 minute m4a files embedded in each slide. I don’t process audio information well, so needless to say, this stressed me out. Each PowerPoint was almost two hours of listening! So, I wrote a bash script to extract all of the m4a files from the PowerPoint and put them in a folder. Then, the script executed a Java program to make a text file listing all of the audio file names in the folder and sort them by increasing order. Then the script used the ffmpeg library to combine all of these m4a files into one single m4a file. Then the script executed a Python program to take the m4a file and I used the WhisperAI API to transcribe the audio file. This way, in one click, I had full transcriptions for every PowerPoint lecture. 

	I have many more programs that I’ve written but those are the two I did this Summer! I am really excited to take this course because based on the course description, it seems like you have a very wholistic and thorough approach to web programming. I think it would be cool to use the skills I learn in this class to build a social media application that connects LGBTQ+ people who are looking for roommates in different cities. I feel that the skills I learn in this class will certainly be helpful when applying to jobs or an internship for the Projects course. I have received a few requests from different people for me to build them a specialized application. However, I declined these offers because I do not yet feel confident that I can provide them with a quality product. I believe that this class will help me develop the confidence to be an independent developer as well. 

Looking forward to taking the class! 

Lara Palombi 

![Picture of me!](./me.png)