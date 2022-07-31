# Virtual Nuts - Challenge
Welcome to my application for the Virtual Nuts process.

Since now, thank you for your time to analyse for a moment for this code. 

I know, each one of us have a logic and sometimes makes no sense in a first and this is why I'll explain below some approaches used here.

One note, I imagine that the technical team will test this code, but I always make the steps to help all members of the team.

I always pay attention to documenting the things that I deliver. Who knows one day, if another developer needs to maintain my code, we are on the same page. :)

Well, let's start!

# How to setup the dev environment
First of all, we'll setup the local environment to test the scripts.

I used a Node based project and all results you can check in local console or terminal (depends on the operational system).

Let's start to setup the env:

### Install the Node
Download and install the NodeJs package here:

<a href="https://nodejs.org/en/download/">Donwload Node</a>

### Install Jest
If you don't have Jest package installed, it's safe to make the installation before the next step.
In terminal, type the command:

`
npm install  -g jest
`

### Install the dependecies
Now, install the other dependencies typing the command:

`
npm install
`

# Exercicies resolution comments

I'll try to explain what I've tryed to deliver and the solution.
If you want to call the methods in html page, you have this option in index.html page:

![example-01](https://user-images.githubusercontent.com/1747058/182039605-6428a28d-3101-42fd-a842-18e80aa09ecd.gif)

## Running the Unit tests in Jest
You can run the command below to run the Jest tests:

`
npm test
` 

![example-2](https://user-images.githubusercontent.com/1747058/182039763-011a34f8-e0aa-42d1-8659-35ad3d3839c7.gif)



## 1. Print whole number to the console.

The 1st exercise, you can alter the number of iteractions in server.js file, like the code:

`
  res.send(test1.printSequentialResults(100)); //alter here
`

![image](https://user-images.githubusercontent.com/1747058/182039831-c42eefbb-6d89-4a7d-abf9-c002009378a8.png)


### How to keep the code safe from bugs or code changes?
I think the unique approach to guarantee that your code will be safe in future changes is cover all the rules in unit tests.
Let's suppose that the rule "visual" change to number divided by 4. 
First moment, the code will crash, of course, but running the unit tests in Jest, you'll see the fail and try to make this code run again with the new rules.

## 2. Official languages spoken by countries

The result of this exercise is below:

[video]
