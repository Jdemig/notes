Nov 12, 2025

## Daily Team Scrum \- Transcript

### 00:00:00

   
**Mathias Falci:** Good. How about you? Hello.  
**Jonathan Emig:** Good. Good. Um, I'm gonna have to hop off in a minute. I actually have another call scheduled for the same time.  
**Alexandr Cosov:** Hello.  
**Jonathan Emig:** That's in here.  
**David Živković:** So, I guess Jonathan won't be joining us today. We're missing Gabrielle, who's not coming, and Andre. But yeah, I guess we can start. So, does anyone have anything they want to uh talk about before we start the rounds? Guess not. Okay. So for my updates, uh nothing uh in particular. I'm uh still working on the recosition overrides for all the stage settings and yeah, hope to wrap that up soon. Um,  
**Alexander Russkikh:** Uh hello. So I did a couple of reviews in the morning. Then I proceeded to to like wrapping the ingest solution in the one second in the uh wrapping the coming up with a Docker compose that would allow us to to to to run the the separate database the separate radish and the nest GS as well with the NGS service as is and it's still like working.  
   
 

### 00:03:07

   
**Alexander Russkikh:** So this is a local image that is running but all the services in the docker compose and if I like triigger I don't know it still works the same way. So there is an issue of refresh because there is like a pooling 30 second or or what not but if you refresh it's fine. It depends really how you hit uh in what timing do you hit to to see the that dashboard re like render anyway. But yeah I mean it's still kind of like doing the delay. all of this stuff. Uh so having said that uh I think it's perhaps I'm still like setup is not 100% some environment variables variables or such but at this point we can we can try to deploy this in development environment and so after this uh yeah I mean see it's like finalized so the the delay so the attempt then the delay then Yes, the so uh branch delay then not that delay I think basically it's like one setup that I did then it's an action and then finalized uh so having so we can try to deploy this to the environment development environment and see how it goes and now I'm working on the on the communication layer um database uh for this uh to get us started.  
   
 

### 00:04:39

   
**Alexander Russkikh:** I mean I realized that the setup in the database would be for now at least much much simpler. I think we need just the automation template and actually the automation which is kind of a run of the template. We will be adding things here and then there is like a status but uh the status is actually status of the run. We will be able to somehow pull it from there. Um yeah I'm like working on this. I'm going to try to create an end to end flow. So the front end saves to persist in the database and then from the from there on I will run a trigger and see if in the end it's going to work fine. It will go through inest and then just will send the action back to to skylish skylis.io. Yeah, that's what all I've got for now.  
**Alexandr Cosov:** Hello everyone. Uh so yesterday after the daily we've paired with David regarding some issues with the interview step while debugging the show spotted some issues with the front end.  
   
 

### 00:05:56

   
**Alexandr Cosov:** Basically some layout stuff and the view inter details action uh stuff got broken for some reason. So I fixed it. Then I have uh today I've also fixed the issue with the calendar uh related drawers. Basically, let me show you. Uh yeah, so there were a couple of issues there, mostly visual ones. Uh first of all, the scroll bars were behaving oddly. There were there was one common scroll bar for the entire drawer. Uh instead of uh having like a separate scroll bar on the side with the form and on the side with the calendar. So, I've done that. Uh, then I've also noticed that uh previously the 11 p.m. on some screens was like being covered by the footer. So, I've added some media queries to uh change the like scrollable size of the calendar. Um, yep. And uh this applies both to request uh request availability and uh schedule yeah manually schedule uh drawer. Uh so yeah there is a PR with the video of it and uh yeah then I've uh continued my work on the new stage settings.  
   
 

### 00:07:21

   
**Alexandr Cosov:** Basically they will have really similar uh form to the forms to the ones we use in the create stage drawer when while we're creating pipeline templates. So I want to make them reusable. Uh and yeah uh that's that's it from my side. Thank you.  
**Andrei Botalov:** Uh hello I have uploaded candidates to talent pool one of the clients and I worked on request availability and submit availability and to end tests and to test so that I request availability as a companies and then I submit availability as a jobseker and I validate the interview times that show the availability slot times that are shown in the calendar. That's it.  
**Estevão Ribeiro:** And yesterday I spend my entire day fixing uh testes inside VA for VA addition process. Uh today uh I'm currently working on the the CDC pipeline to add support for the lab test tag on the docker build. Uh I also fix an issue uh actually it's a workar around uh inside our GitHub runners. yesterday identify an issue with the Docker API. Uh it seems uh the old Docker G uh container doesn't is it's not compatible with the current uh Docker running inside our nodes.  
   
 

### 00:08:58

   
**Estevão Ribeiro:** But I discovered this morning that it's possible to inject and change the API compatibility. Uh and I in the afternoon I will return for the VA tasks. That's it to my end.  
**João Tenório:** I think it's me. Yesterday I have worked on the new solution to add the candidates into the talent pools and I had some discussions about the AI sourcing. We have some cost issues with the whole solutions and we need to optimize creating new uh pipelines for the bronze and silver layer and a new strategy to save the embeddings in the developing search. That's all.  
**Mathias Falci:** Thanks, Ron. Um, hi everyone. So, basically on my side, I have been working some improvements and some bug fixes as well. Uh, yesterday, uh, like Jonathan mentioned in the chat here, he sent me some comments on my PR, some real good comments just to, uh, refactor some parts of, uh, the code with the components that we already have to use the the design tokens from Taywind and so on. uh he he shared with me the our design system as well. So I will pay attention to it in the next uh feature. And now I'm I'm focusing some minor bug fixes. Uh currently I'm I'm fixing a a problem that we have in the uh hiding let me just check it here to not say something wrong in the hiring team model. Uh basically uh we can't remove the user group from it. So actually it's a front end problem. It's a a problem in the state management because if you if we refresh the page, we have it removed. So yeah, I'm finishing it here and I will open the PR and probably I will continue in those bug fixes. And yeah, that's it from my side guys. Thanks.  
**Alexandr Cosov:** See you everyone. Bye-bye.  
   
 

### Transcription ended after 00:11:41

*This editable transcript was computer generated and might contain errors. People can also change the text after it was created.*