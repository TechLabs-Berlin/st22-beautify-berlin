## Deep Learning track

### Challenges
At the onset of the project, there was no clear definition for a deep learning application. Moreover, the dataset referenced in the project was not suitable for the purposes of training a DL or ML model. For a period of about three weeks after the project start, there was no specific task identified for the DL track. 

### Solutions
Once the project team finally came up with an idea for a deep learning application, the DL techie started to scrape data of electric boxes. The idea was to develop a deep learning model to classify user submitted images of electric boxes into one of these categories: art, poster, dirty, clean. The final model was the result of several iterations, mostly involving more data. For examples, the initial dataset contained disproportionately more images of electric boxes with art projects, as those tended to come up more in online searches. This created data imbalance. For examples, the model with not many images of boxes containing a poster produced the following confusion matrix: 
 ![alt text](/confmatrix_pre_posterimages.png)