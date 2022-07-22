## Deep Learning track

### Challenges
At the onset of the project, there was no clear definition for a deep learning (DL) application. Moreover, the dataset referenced in the project was not suitable for the purposes of training a DL or ML model. For a period of about three weeks after the project start, there was no specific task identified for the DL track. Finally, the team lacked backend-development skills to deploy the production-ready DL model. 

### Solutions
Once the project team finally came up with an idea for a deep learning application, the DL techie started to scrape data of electric boxes. The idea was to develop a deep learning model to classify user-submitted images of electric boxes into one of these categories: art, poster, dirty, clean. The final model was the result of several iterations, mostly involving more data. For examples, the initial dataset contained disproportionately more images of electric boxes with art projects, as those tended to come up more in online searches. This resulted in an imbalance dataset, which undermines the predictive power of any deep learning model. Therefore, the initial dataset was augmented with more images, leading to a better model each time. For examples, an earlier model with only a few images of boxes containing a poster produced the following confusion matrix: 
 ![alt text](/confmatrix_pre_posterimages.png)

 After augmenting the dataset with more images of the 'poster' class, the model does a better job of classifying images of posters. In addition, it seems to lead to an improvement in recognizing other classes; in this case performance seems to have been boosted for the 'none' class as well. 

  ![alt text](/confmatrix_after_posterimages.png)

 After the DL model was trained to a satisfactory performance level, the project team struggled to deploy it on the main web-application without a backend developer on board. Therefore, the DL techie created a Restful API service with Flask, and then deployed it on Heroku as an app as well as an API endpoint for image upload and prediction. In the future, the project website could easily send requests to the API endpoint for predictions. The full details pertaining to deployment of the DL application is available in the github repository of the DL techie: https://github.com/allakulov/techlabs_flask_app
