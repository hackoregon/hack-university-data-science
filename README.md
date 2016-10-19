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


## [Class 1](Lessons/1_IntroDataAndScience):  Intro to Data and Science (October 11)

__Lecture__: 
* The science in data science
* Data terminology
* Project proposal guidelines

__Exercise__: Lesson1\_Graphs.ipynb
* Verify your python distribution was installed correctly.
* Learn to make a variety of graph types using matplotlib.


## [Class 2](Lessons/2_Probability): Probability Part 1 (October 13)
   
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


## [Class 3](Lessons/3_Tools): Tools (October 18)

__Lecture__: 
* Overview of python packages numpy and pandas
* IPython and Jupyter notebook
* Source code management work flow for this course
* Developing reproducible analysis

__Exercise__: Lesson3\_LoadData.ipynb
* Learn the basic functionality of a pandas DataFrame - read data from a csv file, select subsets of the data, plot the data.


## [Class 4](Lessons/4_Probability): Probability Part 2 (October 18)
__Lecture__:
* Central Limit Theorem
* Assessing the normality of a distribution
* Correlation
* Bayes' Theorem

__Exercise__: Lesson4\_Distributions.ipynb
* Assess the normality of a data set

## Week 3: Statistical Inference (October 20, 25, & November 1)

## Week 4: Linear Regression (November 1 & 3)

## Week 5-a: Basic Language Model - Guest Lecturer Hobson Lane (November 8)

## Week 5-b: Project Proposals; Cleaning Data (November 10)
Presentation 1: Project Proposals

    * 2-5 minutes
    * Which Hack Oregon Project?
    * A brief summary of the data.
    * What question are you seeking to answer with the data?
    * Why is that an interesting question? Who is the audience?
    * Q&A/discussion: answer questions from the class (and ask questions!)

## Week 6: Exploratory Analysis; Start Projects (November 15 & 17)
Tuesday: Lecture - Principles and tools of exploratory analysis, start working on your projects

Thursday: Time to work on analysis, then present last half of class.

Presentation 2: Exploratory Analysis

    * 5 minutes
    * Show data visualization and explain what you learned from it.
    * Are you still working on your proposed data question, or after the exploratory analysis do you have a new question?
    * Q&A/discussion: answer questions from the class (and ask questions!)

## Week 7-a: K-means Clustering (November 29)

## Week 7-b: Introduction to Principal Component Analysis (December 1)


## Week 8: Project Presentation and Discussion (December 6 & 8)
Presentation 3: Complete Project Presentation

    * 10 minutes
    * Complete project: data, question, model, results
    * Prepare for Q&A from the class, and be prepared to take suggestions to improve your project.
    * Give feedback to your class mates.
    * Upload your project to GitHub repository.
