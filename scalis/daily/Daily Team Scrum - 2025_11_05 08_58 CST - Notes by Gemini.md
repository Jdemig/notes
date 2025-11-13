Nov 5, 2025

## Daily Team Scrum \- Transcript

### 00:00:00

   
**Andrei Botalov:** Uh hello. So my status is that I investigated flaky tests and flaky and test and some issues. Uh Jonathan has fixed u one of the issues that was uh the most common. uh the most common what the issue that we had was because of we introduced severside renting with cache uh recently in some p request and uh the what happened is that the first time when tests open job details page the job job didn't yet exist but the non-existence was crashed on the was crashed but use with server side rendering and therefore subsequent page openings It was a still uh it was still not found because uh non absence of job was cached. So it was fixed. So it should be better now and and I also almost finished the test for CRM to check that the job is delayed like locally it works. So I uh work towards making it work in CI. Uh that's it. And I also investigated some packet bullets.  
**Alexander Russkikh:** Okay. Uh so on my site I had the three tasks from the offer letter marked as as urgent to take care of.  
   
 

### 00:01:36

   
**Alexander Russkikh:** Um, one of them was the uh the missing mutations integration on the front end to change statuses for uh for offer letters as well as um some other motation to undo the candidate declined. So this one was merged at the same under this pull request. Under this pull request where I also moved upload yeah uh yeah where I also improve the logging statuses the submission etc. You can see the video basically uh all these new yeah the quality is bad but there are all these new uh statuses that now were missing in the past. So you create an offer later. Yes. So okay. So as you can see so the moment you create it there are um all these void mark as signed mark as declined all these other statuses that we can play around with which basically don't do anything from my understanding except for updating the status on the back end. Uh but then there is an extra logic when you decide to uh cancel it. No actually mark it as yes.  
   
 

### 00:02:57

   
**Alexander Russkikh:** So you can decline it over over here. So yeah. Okay. So here you can uh mark as declined and then you can undo which is a separate mutation which has extra back end logic attached to it. And that's it for this request. And then there is another one. This one which is just hiding some things which are not implement were not implemented yet. Nothing interesting. Custom fields display nonext for values which is also a small change not worth mentioning. Um and then I got pulled and then I came back to work with the automation which I still cannot show to you because I'm on another branch and that would take time. But other than that, I got pulled to this pull request uh with of the David that got problematic uh on the front end changes and I had to to to basically update the tests and some notifications. Um that's it on my site.  
**Alexandr Cosov:** Hello everyone. So today uh I wrapped up the ticket regarding the enrichment of uploaded candidates both in pipeline view and on the candidates page.  
   
 

### 00:04:15

   
**Alexandr Cosov:** Uh yeah draw introduced the bulk mutation version. So I was able to wrap it up and then I have been uh working on the front end changes in the devs PR where which was about handling a consolation status differently. Um so yeah right now long story short now when you are cancelling a scheduled interview it gets to the canceled status not to the not scheduled uh and uh yep I'm going to be continue working on the scheduling with v3 uh changes um that's mostly it from my side thank  
**David Živković:** Yeah. Hey guys. Uh so from my side, I started working on on um the off status the offer letter ticket signed to me regarding the the email template to create a new email template that uh that uh attaches a PDF and doesn't mention e sign and has a warning of of no reply. Uh so yeah but in the meantime I was also working with uh Alexander Kosovo on the the PR uh regarding the cancelled state and also tried to fix the issues on the front end on on my previous PR and uh ended up asking Alexander for help.  
   
 

### 00:05:31

   
**David Živković:** So yeah, now I'll I'll get back to finishing the off letter thing. Yep, that's it for me.  
**Estevão Ribeiro:** Um since yesterday uh I've been working in automation to generate the npm RC file inside our repository without uh store uh in the g history. Uh let me show something here. It's important because I need everyone here tested this automation. Uh sorry here. uh show screen. Anyway, for example, uh I create two layers inside this automation process. Uh one, I leverage the husky uh hooks, githubby hooks to you to generate the file uh during the shake out. For example, uh there is a file inside our repository, a template here, this template that uh inject the value from the one password. So here return to my terminal. If I approve my my request for one password, just a second. uh there is a a script inside the risk that generates the file with the credentials that we need to download the font awesome awesome awesome package. Uh I create another I discovered an issue when I create this that I start to use a risk.  
   
 

### 00:07:23

   
**Estevão Ribeiro:** uh we need to install rusk inside the repository to leverage the automation process uh from from it. So I create another way to generate this file. It's very simple. Let me clean the Let me remove the file here. Just a second. See, uh, I documented all the process here inside our repository. Let me get the the comment here to avoid any typo. When I run this command pmppm generate npm rc, I also generate the file to inside the repository. I adapt all the testes and workflows inside our repository. I changed it uh to get the secret from from password and inject inside our testes or build process. Uh I tested a few minutes ago and everything is working properly. I just need Jonathan uh in added the package inside the main branch to see if the automation process is working properly. If not, I will fix the issue. But I expect that everything is worth working now. Uh, Alexander.  
**Alexander Russkikh:** Uh yes uh this uh the way how we are setting up uh the font vpmx set to that's basically it holds the secret right for the subscription for the font awesome we probably could just have used it as  
   
 

### 00:09:17

   
**Estevão Ribeiro:** Yes.  
**Alexander Russkikh:** a react library instead uh with the plain environment variable I'm just I'm just I'm just thinking I think that's suggesting that perhaps we don't even need to set up it in this way, but I'm not sure.  
**Estevão Ribeiro:** Uh, Jonathan, Jonathan, uh, can you help me here with, uh, the font also? I just get the information from Jonathan.  
**Jonathan Emig:** Yeah. So either way, we're we do need an we we do need the the token um and and so Steve didn't want the token to be um hardcoded in the npmrc file and committed into GitHub uh because that would have um triggered sonar cube and uh so in order to avoid that we've we've gone through the steps of setting up in one password and pulling from one password um automatically. Wait.  
**Alexander Russkikh:** Yeah. Yeah. Yeah. It was just an afterthought, but I know that uh there is a react library for for font awesome and and if that is the case uh it could be just a normal environment for you, you know, most likely.  
   
 

### 00:10:36

   
**Jonathan Emig:** It It does have to be in the MPMRC and I don't think the MPMRC can pull from environment variables. I don't think I I hadn't tried it, but Yeah, that was so um the reason why I didn't use the the  
**Alexander Russkikh:** No, no, no. If you are using fontsome as a react library instead rather than the uh uh class you  
**Jonathan Emig:** library and instead tried to import it as um the CSS file, the Phone Awesome Pro CSS file, was because I didn't want to have to refactor every single instance um of Yeah.  
**Alexander Russkikh:** Yeah. Mhm.  
**Jonathan Emig:** Yeah, this works.  
**Alexander Russkikh:** Yeah. That would be a pain indeed.  
**Estevão Ribeiro:** only require sorry Jonathan.  
**Jonathan Emig:** I was just saying this works. I mean I it I mean it might be a little more convenient to have the mpm RC file hardcoded, but this is a little bit more secure.  
**Estevão Ribeiro:** Uh the only requirement here is that we need to install the one password key inside our machine uh to allow us use the the automation and generate the the credential inside our repository.  
   
 

### 00:11:57

   
**Estevão Ribeiro:** So yesterday I talked to I talked to Parker and I get licensed for uh new slots for Matias and the Alex. So I think everyone here is able to to execute this this automation without the issues. But if we if anyone here saw any issue, please reach out me to allow me adjust the process. That's it. Any doubts? If not, that's it from me.  
**Gabriel Rocha:** Hey guys, I am working on the embedible integration for for the farm is analytics that looks like this. Uh so the embedible is the the tool that we have that generate this richy dashboards for us. uh but they don't seem to have a proper staging or development environment. So every embedible that we create is on on the same environment. So it's it's the same that it's appearing on product. So I cannot uh create a new one because it would show up on our analytics page. So what I'm doing now is creating a a front end filter to to parse the names. So we would be able to like add tags to the name and it filter the the correct for each area of the the system.  
   
 

### 00:13:46

   
**Gabriel Rocha:** Uh so uh my working on forms will not mess with the analytics. Uh go go on. However, this different ch uh to be honest not much uh I don't know who who made this but uh for this page the analytics uh  
**Jonathan Emig:** Uh, I'm just unfamiliar with that that part of the application. I was wondering if you could um fill me in a little bit.  
**Gabriel Rocha:** we put this from embedible go Alexander  
**Alexander Russkikh:** Yeah, I mean I actually presented this multiple times already, but the idea is that uh so this is a read only uh database access uh that um Steve configured and then what happens is that uh each each single I'm sorry I I cannot speak right now but basically each single each single dashboard uh is leveraging the cube uh uh the cube um like language query builder and it's a dynamic automatic way to generate SQL queries based on the dimensions. So there is like language behind it.  
**Jonathan Emig:** Okay.  
**Gabriel Rocha:** Uh and this will be used now for for the forms.  
   
 

### 00:15:17

   
**Gabriel Rocha:** Uh the analytics was the only place that we used it. So it was no problem to not have a separation.  
**Alexander Russkikh:** Actually, actually I can tell that I will circle back.  
**Gabriel Rocha:** So now I am working on these filters.  
**Alexander Russkikh:** Parker asked me to circle back to this project again uh soon. So that uh what we've been doing before is that we were uh kind of preparing all these dashboards with some specific data selections and which translate into different graphs. But it was a um something that at that point Lizzie created when she was still uh here. And we have all these six dashboards that six dashboards that you see that kind of displays some parts of the data for different uh uh slices but uh they rolled out the embeddible rolled out a new release where they actually they basically allow to do the same but to the users. So what's going to happen is that Parker wants to offset this burden of generating the data that the users want to see onto themselves. Well, that's this will result in many problems as far as I can tell because the users will start doing uh random stuff and asking us why it's not working.  
   
 

### 00:16:39

   
**Alexander Russkikh:** Uh most likely uh but it's something that embedible supports via canvas feature and I will take a look at it in next or this or next week.  
**Gabriel Rocha:** Okay.  
**Jonathan Emig:** Okay.  
**Gabriel Rocha:** And that's my my status.  
**João Tenório:** I'm working on the Dropbox integrations with the awful lot of flow. There are a lot of gaps connecting the the signatures and all internal offer status and there is no web hook. So I am setting up everything in the test account and after that park will create a account a production account using a paid plan and uh we can deploy the solution to to have a to have the customers able to create signature with the Dropbox. For the time being, we will use the inbox email out ofbox emails from the Dropbox because it's not possible to use the custom templates right now. So we will have only the template that they is fixing for the case when I offer is sending not using the Dropbox and for the Dropbox we rely in the out of the box. I tested everything yesterday and it's working fine on the Dropbox side and that's all.  
   
 

### 00:18:16

   
**Jonathan Emig:** Sounds good. Yesterday I looked into uh um so I was also working on the offer letter issues. So there was a ticket where uh the document template could not be found. Um and it turns out that was because the document template was not verified yet. Um, and as I was looking at that, uh, I thought that that that piece of it was a little bit unintuitive. Um, and then also we have we already sort of have a a verification to make sure that tokens are available in the interpolation options. So the step of verifying a document template uh seemed redundant to me. Um, so I I took that step out in favor of just using the interpolation options that run on on uh the editor mount. um when we had tokens available. Um so yeah, now users should not have to verify a given document template. And so I opened a PR for that. And then um I also actually Andre I I fixed the loading state um for the um interpolation options, the tokens.  
   
 

### 00:19:25

   
**Jonathan Emig:** Uh so that will yeah that should help with the end test as well. um removed cache for the job board or the job page and then um forced dynamic for the blog pages which I think should help the build process the end to end steps the end to end tests. So that's it under Uh I so I didn't  
**Andrei Botalov:** Interpolation issue was because there were two requests. So you change fix that. So we made two requests for tokens like the first one and the second one. Right? You removed one of them.  
**Jonathan Emig:** notice that but I can take a look at that specifically. What I noticed was that the loader was in fact the variable was just completely unused for one of the requests. Um and that helps. I mean there's a loader now. But I'll take a look at the two requests. How's it  
**Alexander Russkikh:** Oh yes, now that we are speaking about uh the editor, I wanted to like show you something. So some time ago some customer came basically saying that when you put copy paste this uh into the editor which is using lexical as everyone knows it's not uh it's not formatting properly the spaces and then I've been like checking this and the main issue is that instead of uh using the brake line tag it's like actually doing a padding top padding bottom And so in short, I said that there is no way we can support  
   
 

### 00:21:10

   
**Alexander Russkikh:** this. I mean, we can create a custom solution, but it's probably not even worth it. But as you can see, all these uh like it should be a break line basically. And that's how lexical parses and interprets that. And if you copy paste this, you you will see that no spacing is there because just for the fact that it's not using a proper HTML u syntax and that's what came up yesterday.  
**Jonathan Emig:** So this is happening in our editors I think.  
**Alexander Russkikh:** This is happening in every ed in pretty much every editor uh concerning notion when someone is copying uh copying description from notion just because the way they set up a uh spacing between the uh text and paragraphs which they did via padding. But then if you do this via in link they attest to other platforms and they leverage bra line and bra line doesn't create impose any issue. It just really you need to be aware that notion will basically give this problem. Uh because as you can see every single one of these is wrapped in the you go here you can see it's uh it's Yeah.  
   
 

### 00:22:27

   
**Jonathan Emig:** Yes. see that. But I'm like, so are people copying and pasting from notion into our editor? Is that what is happening or I see?  
**Alexander Russkikh:** Yeah. Yes. Yes. Yes. Yes, indeed. And yeah, this is what results it results into. So they everything is being wrapped into different dives, which is just a strange way of doing things in my opinion. That's Yeah.  
**Jonathan Emig:** Okay.  
**Alexander Russkikh:** Oh, and also all these divs will be um ignored. So, lexical as it works, it uh only extrapolates only the text that we are actually want. So, that being spans, that being the apparently just the text and h text and o and all this, but all this nestings are gone. It flattens flattens out the wall structure. Yeah. due to our lexical setup.  
**Mathias Falci:** All right, I will share here guys right quick. So basically I I am mainly focused in accepting multiple locations in job listing. So I have the dev environment here with the with the previous version with only one address and then now we have the new UI here for multiple locations.  
   
 

### 00:24:00

   
**Mathias Falci:** Uh basically we already have the new data structure. Uh it have the backward compatibility with the the the old the previously job listing created. And yeah what I note here is we have uh in the code actually I saw we have only one uh we have one time zone for each location and on Figma we have one time zone for all locations. So I sync it with uh Kolina and I will make the adjustment here to have one time zone for each location. Um now I'm testing the some edge case edge cases sorry such as uh changing the changing the location we have some we we might have other address inputs here according the location and even according with the workplace type. So I'm just testing those edge cases here and after it I would go for the integration. Uh I believe it will be pretty smooth because Jan already shared with me the PR and the documentation. So we already have the data structure to just send to the request. So I believe it will be it will be easy.  
   
 

### 00:25:14

   
**Mathias Falci:** And the final step will be just ensure um we show properly the locations in the job board and in the embed careers page. So that pretty much is guys. I will stay focused on that for today and yeah thank you.  
**Jonathan Emig:** Okay, I had a quick question. Um, is it possible to populate the time zone with the location input automatic?  
**Mathias Falci:** um populate the time zone with the location input. You mean by the the the return of the location here the the Google places API? I don't think so.  
**Jonathan Emig:** Yeah, every location should have a time zone associated with  
**Mathias Falci:** I will check it. I I'll double check it with to to to check if the request returns the the time zone or maybe we can get the time zone uh in with other way.  
**Alexander Russkikh:** the the it's it's get it's it's the get place prediction of the Google API and we don't so is knows it but we don't I think it doesn't support it's mostly different library I think of the Google API  
   
 

### 00:26:15

   
**Mathias Falci:** Alexander sorry  
**Jonathan Emig:** Okay.  
**Alexander Russkikh:** but I will leave it to to to Jean for Jean to tell because he worked with get place predict  
**João Tenório:** I believe we don't have the time zone in the Google place response. We only have the places fields and we have address sometimes phone number and other Google maps and stuff.  
**Mathias Falci:** Yeah, in our current version, Jonathan, we didn't update it as well. So, yeah, because we don't have it.  
**Alexandr Cosov:** Uh I wanted to mention another thing while you're on it. Uh how are you deleting the locations? Is it uh are you firing some kind of deletion mutation or it's just clearing up the state and then absurd?  
**Mathias Falci:** Yeah.  
**Alexandr Cosov:** Yep.  
**Mathias Falci:** in the you mean Alexander in the front end we just have the the locations array and basically we updated it in the back end if I'm not wrong it will be a replace  
**Alexandr Cosov:** Yep. Yep. Yes. So uh will it because I believe that in this drawer we are firing an absurd listing mutation at the after the last step right so if you're again it's the I I think we may have the same problem here as with the screening questions like if you're cloning a requisition your listing will be cloned it will have let's say five locations you remove one from the UI four gets passed to the absurd but because it's absurd.  
   
 

### 00:28:03

   
**Alexandr Cosov:** The fifth one remains. Uh but again, just if you could make sure that it's not the case, maybe I'm not not right. But yeah, just so you'll be aware that this could be a problem.  
**Mathias Falci:** Yeah.  
**João Tenório:** Th this is this is different because I have created an another field on the back end to receive the list of additional location.  
**Mathias Falci:** Yeah.  
**João Tenório:** So uh at the moment when we click on the trash the trash can we are not calling any deletion mutation and uh also when we click on the next button we are passing the array of locations and this array of locations will be have placed on the this new h job listing. So we don't have the same problem from the previous one.  
**Alexandr Cosov:** Okay, cool. Cool. Cool. Got you.  
**Mathias Falci:** Andre.  
**Andrei Botalov:** uh Google I just checked Google places uh API and they seem to return time zone if you want I mean I guess we currently don't treat the field but like in Google places API place uh has a time zone inside  
**João Tenório:** Yes, but we need to double check if we needed to include additional parameters because depends on the parameters it will increase the billing. Google place charge us depends on how many feuds we are pulling.  
**Mathias Falci:** Yeah, makes sense. I I can double check it, guys. Don't worry.  
**David Živković:** Is Google Places API uh expensive? I know this was a topic before.  
**Jonathan Emig:** Mhm. Yes.  
**João Tenório:** Yes, that's  
**Alexander Russkikh:** Yes.  
**Alexandr Cosov:** Bye-bye everyone.  
   
 

### Transcription ended after 00:30:26

*This editable transcript was computer generated and might contain errors. People can also change the text after it was created.*