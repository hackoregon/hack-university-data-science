# hack-university-data-science
Hack University's [Data Science course](http://www.hackoregon.org/intermediate), sponsored by [Hack Oregon](http://hackoregon.org)

# Syllabus
## Course Description

### Description

Learn the fundamentals of data preparation and analysis needed to transform data into insight!

The course will start with an introduction to core mathematical principles used in data science including probability distributions, statistics, regression, linear algebra, and calculus, as well as responsible data practices dealing with research design, question formulation, and understanding cognitive biases. From there we’ll build upon our foundation to dive into real world data sets by applying data science reasoning techniques to uncover, enrich, and answer questions focusing on finding patterns and meaning within the data. Time permitting we’ll also cover using data for persuasion and action, making decisions with data, and compelling storytelling with data.

### Why Python?

Besides the regular arguments for Python, like its speedy learning curve, easy to read syntax, and wide adoption in the Data Science industry, we chose to teach Data Science in Python because of it's ability to integrate easily with other technologies, which we've found is much more useful than stand alone analysis.

### How do I know I'm ready?

* Proficiency in Python
* Strong understanding of Algebra and Familiarity with Statistics
* Experience with Pandas is a bonus!

### Course Outcomes

* Formulate a **good** data question (see lecture 1).
* Take a real-world data set and prepare it for analysis.
* Identify trends and relationships between variables in the data set.
* Build and interpret a simple regression model. This means understanding what the model can predict, and the limitations of the model.
* Gain project experience by contributing to a Hack Oregon project.


## Course Format

Class sessions run 6:00-9:00pm on Tuesdays and Thursdays from October 11 to December 8 (no class November 22-24 for Thanksgiving break). 

Classes in the first five weeks will start with a lecture (approximately one hour), followed by time to work on exercises related to the lecture topic. Exercises will be provided in [Jupyter](http://jupyter.org/) notebooks. See below for lecture topics.

At the beginning of week 5, students are expected to have a data set and start working on their course project. Each student will be expected to present three times: 1) present your project proposal and the data question that will guide your exploratory analysis; 2) present exploratory analysis and an update to the data question your analysis will answer; 3) final presentation. Each of these presentations will have time for question and answer with your fellow students and instructor. You will be working in teams, and may present together, but each student should present their own work. In-class independent work time for weeks 5-8 will be dedicated to the course project.

## Required Tools and Accounts

[Python 3](https://docs.python.org/3/index.html) - See [Resources/PythonPackages.md](https://github.com/hackoregon/hack-university-data-science/tree/master/Resources/PythonPackages.md) for more information about what exactly to install.

[Git](https://git-scm.com/downloads) - Install Git by downloading the installer for your OS, and create an account on [GitHub](https://github.com/).

[Slack](https://slack.com/) - You should have received an invitation to join the Hack University Slack team. Make sure to join the data-science channel. This will be our main avenue of communication for the class.

## Completion Recognition

Hack University will issue badges on [Badgr](http://info.badgr.io/) for all students who successfully complete the course. Successful completion requires:
* Attendance: attend 75% (12) of the class sessions. To be counted as present, you must attend the lecture and/or presentations and have the instructor check off your in-class work if you leave early.
* Three presentations on your project (proposal, exploratory analysis, and final). If you have to miss a presentation day, you must contact the instructor to arrange for your presentation to be rescheduled.



## Instructor
[Heidi Perry](https://www.linkedin.com/in/heidiperryphd)


# Schedule
### Lesson topics, recommended reading, and exercises for each week.
Schedule subject to change. Materials added each week.


## [Class 1](Lessons/01_IntroDataAndScience):  Intro to Data and Science (October 11)

__Lecture__: 
* The science in data science
* Data terminology
* Project proposal guidelines

__Exercise__: Lesson1\_Graphs.ipynb
* Verify your python distribution was installed correctly.
* Learn to make a variety of graph types using matplotlib.


## [Class 2](Lessons/02_Probability): Probability Part 1 (October 13)
   
__Lecture__:
* Defining probability
* Conditional probability
* Descriptive statistics
* Common probability distributions

__Exercise__: Lesson2\_Probability.ipynb
* Familiarize yourself with common probability distributions, and learn to simulate data by drawing random samples from these distributions using the numpy.random library.
* Learn to make graphs using matplotlib.
* Investigate the evolution of a stochastic system using a random walk with symmetric and assymetric probabilities.

__Exercise__: Lesson2\_HotHands.ipynb
* Think about the effects of independent and dependent events, 
* Learn how to simulate shooting streaks
* Compare a simulation to actual data in order to determine if the hot hand phenomenon appears to be real.


## [Class 3](Lessons/03_Tools): Tools (October 18)

__Lecture__: 
* Overview of python packages numpy and pandas
* IPython and Jupyter notebook
* Source code management work flow for this course
* Developing reproducible analysis

__Exercise__: Lesson3\_LoadData.ipynb
* Learn the basic functionality of a pandas DataFrame - read data from a csv file, select subsets of the data, plot the data.


## [Class 4](Lessons/04_Probability): Probability Part 2 (October 20)
__Lecture__:
* Central Limit Theorem
* Assessing the normality of a distribution
* Correlation
* Bayes' Theorem

__Exercise__: Lesson4\_Distributions.ipynb
* Assess the normality of a data set

## [Class 5](Lessons/05_StatisticalInference): Statistical Inference (October 25)
__Lecture__:
* Inference
* Central Limit Theorem
* Confidence Intervals
* Hypothesis testing and p-values

__Exercise__: Lesson5\_StatisticalInference.ipynb
* Foundations for statistical inference: sampling distributions
* Confidence intervals

## [Class 6](Lessons/06_StatisticalInference) Statistical Inference (October 27)
__Lecture__:
* Inference for Numerical Data
* Inference for Categorical Data
* Bias

__Exercise__: Lesson6\_StatisticalInference.ipynb
* Inference for numerical data
* Inference for categorical data

## [Class 7](Lessons/07_LinearRegression) Linear Regression (November 1)
__Lecture__:
* Fitting a line to data
* Residuals
* Interpretation
* Types of outliers in linear regression

__Exercise__: Lesson7\_LinearRegression.ipynb
* Examine linear relationships in a data set and choose the best predictor

## [Class 8](Lessons/08_MultipleRegression) Multiple Regression (November 3)
__Lecture__:
* Categorical explantory variables
* Introduction to multiple regression
* Model selection
* Checking model conditions using graphs

__Exercise__: Lesson8\_MultipleRegression.ipynb
* Build a regression model with mulitple predictors.
* Use backward selection to choose the best one.

## Class 9: Basic Language Model - Guest Lecturer Hobson Lane (November 8)

## [Class 10](Lessons/10_PreparingDataAndExploratoryAnalysis/): Preparing Data and Exploratory Analysis (November 10)

__Lecture__:

* Getting data
* Cleaning data
* Handling missing data
* Exploratory analysis
* Transforming data

__Exercise__: Prepare your data for the exploratory phase of your course project.

* How was the data collected?
* Describe the data fields in your data set: variable name and type.
* How is missing data encoded?
* Load the data into a pandas dataframe.

## Class 11: Project Proposals (November 15)
__Presentation 1: Project Proposals__

* 2-5 minutes
* Which Hack Oregon Project?
* A brief summary of the data.
* What question are you seeking to answer with the data?
* Why is that an interesting question? Who is the audience?
* Q&A/discussion: answer questions from the class (and ask questions!)

__Exercise__: Exploratory analysis
* Create histograms of variables in your data set.
    * Describe the shape of the distribution
    * Calculate summary statistics
* Look for trends in the data by graphing variables pairwise (scatter plots, side-by-side box plots, mosaic plots)

## [Class 12](Lessons/12_LogisticRegression): Logistic Regression (November 17)
__Lecture__:
* Logistic Regression, A Genearlized Linear Model
* A Simple Example - The Donner Party
* Intrepretation of Coefficients -- Odds Ratio

__Exercise__: Exploratory analysis
* Continue exploratory analysis started Tuesday.

## Class 13: Project updates (November 29)
__Presentation 2: Exploratory Analysis__

* 5 minutes
* Show data visualization and explain what you learned from it.
* Are you still working on your proposed data question, or after the exploratory analysis do you have a new question?
* Q&A/discussion: answer questions from the class (and ask questions!)

__Exercise__: Build model
* Work on the model for your project

## [Class 14](Lessons/14_Clustering): K-means Clustering (December 1)

__Lecture__:
* Introduction to clustering
* K-means clustering algorithm
* Very brief overview of hierarchical clustering

__Exercise__: Project time
* Continue working on your model
* If time and it makes sense for your data, run a clustering algorithm.

## Class 15: Advanced Topics: Gradient Descent and Principal Component Analysis (December 6)
__Lecture__: 

* Gradient descent applied to linear regression
* Using PCA to reduce dimensionality

__Exercise__: Project time
* Work on your presentations

## Class 16: Project Presentation and Discussion (December 8)
Presentation 3: Complete Project Presentation

    * 10 minutes
    * Complete project: data, question, model, results
    * Prepare for Q&A from the class, and be prepared to take suggestions to improve your project.
    * Give feedback to your class mates.
    * Upload your project to GitHub repository.
