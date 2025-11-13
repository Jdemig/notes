Nov 3, 2025

## Daily Team Scrum \- Transcript

### 00:00:00

   
**Mathias Falci:** issues in the beginning. Steve helped me. I thought it was something related to the VPN, but I think it's my local environment here, but things seems to be stable right now.  
**Alexandr Cosov:** What was the issue?  
**Mathias Falci:** Man, I faced the course on our requests in my local environment. I really don't know why. And then I rerun the PNPM docker setup and things went well, you know. No, no idea.  
**Alexandr Cosov:** Uh, by the way, Andre, I believe it's you leading a daily this week.  
**Andrei Botalov:** Oh yeah. Thank you.  
**Mathias Falci:** Guys, just a question. There is some order of uh giving the stats in the daily. I I know I am after Jonathan.  
**Alexandr Cosov:** Oh yeah, there's in a dev discussion slack channel, there is a pinned daily MC shift like uh slack thingy uh near to the messages button and we are there.  
**Mathias Falci:** That's what I know.  
**Alexandr Cosov:** I think we need to add you there. But yeah, generally I think you will be after Jonathan.  
**Mathias Falci:** Okay.  
   
 

### 00:01:30

   
**Alexandr Cosov:** We just switch every  
**Andrei Botalov:** Uh so my status is so hello everyone. I stated that I tested CRM menu on Friday and reported some issues to J but he fixed them already. Uh then I added chicken reply to previous thread email into CRM test. So there isn't CRM reply to previous functionality.  
**Jonathan Emig:** I don't  
**Andrei Botalov:** I added a 10 to test for that to check that email is sent in the same thread and I fix a send requisition API correctness but it seems like the physics didn't work and I checked some fixes um in sourcing agent I currently work on the test to check uh that schedule is for end to end test for checking uh that schedule is correctly handled so that if we like out of schedule uh then we schedule to the correct time and then when uh the course schedule is correct uh then we send u then we send email. That's it. Are you  
**Alexandr Cosov:** Yep. Yep. Thank you. Hello everyone. Today I've been mostly fixing again the bugs from schedule V. I've also fixed the bug with the calendar names overflowing the one which Brandon reported and Brandon bugs and suggestions.  
   
 

### 00:02:55

   
**Alexandr Cosov:** Parker added some comments, DM me some comments about it, fixed them and merged the PR and now I'm working on uh the schedule V3 interview statuses. We had a sync with Andrea Barker on Friday. We drew like the whole diagram on how the flow should work. So yeah, I'm I'm working on it. Um yeah, that's it. Thank you. Uh, Steve, I believe you're next.  
**Estevão Ribeiro:** Yes. Uh this morning I created uh the the October cost uh report for Parker and Brandon. I'm supporting Jonathan with Microsoft Micros deployment and I will continue work on the Sun scan uh turning on this case. I hope that's it.  
**Gabriel Rocha:** Hey guys, let me share my screen here. Uh I've wrapped up basically what's uh related to using the forms through through the pipeline. So both assigning a a farm to a specific stage uh I've done uh and also uh uh cutting the this the sand farm drawer uh right from from the pipeline. You can call uh from from the listing and also it can be open uh through the the candidate view.  
   
 

### 00:04:40

   
**Gabriel Rocha:** you can sending a a form to to a candidate. Uh I've handled the the specifics for for for using a a candidate as as the option because uh it wasn't properly done before. Uh, and also now I'm working on this edit schedule action that opens this. But, uh, as far as I know, it's not u editing a schedule. It's just creating a new one. So, I will make Parker know that. Uh, that's it. I'm just keeping on this small actions.  
**João Tenório:** Last Friday I fixed the CRM bugs and now I am working on a new feature requested by a customers. Uh this feature is will allow them to create including more than one job listing and uh we can for example include a flag to uh display the the job the job list location that depends on the user preference and that's all.  
**Jonathan Emig:** Hey guys, can you hear me?  
**João Tenório:** Yes.  
**Jonathan Emig:** Okay, cool.  
**Alexandr Cosov:** Yep.  
**Gabriel Rocha:** Yes.  
**Jonathan Emig:** Sorry, I was having AirPod issues. It just connected.  
   
 

### 00:06:06

   
**Jonathan Emig:** But um so yeah, last Friday I was working on uh so I fixed a couple issues in the run end test shript. Um I updated it so that you can upsert specific variables. And I I thought that was important because um it's a lot more convenient to use environment.local local instead of the environment file. So now we only have to use two of those instead of three different EMV files in scale.io. I also updated um there's an issue with the uh reject candidate flow running locally. There was just a small discrepancy between the environment variable expected in end toend tests in the end to end test YAML file and then also um locally. Uh, so I fixed that discrepancy and now it works in both environments and then I fixed uh there was a oh I ran so I ran the job recommendations email. I've been monitoring that um since it's been live. Uh so far it looks pretty good. Clickthrough rate and open rate look pretty good. Um and I was considering lowering how frequently we sent that.  
   
 

### 00:07:16

   
**Jonathan Emig:** We sent that Monday, Wednesday, Friday and I was considering lowering that. Uh but so far the clickthrough and open rate have not gone down yet. So um I suppose there's not a good reason to lower that I guess how frequently we sent it. So um I'll continue to monitor and see uh see where we end up. Um and then I also reviewed Parker's PR. Um, and then yeah, he had a couple of he had this uh fine next available extension requisition that was running like Prisma queries in a loop and then some other concerns that I brought up. Uh, so we decided to open up a new front end to fix it was it was for like the copy requisition issue that we mentioned last Friday. Um, so that uh that went out. Um, his fixes for the front end went out and I think J had a look at that as well. Um, so that's it. Uh, today I've been working on uh, Vanta, so I'll continue to do that. And yeah, Steve's helping me out.  
   
 

### 00:08:22

   
**Jonathan Emig:** That's it for me.  
**Mathias Falci:** All right, thanks Y. I will share here right quick. Uh on my side guys, basically I have been working some small fixes. So on Friday I merged this one here. Basically the AI chat in AI sourcing agent was returned different results, different candidates from when we added the filters. So basically we made a workar around here. I made u um we just call the Google place API in the AI AI chat return as well. So we can ensure the most similar results uh from both. So in the AI chat return and in the futures. Um also today I merged this that fix this fix here. Basically we have the the sender and the target inverted.  
**Jonathan Emig:** I was just going to ask about how you call the Google Places API because I did create a um a cache fun a function that caches the return the response for that.  
**Mathias Falci:** Yeah, basically I used the uh if I'm not wrong, we have one mutation for that and I just use the same mutation we use on the on the fielders.  
   
 

### 00:09:45

   
**Mathias Falci:** So uh basically it's the same call and the actually we have the AI chat return and with that it it um it already returned the address. So basically I call the same mutation that we have on filters to enhance the return the results and have the same filters. So I can probably Jonathan.  
**Jonathan Emig:** Okay, I think that's automatically cached. Yeah.  
**Mathias Falci:** Yeah, I'm not sure. But yeah, it's working. I tested on dev. So uh also and right now I'm just focusing in some uh issue with the credit balance when we open candidate page. So basically what I have done so far is updated the cash policy. So I'm using uh cash and network right now. I think it's a It's a cache is issue as well but I will debug it a little bit more just to ensure I cover all the case but yeah just focusing some small issues here. Uh apart from that I made some code reviews of some open PRs and that's it for my side guys.  
**Jonathan Emig:** Back to you, Andre. Sounds good.  
**Alexandr Cosov:** Thank you everyone.  
**Jonathan Emig:** See, guys.  
**Alexandr Cosov:** Bye-bye.  
   
 

### Transcription ended after 00:11:14

*This editable transcript was computer generated and might contain errors. People can also change the text after it was created.*