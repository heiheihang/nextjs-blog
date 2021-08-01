---
title: 'Joy and Pain with State Management'
date: '2021-07-12'
---
## Joy

In my development process of the Flutter App Parentvestment, I have been figuring out the best practice to handle data flows. An intuitive approach would involve a HTTP request on every screen load. There are many downsides on this approach:

- Expensive server cost with frequent queries to database
- Bad user experience for asynchronous data loading
- App hangs if server fails to respond

After considering the downsides, I have decided to look up state management tools in Flutter. State mangement tools would allow the app to minimize the number of HTTP requests by handling all the data flow in the app as states. 

A simple example would be a TODO list. In the old inefficient approach, there is a HTTP request made each time the user clicks on the TODO list screen. When the user adds or removes an item from the list, a HTTP request is made to do the update, and another HTTP request is made to retrieve the new list.

With state management tools, the app pre-loads the data in the TODO list. Each update on the list is done on the state, alongside with HTTP requests (PUT, DELETE) in the background. State management tools are quick nowadays and the waiting time for update in the frontend is insignificant.

## Pain

The pain of state management tool is more on the development side. If we assume the backend is functionally perfect, there is nothing to worry about. However, in the debugging process, we want to make sure the changes in the frontend are align with the changes in the backend. With state management, the frontend and the backend are separate and we need a way to make sure both are working properly. 

This forces me to do loggings in the backend to make sure the backend is working as intended.

Another problem with state management is a complex design to optimize the amount the data carried over in the state. As the Parentvestment App has 100+ pictures on load, carrying all the data in a single state would imply heavy data flow on each screen load even if the screen does not have any image on it. The Provider package in Flutter limits the number of states to be declared to 6, and it takes meticulous speculation to design what data goes into each state.

However, Provider is sufficient for the Parentvestment App as it is not a huge app after all.