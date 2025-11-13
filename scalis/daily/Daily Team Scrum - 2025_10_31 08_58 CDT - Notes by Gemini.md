Oct 31, 2025

## Daily Team Scrum \- Transcript

### 00:00:00

   
**Estevão Ribeiro:** So,  
**Jonathan Emig:** How's the how the first couple of days go?  
**Mathias Falci:** Uh yeah, I'm getting used to it. Uh fixing some bugs here. Actually, I'm struggling more than I thought uh with some bugs, but yeah, it's part of the process. Also, Jonathan related to the course issue yesterday still helped me as well.  
**Jonathan Emig:** Yeah.  
**Mathias Falci:** Um man, I faced again. So theor happeneding to me twice and I I I don't know exactly what is going on but when I run the PN PNPM docker setup again it works it solved the issue. So of of course it's something related to my environment here but I need to figure out or understand what is happening you know the docker setup uh solved the issue.  
**Jonathan Emig:** Yeah, interesting.  
**Mathias Falci:** So yeah.  
**Jonathan Emig:** It solved it, but it was not permanent. Is that your Yeah.  
**Mathias Falci:** Yeah, it's not permanent actually. Uh it not happens again but already happens twi twice to me. So I will pay attention if I do something different to to happen.  
   
 

### 00:01:18

   
**Alexandr Cosov:** Hello everyone.  
**Jonathan Emig:** Maybe some of the other ele  
**Mathias Falci:** Hello.  
**Alexandr Cosov:** Uh okay, we have most of us here if not everyone. Uh so I guess we can start. Uh hello everyone. Is there anything anyone wants to bring bring up before we do our rounds? This looks like no. So I will start with myself. Basically today was again mainly focused on some bugs. I have created one uh fix uh for uh passing an interior pool ID for 101 and loop interviews. This was a part of this bug which was about uh so we have the interview pools page and we have those counters total interviews weekly average and they weren't being increased whenever the interviews were scheduled because I was not passing into your pool ID with this PR it should be all right then I was uh working on adding uh the candidate select to request availability and send schedule link drawers Uh yeah, I'm always done there. But in the meantime, uh me and David were debugging one of the client bugs which was about um listings uh during the cloning pro requisition cloning process.  
   
 

### 00:02:44

   
**Alexandr Cosov:** I think I can even show it in live. So yeah, let's do this together. Uh I've already fixed some stuff but not completely. So just for the reference, I have my testing requisition. Uh it has a listing with a couple of screening questions. The client's issue is that she as far as we've understood, she cloned an existing job and she removed the old screening question. Uh so for example, I have the here listing with three questions. And whenever we will this is how the cloning flow works. You click on the new job requisition, copy from previous, select the requisition you want to copy from. What is happening in this form? Basically the way it is working right now on each step we have a absert requisition mutation. Uh when the form is initially loaded, we are abserting the whole requisition with the all of the data from the one we are cloning from. uh in order to see the what is happening here at this stage we've opened the we're on the first step of the requisition cloning flow we can see that all of the all of the screening questions are immediately kind of injected into the requisition uh it's the first one yeah the second one the third one and the first one so yeah let's just click our way through the most important part the listings things.  
   
 

### 00:04:19

   
**Alexandr Cosov:** Yep. Yep. Yep. Okay. So, we're here. What happens here? This is our listing. We want to edit it. We click through the steps here as well to reach the the questions. And here, let's remove the third question. Let's leave only first and second one. So when we click next and we wrap up the flow within this drawer, the absurd job placing mutation is being called and we pass only two screening questions here. But because of the fact that this is an upsert, the third one is actually not being deleted. Um so yeah, this is the reason the question has stayed even though we have removed it. So if I will wrap up the cloning flow. Uh basically the spoiler alert the question will be there. Uh but let me just show it to you. I heard someone has raised their hand.  
**David Živković:** Oh no, I just uh mentioned that basically we leave an orphan scanning question with this flow because yeah, it's deleted in the form but it's never actually deleted in the database.  
   
 

### 00:05:31

   
**Alexandr Cosov:** Okay. Yeah. You see?  
**David Živković:** It's it's initialized when we start the cloning process and then it's later never touched regardless of what you do in the form.  
**Alexandr Cosov:** Yep. And while debugging it, another issue I've spotted is that this is the initial job requisition we were cloning from. I have like made one of the questions inactive on purpose. And if you recall while we were in the cloning flow, they were all disabled. Uh at the moment in the master in the main the query for getting the listing with the screening question is not querying for the active field. So they're all like getting the status false because it's the form default value. Uh yeah, basically I've added I haven't dropped up like the fixing of it, but uh yeah, I've added the field here and I will debug this issue because this is a front end issue. Uh because I imagine when you're cloning a requisition and you're in the cloning flow, you want the questions to have the same state as they the same status as they have in the requisition you're cloning from.  
   
 

### 00:06:51

   
**Alexandr Cosov:** Um but yeah uh yeah someone raised their  
**David Živković:** I just wanted to add to that currently also when we start the cloning process we we create three new screening questions based on the original three in this case and they all don't get active status passed to them so by default they're active uh so whether all three of them are inactive in the original one they have active in the new one but also because the UI the front end doesn't handle active they'll be shown in the interface in the in the form as inactive even though in the database they are active so yeah it's a it's kind of messy So past this in popup sooner.  
**Alexandr Cosov:** Uh yeah, basically uh so uh yeah, my plan is to wrap up the candidate selector and then uh today or tomorrow to like wrap up those front end issues of the screening questions. And uh that's mostly it from my side.  
**Jonathan Emig:** So, um, what do you think the right solution is for cleaning up the requisition update?  
**Alexandr Cosov:** Um I mean for the their statuses I believe that the absurd mutation uh in when we're cloning a requisition when the vizard is loaded we're firing the initial absert requisition mutation just so that each time we click step we will already have like the ID of the newly created requisition and update it.  
   
 

### 00:08:18

   
**Alexandr Cosov:** I guess we are somewhere just not passing the active fields of the screening questions. I haven't looked in the code yet, but I I think that's the reason. Uh so I want to fix that on the front end. Then fix the issue where the in the new in the cloning flow that status toggles are not the same as in the requisition you're cloning from. And then back end should u I guess whenever the upging. Yeah, David.  
**David Živković:** Yeah. So for the issue with orphaned listings, there's two way to do two ways to do it. One is to update the I mean without refactoring the whole thing, which would be quite a tack like a process. Um either have update the absert so any any questions that were removed like that mentioned in the mutation call get deleted. That's one way. I'm not sure if that's completely safe because I'm not too familiar with this part of the the application. The other maybe simpler is uh whenever the user in the forum clicks a trash can icon for the for the question, we fire a delete uh scanning questions uh mutation call and just like delete it before we even do any manipulations.  
   
 

### 00:09:31

   
**David Živković:** That's that's also an option. I don't know what you guys think. A job  
**João Tenório:** I think the best path forward to solve this problem is removing the logic from copy requisitions and job listing from the front end and create a graphical mutation to clone the requisition and the job list is inside the back end and after that we can follow the same flow because now is a workar around that we are copying the JSON from the get requisition query and uh this is not type safe it because it's easy for example to not update uh an ID from the screen equations or job listings and the skills and the best way to handle it is on the the back end because we we have been with a lot of issues related to the copy requisition. This is always back and forth. So maybe we should spend the effort on the back end.  
**David Živković:** But how would the copying of requisition work? Um I mean from the user UX uh side would it look the same like uh you copy the back end does the actual copying and then you go step by step through the through the process.  
   
 

### 00:10:53

   
**João Tenório:** Yes, we don't need to change your wax. So when the user clicks on the copy requisition, we should call a mutation on the back end and these mutations will clone the entire requisition into the back end generating new IDs and then the front end will continue the flow with this new generated ID. It will be the same flow that we have right now to edit a requisition. So it will be pretty reliable because the back end will make sure that everything uh are being cloned correctly.  
**David Živković:** No, but we would still have the same issue because the cloning step is the one that actually the clone the cloning itself is done correctly minus the active status. But the issue with the upsert and the orphan questions would still  
**Alexandr Cosov:** Yeah, because uh we are uh creating the screening. Well, not creating the issue is that on the step with the listing when you're editing the listing and you're removing one screening question, you are calling absurd uh requisition mutation with the updated uh listing and screening questions under it.  
   
 

### 00:12:10

   
**Alexandr Cosov:** And the UI just removes like the screen question the user deleted. And because this is an upsert, it's not doing anything with the deleted question. It's just updating the ones which were left in the UI if their status changed in any way or form  
**João Tenório:** So we we should fix the the logic. And uh we we should call the back end only after the user clicks on next. So we need to prepare the context send it to the back end and the the back end should handle the questions that we should delete and the ones that we should add. So it's better creating a new mutation to do it instead of rely on the existing absert requisition.  
**David Živković:** So would it be like uh would it be like uh kind of confused? So we would not use up certificating questions anymore, but would we use like a update? I mean would we for each question add a call and uh create update or delete like depending on what action was taken?  
**João Tenório:** Yes, but it it should be handled by the back end.  
   
 

### 00:13:30

   
**João Tenório:** So the user will will edit the form and we will we will call these mutations only when the candidate clicks on next. So the back end will receive the updated uh screening questions list and we will process everything and decide which ones we should delete or add.  
**David Živković:** So it would be kind of like the object it is now plus deletion if in case a question was removed right.  
**Alexandr Cosov:** Um at this sorry for interrupting folks at this point uh won't it just make sense to split the absurd absurd into create update mutations separate ones and then update overrides like if you provide initially like you're copying from a requisition which had a listing with three screening questions then you user through the UI removes one of them then UI calls update listing mutation with two screening questions and back end removes the third because like it's not present in the update payload. Um yeah  
**João Tenório:** Yes, the the issue is not directly into the upsert. The issue is because we are using the same upsert acquisition for everything. So uh we would better doing for example creating a update for screening questions another one for the listings and have a small set of mutations that front end should call for a single for because we are using this absurd acquisition for the entire flow and it's pretty hard to change the behavior and the problem is not the absurd is the fact that we have the absurd search exition doing everything.  
   
 

### 00:15:23

   
**João Tenório:** Now we we had changed the observed job listing. The observed job listing now is being called directly from the form and we should do the same for the screening questions.  
**David Živković:** So basically separate out the screening questions from the job listing absent.  
**João Tenório:** Correct.  
**David Živković:** Yeah, makes sense. Yeah.  
**Alexandr Cosov:** Yeah, that's an option. Yeah, I agree. But um David wait will it take a lot of time? Uh yeah.  
**David Živković:** No idea honestly. I've just uh started looking into this like when you did so not sure.  
**Alexandr Cosov:** Uh what do you think? Well, so because this is a clientf facing issue, I believe we need to solve this quickly. But I'm not aware how much work will it be both on back end and front end to do this split. So the question is do we do the monkey patch to make it work for the clients and then we uh calmly separate the mutations and do it properly or we or we just start the process of splitting them and yeah then we'll see what what it will take.  
   
 

### 00:16:47

   
**Alexandr Cosov:** I'm kind of in for the first option to fix it for the client to be honest because briefly looking at the requisition flow do the main at least on the front end there's a lot of logic. Uh but yeah if anyone has anything against that now is the time.  
**Jonathan Emig:** Yeah, I think that's fine.  
**David Živković:** Yeah, me too.  
**Jonathan Emig:** That'd be pretty quick. I mean, if we're going to monkey patch it, it would be pretty easy to have that delete icon just send off a quick mutation just knowing that we're going to, you know, trash that definitely create  
**Alexandr Cosov:** Mhm.  
**David Živković:** Yeah. Yeah. That's probably the quickest and easiest way to to fix it for the time being. Yeah.  
**Alexandr Cosov:** Okay. But uh yeah.  
**Jonathan Emig:** this. Yeah, definitely create a ticket. Do it right later.  
**Alexandr Cosov:** Yeah. But you know, I think we need somehow to push it because we have a habit of creating tickets and then never touching them again. So yeah. Uh okay.  
   
 

### 00:17:47

   
**Jonathan Emig:** calendar that won't  
**Alexandr Cosov:** Uh, okay. So, uh, yeah, it was David. Uh, who's next? Andre, did you have a chance to do your round?  
**Andrei Botalov:** Uh so I have updated end to end test to use a new CRM or general scheduleuler and workflow uses the CR image that u that Steve has created. So we are logging in into Amazon CR and then we are pulling image from CR and then we are running the general SC container with all the with all with all the environment variables in scalus network. Uh so that's it. It's fast. Previously we use CRM. So CRM is deleted. We no longer use CRM at all. I mean in application we are now using only general scheduleuler and emails that sent into general scheduleuler to JavaSculed schedule a bit and ask some questions to bark and then investigated production bug with sentence I think one more and I manually test new serum now that's  
**David Živković:** Yeah. Hey guys. So, aside from everything Alexander showed and we discussed, I've also created three or four PRs for the the new newly agreed handling of interview status switching.  
   
 

### 00:19:36

   
**David Živković:** So, yeah, uh correctly moving between canceled, not scheduled and then there was the three completed uh three types of completed interviews. Uh yeah, I think I have everything regarding that ready now. But we will have a discussion on the sync about I think the only remaining question is whether whether we should allow no show to be set for completed and uh some other completed pending feedback statuses. I I don't think so because a completed interview implies that a meeting happened. So marking them as no show doesn't make much sense to me and it would much it would increase the like the complexity of handling it correctly on the back end side a lot because uh if that was allowed then switching back to the previous state with the unmarked is no show where they have four different state possible statuses I don't yeah it's it's to be discussed I guess and uh aside from That's Oh, yeah.  
**Alexandr Cosov:** the edit availability question. Sorry for interrupting. Uh we also need to decide on edit availability because uh when the availability has been confirmed.  
   
 

### 00:20:43

   
**Alexandr Cosov:** Let me share the UI just so you'll have context. When the where is it? One second. Um availability received. Yep. So uh availability received status means that candidate has submitted his availability slots and uh how we are determining it uh codewise we are looking basically at this point interview event does not exist yet. So uh we are checking for the existence of candidate availability slots. If they do exist then the status is availability received. But the trick is that when we go through the edit availability flow, we are changing the suggested times but the candidates availability slots are not being deleted. So uh like there is no way for front end to understand that uh candid that availability has been changed. No email for the candidate is being fired. Uh stating that like uh do I have it? Oh no, I have deleted. Well, there is an email that states that like uh company user has requested your availability. And if you ask me, it kind of makes sense to send to both delete candidates availability slots and resend this email because otherwise the edit availability and like the whole availability flow kind of doesn't make sense.  
   
 

### 00:22:10

   
**Alexandr Cosov:** But yeah, this is what we're going to discuss on this thing today as well. Yeah.  
**David Živković:** Yeah. Well, looking at it now, I guess these are kind of two different operations. One is edit availability where if you want to change your own slots, at least for your own sake, and the other would be basically a resend availability request or reset availability request. U so maybe yeah, yeah, I guess those are two different things, but yeah, as you said, this will be discussed on the sync later.  
**Alexandr Cosov:** Yeah, I just think that like it doesn't make Okay, you're in the availability received. Candidate has submitted his availability based on your suggest previous suggested times. Then you click edit availability. You click you change your suggested times. Candidate is not aware. You still see his availability slots with the previous suggested times in mind. And it kind of eliminates the whole flow purpose. But yeah, we'll see where we will go with the discussion. Yeah.  
**David Živković:** And uh yeah, I think that's it from my site.  
   
 

### 00:23:13

   
**Alexandr Cosov:** Uh, Steve, I believe it's  
**Estevão Ribeiro:** Since sorry. Uh yesterday I added new permissions to the ML APIs to allow the application get information get embeddings from the the uh AWS vector vector but I also change the max policy on our heads clusters to uh use all keys LRU. Uh so but we are waiting uh at least one week to get matrices to see if this new configuration doesn't broke anything. Uh and uh on once we get the matrices we are going to hold out the change to the staging and production environment. I'm currently adjusting the sonar scan inside the skis io. I'm face a lot of issues do with the large code base but I'm I'm researching ways to reduce the the code base or uh improve the sonar sonar cubis uh performance. That's it on my end.  
**João Tenório:** Yesterday I migrated the CRM solution to use the new general scheduling. We had a lot of issues with the Python application that is using the head panda connectors and the app scheduleuler and uh finally we migrate everything with success.  
   
 

### 00:24:59

   
**João Tenório:** H Andre is h already fixing the end to end tests and uh it will save time on when we are running the end to end tests and save some cloud sources because now we are able to hand move completely the head panda connectors and we can think about move the head panda completely and switch to a Kafka vanilla solution because the only the only reason why we are using head panda right now is due to those connectors but those connectors are not reliable at all considering the version that we are using from head panda. We are not using the head panda enterprise. We are using the community version and the bq and the radius are more reliable considering the scheduling tasks and uh we will deploy this solution in the production environment today and now I am shifting to other bugs. I have been working with bugs and I believe I I will keep this work and that's all.  
**Jonathan Emig:** Yesterday I was working on um so a client came in with a request for a request for um when they would share a link the the image in that link I guess the the snippet of that that would show up on websites would be the Scalus logo and the Scalus brand.  
   
 

### 00:27:02

   
**Jonathan Emig:** So that's because at the at the single job page the metadata is was or was you know our our information. Um, but there were some there was a a client complaining about that. And so, um, yeah, yesterday I went in and updated the job page so that, um, we're rendering their information. But in order to do that, I did have to fetch the job information server side. So I had to make a fair amount of updates to the uh job page um to replace this uh hard-coded metadata with a um see where it is generate metadata function. Um and so yeah, this takes the public listing ID string. It calls get job with that. And so basically I created a get job function that uh makes the uh polyquin client query to fetch that um and then returns that uh all server side that get job function is reused as well. So that's reused right here inside the page. Um, and so the uh job details page is now um, uh, server side rendered. And I did test that also as well uh, without JavaScript enabled just to make sure that everything's working as expected.  
   
 

### 00:28:35

   
**Jonathan Emig:** Um, and yeah, it does show up um, with no JavaScript. So, it's working pretty well. Um, Alexander  
**Alexandr Cosov:** Uh yeah uh I just wanted to mention that while debugging the screening questions today application page the public one uh was crashing for me because of the universal logger. I believe I was on the latest master. I see that there were a couple of commits like 20 minutes ago and 7 minutes ago. I don't know maybe one from you one from Joe maybe they fixed it but if you'll have time to like check that the page is not crashing that would be great.  
**Jonathan Emig:** Yeah. I fixed one of them uh with the console.  
**Alexandr Cosov:** Yeah, I I saw that like 16 errors ago this error log he removed it, but I had this fix and it was still crashing for me. But again, maybe I wasn't on the latest main.  
**Jonathan Emig:** Okay.  
**Alexandr Cosov:** Yeah, just if you'll have time to check it out, that would be nice. Thank  
**Jonathan Emig:** Yeah, the issue with universal logger is that the Apollo client I don't know if uh the Apollo client is actually used both server side and client side.  
   
 

### 00:29:39

   
**Jonathan Emig:** Uh so we do need some logger that's able to distinguish between one of the two. Previously I'm surprised it was even working. Previously we had I think just either server logger or client logger and it was being used in both environments. Um so so yeah that's why so that means we were missing logs pretty much we were getting logs at all in one of the one of the two. Um so yeah I'll figure out what's going on.  
**Mathias Falci:** All right guys on my side it will be quick. I will share here just to illustrate as well. Uh but yeah currently I'm I'm trying to understand a issue that we have on the AI sourcing sourcing agent. Basically uh I already I already leave it um with the issue happening just to show to you guys. Um when we send a prompt here with uh a distance uh with a number which will be converted to the radius uh basically the uh it it it kind of get messy and return results outside the the the place we are trying to target.  
   
 

### 00:31:04

   
**Mathias Falci:** So it happens only in the the in that first page here. But if we look in into the results itself and using the same filter, it returned the the the the profiles properly. So I'm trying to figure out what is going on. But what I what I could uh notice so far is when we send the radius basically we use the same request. So when we have the radius uh it's when the issue happened. So I will make the same the same testing inside the filters just to ensure but seems to be something related to the to the radius and apart from that yesterday I merged some other bug fixes uh also inside the source uh sourcing agent search. So basically here we when we search for a a more generic place such as continents or countries uh and um what is going um actually we don't properly handle some misinformation such as cities or or other other information then it literally literally crashed the front end. So it seems to be solved. I test on dev. I don't know if it's deployed yet, but yeah, indeed is working as well. And yeah, mostly that's it on my side. Also, I have on my list another uh urgent issue here relates to the email sender. Basically, candid the replies from candidates are appearing from uh in sender. So drone probably will give me a hand here to uh set up it because it's not easy to to reach to replicate the the the issue without the probably we're going to to uh to to make it happen on dev and then dump the database to to local to to be able to replicate the issue. But that's it guys.  
   
 

### Transcription ended after 00:33:44

*This editable transcript was computer generated and might contain errors. People can also change the text after it was created.*