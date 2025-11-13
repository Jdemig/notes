Nov 11, 2025

## Daily Team Scrum \- Transcript

### 00:00:00

   
**David Živković:** Okay. Uh oh, there he is. Hey, Jonathan. Uh so yeah, before we start, does anyone have any topics they want to raise before we go rounds? Okay, I'll take that as a no. So updates from my side. Um I'm working on the per acquisition overrides that I talked about yesterday. Uh I also had a sync with Alexander about using the ingest uh service for the automations project and Jo as well. And yeah, I also been pinged by Parker about some uh some uh uh potential bug regarding the the rendering of interviews. So I'm looking into that now. And yeah, that's pretty much it for me. Uh I guess next is Alexandra.  
**Alexander Russkikh:** Yes. Hello. I've been uh trying this solution the ingest. So um the idea is that someone mentioned this is almost like a radian rails. Basically it it it's like an automation tool for scheduling uh uh execution of nodes and engines and um well I'm really mostly testing it.  
   
 

### 00:01:13

   
**Alexander Russkikh:** uh I was able to create this uh recursive function that executes node nodes based on its uh three like structure and I have different tests uh for example like the simple delay that basically puts this into a 5-second delay and then uh executes the next node which is a terminal node in this case actually this might be 30 seconds because I predicted then we have uh yeah it's 30 seconds now there is another one which is like uh a different workflow that does something like uh so the simple delay but finished but I actually put another delay in the middle. So you see delay then action then another delay then end then there is a different one which actually does something like a branch like structure which is the conditionals. So similar to to trigger delay branch and depending on the condition parameter you sent in the trigger argument it will go either one or or a different path. So I will be able to show it to you when this runs.  
**Jonathan Emig:** Is this something that's been created from the automations UI?  
   
 

### 00:02:46

   
**Alexander Russkikh:** It's something that we are testing to see if this can fits our solution for the automations automations. But no this UI itself it's is it's uh so the question is about this particular UI or no Uh well, it should uh handle the flow for us.  
**Jonathan Emig:** Um, yeah, I guess just how exactly is it going to fit into the automations.  
**Alexander Russkikh:** Basically, the entire flow of uh scheduling, the delaying, which is the scheduling, the the branching, the conditional execution, the actions and so on. Uh and yeah, the back end piece.  
**Jonathan Emig:** Okay, the logic piece but not the front end piece.  
**Alexander Russkikh:** Yes.  
**Jonathan Emig:** Yeah, thanks.  
**Alexander Russkikh:** Yeah. And like for example we can see given the branches. So you can see actually I think the workflows are messed up. That's why it's uh doing something very strange. It isn't supposed to right now. Yeah it's definitely off the rails now. But that's I messed up the workflows. It it was fine before. I did some changes like changes just going to cycle or something.  
   
 

### 00:03:58

   
**Alexander Russkikh:** But yeah, the idea is to see if we can deploy this on dev, ideally as soon as possible. And this is where Steve, I will need your help. Uh, and see if this will behave fine on dev environment. And for example uh compose it could leverage their uh image and they require a post crash and they require a radius for the service to work and uh we could try to make it run on the deaf to see how it's going what's what's going to happen.  
**Estevão Ribeiro:** Have you have you tested it using the Docker compos image in your Uh I recommend you to to do that because uh my in my experience  
**Alexander Russkikh:** Actually, no. I'm running their service as a library right now.  
**Estevão Ribeiro:** I need to turn things or adjust things and it will be very helpful if you break this rock for me rock for me deploying the service inside your machine because it will be the same thing that I will  
**Alexander Russkikh:** I run it locally.  
**Estevão Ribeiro:** do once I start to working on Kubernetes.  
   
 

### 00:05:22

   
**Estevão Ribeiro:** I need to understand the the service working on docker compos and then start integrating with kubernates because it's different but it's it's the same thing but different inside the the the instructions or f fe futures.  
**Alexander Russkikh:** Mhm. Okay. I see. Okay. But other than that, maybe like a quick context. uh for for everyone. So I bootstrapped this project as an SGS boiler plate. So this is using the boiler plate that you created with Chua I believe. And right now I'm running this as a uh as a NestJS app basically. So it's not containerized. But I think we actually have two ways of doing that that we can either uh uh deploy this via the docker image or we can wrap the entire application which is already the case in a in a in a in a docker dockerize it and this chess microservices already handle it. So we can do it two ways. I think you see what I mean.  
**João Tenório:** It works similar to the visium.  
   
 

### 00:06:33

   
**João Tenório:** So you need to have the CLI in a docker image inside the cluster. And the the CLI is the interface and this interface requires a SQL database and a heads cluster and we already have it in place. So we need to deploy both the microser and this docker image.  
**Alexander Russkikh:** So what he's saying is that the application as NestJS already works via with the that library directly without its uh docker relying on its docker image while I'm also running uh in local host the CLI which is basically this interfacing this interfacing uh to we can like inspect and check and functions and so on. So uh yeah sure that's Andre we need it because my assumption is that it  
**Andrei Botalov:** Uh so this inest is a uh paid service right? Um could you please u describe why do we need it?  
**Alexander Russkikh:** would radically speed up time to deliver the automation project and it's something worth trying before we go to hard out which might uh be very uh long to create automations from the ground. So this is basically like almost like as if like a magical solution that we are still exploring that actually speeds up things for us uh by a lot rather than spending 10 sprints building the entire back end.  
   
 

### 00:08:25

   
**Alexander Russkikh:** Yeah, that would be my answer.  
**David Živković:** Also, I'm not it's not sure that we would need to pay anything uh from their website. They they offer pricing for their cloud solution. Uh but uh so supposedly it's free to to run to run it yourself. But yeah, that's I guess that's a good reason to deploy it to death to make sure  
**Alexander Russkikh:** Yeah, they're saying that they have a pricing attached to it. But I mean this is as far as I can understand this is for the cloud uh when we deploy in their cloud but we are planning to deploy locally perhaps also Steve you could like have a look and give us our opinion how does their pricing work because I'm not really uh not sure I'm not  
**Estevão Ribeiro:** All right. Uh, please open a ticket to me. I'm very bus. I'm very busy because of the SRC to the demands here. We are in the middle of the audit pro process process. So most of my focus will be inside this will be inside the vanta.  
   
 

### 00:09:34

   
**Estevão Ribeiro:** Uh, so I don't think I will be fast to uh to support you. I don't know how how Parker prioritize this, but I'm busy. I'm very busy. Uh maybe I can I only can do this on the Wednesday or Thursday.  
**Alexander Russkikh:** Okay.  
**Estevão Ribeiro:** I don't know. Okay.  
**Alexander Russkikh:** So,  
**Estevão Ribeiro:** And I I will sync with you to understand the challenges, the licency, the things. It's good to have a pro I always do a uh a sync with uh the the developers when we are developing a new feature that impacts the the bops uh tasks but uh I will schedule and try to do fast as I can do that. Um that's it. Thanks for sharing.  
**Alexander Russkikh:** All right.  
**Alexandr Cosov:** Hello everyone. So today I have Parker pinged me. He asked me to build a couple of email templates for the cases when the candidates and interviewers are rejecting the calendar event. I fixed some bugs and the schedule link drawer and fixed some issues with the interviewer pool select hanging out in the loading state.  
   
 

### 00:10:56

   
**Alexandr Cosov:** And uh Parker also pinged me about some UI changes for the availability calendar and manual scheduling calendar. Uh so I'm working on those right now. Um yeah, that's pretty much it from my side. Thank you.  
**Andrei Botalov:** Uh hi, I have uh tested projection status pull request by Parker and migration for it. I pulled I used dev environment dump and tested migration on this on that dump. I moved I moved and syncing to local compose. uh so previously uh I think it will make it possible to run those via docker. So basically we have this images we now have this images uh in robots for x86 and architectures which means that those should work on all on our development machines as well. I didn't try to run this images on my machine. But I think it will be faster. Probably it will be easier to run it uh using this images. So after the basium will be moved in. I think uh it will be possible to simplify to run everything run this whole subsystem uh via docker compose.  
   
 

### 00:12:25

   
**Andrei Botalov:** Uh so we will will it totally possible to write just compose up minus D and then all the services and it will be enough to start uh the basium requisition at sync and profile at sync instead of like having them check out several several repositories let's say uh then I have uh changed it to a test flow to use candidate profiles as sync from uh using this dock compos file. So in do compos file we have all those ECR uh images and then they used in end and to end test workflow and it became faster like by two minutes approximately or maybe maybe a bit less but after the basium will be moved it will be another like one minute speed up almost. Um, thank you. Gabrielle.  
**David Živković:** I think it's Steve next.  
**Andrei Botalov:** Ah, yeah. Stiff.  
**Gabriel Rocha:** Yeah.  
**Estevão Ribeiro:** Okay. Uh, as I mentioned, um, I I've been working on so S2 demands since last last Friday. I spend my entire weekend, uh, supporting JP with new demands and I have five uh tasks to address today to allow the actor uh, understand our process here.  
   
 

### 00:14:04

   
**Estevão Ribeiro:** Uh I will try to generate the this the B CDC pipeline today but I don't think it's possible but I will try uh perhaps tomorrow morning I will have the image for you under um that's it on my  
**Gabriel Rocha:** Hey, let me quickly share something here. I think uh yeah, the analytics page started to get some forms and colors here.  
**Jonathan Emig:** What the f\*\*\*?  
**Gabriel Rocha:** I was able to do the the textual uh textual lists. uh and we have some of question types already mapped in your code and now I am trying to to embed uh the first chart here u that's what I am doing no blockers and this is what I  
**João Tenório:** Yesterday I have started to clean up the solution to add candidates from the AI sourcing to our talent pool. I'm designing a async solution to solve the performance issues that we have right now because if we try to add more than 10 candidates, it takes about one minute and that's all.  
**Jonathan Emig:** Um, yesterday I was kind of all over the place. I was working on the email recom so I updated the email recommendation frequency from three times a week to two times a week.  
   
 

### 00:15:58

   
**Jonathan Emig:** I noticed that the click-through rate was going down and so thought that might be a good step. And then I also looked at um our support email and there were a couple of people that asked to be removed from the subscription list. So it's possible that there is a bug in the unsubscribe logic, but um plenty of users have been able to successfully unsubscribe. So I haven't been able to reproduce that bug. Maybe Andre uh you could take a look and see if you can reproduce it. But quite a few users have been able to successfully unsubscribe. It seems that I only got an email from four or five and you know we've sent out probably 100,000 emails at this point. So it's uh pretty small subset of people that are running into this. Um yeah, there was a meeting with Jes over some road mapping plans. Uh there was a bug from a client with documents being downloaded. I wasn't able to reproduce that. Mentioned it to Andre to see if he could.  
   
 

### 00:17:07

   
**Jonathan Emig:** Um, and then I worked on uh SOC2 off a little bit, talked to JP about um how to handle the vulnerabilities. Uh so he said he would take care of it in Vanta for me, but we can just work on the vulnerabilities later and slowly go through them and prioritize prioritize the bigger issues first. Um, and yeah, that's that's it for me.  
**Mathias Falci:** Great. Thanks, Jonathan. Let me share with you guys right quick. So, yesterday I showed to you the the email preview here in the email templates page, but basically I synced with Alexander and Jonathan and I understand better uh how we are organized in terms of templates and so on. So basically uh we still have the preview here in the email templates page but it's uh a little bit different now we trying to actually we are showing exactly the same template generated by react email library basically the same that we will send to the to to to the user right so uh here also we can choose the template type so whenever we have the template uh I mean the HTML for for that template type we will show it here as well.  
   
 

### 00:18:36

   
**Mathias Falci:** So then uh in in this example here we don't have any template related to add sequence step. uh I will review it just to ensure but whenever we have the template type we will show the the most similar possible to what we're going to to send to the to the user right so it will updated accordingly the the template type selected here and but uh speaking with Jonathan yesterday uh actually we we uh Jonathan go  
**Jonathan Emig:** Um, I just had a quick thought. Sorry to interrupt. It might be interesting to have a little just a little notification letting them know that if a template type doesn't exist or you can't find one uh just something to let them know that that might not represent the  
**Mathias Falci:** Yeah. Yeah.  
**Jonathan Emig:** actual email.  
**Mathias Falci:** Makes sense. Makes sense to have it. Yeah. Agree. Actually I can uh after the daily gen maybe we can go through the code just to ensure uh also I want to confirm some uh change with you but then we uh realize also the the the value of  
   
 

### 00:19:34

   
**Jonathan Emig:** Yes.  
**Mathias Falci:** the preview will be mostly here instead of the email templates because here actually is the step before sending the email itself.  
**Jonathan Emig:** Wow.  
**Mathias Falci:** So let me just fill out this. Um so here we we we have the the message for candidates. So also we have the preview button here. Basically this is a a component called um email controller. We have it across multiple locations in our codebase. And what we when actually we have a a new prop on it. So if we have the email preview config, we will show the preview button here. So and here also we know the template type right. So we can just use it and also Jonathan I added it in the schedule interview schedule. Basically it's the same component. So we have the email controller then I just send the the preview configuration as well. So we are able to have it here uh where we're at next here. So we have it here as well. And just to to wrap up, we are using now u talking with Alexander yesterday as um we are using the exactly the same function that we used to build the the the the HML with React Gmail. Right? So uh we have some types here. uh we can increase it. For example, uh Alexander said that he is creating new email templates. So whenever we have it, we can just uh add the new template here and ensure we are calling the the the same function. It will work with the preview as well. And yeah, that pretty much is on my side. Apart from that, uh, Parker sent me some some adjustments to be done in the multiple locations in inside job listing. I already did it. It pretty much using our own components instead of using HTML components. And that's it, guys. See you  
**Alexandr Cosov:** Survive.  
   
 

### Transcription ended after 00:22:36

*This editable transcript was computer generated and might contain errors. People can also change the text after it was created.*