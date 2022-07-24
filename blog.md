# Blog

## User Experience track

### Genesis

During the learning phase of the UX track, we should focus on a real problem. The participant lives in the center of Berlin. In his view, big cities have a lot of dirty and ugly places. He wants to improve this situation and started an ideation session with the brainstorming method to frame the problem. Many aspects were identified:

<p align="center">
<img src="/Berlin-is-dirty-1.png" />
</p>

The recognition was, that there are a lot of things we can’t change, but there is a bit we could improve. So, what could we do?

<p align="center">
<img src="/Berlin-is-dirty-2.png" />
</p>

At the end, three possible implementation priorities were identified:

- Tree pits
- Electric boxes
- Waste

Tree pits and electric boxes are public places open to everyone. The idea was to become a volunteer. You make a request to the authority. Then you can paint on the electric box or plant flowers on a tree pit. Beautify Berlin was born. We could build a platform to answer the
following questions:

- Where are these places?
- How do a place look at the moment?
- How can I take responsibility?

For the waste, the idea was to organize cleaning events.

### Begin of the project phase

It quickly became clear that we need to focus on one aspect due to time constraints. Because there is already a good solution for cleaning events (www.kehrenbuerger.de), we focus on places.
During the first weeks everybody was still busy with the learning material, but we tried to continue ideation on our jour fix. One problem was, that it wasn’t clear who will continue the project phase. So, everybody was working a bit for himself. Our team started with seven members. After one month, two members left. During this time, three personas and scenarios were created:

- [Personas and scenarios](Ideation/personas_and_scenarios.md)

### Prototype

The UX team – now, one person – began to prototype with Figma. Fortunately, it was possible to use the personas, IA models and wireframes from the learning phase. The first prototype was almost ready:

- [App design](https://www.figma.com/file/WunBh8jid7aBkE3PaULYJN/Beautify-Berlin-Team-App)

Sadly, the assumption that we will create an app, was wrong and, it was necessary to create a new prototype:

- [One page design](https://www.figma.com/file/0AK9722OIix2XmdvpDzQTO/Beautify-Berlin-Team-One-Page)

Wish and reality: After the second prototype, two more constrains became known. The first one was, that it would be not possible to implement a map view. For UX, the map was essential. The second constrain was, that the webpage could not be a single page. With these new constrains, a new, third prototype was created:

- [Left menu design](https://www.figma.com/file/w3QxvPi3P6AIknlGKbMtks/Beautify-Berlin-Team-Left-Menu-Design)

Because it was no longer possible to create a left side menu, a fourth and final prototype was created:

- [Final design](https://www.figma.com/file/8ivTAUNeGlCChKno5PKCTR/Beautify-Berlin-Team)

This prototype also includes the view of an owner.

### Side job Data processing

Besides the work on the prototype, the UX team member could use his cartographic knowledge to collect the data. There was a Web Feature Service (WFS) for electric boxes on the open data portal of Berlin available. With the help of the program QGIS, it was able to transform this data in to a GeoJSON file. To get a better name for the places, the what3words API was used to get its name. After the information, that it would not be possible to implement a map view, Open Street Map was used to reverse geocode to get address data for the places. All information are combined in this file:

- [GeoJSON file](ElectricBoxesWithAdressDataAndW3W_25833.geojson)

## Deep Learning track

### Challenges

At the onset of the project, there was no clear definition for a deep learning (DL) application. Moreover, the dataset referenced in the project was not suitable for the purposes of training a DL or ML model. For a period of about three weeks after the project start, there was no specific task identified for the DL track. Finally, the team lacked backend-development skills to deploy the production-ready DL model.

### Solutions

Once the project team finally came up with an idea for a deep learning application, the DL techie started to scrape data of electric boxes. The idea was to develop a deep learning model to classify user-submitted images of electric boxes into one of these categories: art, poster, dirty, clean. The final model was the result of several iterations, mostly involving more data. For examples, the initial dataset contained disproportionately more images of electric boxes with art projects, as those tended to come up more in online searches. This resulted in an imbalance dataset, which undermines the predictive power of any deep learning model. Therefore, the initial dataset was augmented with more images, leading to a better model each time. For examples, an earlier model with only a few images of boxes containing a poster produced the following confusion matrix:

<p align="center">
<img src="/confmatrix_pre_posterimages.png" />
</p>

After augmenting the dataset with more images of the 'poster' class, the model does a better job of classifying images of posters. In addition, it seems to lead to an improvement in recognizing other classes; in this case performance seems to have been boosted for the 'none' class as well.

<p align="center">
<img src="/confmatrix_after_posterimages.png" />
</p>

After the DL model was trained to a satisfactory performance level, the project team struggled to deploy it on the main web-application without a backend developer on board. Therefore, the DL techie created a Restful API service with Flask, and then deployed it on Heroku as an app as well as an API endpoint for image upload and prediction. Here's an illustration of what image uploading and classification looks like on the Heroku app:

<p align="center">
<img src="/pred_screenshot.png" />
</p>

In the future, the project website could easily send requests to the API endpoint for predictions. The full details pertaining to deployment of the DL application are available in the personal github repository of the DL techie: https://github.com/allakulov/techlabs_flask_app

## Web development Track

### Learnings

In terms of the Web development Track the Beautify Berlin project was a big challenge and a great opportunity to gain and improve our programming skills at the same time.

It engaged us with so many new learnings, got us in touch with state of the art of front-end development, as well as getting us close to technologies like Deep Learning and Data Science. Also, we were introduced to Git and GitHub which we used as a main tool in our workflow.

Finally, we gained a complete picture of front-end development and a very good understanding of the web development process itself.

We started with learning the basics about front-end which are HTML and CSS. After this, JavaScript took us deeper in the facets of programming. Moreover, we learned React which is a wide-ranging and fun tool. It is a platform that is used to implement and connect everything in front-end.

### Building procedure and (unsolved) issues

By using React we built the setup of our web page. After we had the user stories from UX track, we started coding the components needed along with the pages. We also used MUI framework for some components, but mostly we worked mainly with plain HTML and CSS.

After coding all our pages, we used React Router Dom to route and link pages with each other.

For the image uploading and the implementation of the DL feature we created a database using Firebase, which seemed to be a quite efficient and fast solution, also due to the lack of a back-end developer in our team. We implemented Axios to request the DL API (only on a branch called "IMPLEMENT" within the repository). Time was not enough to finalize the implementation, also with the help of our mentor, it was not possible to reach the expected outcome. Goal was to let citizen upload a picture which is saved within backend. The picture should be classified by the DL AI and the given result should be shown within a div on the web application. All other trys to access the API result within our react app failed or didnt give the expected outcome. Finally, we tried to deploy the app on Netlify but were facing an error in the html file, which is only occuring on Netlify but not on React.

### Working method

The whole code was saved within the directory called “beautifyberlin” in our GitHub repository. We took care of an organized working folder, since both web developers were working on the same code simultaneously.

Our Project has more potential like adding a map view or pursue coding on the rating with stars. Given the time frame of the project we had to work on a very strict and tight schedule. At the same time, we faced several obstacles like bugs and time-consuming issues on Git. We used around 1/3 of our working time on solving GitHub issues and 2/3 of the time on coding. However, since such problems are expected when it comes to coding, we calculated some time buffer to solve such possible issues at the planning phase of our project. That allowed us to meet the deadline and deliver a functioning app (in a front-end point of view).

We have improved our programming skills during the project phase and are happy with our achievement as a team.

### Go through

The video "BeautifyWebAppFinal.mov" (available in main) shows a go through our webpage. The video shows a typical User experience:

1. Upload of electric box by a citizen.
2. It will show up on the “Open” to apply page.
3. Artists can apply for it.
4. Existing Applications will be shown in “Applications”.
5. In “Applications” users can vote for their favourite painting on a seperate page.
6. Showing additional pages About Us and both login forms.
