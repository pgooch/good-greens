# Good Greens

Good Greens is a small React app that queries the [Washington State Liqueur and Cannabis Control Board](https://data.lcb.wa.gov/) to look up details on cannabis producers, processors, transporters, and retail establishments. This information is all made publicly available by the state, but the manner in which they make it available makes to hard for a person to parse (but easy for a program). All data presented in this app comes from the Washington State Liqueur and Cannabis Control Board API and is not modified beyond presentation. 

# Questions

### How about a version for liqueur licenses?
I'd love to build one but the state does not seem to have information pertaining to liqueur licenses accessible via an API (or really any other convenient way in my searching around the site). If they add them it I'd be interested in making something using that (or really, any other API the state wants to make public).

### Whats with this "similar licenses" thing?
The data from the API contains multiple licenses with the same organization name or UBI number. These are _probably_ the same organization but I didn't find a lot of details about why it happens (I imagine they have to have some relation). An email to the state asking about this was met with no reply.

### What should I search for to find my product?
Check the smaller label, the one with the bar code and state required information. The easiest way would be to search whatever name or license you find to get a result. If there are multiple organizations then you may need to try one in order to get information on the part of the process your interested (i.e. if you want to check if it was grown in accordance to the law you want to find the processor, if your worried about PoS issues then look for the store).

### Why make this?
Occasionally the state will conduct random testing on products, which usually is following by news that some place broke some grow related law (like using unauthorized pesticides). Most news outlets that talk about it don't mention the companies that failed, so finding that information can be a pain. I build this specifically to be able to check what was violating what. I realize that in terms of finding producers that don't follow the growing laws this is not a particularly useful app.

# Improvements
There are things that I'd like to change in the app, but I also have other projects I'd like to dive into. These are some of the things I would like to add, if I ever come back to this projects (or you would like to fork it and work on it) these are probably good starting places.
- Combine similar licenses in the naughty list
- Add a filter for violation to the naughty list (consider the weirdness in WAC codes and descriptions)
- Make it possible to combine multiple seemingly unrelated licenses together on a single view (it works with comma separated license numbers, but something to make that more interaction friendly)
- Add more and better copy into the app, so it feels more like a thing and less like a hacked together project