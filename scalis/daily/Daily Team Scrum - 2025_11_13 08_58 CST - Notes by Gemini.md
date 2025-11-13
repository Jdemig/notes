Nov 13, 2025

## Daily Team Scrum \- Transcript

### 00:00:00

   
**Jonathan Emig:** Morning guys.  
**David Živković:** Take his money. I guess we're missing Alexander and Andre. Let's wait a minute longer. Okay, I I think we can start. Um, so before we start the rounds, does anyone have anything they want to pick up? I guess not. Okay, so for updates on my side, um, I'm wrapping up the per acquisition overrides for all the the new stage settings. I'm just testing everything out. So, I think we should be opening a PR pretty soon. Yeah, that's uh that's it, Alexander.  
**Alexander Russkikh:** Uh, hey, I'm I'm working on a solution. I don't have anything ready to to report. Somewhere next week, I will be able to show a a working proof of concept.  
**Alexandr Cosov:** Yep. Hello everyone. Let me share my screen. One second. So today I've been mostly working on uh adding the new stage settings fields and forms to the edit stage settings drawer. I'll put those I made. So basically those fields are not being passed to mutation for asserting scorecard which is not the normal flow which existed before that accessible through the those stage settings.  
   
 

### 00:02:14

   
**Alexandr Cosov:** I've just added the forms UI and the validations. Uh yeah just to like be ready for the back end. I've enabled those fields for now because the plan is to like have most of them disabled but I've enabled them just to test stuff out. it works. Uh, so yeah, I'm only waiting for the David's PR with the mutations and we'll be ready, but I'll create the PR with the UI hidden behind the feature flag for now. Um, yeah, that's it. And then, uh, I've been also working a little bit on the scheduleuler V3 cleanup because I finished this a little bit earlier than I thought. Yeah, that's mostly it from my side. Thank you.  
**David Živković:** Uh, since Sunday is not here, I guess Steve is next.  
**Estevão Ribeiro:** I'm still working on the Vanta tests. Uh I have a few of them, two others today. And I need to create uh high level architecture for to be added inside the system description and this morning I supported Alexander with a Prisma issue inside the scale automation.  
   
 

### 00:03:28

   
**Estevão Ribeiro:** Uh I think we cover everything there and uh it was the first time that the sonar group could be blocked uh ch uh p request. Uh so uh in the next days I will create a documentation to share and I will present uh how the how our sonar cube setup was done uh to allow us to use this tool to help us to create better code. That's it on my end.  
**Alexander Russkikh:** In in this case, apparently it was blocked due to lower lower than 70% test coverage.  
**Estevão Ribeiro:** Yes.  
**Gabriel Rocha:** Hey guys, uh still working on the analytics tab for for the forms. We uh have something uh these textual components are internal code and the shirts are coming from embeddible. Uh we still need to do in this uh page add some filtering here like in the hon. same filter bar that we have here. Uh the export uh this one uh the export chart is not working yet. Uh and I still facing a issue where uh the embeddible script uh hijack the the window fetch.  
   
 

### 00:05:06

   
**Gabriel Rocha:** So it starts to not work. what uh what's loaded after the the embedible uh loaded their their shirts. Uh but that's it.  
**João Tenório:** So they I finished with the clean up into the AI sourcing. I can share my screen with the progress. Now the process to add the candidates into the talent pool uh is totally async. So the users don't need to wait so much to add the candidates. The response is immediately. And if the user doesn't have any credits related to the AI sourcing, the user still can add the candidates into the talent pool without calling the PDL API to enrich with the immers. So it's not a we won't have issues anymore related to the credits and that's okay to to add the candidates twice because I'm validating if this candidate was previously added into the talent pool and we are not charging the user for those requests. So you can add it more than one time. And it's running pretty fast right now because I introduced some kaka topic to process those events.  
   
 

### 00:06:48

   
**João Tenório:** And that's it.  
**Jonathan Emig:** Cool. Thanks, bro. Um yesterday to merge a pull request for a bug with client download um I had to update uh some Terraform or CDK code so that it would allow the dev environment host headers uh to be uh just wildcarded so that the end toend tests could um reach the S3 bucket and not get a cores error. Um in the uh staging and production environment, uh it's more restrictive. Uh but for dev, it's a little more permissive. Um so that was one thing and then I had a meeting with Circle. Um, and then Circle had some more questions which talked to David about a little bit about the Zoom integration. Um, and then worked on the email preview pull request that Matis has been working on. Um, I added in some defaults for the email templates. So, so there were previously some some defaults that get populated when you uh send auler link and then another uh drawer that data worked on. Um but I consolidated those defaults into one location.  
   
 

### 00:08:21

   
**Jonathan Emig:** Um so that all the template types can use the basically just use it from the same location. And um so those will get autopop populated you know either when you're looking at the drawer or you're looking at the template. And so when you switch template types in the email like template creation page um those defaults will get autopop populated and then they'll also show up with the pre is created. So, um, it's working a lot better, but there's still a lot of work to do because we still have to change, uh, or I would like to change all the email templates in this pull request. Um, so that instead of appending the message content onto the end of the email, we just replace the entire message content and have a good default. So, I'd like to do that for this pull request, which will take a little bit more time. Um, and uh, yeah, I think that's it. Okay.  
**David Živković:** Oh, I just wanted to mention so the the the same flow that we had with the cell schedule links and the manual scheduling with the separate drawer for the email.  
   
 

### 00:09:35

   
**David Živković:** I think we have another place where that's used in uh in availability requests and correct me if I'm wrong about that Alexander but I think we should do the same in that place as well like uh not have them be separate emails as we did with the others. Yeah.  
**Jonathan Emig:** Okay, I will make sure look into that this pull request.  
**Mathias Falci:** Awesome. Thanks, Jonathan. Andre, actually, it's my my turn. Do you want to go first?  
**Andrei Botalov:** I can  
**Mathias Falci:** Okay. Yeah. So, basically, I mostly have been focused in some bug fixes. Let me share right quick with you guys. Um, I can show the the linear better. Um yeah mo uh uh most of them are related to uh to the hiring team model uh and the form uh some related to user group. So sometimes we cannot remove the user group also when we copy previous requisition uh we didn't copy the user groups to it. So those are um those uh are finished.  
   
 

### 00:10:50

   
**Mathias Falci:** We have the PR open. Yesterday also I struggled a bit with some end to ending testing in the in the email preview PR also. Jonath take a look in your change. Thanks for for adding it. And for now I just uh pick up those related to the to map candidate to new P pipeline. I will take a look and to understand it better. But yeah still focusing in the some minor bug fixes here. And yeah, that's all for my srise.  
**Andrei Botalov:** Uh hello I have finished a request availability test. The test requests availability as a company user then uh sends a link and then submits availability is candidate and then availability is verified on the pipeline page both after requesting and after submitting. Uh then I have checked a few issues with subscription and with global screen questions and I will uh like see if Steve created the CR image for the basium. I will uh convert into testful to use dep uh that's it to use image that's  
**David Živković:** Okay, I think that's everyone. Does anyone have anything to mention before we wrap up? If not, yeah, that's it. Uh, thanks guys and have a nice day.  
**Alexandr Cosov:** See everyone.  
**David Živković:** Bye.  
   
 

### Transcription ended after 00:12:32

*This editable transcript was computer generated and might contain errors. People can also change the text after it was created.*