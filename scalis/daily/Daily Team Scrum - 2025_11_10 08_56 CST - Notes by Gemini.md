Nov 10, 2025

## Daily Team Scrum \- Transcript

### 00:00:00

   
**David Živković:** I guess we're missing Jo and Andre, right? Let's give it another minute. It's only Andre is missing. I pinged him. I guess we can start though. Uh okay. So firstly for my updates uh so yeah Parker asked me and I already shared this I think uh sometime last week. So basically um what what we want to be able to do is for each so for each stage or pipeline change we make to be able to change it on a per acquisition level. Uh so yeah initially I thought this was referring only to review exage and interviewers in an interview template that could be linked to an interview stage but looking at the designs uh it seems like quite a few fields need to be editable per requisition. I'll ask Barker to confirm if that's it. But if that's the case, this is basically the breakdown of of all the fields will need to be able to be customizable on a per per acquisition level. So yeah, I've been thinking of how we can make this happen because the the stage schema is quite involved.  
   
 

### 00:02:29

   
**David Živković:** So basically my initial idea was to have two u junction tables. One for template stage reviewers, acquisition template stage reviewer and one for position interview template. Uh but yeah, with all these new fields, we would need we would need junction tables for these three fields as well because uh what was it? Uh um um yeah, we need to have office overridable, department overridable, expiration date overridable, survey form template ID overridable, and number of references. That's just an integer. So yeah, that's that's my thinking. And outside of making some major changes to the schema, that would be the the way to to make this happen. Unless someone has Yeah, I was the reason I bring this up is I'm hoping someone has some u maybe better ideas they could share with me on how to achieve this. So yeah, what do you think guys does anyone have any thoughts? Yeah, I guess not. So yeah, that's that's kind of the approach I'm thinking of going with. Uh since I I guess this needs to be done in a quick in a like a timely manner.  
   
 

### 00:03:36

   
**David Živković:** So yeah, if anyone does have any thoughts does like get any ideas, yeah, please share with me. Um yeah, uh that's what I'm working on now. Uh yeah, that that's that's those are my updates for today. I also had a sync with Alexander about uh automations, but I guess he can share that. Uh he's next anyway. So yeah, Alexander  
**Alexander Russkikh:** Yes. Uh hello, good morning. Well, so in the morning and yesterday, I've uh worked on this pull request. So, we had like a couple of issues with the this candidate labels again, such as like this is the before merch. It really uh does some like weird stuff like it updates one by one and then it triggers loading states and then it just overall freezes like if you click multiple ones they disappear and then if you like try to unselect them it's basically so uh at at some at some point in deposit was working fine and that's because uh of the different approach when we trigger a mutation And uh so what's happening now and I didn't hold back I actually updated the code to match the same behavior.  
   
 

### 00:04:59

   
**Alexander Russkikh:** But the idea and I hope we won't ever come back to this again is that uh what is the um candidate labels? Yeah. So the main idea is that uh I am we are only uh triggering mutations uh upon uh drop-down close or context menu unmount. Uh so this component is being used in multiple places on both context menu and drop down but also as a standalone component. And so what's happening in short is that um as it behaves as of now um the user clicks as much as he wants to and when either three two things happen. the mutation to update runs. The dropdown is being closed. Uh yes, or the component is unmounts because when the context menu closes, it's a component amount and on that time it's already too late to to kind of do do that. And I also cleaned up the styles. So I I cannot show it to you how it works, but uh it's basically I mean I tested Jonathan tested so it's going to be fun fine.  
   
 

### 00:06:23

   
**Alexander Russkikh:** Uh we are welcome to test it again but um yeah and then I cleaned up some some stylings for the context menu and drop down menus and paddings and whatnot. So that's on that part and then I basically like started to having a look at this project for the back end side of it. I mean I was inclined to go to this library in justest but perhaps it might not be a good solution but I will create a P ntherless because one of the things that I noticed is that so I mean of course obvious obviously we want to simplify the development uh life as easier as possible and this whole idea is based upon the scheduling and eventing and the background task runs and this resembles this to Okay. So before actually implementing all of it, I will first try to to to do a poke for this solution to see if it's going to be easier uh to build and how scalable it is. If I can like send millions of events or at least thousands and how well concurrently they execute.  
   
 

### 00:07:42

   
**Alexander Russkikh:** We will have a meetings for this and obviously I'm going to work with this with Jo and David so I don't mess up on the back end at the beginning. Thank  
**Alexandr Cosov:** Hello everyone. Uh oh, sorry. Andre, go. It's your turn.  
**Andrei Botalov:** I think it's before Alexander.  
**David Živković:** Yeah, I think your first dog's son.  
**Alexandr Cosov:** Oh, okay. Well, whatever. Uh, yep. Hello everyone. So, basically today I uh I have uh updated the edit stage settings drawer to prepare it for the new UI which David showed to you. I have merged our PR with David regarding the cancellation status. Rebased my PR for the interview flow changes which is about showing interview actions for all of the stages not depending uh not only for the stage candidate is currently in. For that I had to fetch availability request and cancellation status for all of those uh stages and so on. Basically you can see the clip. I'm just going through the flows such as schedule, reschedule, request availability, submit availability and so on.  
   
 

### 00:08:56

   
**Alexandr Cosov:** Um, and then I've also looked into one bug which uh Parker assigned me to. Uh, there was not really a lot of details here and I have tested it manually. I don't where is it? I've asked Parker for me more details, but uh basically from my understanding the bug was about screening questions. Parker mentioned that free text and other screening questions that don't have grading enabled are showing up as wrong in the UI with the red X, but I haven't found any like toggle or button to disable grading. Uh, I mean, free text questions don't have grading obviously, but all of our other question types do have an options for like specifying what kind of correct answer should look like. Uh, so yeah, I recorded a clip where I'm going through the flow. Yeah, David.  
**David Živković:** Yeah, I don't think we there should be correct answers for free response, but there should be possible to give like a score on the answer, right?  
**Alexandr Cosov:** Uh yeah, but uh like uh here I am from the candidate side applying for the for the job and uh well answering uh the screening questions and uh basically yeah I'll show in a second that uh screening questions do look uh correct.  
   
 

### 00:10:24

   
**Alexandr Cosov:** Yeah, like uh whenever something is correct, it's marked as correct.  
**David Živković:** Come on.  
**Alexandr Cosov:** Free text question answers are like without any mark. I'm not sure whether maybe I'm missing something. Maybe there is like uh this grading thingy you've mentioned. Uh oh, okay.  
**David Živković:** Sorry, sorry I mixed things up. Uh, this is related to scorecard questions. They they for you.  
**Alexandr Cosov:** Yeah, cool.  
**David Živković:** Yeah, sorry.  
**Alexandr Cosov:** Yeah. So, I asked Parker for more details. I'll see what he'll respond. And then I was uh looking well syncing with David regarding this new stage editing settings stuff. And u yeah basically David already showed it showed it to you. This is like our mermaid diagram of how stuff currently works but uh we went with it through it with David looked into options. So what David proposed is like maybe the well we've agreed that this is the most non-p painful and quick solution but I mean yeah it's we could really use some prefactoring on this domain and I know that like it's more of a product decision at this point but uh we are we have pipeline templates while in fact in database we don't have a template entity the template entity is the one which is being associated to a job and it was fine previously because we didn't we were not allowing the pipeline template editing through the UI while it is utilized by requisition.  
   
 

### 00:12:00

   
**Alexandr Cosov:** Uh but introduction of those um of this uh possibility to edit the stage settings from the pi requisition pipeline page kind of you know makes the idea of pipeline entity like properly proper pip template sorry template entity existing and it would have been a lot easier if well not easier a lot nicer if we would have had it but again we've paired with David uh it would be a lot of work Uh so those junction tables are like duct tape solution. Uh so yeah I basically David just already said it. I just wanted to emphasize that this is the domain which is which has some hacks and the danger of new functionality increasing the hackiness of it are quite high. So yeah just wanted for everyone to be aware. Um yeah I mean uh look uh we again as I've said we've discussed it with David the perfect solution uh how we see it would be like you know having a separate  
**Jonathan Emig:** Um, yeah, it seems like something we should be careful with.  
**Alexandr Cosov:** uh temp for the for the template pipeline entity to be a real template not an entity which gets associated with a bunch of stuff but uh this would require like a lot of work and u from our understanding the timelines of Parker wants those this let's call it a project of editing stage settings from the pipeline page quick so yeah but yeah mhm  
   
 

### 00:13:43

   
**Jonathan Emig:** So, yeah. So, what's Yeah. Okay. So, yeah, I think I So, I just want to rephrase to make sure I understand it. Um, okay. Yeah. So, we have these templates that are now reused as a template or trying to be trying to be reused as like a template and then also the actual instance itself. And the real solution would be to create separate tables.  
**Alexandr Cosov:** Mhm.  
**Jonathan Emig:** So have right the pipeline which is kind of like an instance of like yeah like an instance of the pipeline.  
**David Živković:** Yeah, basically to have to have these be templates. Sorry, go ahead. Yeah, I mean the idea is to have these as templates and then have instances of pipelines themselves to actually be implementation of templates. But I don't know if we need to even go that far because all these changes actually relate to template stages.  
**Jonathan Emig:** Yeah.  
**David Živković:** So template milestones and pipelines themselves are not really affected. It's the stages that are that are that need these prerequisition overrides in this in this case.  
   
 

### 00:14:30

   
**Jonathan Emig:** Mhm.  
**Alexandr Cosov:** I mean uh in scope of this project get we could get away with doing this for stages.  
**Jonathan Emig:** Mhm.  
**Alexandr Cosov:** But if we will be working on this domain and giving it some love, we can do this for the template pipeline itself and then whatever else we will decide to edit in the future, whether it will be milestone or stage like the table structure would be fine. But yeah, correct me if I'm wrong there.  
**David Živković:** Yeah. Yeah. I I think we also probably should discuss this with Parker directly like to get the the actual product requirements because there's been a lot of changes on the stages. Parker himself also opened a few PRs for this and pretty huge ones as well. So I think before we commit to a solution first like it's possible that the designs are not accurate because the initial designs I remember had everything editable and Parker said that's not what we want. So yeah, it may turn out to be that we in fact only want interviewers and reviewers to be to be overridable, but yeah, I guess we'll need to double check that first.  
   
 

### 00:15:34

   
**David Živković:** If that's the case, then the junction table idea I think is fine.  
**Jonathan Emig:** Yeah.  
**David Živković:** It'll be it'll be simple and yeah, it won't like it won't be it'll be a it'll be a fine solution, I guess.  
**Jonathan Emig:** Wow.  
**David Živković:** But uh with all this stuff mixed in, yeah, it it complicates it.  
**Alexandr Cosov:** I'll paste the mermaid diagram in the dev discussion after the call just so everyone would be aware. Um, yeah, that's it from my side. Thank you.  
**Andrei Botalov:** Uh hi, I have tested offer letters uh and created number of tickets for offer letters for front end and back end. Uh I wrote about it in project letters channel. Uh I checked and previous scheduling emails. Jonathan asks that they work fine uh and convert and I and I work on converting and to end test end to end tests uh to use requisition and candidate profile or sync images from CR. I think it will speed up uh end flows by a couple minutes and that's it.  
**Gabriel Rocha:** transmitted. Yeah, thank you.  
   
 

### 00:16:57

   
**Gabriel Rocha:** Uh I still working on the the farm analytics part. Uh I'm creating a few components in the embedible. It's going well so far, but no no blockers and nothing to show yet.  
**João Tenório:** Last Friday I worked on some external API improvements. We'll have a bigger customer on boarding next week and they would like to have more features on the job board integration to on the XML feed for the linking and the career page and also I wrapped up the all Dropbox account in the production environment. So the featur is working now. We have we have 100 heat quest per month and then we can upgrade the plan to the enterprise. But the the standard plan that we are using right now will be enough for us considering uh the plan that that park has for the next month. And that's all.  
**Jonathan Emig:** Um uh okay. Uh so um a lot of the work I've been doing has been advant still. Uh we have the deadline today to try and get everything finished up in there.  
   
 

### 00:18:28

   
**Jonathan Emig:** Um so yeah, Friday I was getting uh JP some final legal documents. Um, uh, I planned for a couple of fixes later. So, so a lot of the stuff I, uh, went through and decided to delay until December. So, a lot of it's just kind of going through making sure that it's not super super high priority. Um, to put things into perspective, in Vanta, there's some package vulnerabilities, and there's a ton of them. So there's about 200 plus different package vulnerabilities that it found across all our microservices and um just like assuming just we create a ticket for each one of those and it only takes two minutes um that would still take like six hours just to create a ticket for each one individually. So it's a lot of stuff to do and you know fixing a single vulnerability could take 30 minutes to an hour. So that could I think of the math I did on that was like you know potentially weeks of full-time work if you work non-stop for that. So um we're gonna have to delay a lot of those and find some ways to prioritize the higher priority ones.  
   
 

### 00:19:40

   
**Jonathan Emig:** Vanta does have critical issues, but I found vulnerabilities that were medium that I thought were actually pretty important. One was with Next Off was marked as medium and it allowed an attacker to um send uh emails to himself on behalf of another user pretty much uh allowing him to log in as another user. So yeah, a little bit tricky there. Um but yeah, basically what I've done so far is we're going to we're deactivating some of them and I've created tickets uh for each of the microservices and then I've uh documented the current issues and we'll try and continue to go through those um over the next couple months. Uh, is a hand raised?  
**Alexander Russkikh:** Uh yes. Um so um the majority of the of the issues is a failed logic or uh missing validations you would say or it's really like a or it's the packages per dependencies that didn't pass due to like vulnerabilities and such.  
**Jonathan Emig:** Yeah, it's so it's it's packages.  
**Alexander Russkikh:** But how do you like if if it's not fixed at the origin which is at the package version then how do you even like address that because if many of them are not even something that we install but are just p dependencies of other packages what do you what do you even do with that you can if it's not fixed then you  
   
 

### 00:21:14

   
**Jonathan Emig:** Mhm. Yeah, you you just have to upgrade the package. uh then you mark it as invant as like a risk accepted until there is a package upgraded. You can mark it as risk accepted and then delay it for a couple months. So you can remind yourself to check again if there's an update or a patch.  
**Alexandr Cosov:** Uh also as far as I know you can if the newest versions have a vulnerability issue which is not fixed but the older ones do not have it. You can uh in the package JSON there's some config field where you can force even uh dependent packages to be enforce the version basically which is again a temporary fix but should do the trick.  
**Jonathan Emig:** Yeah. Yeah, exactly.  
**David Živković:** Where can we get the list of all these issues?  
**Jonathan Emig:** Uh, it's in Vanta. I could give you access if you're curious.  
**David Živković:** Sure. Yeah.  
**Alexander Russkikh:** and and and uh the last question. So it effectively means that we have to update all our uh packages in our all microservices which will lead in turn to multiple breaking changes because if the because many of we have pretty outdated libraries meaning that uh many of them when pushing up major version it's breaking change.  
   
 

### 00:22:41

   
**Alexander Russkikh:** So it's uh this sounds problematic indeed.  
**Jonathan Emig:** Mhm. Yeah. Yeah. So there has to be um yeah, there has to so previously I was not as uh like I I didn't spend as much time deciding if a package upgrade was worth doing. I just started upgrading them. But I think now we have to be more careful because it's just taking way too long and they also could break things. So um I don't know. Somehow we have to figure out how to prioritize which ones are important. I suppose I can just go through and read the CDE and decide for myself, but that's also super timeconuming.  
**Alexander Russkikh:** And you're thinking on committing one uh major version upgrade in packages one by one or just do it at all at once and hope for the best. What's your approach?  
**Jonathan Emig:** So far it's been one by one, but yeah, it's it's difficult because if you do one by one, it's obviously more timeconuming, but if you do a bunch at a time, then you're risking breaking something and not knowing which package broke it.  
   
 

### 00:23:56

   
**Jonathan Emig:** It's not really a good solution.  
**Alexandr Cosov:** Uh, don't we have a dependabot which kind of prioritizes the security issues by like by priority, critical, non-critical? It sometimes pops in when I'm doing git stuff with my terminal.  
**Alexander Russkikh:** There is also a  
**Alexandr Cosov:** Maybe.  
**Jonathan Emig:** Mhm. Yeah.  
**Alexandr Cosov:** Yeah, maybe we could use that to prioritize them.  
**Jonathan Emig:** Yeah. Is there a way to prompt it? I think that's just popped up automatically for us so far, right?  
**Alexandr Cosov:** Yeah, I mean um yeah, I I can't recall from the top of my head. I can Google it and just get back to you.  
**Jonathan Emig:** Okay. Yeah, that might be helpful. Um, okay. So, yeah, that's the that's the situation. Uh, uh, so also for Vanta created a status page and a change log page. Those are super simple. Well, the change log page unfort Oh, actually this is what I wanted I actually wanted to talk about this today. The the change log page right now is really dumb.  
   
 

### 00:25:04

   
**Jonathan Emig:** I just did it temporarily for Vanta so we can get that checkbox checked. But uh I just manually got change logs and then uploaded them to a hard-coded page. Um is Steve here I think. No. Oh. Oh yeah, I forgot.  
**David Živković:** No, I think he's skipping today  
**Jonathan Emig:** Yeah. Yeah. Um, yeah. So, we're Yeah. I'm wondering if there's a better way to do that. Is does anyone know how you could automatically get change logs generated? I mean, the problem with that then is also that you don't want like you may not want some changes public.  
**Alexander Russkikh:** That is that is it's a package called change logo.  
**Jonathan Emig:** Okay. But does it like we still have to review it probably to make sure that some things that we update are public facing.  
**Alexander Russkikh:** to us about the package. Yeah.  
**Jonathan Emig:** Okay. Um yeah, the problem with Vant is it just keeps giving us time consuming work. It's like tedious stuff.  
   
 

### 00:26:16

   
**Jonathan Emig:** Uh so I don't know.  
**Alexander Russkikh:** It's uh it's it's actually conventional change log in the name of the package but there are others.  
**Jonathan Emig:** Okay, I'll just look that up. Okay, cool. That might help. Um, okay. So, yeah, that and then I created a super simple status page. It's so dumb. It just says that it's live and if it's not live, then it won't show up. Uh, was it there was a question, Andre?  
**Andrei Botalov:** It will be the problem with any with any system that reviews packages like uh most of like basically looking at package actions is the easiest thing that uh that can be done and uh uh then this vulnerabilities don't automatically mean that we even use a feature that have those vulnerabilities. Uh so it's not always so it's so it's rarely clear it's rarely clear is if we are actually affected by the issue in question uh like in general yeah if we need if for if if for SOC2 we  
**Jonathan Emig:** Okay.  
**Andrei Botalov:** need to we need to update the session then maybe we can do it in public or  
   
 

### 00:27:40

   
**Jonathan Emig:** Okay.  
**Alexandr Cosov:** Um, another thing I wanted to mention regarding packages and problematic versions with vulnerabilities, there is I worked with yarn and they had yarn the duplicate thing. So basically sometimes some packages are using the old versions of packages while they could get the newer ones because the other one requires it and it should do the job. I mean, I'm not sure how much it will help, but it's a matter of running one command and checking out how much uh dependencies were removed.  
**João Tenório:** All right.  
**Alexandr Cosov:** I sent you the what I found for PNPM just as an idea. I don't know.  
**Jonathan Emig:** Okay. Yeah, that could quickly resolve. Like I could just run it and just hope that a bunch get resolved so I don't have to look at all of them. That'd be nice. Um, cool. So that was mostly it. And then on uh I did a little bit of work over the weekend upgrading some icon libraries and some other like small changes to the UI. Uh and that's it.  
   
 

### 00:28:53

   
**Mathias Falci:** Great, Jonathan. I'm finishing the the email preview here. I will share quick and maybe after it I can help Jonathan with the dependencies because I know it can become a nightmare, you know, with a lot of your dependencies and let me just share here guys on my site. It will be pretty quick. Basically, I have been working in that email pre template preview here. So basically I am at the email templates of course then we can create a new template editing existing one and then we have that preview here. Let me just uh send false that prop. Then we have the the exactly the same uh what should date. Okay, it's compiling. Uh exactly the same what user will will have when send the email. Basically uh the the tricky part here is we have the variables and I created a function to uh uh to to serialize those variables. So when we have the real information of it, we we we use and when we don't have it, we just use a placeholder.  
   
 

### 00:30:12

   
**Mathias Falci:** Um we will improve it in the future, but for now it's the the sic the the enough also this is a a fixed view here but also I created uh um a way to use with a model so we can use in another part of the application. It gives more flexibility to it. Maybe in the pipelines probably I will sync with you Jonathan to because I I know you are um changing something that probably will need preview as well. Uh what is missing here is just to um uh reorganize the structure here of the forms. I sync it with Karolina and she updated the the Figma. So basically I need to update here to reflect the Figma and that's it. I will open I will just finish the the wrapping up here to open the PR and that's it on my side guys after I go for a next task.  
**Jonathan Emig:** Okay, sweet. Nice work. So, did you um end up using the uh like the like the email react components and rendering those  
   
 

### 00:31:26

   
**Mathias Falci:** Um, I don't think so. Jonathan, we have something. Uh, All  
**Alexander Russkikh:** Yes. Yes, we have a a tool that uh that renders this immediately. Uh and I actually Okay. Yes, I have a branch or was it merged even where I am actually I have a page where I'm iterating over every single like email and how it looks like. I will send you a file where this happens so you can uh use the handling approach for the email.  
**Mathias Falci:** right. All right. Appreciate Andre.  
**Alexander Russkikh:** She took  
**Andrei Botalov:** Uh where do where do we get this placeholder values from? For example, candidate first name John, last name D.  
**Mathias Falci:** Yeah. Yeah. That's that's that's the tricky part. Uh there are fake data, you know. It's a I was wondering about using like candidate name to not confusing the user, but it's something it's open just to not use a real name because it seems like it will be the the the name used, you know, but that's why we have the that warning here.  
   
 

### 00:32:40

   
**Mathias Falci:** Placeholder data is used for candidate information and so on. Because we don't have the the information right now.  
**Jonathan Emig:** I think it would look nice if um the text for replaced items were was blue just to make it a little bit more clear that it's replaced in in dummy data. But yeah, this is just a small suggestion and then I can look at the code in a bit.  
**Mathias Falci:** All right. You mean only when we don't have the real data, Jonathan? When it's done, right?  
**Jonathan Emig:** Yeah, something like that but without the the background.  
**Mathias Falci:** Okay.  
**Jonathan Emig:** Yeah, cool.  
**Mathias Falci:** All right. But yeah, we have the the the empty states as well when creating a new one. And I will just fix the form Lori right now and open the PR. And that's it, guys.  
**Jonathan Emig:** Sweet.  
**David Živković:** Cool. Uh I I forgot to do this at the start of the meeting, but does anyone have any any topics uh they want to raise uh not discussed yet? Once twice.  
**Mathias Falci:** David, just just a reminder the the the assessment of soi, right? Just to a reminder because I I did it in this morning. I don't know if you or  
**David Živković:** Yeah, I did it actually when it was posted on Friday, I think. So, yeah, that that part's done on my site.  
   
 

### Transcription ended after 00:34:37

*This editable transcript was computer generated and might contain errors. People can also change the text after it was created.*