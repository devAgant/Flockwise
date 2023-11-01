# Flockwise
<img src="/flockwise/public/assets/images/Flockwise.png" alt="drawing" width="400"/>

## Introduction<a name="introduction"></a>
<p>Hello programmers! Welcome to the CS/SE 3354.005 Fall 2023 Software Engineering Course Project: Flockwise Web Application repository. This document will explain how to install the required dependencies in order to compile the program, as well as how to build the website and some design patterns which will need to be maintained.</p>

## Table of Contents
1. [Introduction](#introduction)
2. [Required Dependencies](#dependencies)
   1. [Creating a .env File](#env)
4. [Building The Website](#building)
5. [Conclusion](#conclusion)

## Required Dependencies<a name="dependencies"></a>
<p>In order to compile this program, you will need to have Node.JS installed. In case you do not have Node.JS, here is the link:</p>

https://nodejs.org/en

<p>This program uses React alongside the Next.js framework. once you have Node.JS, you can proceed with creating a local git repository in order to pull the project. Once the project is pulled succeessfully to your PC, you will need to install the project dependencies. First, in order to install the base dependencies, you will need to run these two commands in the terminal while in the project directory:</p>

`$ npm install react`
`$ npm install react-dom`
`$ npm install next`

<p>After these two base dependencies are installed, the project dependencies will also need to be installed. These dependencies are bcrpyt, mongodb, mongoose, and next-auth. First, you will need to open up your code editor. I will demonstrate how to do this with Visual Studio Code:</p>

`$ code`

<p>After you have opened VS Code, open the terminal inside of VS Code. In this terminal, run these commands:</p>

`$ npm install bcrypt`
`$ npm install mongodb`
`$ npm install mongoose`
`$ npm install next-auth`

<p>You may need to close and reopen VS Code, but the project should now be able to compile.</p>

### Creating a .env File<a name="env"></a>
<p>You will need to create a new file inside of your project directory named .env (the file used to store security keys to access APIs). This is where you will paste the enviornment variables which you have been provided through some form of communication. Once this is done, build the project and test the sign in button to make sure that all the user authentication is working as intended.</p>

## Building The Website<a name="building"></a>
<p>There are two ways to build the website. Note that these commands work best when executed inside the VS Code terminal. The first way is used to see a live updating website for development purposes. When you build using this command, the website will update with new changes everytime you save your code:</p>

`$ npm run dev`

<p>The second method to build the website is used to see what a production build of the website would look like. This method will not update the website when you make changes to the code, however it is important for the purpose of testing if a production build will work:</p>

`$ npm run build`

## Conclusion<a name="conclusion"></a>
<p>If you run into an issue and need any help troubleshooting, feel free to send a message in the Discord. Note that if any other dependencies are added, this documentation will need to be updated for the other members. Please send a heads up in the Discord if you add a new dependency. Good luck!</p>
