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

In terms of the Web development Track the Beautify Berlin project was a big challenge and a great opportunity to gain and improve our programming skills at the same time.

It engaged us with so many new learnings, got us in touch with state of the art of front-end development, as well as getting us close to technologies like Deep Learning and Data Science. Also, we were introduced to Git and GitHub which we used as a main tool in our workflow.

Finally, we gained a complete picture of front-end development and a very good understanding of the web development process itself.

We started with learning the basics about front-end which are HTML and CSS. After this, JavaScript took us deeper in the facets of programming. Moreover, we learned React which is a wide-ranging and fun tool. It is a complete platform that is used to implement and connect everything in front-end.

By using React we built the setup of our web page. After we had the user stories from UX track, we started coding the components needed along with the pages. We also used MUI framework for some components, but mostly we worked mainly with plain HTML and CSS.

After coding all our pages, we used React Router Dom to route and link pages with each other.

For the image uploading and the implementation of the DL feature we created a database using Firebase, which seemed to be a quite efficient and fast solution, also due to the lack of a back-end developer in our team. We implemented Axios to request the DL API. Time was not enough to finalize the implementation, also with the help of our mentor, it was not possible to reach the expected outcome. Goal was to let citizen upload a picture which is saved within backend. The picture should be classified by the DL AI and the given result should be shown within a div on the web application. All other trys to access the API result within our react app failed or didnt give the expected outcome. Finally, we tried to deploy the app on Netlify but were facing an error in the html file, which is only occuring on Netlify but not on React.

The whole code was saved within the folder called “beautifyberlin” in our GitHub repository. We took care of an organized working folder, since both web developers were working on the same code simultaneously.

Our Project has more potential like adding a map view or pursue coding on the rating with stars. Given the time frame of the project we had to work on a very strict and tight schedule. At the same time, we faced several obstacles like bugs and time-consuming issues on Git. We used around 1/3 of our working time on solving GitHub issues and 2/3 of the time on coding. However, since such problems are expected when it comes to coding, we calculated some time buffer to solve such possible issues at the planning phase of our project. That allowed us to meet the deadline and deliver a functioning app (in a front-end point of view).

We have improved our programming skills during the project phase and are happy with our achievement as a team.
