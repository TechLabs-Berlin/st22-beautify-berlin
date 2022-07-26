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

- [GeoJSON file](ElectricBoxesWithAdressDataAndW3W_4326.geojson) (click to open map)

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

For the image uploading and the implementation of the DL feature we created a database using Firebase, which seemed to be a quite efficient and fast solution, also due to the lack of a back-end developer in our team. We implemented Axios to request the DL API (only on a branch called "IMPLEMENT" (PicUpload.js component) within the repository). Time was not enough to finalize the implementation, also with the help of our mentor, it was not possible to reach the expected outcome. Goal was to let citizen upload a picture which is saved within backend. The picture should be classified by the DL AI and the given result should be shown within a div on the web application. All other trys to access the API result within our react app failed or didnt give the expected outcome. Finally, we tried to deploy the app on Netlify but were facing an error in the html file, which is only occuring on Netlify but not on React.

### Working method

The whole code was saved within the directory called “beautifyberlin” in our GitHub repository. We took care of an organized working folder, since both web developers were working on the same code simultaneously.

Our Project has more potential like adding a map view or pursue coding on the rating with stars. Given the time frame of the project we had to work on a very strict and tight schedule. At the same time, we faced several obstacles like bugs and time-consuming issues on Git. We used around 1/3 of our working time on solving GitHub issues and 2/3 of the time on coding. However, since such problems are expected when it comes to coding, we calculated some time buffer to solve such possible issues at the planning phase of our project. That allowed us to meet the deadline and deliver a functioning app (in a front-end point of view).

We have improved our programming skills during the project phase and are happy with our achievement as a team.

### Go through

The following video shows a go through our webpage. The video shows a typical User experience:

1. Upload of electric box by a citizen.
2. It will show up on the “Open” to apply page.
3. Artists can apply for it.
4. Existing Applications will be shown in “Applications”.
5. In “Applications” users can vote for their favourite painting on a seperate page.
6. Showing additional pages About Us and both login forms (Owners and Artists).

https://user-images.githubusercontent.com/101949025/180958911-9abba96c-e368-4ca3-8c50-a46f342b0384.mp4


## Data Science Track

This semester's project phase being a part of the "Beautify Berlin" team has truly been an amazing journey for me. In fact, not everything worked as we had planned in the beginning and there were quite a few challenges, but in the end, we managed to work our way around them to find our way to jointly and successfully develop our prototype of this wonderful app. In the following part, I will describe to you the past weeks from the perspective of data science (DS). 

## Ideation

While it is obvious what a web developer may do in order to assemble the app and that, for example, a user experience designer is needed to lay out plans for the project and think of features a potential user would love, a possible contribution by a data scientist was not as obvious from the start. This is especially true when considering that the implementation of a machine learning algorithm was part of the deliverables required for successful completion of the course. Our team wanted to bring together owners of electric boxes, artists and regular people of Berlin to beautify unsightly places in the city by installing street art on electric boxes. Of course, knowing how many electric boxes there are, where they are and who owns them is necessary for this. But this is not actually the kind of data a machine learning algorithm can be trained on to predict information meaningful for the users of the app. During the first four weeks, I browsed the internet on the look for data which could be used for our application. Apart from that, I helped forming the general scope and ideation of the project along my team members. Unfortunately, I was not able to find useful data sets. The only one available basically only contained an ID for each electric box and the geographical coordinates for most of them. Obviously, without data, I also had not a clue how I could contribute to the project. The facts that I was the only DS techie assigned to the project and that our mentor ghosted us made it even more difficult, because I did not have anyone to collaborate and to have a joint ideation session for the DS part with. At this point I was not even sure anymore if I would be able to complete the course and qualify for the certificate. But of course, I still had the help of my team mates, who never let me down even though they were from different tracks and did not necessarily know about what a machine learning algorithm was able to do. After the midterm presentation we talked about the problem in our weekly meeting. Together, we decided that we would take another approach. We turned the lack of real world data sets, which at the start we tought of as a disadvantage into an opportunity. We decided to generate synthetic user data of artworks already completed by the Beautify Berlin community and use it to train a machine learning algorithm to predict whether a future application for creating an artwork would likely be approved or not. We decided to take into account among others features like the district in which the artwork the electric box could be found, the type of street art, the artists level of experience and a user rating done by the community on a draft of the artwork. Once the app was launched and there would be sufficient user data, an algorithm like this could help artists to assess whether the effort of applying would be worth it based on real world data.

### Synthetic Data Generation

I immediately began compiling useful features for this data set which would allow me to implement such an algorithm. I decided for features according to what I just wrote previously: Basic information about the artist, the artwork and the location. Each artwork was generated by having each of its features randomly picked by numpy from a list of possible options for that specific feature. While some features, like the district in which the artwork could be found, were uniformly distributed, others were not. For example, the type of the artwork (e.g., painting or graffiti) was drawn from a non-uniformly distributed list: The chance of it being a painting was 52.5%, while the chance of it being a graffito was just 32.5%. In order to introduce some more challenges, I introduced some missing values. To be more specific, each artwork had a ten percent chance of not being rated by users. That way, a data set of 750 artworks was generated. Apart from generating the features, I also labeled the data set myself. I acted like I was the owner of the boxes and for each artwork I had a look at the features and then decided whether I would approve that artwork or not. I introduced some bias that may not be true, but I needed to do it so that the algorithm was able to learn anything. (Disclaimer: These biases refer, for example, to which types of artwork (e.g., paintings or graffiti) are preferred over others by the owners or to that owners are more likely to approve artwork in some districts than in some others. These biases do not necessarily reflect the truth or the opinions of Beautify Berlin and TechLabs. They were introduced so that an ml algorithm is able to learn from the data set.) In the end, I had a list of 750 applications for artworks plus their outcomes.

The final data set looked like this:

<p align="center">
<img src="/DS_images/artworks_raw.png" />
</p>

### Data Preparation

As first step of the data handling and preparation, I categorised the features. While some features were naturally numerical and continuous, some were represented by character strings. I turned them into numerical values and ranked them according to the likelyhood of improving chance of approval. Higher values hereby represented higher chances of approval and vice versa. This was necessary, because the algorithms imported from scikit learn taught to us are only able to handle numerical data. Next, I handled the missing values (user rating) by filling these missing values with the value zero. This is because a missing user rating lowered the chance of the artwork getting approved. Filling with zero thus fit well into the order of the categories and prevented losing about ten percent of observations.

Afterwards, the data looked like this:

<p align="center">
<img src="/DS_images/artworks_processed.png" />
</p>

### Data Visualisations

Even though I set the distributions of the features myself, I wanted to get an overview of the features and their distributions and convice myself that the generation of synthetic data worked out the way I planned. For this, I visualised the data using several types of graphs like bar plots (if there were more than two options) or pie charts (if there were just two options). Finally, I assembled a scatter plot matrix, which convinced me that the synthetic data set was suitable for ml, meaning that an algorithm was likely to be able to learn from it.

Below, you can see two examples. For further visualisations, please have a look at the Jupyter notebook "data_visualisations.ipynb"

<p align="center">
<img src="/DS_images/summary_statistics.png" />
</p>

<p align="center">
<img src="/DS_images/districts.png" />
</p>


### Machine Learning Algorithm

The goal of the algorithm was to predict the outcome of the application. I decided to use a decision tree classifier for this task. Firstly, because the task is a classification problem and secondly, because a decision tree classifier allows for the determination of information like feature importance. I determined the optimum depth of the classifier by determining highest average accuracy on the test set averaged over 1000 train-test-splits. This test resulted in 6 being the optimum depth. The resulting classifier I trained that way had an accuracy of 83%.

<p align="center">
<img src="/DS_images/depth.png" />
</p>

This is what the tree looks like: 
(For full solution, please have a look at the Jupyter notebook "approval_classifier.ipynb")

<p align="center">
<img src="/DS_images/tree.png" />
</p>

Remember that I did the labeling myself based on MY preferences and the biases that I decided to introduce. What that means is also that the algorithm basically learned about my personal preferences and the mentioned biases. To me, seeing the feature importances was the most fascinating part of the project. During labeling, I needed to look at the features and then decide whether I would approve that specific artwork or not. There were some features I did not pay a lot of attention to, like e.g., the number of artists involved. And there were also some features that were very important to me, like e.g., the user rating, the type of the artwork or what could be found on the box before. After training a decision tree classifier I visualised these feature importances. The graph reflected what has been important to me and in which order/and how much really precisely. That was incredibly astonishing to me and showed me just how good algorithms have become in learning from data.

<p align="center">
<img src="/DS_images/feature_importance.png" />
</p>

### Final Thoughts

Completing this TechLabs project tought me a large number of invaluable skills. Not only did I improve my abilities of data handling and coding in Python, but I also learned to cooperate and work with people from different tech stacks and backgrounds to collectively build an application which helps to tackle real world problems. After gaining all of this experience, I would still and actually even more than before love to take part in next semester's TechLabs AI track to deepen my knowledge about machine learning, deep learning and to improve in realising ideas in collaboration with a team from diverse tech stacks. Even though I would say that our project phase was successful, I also did a lot of mistakes and I would approach many things differently. But it is exactly these challenges, which by being overcome, help us becoming a better developer and teach us the most valuable lessons. I hope that I get the chance to implement what I learned from these mistakes in next semester's project phase.
