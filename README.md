# Spacestagram

A React app that displays random posts from [NASA's Astonomy Picture of the Day page](https://apod.nasa.gov/apod/astropix.html). Users are able to like and dislike posts and refresh the page if they would like to check out more posts!

## Contributor
[Zach Johnson](https://github.com/zachjjohns)

## Features
* Like / Heart Animations thanks to [react-animated-heart](https://www.npmjs.com/package/react-animated-heart)
* Testing thru [Cypress](https://www.cypress.io/)
* Loading + Error Handling
* Mobile Responsiveness

## Tech & Tools Used
* React
* HTML/JS/CSS
* Cypress
* NPM package: [react-animated-heart](https://www.npmjs.com/package/react-animated-heart)
* [NASA's APOD API](https://api.nasa.gov/)
* Adobe XD for Wireframing

## Deploy Link
[Click Here to view the deployed project on GitHub Pages](https://zachjjohns.github.io/spacestagram/)

## Screen Shots:

### Desktop
<img width="1419" alt="Screenshot of Spacestagram's Desktop view" src="https://user-images.githubusercontent.com/76700555/134246446-47e69aff-71bd-4341-a577-bb60fa75880f.png">

### Mobile
<img width="396" alt="Screenshot of Spacestagram's Mobile view" src="https://user-images.githubusercontent.com/76700555/134246553-c7e20d2c-cd2c-46c1-b3f4-867bf996e6c0.png">

### Wireframe (created on Adobe XD)
![Screen Shot of Spacestagram Wireframe](https://user-images.githubusercontent.com/76700555/134247109-ca2e612e-d9ac-4cb1-9f48-95bced443ae9.png)

### Cypress Tests
![Screen Shot showing Cypress tests passing](https://user-images.githubusercontent.com/76700555/134247218-effcbb86-b07e-4b4b-90e7-549d45b4e2ee.png)
* If you're interested in running these Cypress tests locally, please [email me](mailto:zachjjohns@gmail.com) as you'll need an API key to do so.

## Decisions and Trade Offs
* This was initially done as a take-home challenge for Shopify's Front End internship program, and it was important to weigh what was realistic to accomplish under a time crunch. I decided to focus on solid preparation & documentation, implementing Cypress for testing, and a clean UI, as I felt these highlighted some of my strengths.
* I started the project by creating a wireframe and project board (via GitHub Projects), as these are always extremely helpful in making my overall process smoother & more streamlined.
* The heart animation seemed like a fun feature to implement and I did so via a pre-built npm package. This had its own pros and cons: while I saved time in creating the animation itself, it proved more difficult to tweak colors and position to my liking.

## Future Implementations
* Utilizing localStorage & React Router to display Liked Posts after the user leaves or refreshes
* Instead of scroll boxes for each post description, creating a "Show More" button to display the entire description & push remaining content down
* Loading Animations
* Date-picker to select a date range of posts, as opposed to random posts
* A button to create shareable links for each post
