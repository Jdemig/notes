Nov 14, 2025

## Daily Team Scrum \- Transcript

### 00:00:00

   
**David Živković:** Hey guys.  
**Jonathan Emig:** Hey, morning.  
**Alexandr Cosov:** Py.  
**Mathias Falci:** Help.  
**David Živković:** I guess we're just missing Andre, but I I think we can start. Uh, so before we stack the ground, does anyone have any context table to bring it up? I guess no. So for my updates, I prepared a PR for the the custom like perosition overrides of many of the fields for the new stage types. Uh, yeah, it's in video. I got a comment from JA about to resolve it. I'm also also added the backend changes for the small update Parker asked me to do about manual scheduling to support custom event titles. Uh after that, I'll fix an offer letter bug assigned to me and then I'll move on to refactoring the the Nless web hooks. Yeah. So that's uh that's it from my side. Click something.  
**Alexander Russkikh:** Uh yes hello. Uh let's see if this presentation goes well. Uh so this is the front end the back end for creating and updating the notes at least.  
   
 

### 00:01:51

   
**Alexander Russkikh:** So we can create we create automation template. So we go in there we start uh adding stuff. Uh so I don't know save intermediary result. It's saved. If we refresh now it should actually get loaded again with the current state from the database which it does. Then we can continue. We can save this. We refresh as well. and seems to be somewhat working. So, uh yeah, this is what uh I've been doing so far. So, this is the foundation that would allow us to uh to actually plug in the Jest project on top of that. Uh but there is still so much work to do to be honest. But at least the main like storing layer between the front end and the back end works. So you can see that we are storing things like uh the type of the node, the meta data trigger type did not get saved. the interesting okay it's the trigger okay legacy field the type of the trigger then the type of the action as well action type I need to normalize this field names but yeah so we we are actually sending data that matters from perspective of uh inest like things like position dimensions selected state none of that is being stopped part because the way how it works it actually gets loaded into into like a degree degree is like a  
   
 

### 00:04:01

   
**Alexander Russkikh:** tree graph structure. So by not saving any position with absolute uh dimensions and the positioning the the the function degree actually based on the nodes and the edges can automatically re rebuild all of it without any knowledge of the you know path without any knowledge of the position but knowing the path described nodes and edges as you can see just does it pretty Well, and yeah, that's it on my side for now.  
**Alexandr Cosov:** Hello everyone. Uh Alexander, could you let me? Yeah, thank you. Uh so today I've been uh focused on two things. One of them is a bug uh regarding not being able to assign a drop pipeline to a draft requisitions. Uh so first of all, I've tested how our draft uh inter uh requisitions well how the UI works when uh you have a draft requisition and you try to open it. I'm just creating a draft requisition here. So I'll quickly scroll through it. Yep. So here we are. We have created the draft requisition and whenever we click in the UI on it, the requisition creation/editing wizard opens up and you can uh open a pipeline setup uh step and uh I don't know uh add a pipeline assign a pipeline to the requisition if needed.  
   
 

### 00:05:42

   
**Alexandr Cosov:** Um yeah, so I'm just here checking whether everything works. And yeah, basically the buck was about uh saving a requisition as a draft one while not well, it doesn't have assigned an assigned pipeline template ID and I haven't really figured out a way to open the like requisition details page through the UI. So I've just done it uh by changing the URL to replicate it. And uh the thing is that when you're opening when you click view pipeline and this requisition doesn't has one assigned there is an empty state and uh before this fix uh yeah while you will were clicking select uh hiring template nothing was happening for some reason we just didn't haven't done it. So uh now whenever the requisition is lacking a pipeline template assigned to it and you can like enter the pipeline name select pipeline template. Uh the button is save because you don't have one and you don't need to do the whole migration thingy. So yeah when you do that it where was it? Yeah. Um pipelines template gets assigned.  
   
 

### 00:06:55

   
**Alexandr Cosov:** Looks like it's working. Uh I've also tested the pipeline migration uh in this case. Yeah, I'm just creating a new template pipeline editing and creating it and editing to make sure that I haven't broken anything. But yeah, long story short, the pipeline template migration works as well. Yep. map and we go through the existing flow and then I've done a big cleanup. Uh I've removed uh basically a scheduleuler v3 feature flag and removed non-scheduler v3 components. Uh yeah uh quite a lot of stuff got removed but uh yeah I uh don't want to merge it until Andre will test it. But before I I will ask Andre to test it once I'll have my uh end to end test green screen. Uh and generally I need to give some a little bit more love to this PR. But yeah uh please if you won't see the Andre's approval here don't merge it if you'll need for some reason. Uh I want to make sure that we are not breaking anything with it.  
   
 

### 00:08:08

   
**Alexandr Cosov:** Um yeah that's mostly it from my side. Thank you.  
**Andrei Botalov:** Uh hello I have a vector on converted end to end test workflow to use uh the basium. I fixed a couple of leaky end to end tests and end to end tests and I checked a few issues related to production u and I fixed I think some yeah uh request availability pull request. Uh that's that's it.  
**Estevão Ribeiro:** Uh hello folks. Uh yesterday I spent my entire day fixing issues for for Vanta. Uh I also supported uh Alexander with the prism setup in the Kadis automation. Uh this morning I share with him uh the the new variables that we need to add inside the repositor. And I think uh once we add this these variables inside the helm chart configuration we are going to be able to merge without uh create issue inside kubernates. Uh and uh today I will resume the sun uh task inside the skis.io Let's see to my  
**Gabriel Rocha:** Hey guys, let me share here. Yep. Uh yesterday, let me remember.  
   
 

### 00:09:51

   
**Gabriel Rocha:** Oh yeah, here on the analytics tab in the detailed form view where you can see the answers. Uh now it's working properly like I found why embeddible is was overriding the window fetch. So now now I can restore it after there they mess with it. Uh now all the graphs are loading properly. We have loading states the data for analytics. I also we have uh the option to add the file upload uh questions. So there's answers or files stored in S3. Uh so I had to to handle uh in a different way here to to open it because we needed to to get the press sign URL. So I added this loading state uh and we get it just when the user clicks on it. So we don't need to fetch every single item on the listing before the user needs need it. Uh and today I'm working here on the hm tab. Uh, previously it was just a big loading spinner here on the the center of the screen and it was loading.  
   
 

### 00:11:16

   
**Gabriel Rocha:** Now I I split some queries. Now we have a more granular control of what's loading here. Uh, and it was possible to add this nice skeleton loading. Uh, and also how it will share the same filter bar here uh, uh, in the analytics tab. Uh previously it was messing the page because it was selecting some filter in the analytics tab and the old page was uh entering the loading state. Uh that's it. No blockers.  
**João Tenório:** Yesterday I pushed some fixes into the production environment. One of them was the default source when candates apply from linking. And now I am working on some AI sourcing bugs. That's all.  
**Jonathan Emig:** Um yesterday I was working on requiring Google off for workspaces. The idea is that a user will be able to log in with any authentication method but we'll gate certain workspaces that require Google off. So step one would be to um simply have the UI uh gate the user and then step two will have to gate some endpoints as well. Um, so you're working on that and then some updates for Brandon. Um,  
**Mathias Falci:** Right. Um on my side yesterday I was posting some minor bugs. Um among those fixes I sent a fix to properly copy the hiring team all user groups and primary contact when we are duplicating a requisition. I notic today in the end to end test related to it I struggle a bit to solve but it's fine now. Everything everything working and the test is is passing. Also yesterday I talked with Parker. He asked me to add to to add the email preview to all drawers where we can send emails in the application. So yeah, I'm already doing it. So that will be my folks for today. And yeah, that's all for my end guys. Thank you.  
**Alexandr Cosov:** Have a nice weekend everyone.  
**Mathias Falci:** See you guys.  
**Alexandr Cosov:** Bye-bye.  
   
 

### Transcription ended after 00:14:17

*This editable transcript was computer generated and might contain errors. People can also change the text after it was created.*