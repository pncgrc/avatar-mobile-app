# Welcome to my Avatar: The Last Airbender React Native app 👋

## Notes

### Profile

1. Users can log in just by entering their name. If the users exists, it will fetch that user, otherwise it will make a new one with a DiceBear avatar.
2. The user has the ability of changing their profile picture: using the device's pictures or using the camera.
3. On the profile the user will be able to see the questions they added with that account as well as their quiz score, which adds up 10 points per questions they answered right.

### Quiz
1. POST request is implemented by adding your own questions to the API, but the user needs to be logged in first.
2. Otherwise a user that's not logged in can just do the quiz, without keeping score or be able to add their own questions.
3. The 6th question will always be guaranteed a question that was added by the user (if there are any).

### Characters
1. It's just a flatList of all the characters found in the API. User may press on any part of the card and it will take them to a detailed view of that character.
2. Users may filter the characters by name or nationality (or elements like: Air, Water, Earth or Fire).

### Home
1. Home is just a landing page that gets the content from the API, besides the logo that is hosted online.

## Things I would've liked to implement
1. A button inside of the characters filter text input for better UX
2. ~~Custom fonts to give the app more Avatar styling identity~~
3. Maybe a background that adds some texture to some empty pages like the quiz one, where you have to choose between start or add questions
4. Logic to delete submitted question by the user on their profile.
5. Ability to add characters to favorites and having the favorite characters displayed on the profile.
6. Also the ability to remove them from favorites either on the respective character cards (both detail and basic) and on the user profile
7. Cleaning up my code!
8. Styling changes: I haven't managed to make the app look NOT boring.
