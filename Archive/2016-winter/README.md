#hack-university-data-science
Hack University's [Data Science course](http://www.hackoregon.org/database-cohort), sponsored by [Hack Oregon](http://hackoregon.org)


### Course Description
Learn the fundamentals of data preparation and analysis needed to transform data into insight. This course will introduce a broad range of mathematics fundamentals used in data science and machine learning, including probability distributions, statistics, regression, linear algebra, and calculus, with a focus on practical application to real-world data sets. Bring your own data set or contribute to a Hack Oregon project; students will apply methods to a project of their choosing.


### Course Format

Tuesday evening (6:15-9pm) lectures will include IPython notebooks for interactive exploration of the weeks' topic. At Sunday workshops (11am-2pm), students have a chance to work together on weekly assignments and receive feedback from the instructor.

Students will choose a data set of interest to analyze, or use data sets from Hack Oregon volunteer projects. Throughout the course the student will perform exploratory analysis on the data set, choose a research question, and present the results to receive peer feedback during the final class.

See [Resources](https://github.com/hackoregon/hack-university-data-science/tree/master/Resources) for a list of potential data sources, python packages to install, and recommended books for the course. For help cloning this repository, see the handy [GitHub Cheat Sheet](https://training.github.com/kit/downloads/github-git-cheat-sheet.pdf).


### Completion Recognition

Hack University will issue badges on [Badgr](http://info.badgr.io/) for all students who successfully complete the course by attending a majority of class meetings and presenting a course project at the final meeting. 


### Instructor
[Heidi Perry](www.linkedin.com/in/heidiperryphd)


# Schedule
### Lesson topics, and recommended exercises for each week.
Schedule subject to change



## [Week 1](Lessons/1_IntroDataAndScience): Intro to Data and Science (Feb 9)

1. In-class activity using IPython notebooks:
    * Make graphs
    * Load data

1. What question do you want to answer in your course project? 

1. Write out your your expectations about the question:
    * Is it answerable?
    * Has someone already answered it?
    * Is the data needed to answer it available?

1. Based on what you found, ask a more narrow question that will set the path for your course project. It should be answerable with data that you can access.

1. Find a data set that will answer some form of your question, and load it into a pandas dataframe.

1. Describe the data fields in your data set: variable name and type.

1. Create at least one graph using your data. 

1. Describe the graph(s) you created. Identify the explanatory/response or dependent/independent variables. Did you discover any trends, expected or unexpected?


## [Week 2](Lessons/2_CleaningTransformingData): Cleaning data (Feb 16)

1. In-class activity using IPython notebooks:
    * Cleaning data

1. Prepare your data for the exploratory phase of your course project.


## [Week 3](Lessons/3_ExploratoryAnalysis): Exploratory Analysis (Feb 23)

1. In-class activity using IPython notebooks:
    * Common functions
    * Transforming data
    * Exploratory Analysis

1. Continue cleaning your data.

1. Explore your data set. 
    
1. Normalize variables where necessary

1. Look for non-linear relationships in your data that might be described by a common function, and apply a transformation to create a linear relationship.


## [Week 4](Lessons/4_Probability): Probability (March 1)

1. In-class activity using IPython notebooks:
    * Simulations of stochastic processes, visualizing distributions

1. Create histograms of random variables in your data set.
    * Describe the shape of the distribution (e.g. skew and symmetry).
    * Calculate mean, median, and standard deviation of the variables.


## [Week 5](Lessons/5_StatisticalInference): Statistical Inference (March 8)

1. In-class activity using IPython notebooks:
    * Statistical Inference
    * Inference for Numerical Data

1. Apply a hypothesis test in your data set. 
    * What population does this generalize to?


## [Week 6](Lessons/6_LinearRegression): Linear Regression (March 15)

1. In-class activity using IPython notebooks:
    * Linear Regression

1. Use linear regression to make a model of at least one variable in your data.


## [Week 7](Lessons/7_LinearAlgebra): Vectors, Matrices, and Gradient Descent (March 22)

1. In-class activity using IPython notebooks:
    * Matrix multiplication
    * Gradient descent

1. Prepare a 10 minute presentation showing the highlights from your exploratory analysis, and any conclusions you may have from applying statistical inference and/or regression on your data.


## [Week 8](Lessons/8_CourseWrapup): Present Projects (March 29)

1. In-class activity:
    * Present your exploratory findings, and results if you have them.
    * Give feedback to your class-mates.

1. Implement any suggestions received at your presentation.

# [Student Projects](../../Projects)

[Portland Crime by Neighborhood, 2004-1014](../../Projects/2016-winter/nkanderson-pdxcrime), by [Nicole Anderson](https://github.com/nicolekanderson) 

Crime incident data from the City of Portland Police Bureau, with a typical record including detailed time and location information. The data has been aggregated over time by neighborhood, and a simple d3 bar chart is included in the root of the project at index.html
