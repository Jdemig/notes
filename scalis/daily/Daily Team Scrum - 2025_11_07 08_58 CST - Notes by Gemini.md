Nov 7, 2025

## Daily Team Scrum \- Transcript

### 00:00:00

   
**Jonathan Emig:** Morning everyone. Andre, you're uh handling it, right? Taking over this week.  
**Andrei Botalov:** Hello everyone.  
**Jonathan Emig:** I can ping you out as well. Oh, I can ping to see if he's going to hop on and yeah, Alexander is out. I saw that message. Cool. All right, you guys are all messages.  
**Andrei Botalov:** Uh hello everyone. So my status is that I investigated production back and then I checked off latest functionality and then I extend automated tests for offer management um to cover like cases that um I didn't cover in past. Uh that's it.  
**Alexander Russkikh:** Uh yeah hello my status is I've been wrapping up UI polishing for the automation project. Uh so the branches creation the recursive deletion the overall like just making sure that uh it behave in a manner I think makes sense to me because this is like we we will discover as we go along. So the the steps for uh so the wizard performing the action that will eventually to a different u different actions such as tagging, scheduling etc. which is this is all just UI, right?  
   
 

### 00:02:34

   
**Alexander Russkikh:** And overall, I mean, as far as I can tell, this is pretty quite I mean, this is performant enough. It's I didn't like you can create hundreds of nodes and it doesn't even like doesn't care. It seems to be working uh fine. So, uh I'll be wrapping up. I've t the also yeah the when you deleting the I don't know the the branch it's going to delete the car release the sub tree you can delete this branch as well for example and then if you delete this one same thing the sub trees are deleted and you know different logic I've been trying around to see what works best um so I've ticed out the remaining tasks we can mean start integration with is I think the architecture wise components are fine and I will switch to embedible project uh for allowing the canvases future that allows users to to create their own dashboards see how it goes and what embedible team has to offer on that site. Thank you.  
**Jonathan Emig:** That's cool. So this is kind of like Nan but more for you know an applicant tracking system.  
   
 

### 00:03:51

   
**Alexander Russkikh:** You're the second person that mentioned it as well. I never heard of NAM but yeah Matias also mentioned same thing but it's not really I mean the difference I think is that this is much this is like very limited to to what we want to do. We don't have a lot of things we have only only the delay then we only have specific limited amount of actions and the flow is very well defined.  
**Jonathan Emig:** Mhm. Sure. Yeah. But it could grow to quite a few different actions, right?  
**Alexander Russkikh:** Yes.  
**Jonathan Emig:** We can always add more.  
**Alexander Russkikh:** Uh I mean I think these ones pretty much that's all it is because then you then but yeah I mean the actions have there is an action type right so you can see for example so the send email will will create over so this is the max zoom so the way I did it everything is held uh information and nodes and edges you have the main type which is the action type or the trigger type or the type and Then inside the data data you will we will actually be storing what matters to us such as the send email or I don't know the tech candid date which updates it and so on and I mean yeah I think that's pretty much it.  
   
 

### 00:05:09

   
**Jonathan Emig:** Yeah, that's cool. I know also for NAN you're able to uh prompt an LLM for one of the actions and then you can take that output and then feed it into the next step.  
**Alexander Russkikh:** Uh yes we don't have anything like I mean what we have planned in this regard it's only something like in a single uh form there is like a way to try to set up these nodes and edges so  
**Jonathan Emig:** That could be pretty powerful.  
**Alexander Russkikh:** automation but this is more perhaps you can rework it yes accept a node that is a custom node that accepts input which we can definitely do we can let's say announce Sorry not this one flow we can there is like an example where there is an input anyway so we can accept inputs and yes feed it and the response will create nodes and edges and and this library is actually integrated with react it's purposely built for react so based on hooks and you know all this react logic patterns that we use. It's also being used in the library itself for the create creation of mod and edges and managing data.  
   
 

### 00:06:27

   
**Alexander Russkikh:** Yeah.  
**Jonathan Emig:** That's cool.  
**David Živković:** Well, hey everyone. Uh, so from my side. So, as requested by Parker, I've been working with Jonathan. I set up this PR to ework the way uh sending the automatic email template when scheduling works. So, basically the way it would work now is instead of having like separate emails, we could do something like this. So, we fill everything out here. We reschedule and yeah we prepopulate the form with all the data that would be passed to the email template and it kind of it's the same for the default is the same format as before but everything can be overridden and we can also like pick the from email. So yeah if we send it out like this it would Oops. Yeah, there we go. So yeah, we get the email. Uh yeah, and Jonathan has been working on the analogous thing for the schedule links. So yeah, that's uh those two PRs are ready. Uh aside from that, I'll be opening a PR shortly for the new request availability flow.  
   
 

### 00:07:45

   
**David Živković:** And there's another um another issue Parker asked me to to work on. Basically, he wants a way for um uh for for email templates that have interviewers and for stages that have eers. So you want there wants a way to have them be overridden on a per requisition uh level. So you have the default that's the default preview first stage but basically you should be able to change them for a given requisition. So my my my plan to do it is I'll probably be introducing new two new junction tables. One for interview templates and interviewers, one for uh reviewers and stages. And yeah, basically we would check one before checking the other to see if they were overgridden because yeah, overgriding them on a prequisition level should also be be optional. So yeah, that's that's my plan at least. I don't know if anyone has any doubts about that or thoughts. Okay, I think that is a no. So yeah, that's uh that's it for me.  
**Andrei Botalov:** Steve.  
**Jonathan Emig:** I'm not hearing anything.  
   
 

### 00:09:09

   
**Jonathan Emig:** You're unmuted, but can't hear anything. No. Look.  
**Gabriel Rocha:** Nothing. I I can go Steve and you go later. Uh hey guys uh still working on the analytics part of the the farms project. Uh yesterday I updated our embeddible project. They have a new version the v1 uh that changed a few things. we don't need to have all the their uh uh default components in our branch. We can just uh use it their package. Uh I polish a few things on on it and then I now I enable to to preview my components locally. So I will try to to build something to to display on the analytics page. Uh that's my status. No no blockers.  
**João Tenório:** Yesterday, Steve and I fixed the issues related to the Dropbox account. I was talking with the Dropbox support team and I was able to make the account working right now and we will have a limitation of 100 requests per month. So we will connect only the production app into this account and uh Andre if you would like to test this feature you need to test directly into the production in the development and the staging environment we will h keep the credentials from the mihi legacies account and the legacy account that mihi created won't work smoothly because it's missing in a lot of things there and that's all.  
   
 

### 00:11:23

   
**Andrei Botalov:** So we can check sign flow only in production.  
**João Tenório:** Yes, only the Dropbox part because you will be able to send the requests in the development and the staging environments but the web hooks and all those features won't working inside the development and staging. So if you would like to do the complete flow uh including the user signing the document, you should go to the production environment because our current plan only has 100 requests.  
**Andrei Botalov:** But why doesn't it work in death?  
**João Tenório:** So we decided to we decided to just connect this account to the production environment for the time being and uh within the next month Pak will decide if we will go to the enterprise plan and uh once we are in the enterprise plan we can connect the development and staging and will be able to have automated the tasks in this side.  
**Andrei Botalov:** Okay. Steve.  
**Estevão Ribeiro:** All right. Uh, can you hear me now? All right. Um, yesterday I start working a PR to to allow the requisition with TLS sync uh, use the latest tags the latest tag inside the Docker build.  
   
 

### 00:13:06

   
**Estevão Ribeiro:** Uh, I merged this PR this morning. I changed uh I change the way how the his application work inside the end to end tests to allow the the check out use injected inside the shout out the new NPM RC file. Um I also prepared the the BON CDC pipeline inside the the end to end test. So uh I don't expect any issue or something like that inside to end text end to end test when I change the the division to have support for the last st. Uh I support drone with the dropbox signing issue. Uh we create three accounts and we drone fight with this this the Dropbox support this morning but apparently it's working. Uh by the way I need when you uh you mention something related to the latest change inside the main when you merge uh please reach out me because I need to start the roll out again to the stage environment. Uh and I'm supporting JP with sock to documentation. So most of my day to most of my day uh will be working in soft production and Jonathan I need to talk I need to talk with you about the table talk exercise we need to organize the things and and prepare the team members to allow us to to to do the exercise.  
   
 

### 00:14:49

   
**Estevão Ribeiro:** That's it on my end.  
**Jonathan Emig:** Yeah. One sec. Can you guys see my screen?  
**Andrei Botalov:** Yes.  
**Jonathan Emig:** Cool. Okay. Uh, so mostly I was working on this. I was also working on sock 2 and uh this other interpolation options pull request. But so this is similar to what David was working on with um the main issue was that we were sending two separate emails. So in this screen, it would send an automated email with uh basically this text right here. Sorry, one sec. Yeah. So yeah, it would send an email with that text right there and then it would send a separate email with whatever the user put inside this message candidates box. Um, and so we just updated it so that instead of two separate emails, there's just one. And there's a default. So users have this default right here that gets sent out. Um, and they can change that pretty easily. Uh, so so that was mostly the update.  
   
 

### 00:16:16

   
**Jonathan Emig:** And then there's some of the code here. Um, yeah, Andre.  
**Andrei Botalov:** I wonder if we so we just prefill it with the same text each time and we don't allow to choose a multiplate, right?  
**Jonathan Emig:** Yes. Sorry. Say that again. There's a template.  
**Andrei Botalov:** So we don't allow configuring we don't do we allow using email templates to replace let's say this whole text with another email template.  
**Jonathan Emig:** Oh, yeah. That's a good question. Uh, right now we don't. Um, but that was mentioned on the call and that will be something we'd like to add. In fact, one of the clients wanted that. So maybe I should add that today. Um, okay. Let me write that down. Uh, yeah. So that was that. And then this interpolation options pull request. I guess I should mention updated tests to there's an issue with tests not grabbing the lexical editor. tokens or no. Yeah. And then there was an issue with um where is it?  
   
 

### 00:17:36

   
**Jonathan Emig:** There's also a migr here we go. Migration. So I did a migration. Basically the issue was on the front end we were requiring people to verify their document templates. Um so they were verifying that the tokens worked. uh but we kind of already do that with interpolation options and list tokens. There's already uh code in there that checks to make sure that those tokens that we pull and give to the give to the user and show in the UI are they can be populated. So the so there was UI that was asking users to click a button to verify their document template and if they didn't do that then it wouldn't show up later you know when they use the document template if that makes sense. Sorry, I wish I had some UI to show you guys, but um basically I just removed the second verification step and I did a migration right here to remove that. Um or I set it as a default just default verified for now and then at some point I will probably just remove this status column.  
   
 

### 00:18:37

   
**Jonathan Emig:** SPR is working and fixes the issue. So um yeah, that's mostly it. That's it for me. Thanks guys. Any questions? or actually Matias.  
**Mathias Falci:** All right, thanks Jonathan. Hi everyone. So basically yesterday I merged the multiple locations PR. It's on dev. So I was able to test the job board page and this morning I sent two minor adjustments to it. Now it should be completely functional. U you guys can try it out. Um also yesterday I need to fix one end to end testing related to those chains. So thanks Andre and Jan for reviewing it. And right now I'm solving another end to end testing related to pipeline template creation. It's a matter of some conflicts in the UI. One model affecting the interaction with a drawer and also I need to review a PR from Alexander and after it I will go for a new test. Maybe Juan or David will share one with me. I will take a look in linear as well to find something and yeah that's it from from me guys. Thank you.  
**Jonathan Emig:** I like that little spreader you got, but I think my wife  
**David Živković:** Have a nice weekend everyone. Right.  
   
 

### Transcription ended after 00:20:23

*This editable transcript was computer generated and might contain errors. People can also change the text after it was created.*