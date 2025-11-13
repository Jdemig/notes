Nov 4, 2025

## Daily Team Scrum \- Transcript

### 00:00:00

   
**David Živković:** I prepared a a bug fix that uh that would make it possible to upload the same candidate into two talent pools. Uh per park's request uh it should be that we don't create a new entry but actually link the old one and also display a warning toast on the front end when such an occurrence happens because the original would override any of the fields that differ in the new one. I've been getting a little like end to end tests failing consistently. First I thought it something broke but I guess every time there's a different set of tests so it might just be the flakiness. I have run them quite a few times. Aside from that I have a fix uh ready to open regarding the formatting in Google events like bold underscore italic and all that not being uh passed. So yeah that's one thing. I've also been working on adding a new set of queries to support uh metrics. Uh so currently the metrics we have regarding interviewer pools do not regard uh only the like only the meetings that happen inside the pool but Parker asked me to actually make queries for both sets.  
   
 

### 00:01:06

   
**David Živković:** So ones that do look only in the pool and ones that uh that look in general per interview and uh yeah Parker asked me to look into this uh this issue with the main being broken. So it seems one of the migrations failed. it was canceled and then afterwards, yeah, migrations are failing because that that migration was apparently partially applied. So, yeah, I'm I'm looking into how to fix this.  
**João Tenório:** I already fixed it because it's a blocker to me and basically the mutation was created uh to migrate some data without the cursor. So it it took a lot a lot of time to hunt and the hunter cancel the migration.  
**David Živković:** Oh, okay. You you said you're already working on this or did you fix it or Awesome.  
**João Tenório:** I I already fix it. If you take a look into the actions and it's passing right now.  
**David Živković:** Awesome. Thanks, Rob.  
**Estevão Ribeiro:** I'm still working on the sonar scan. Yesterday I was able to run uh the sonar scub sonar kub scan uh for the first time with 12 minutes.  
   
 

### 00:02:21

   
**Estevão Ribeiro:** I'm I'm trying to discover a ways to to improve more this time to reduce our build our request validation uh time. Uh Jonathan pass a new request from me to integrate uh an npm RC configuration inside the scales IO CI/CD. Uh that's it. I don't have nothing to show today.  
**Gabriel Rocha:** Hey guys, let me find the screen. Basically, the main thing that I did yesterday was fixing some bugs in the in the mail drawer that we have in the candidate. Uh I think that are not good here. But uh in the preview uh we were displaying the some styling instead of the message. So I fixed that. the drawer was not darkening the background of the the drawer in the back from the candidate. Uh we had the uh icons that were not matching here. So Parker asking me to do a a few things here that what I spend my day yesterday and today I got some time to get back on the embed integration to try to uh make it work with the forms analytics and that's it.  
**João Tenório:** Yesterday I worked on some bugs and I also reviewed the Dropbox integration. Right now we don't have any production account to support the signatur because the free account has limitations in the number of requests sent that we can send to the customers and uh how we review the code created by Mihi to make it work and that's all.  
**Mathias Falci:** Hey, thanks John. So Jonathan audio isn't working. So I'll continue here guys. Basically on my side yesterday I still focus in some minor bug fixes. Some of them are already merged and for today I start to implement the possibility to allow multiple locations on job posting. It's going well. Probably I will open APR today. There are some tricky business rules but I think I got them all here. I sync it with Vang and any doubts I reach out and yeah that's all from my end. Thank you guys.  
**David Živković:** I guess that's everyone.  
**Mathias Falci:** See you guys soon.  
**Alexandr Cosov:** I  
   
 

### Transcription ended after 00:05:40

*This editable transcript was computer generated and might contain errors. People can also change the text after it was created.*