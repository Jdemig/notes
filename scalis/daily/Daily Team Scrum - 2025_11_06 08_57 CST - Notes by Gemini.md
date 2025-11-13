Nov 6, 2025

## Daily Team Scrum \- Transcript

### 00:00:00

   
**Andrei Botalov:** test of letter. So there are some bugs in offer letter project. Uh I'm not sure if people on those bugs or not. Uh basically here there is a project and there are like some some tickets with bug labels that I created actually some of them like don't have label but like I still create them. I will maybe add to SP label them but in general there are a number of back tickets here they ordered by priority so you can start from margin priority or something if you work on this uh in this project uh that's  
**Alexander Russkikh:** Uh okay. So yesterday I think the front end part of the offer letters bugs were done but uh I mean I only fixed those that uh that were directly linked in the in slack. So perhaps there there is more to it which I didn't see in linear project. Uh but then I kept working on the um on the automation I can show you more today. So there are apart of from this generic looking screen with grids we can do create automation and um that's some there are multiple forums happening nothing unusual but then actually the main work goes into this whenever it loads of the main flow idea and so I've been working on that just a second it's still loading oh yeah So I mean there are yes uh so the main idea you start with a trigger and  
   
 

### 00:01:43

   
**Alexander Russkikh:** then you advance to a step you choose one step you can choose like a branch uh you can delete uh in between uh whenever you're deleting uh uh a non branch step it actually links uh the lost connections in between. So delete in the middle with reconnect but when there are branches I opted for u you can create branches which is basically an idea of creating like conditions and uh you cannot yes you can delete them as well which is not deleting this step yet basically but it should as you can see instead it should also delete this one. But when you delete the branch, I actually went with sub tree delete strategy because I think it's makes sense because other Oh god. Okay. When you delete the branch, the entire S tree is deleted and uh you have some more logic to create the actions. This is not working yet. It's just like placeholders, but I'm already updating the metadata as you can see. And um I think uh we can technically start uh doing something about it useful with the back end.  
   
 

### 00:03:10

   
**Alexander Russkikh:** And I will keep cranking the UI. There is still more to deliver such as um such as some more forms and uh uh uh yes. Uh so this is the flow. I mean yeah I mean there is defin yes and definitely every single branch or action should result in different data to be stored which is not done yet of course but yeah that's the current status update if you have any questions please go ahead This uh no no for now I'm just mostly looking at the UI.  
**Andrei Botalov:** Um did you confirm scope with sparkle in terms of the actions that we need in terms of conditions that we need um etc.  
**Alexander Russkikh:** So actions and conditions my understanding it's something that will come based off the back end and we will gradually adding them. So for mine my main goal for now is to to have the basically the playground so that we can build upon. So short answer no I didn't check on what switch which capabilities they will actually be but I suspect they will be gradually added uh one by one.  
   
 

### 00:04:41

   
**Andrei Botalov:** Yeah, looks looks really really cool. Yeah, I think before like in my opinion some actions that we have in spreadsheet are not really valid like even like just the tech candidate maybe some hot because we name this functionality label candidate not tech candidate. So I think there are there are there are some changes that that need to be done into into those sections and conditions  
**Alexander Russkikh:** I think it's something that will be clearer whenever we start working on the back end for this.  
**Alexandr Cosov:** Hello everyone. Uh oh. Hello. Hello. Oh yeah, now we can. Hello everyone. Uh so today I've been mostly working on adjusting the scheduling flow, the interview flow uh according to the new flow we've agreed what on with David Andre and Parker. I have created a PR which uh basically yeah updates uh the presence of some actions when you're scheduling an interview or cancelling an interview. Uh here I'm just going through the main flows to show that they're still working. Um yep and uh when you'll have time please take a look at this PR from David.  
   
 

### 00:05:55

   
**Alexandr Cosov:** This is a PR about the cancellation new handling of cancellation status of the interview. It has back end and front end changes again that need it in order to merge uh this one. Um so yep um that's it from my side. Thank you.  
**David Živković:** Oh, it's my turn. Hey guys. Uh, so from my end yesterday, I fixed the the offer letter bug uh where um I introduced a new email template that's supposed to support simple document sending. So I added the support for attachments. It sends all the the main offer letter and all the additional documents. There was also an issue where the that part of the application was still using the old upload file flow where it was using next S3 to directly upload files and then pass the file keys in the upstick mutation. I added a new mutation that uses the like the new flow converts the base 64 and passes that to the mutation. Um and yeah now now I'm going to be opening a PI to to handle all the complete state management.  
   
 

### 00:06:59

   
**David Živković:** So basically if something is complete with uh feedback submitted but a new score card is assigned then it should switch to complete uh complete feedback pending and uh yeah after that I'll uh open DPI for the new mutation to support re requesting the candidate availability flow and yeah of the the few bugs that they posted on the channel I see one is assigned to me so I'll investigate that as well. Yeah and that's it.  
**Estevão Ribeiro:** And yesterday I I I was working inside a ticket uh related to add uh the latest tag inside the docker image uh for three microservices. Let me get the list here. Uh where is it here? I need to add this tag on the bon CC pipeline and the requisition t and the candinate profile. Yesterday I was able to complete the candidate profile DTL task. So you can use the latest stats task inside the end to end test. Uh I'm fixing a bug related to the NPM RC inside the prison migration. Uh I've I've already submitted the PR uh and I'm I'm waiting Andre and John uh to review uh and approve my PR and uh I will write a lot of documentation for the VA process.  
   
 

### 00:08:36

   
**Estevão Ribeiro:** Uh our our audit process will start in the next uh Monday. But uh just about I will be offline on Monday because of my birthday. So if you have anything to do uh in uh on on Monday, please uh reach out me before that to help to allow me. Thank you to allow me help you with what you need. That's it. May  
**Gabriel Rocha:** Hey guys, I still working on the the analytics part of the farms project and I'm currently researching slash making a PC to check if it might be better to do by ourselves the that page instead of relying on embeddible just for two three bar charts or pie charts. Uh that I'm wearing coin currently. No blockers.  
**João Tenório:** Yesterday I was able to make the Dropbox integration workers on my local machine including the web hooks for the status updates for each signers and now I will deploy in the development environment and test everything there. Now we are using the only the test account that Mihi created. But before h move to the production environment will create a new essential account and uh we will start with the ex essential account and the essential account doesn't have the white label features.  
   
 

### 00:10:27

   
**João Tenório:** So we will use only the emails provided by Dropbox and the Dropbox has all the emails related to the followups and the full document when the signers complete the process. That's all.  
**Mathias Falci:** All right, thanks Joan guys on my site. Basically yesterday and today I was focused in finishing the uh possibility to add multiple locations in job listing. Uh it's done. Basically uh I'm just uh testing it. Actually I need to what I'm doing right now I'm trying to validate the job board page. I'm struggling to access the job uh the the created the job but helped me. I have the micros service running right now. I supposed to be able to look it right now but I still uh getting job not found. I will try to figure out what's running what's going on here and yeah but basically I open the PR it's on draft mode. I will put the description or even a video uh showing how it works. And yeah, that's the summary. Uh after it probably I will go for a task that Andre assigned to me related to the airor that we have in the end to end testing. Probably a race condition in one test and after we after it I go for another feature as well. Yeah, that's it guys.  
**Alexandr Cosov:** Five.  
**Mathias Falci:** Bye guys.  
   
 

### Transcription ended after 00:12:40

*This editable transcript was computer generated and might contain errors. People can also change the text after it was created.*