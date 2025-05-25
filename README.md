# Welcome to my React Native app 👋

## Notes

### Profile

1. Users can log in just by entering their name. If the users exists, it will fetch that user, otherwise it will make a new one with a DiceBear avatar.
2. The user has the ability of changing their profile picture: using the device's pictures or using the camera.
3. On the profile the user will be able to see the questions they added with that account as well as their quiz score, which adds up 10 points per questions they answered right.

### Quiz
1. POST request is implemented by adding your own questions to the API, but the user needs to be logged in first.
2. Otherwise a user that's not logged in can just do the quiz, without keeping score or be able to add their own questions.

### Characters
1. It's just a flatList of all the characters found in the API. User may press on any part of the card and it will take them to a detailed view of that character.
2. Users may filter the characters by name or nationality (or elements like: Air, Water, Earth or Fire).

### Home
1. Home is just a landing page that gets the content from the API, besides the logo that is hosted online.