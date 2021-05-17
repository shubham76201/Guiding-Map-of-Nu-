# Guiding-Map-of-Nu-

Index:
1. Introduction 
•	Purpose
•	Objective 
•	Document Convention
•	Intended Audience and Reading Suggestions
•	Project Scope 
•	Project Advantage 
•	Project Overview
2. Literature Review 
3. Algorithm for positioning 
4. Overall Description 
•	4.1 Product Perspective 
•	4.2 Product Function
5. Functional Requirement
•	5.1 Administrator Module
•	5.2 User Login module
•	5.3 Mapping and Location finding modules
•	5.4 Destination Route finding module
•	5.5 Navigation’s module
  6.0 Software Development 
•	6.1. Django 
•	6.2. PostgreSQL 
•	6.3. HTML / CSS / Bootstrap 
•	6.4. JavaScript 
•	6.5 OpenStreetMap 
•	6.6 Leaflet 
•	6.7 HTML Geolocation 
•	6.8 Haversine Module
  7.0 Wireframe 
  8.0 Gaps and Challenges 
  9.0 Future Scope and Deliverables
•	9.1 Conclusion
•	9.2 Appendix 
•	9.3 References 


1.Introduction: 
1.1 Purpose
The purpose of this document is to provide a brief overview of the requirements and definitions of a project called "Guiding Map of NU”. The goal of this project is to design a web-based application where the user can get a guiding of the routes in the NU. This application will help the user to find the shortest routes in the NU between two location. This document discusses about the design and function requirements of the project.
1.2 Objective:
Our main objective is to globalism, organize and standardize the goal of journey towards perfectionism and to offer a variety of travel services to the customers which help us to make a strong relationship with them, so that they can enjoy the trip of their dreams.  
1.3 Document Conventions
•	All terms are in Times New Roman style (12 size).
•	Line Spacing is 1.5.
•	Main features or important terms are kept bold style.
•	Colored means we have completed the implementation of that part in the Project. Color Used are:
 	 Red – For the showing the Implementation of New Algorithm in Beacons.
 	Purple 
 	Blue 
 	Dark Blue 
 	Green 
1.4 Intended Audience and Reading Suggestions:
Anyone having some basic knowledge of programming language can understand this document. The nature of the program can be understood by developers so that they can implement some new features. And this document can be useful to the people how want to explore the domain of tourism and wanted to build a software. It is recommended to study the whole document for the full understanding of the program and to avoid any errors while implementations. Functional Requirements and design parts being meant for the developers but other sections can be understood by anyone having little knowledge about software.
This Software Requirement Specification also includes: Overall Description of the product.



1.5 Project Scope: 
Guiding Map of NU is a web application developed for the customers which help them to easily navigate get a perfect ides like what is the correct location to reach. This project has a vast scope in a present scenario of covid-19 in big campus where there are many LTs and CRs like our college so the student doesn’t know the location of the CRs and LTs so by using our app they will be easily able to reach the location.

Advantages:
1.	Give a full view of our college like which amenities are there in the college and which are the classes there in the college for the guest lecturers and for the students,
2.	This system will be more secure all others because we have the security feature of the authorization using the Student ID card or by Using the Teacher ID Card.
3.	This platform will help the users in minimizing their efforts, time and will help the guest to easily go around the college.  
4.	This application will be easy to use for every common person because of our easy-to-use interface which will help them to navigate through the site and explore each and every feature of it, for the best experiences.
5.	There is also the advantage like we won’t be requiring extra inputs for changing the data because the data is fully dynamic website so any changes in the database then there will be also a change in the Data present in the Website.

1.7 Overview:
 Following section of this document will focus on describing the system in terms of product perspective, product functions, Operating Environment. In the third section, we will address specific requirements of the system, which will enclose functional requirements of the system and other requirements. And In the 4th section we see the Design of the application i.e., Wireframe.
2. Literature Review:
Introduction
This Application is strictly based on location detection and impose challenges when the indoor navigation, mainly because of the absence of GPS signal, and because of the challenges that positioning pinpoint based on other networks signals bring. 
The main purpose of knowing such location is to offer useful information to different types of users that where is the different rooms inside a Building and guide instruction (e.g., emergency evacuation, or help guests for easy navigation). 
Present methods using BLE to determine position involve placing a large number of simple BLE beacons at known locations.
Then the Mobile phones “sniffs” for known signals from the beacons and measures then received signal strength. The relative link quality between the beacon and the mobile device is used to Determine the location of the mobile device using mathematical formulas. As strongest the signal is, the closest the beacon is regarding the mobile device. Based on that beacon (or by the weighted average of several nearby beacons) which produces the strongest signal, the location of person can be estimated. The advantage of the beacon-type systems is in the simplicity and low cost of implementation.
 The disadvantage of the beacon-type systems is that they typically provide poor quality location estimation, in most case studies location is only acceptably accurate up to 3 meters distance. One more disadvantage is that a device takes around 11 sec to search for Bluetooth beacons till that time a walk up to 5 meters after which it needs to connect to another beacons.
Results show that the proposed method is 13.22% better than the traditional positioning of signals, which does not ponder the beacons that are nearer.



3. Algorithm for Positioning 
Using the Trigulation Method for Positioning  
   d = 10 (P−RSSI / 10n)
In the Equation 1, n ranges between 2 to 4, and it is used to adjust the signal pondering. Then, RSSI represents the measured signal strength. Usually, this value is negative and is always changing. In the formula, P is the Transmitter Power which beacons are transmitting as part of the package and RSSI from the beacon device. The most common value of P is 2 − 2.5.
Using the Proposed Method for Positioning





  
Assumptions taken are: 
1. B1 to B4 are the Beacons.
2. d1 to d4 are the distances.
Step 1: The RSSI values of all the beacons are being collected and averaged at particular location. So, as to create Charted RSSI curve. 

Step 2: The objective is to define the nearest distance Beacon has more weight than the further beacons. Now let’s define current position.
 Pos (x, y, z) = SubmissionN i=0 (Bi (x, y, z) * Pi) / Submission Pi

Here the x, y, z are poisoning coordinates and Bi (x, y, z) are positions in x, y, z and P defines the Ponder distance.
Then we have got the value of Ponder which is inverse of the distance.

Step 3: So, it is the analysis part where the given RSSI the distance measures point to {d3, d4, d5} so on the basis of the past location next position will be defined. Based on previously measured values, d0, d1, d2, {d3, d4, d5}, the next logical position will be decided.

Conclusion
In this project we have proposed a new method to determine the position inside buildings where there is no GPS signal available. Using BLE beacons, the signals strength in different locations is measured and stored in the Database. Given the locating of the user, and detected beacons signal strength, the proposed method, ponders the available beacons signals to determine a precise location based on previously trained signals measurements from the database. Experimental results, comparing the proposed method with triangulation, show that processed method was able to achieve 97.5% vs. 84.2% from the triangulation. An improvement of 13.2% on the average positioning precision. As future work, we will be developing a mobile application to place the beacons on a given map layout and set the beacons signals at different distances, and based on gathered data determine the current position of the person.
4. Overall Description:
4.1 Product Perspective:
This is a system which consists of all the features that are required for GPS based system detection so an android phone is needed. Other than that, it won’t require any other things.
Guiding Map for NU system doesn’t work independently. 
4.2 Product Function:
This system provides following functions:
(I) User Sign In-  
•	Description: Ask the user to enter details in order to become  registered user.
•	Input: Name, Email and Password
•	Processing: Storing the values entered in the database and check if the user with same email is available or not. If not store it in database or generate error.
•	Output: Confirmation message registered successfully.

(ii) User Login: 
•	 Description: Initialize the username and password for login
•	 Input: Username and password in alphanumeric value 
•	 Processing: Storing the values and then checking whether it’s true or not
•	 Output: Confirmation message that the login is successful else login failed.
(iii) Mapping and location finding
•	Description: finding the longitudes and latitudes.
•	Input: getting the longitudes and latitudes from the phone GPS.
•	Processing: Accordingly, it will give the shortest route to the destination.
•	Output: Then we need to select the destination.
(iv) Destination finding:
•	Description: In this module we need to provide the define the destination of the location.
•	Input: Input the Destination location. 
•	Processing: According to the algorithm we will define the device will give a short route to the destination.
•	 Output: Displays the list of all the routes we can select the most feasible route and start navigating.

(vi) Navigation: 
•	Description: This is the module which navigates and gives the correct output in the navigation
•	Input: It provides the route and will also describe us about the breakpoints and middle stops.
•	Processing: This is the place where the main processing takes place and the navigation takes place.
•	Output: It will give the distance and how much time is needed to reach the destination.

5.Functional requirements
Broadly, the system can be classified in to following modules:
1.	Administrator Module
2.	User Login module
3.	Mapping and Location finding modules
4.	Destination Route finding module
5.	Navigation’s module
5.1 Administrator module:
Sub-Modules of the Admin Module are:
1. Sub-Module 1: Add the locations and points in the route.
2. Sub-Module 2: Delete any location on the map.
3. Sub-Module 3: Edit the location or the renaming of any location.
4. Sub-Module 4: He can also define a route if any problems in the predefined route.
 This module provides Administrator related functionality. Administrator manages all information and has access rights to add, delete, edit and view the data related to places in the maps and what all places are included in the map and what is the location and he also mention any faults or can change the route if any work is going on that route.
5.2 User Login module
Sub-Modules of User Module:
1. Sub-Module 1: Here he can login using Niit Gmail Account.
2. Sub-Module 2: Here using login details of Enroll No. and password.
3. Sub-Module 3: If he is the guest then he needs to give his Guest Ids.
Here the User like the main college student user or the Guest User like the guest lecturer can use this app using their ID cards or by using their college Gmail IDs and using the User Id and Password if they have already signed up on the app.
5.3 Mapping and location finding module:
Sub-Modules of Mapping and location finding Module:
1. Sub-Module 1: Here GPS location is taken from Customer.
2. Sub-Module 2: Customer need to specify the location in the list.
3. Sub-Module 3: Customer need to specify the destination in the list.
4. Sub-Module 4: Here only he can define the stops or breakpoints during the navigation to the destination.
This is the module in which the mapping and location finding of the exact location where the person is standing using the GPS system in the in the mobile phone and will extract the exact coordinates so as to be more specific to the reaching location.
5.4 Destination Routes module:
Sub-Modules of Destination Route Module:
1. Sub-Module 1: It will give the references like what all destination is there.
2. Sub-Module 2: It will map between the GPS location of the person and the destination coordinates.
This is the module which take in the input the destinations and also the breakpoints in the route so that they can easily take a pause in between the navigation and this module will provide the other option or nearby location to reach.
5.5 Navigation module:
Sub-Modules of Navigation Module:
1. Sub-Module 1: will give a Direct Route to the destination.
2. Sub-Module 2: will give the different route to reach the particular destination.
3. Sub-Module 3: It will give the route through our stops or breakpoints.
4. Sub-Module 4: This module will analyse the best route with the stops included. 
This is the module where the real navigation takes place and in this part the user get to know the routes like which route is feasible for the user to go and what are the other way to reach that particular location.



Further, the facilities provided by this portal are following:
5.6 Picking Up breakpoints 
Using this feature the user will be able to select the breakpoints in the route like for example a user is going form the UG2 to the CR 201 than he can adda breakpoint the Nescafe or Tuck Shop so that he can get something to eat in between the Navigation.
6.0 Software Development 
Firstly, the software which have been taken into the use in the building of the software are as follow:
Programming Tools that have been Used:
1. Django (Python, Server) 
2. PostgreSQL (Database)
3. HTML (Templating the Pages)
4. CSS (For the Designing and styling the Pages)
5. Bootstrap (For responsive containers and Buttons) 
6. JavaScript (For the Scripting)
7. OpenStreetMap (Imported the Maps)
8. Leaflet (For Pointing and Mapping on Maps)
9. HTML Geolocation (For current Location Finding)
10. Haversine Module (For finding Distance between two Points) 
Description of all the Programming Tools Used:
6.1 Django: Django Plays an important role in our project because due to this we have made our project more dynamic like the things like the Coordinates, Places in the maps are now stored in our database so whenever we want to add a data then we just need to add, delete it from our Database.
Just a sample of data which we have added using the Django Admin Panel:
 
6.2 PostgreSQL Database: 
We have used this for storing the data of all the user’s data such as the username, password, name and enrolment no. and etc.
 
 
6.3. Java Script: The whole production of the events and handling of the events is done by using the JavaScript and here we have many functions such as the:
1. Event Listener
2. getDistanceFromLatLonInKm – For the calculation of the distance we have used this method.
6.4. HTML / CSS / Bootstrap: These both have been used by us for main base of our project and main templating of the templates is done on the HTML and the colours and styles and the effects have been given by using the CSS.I have also included the Bootstrap through which we have imported all our buttons and the container the responsive Containers.





6.5. OpenStreetMap:  Our maps have been imported from this Map API where we have imported it from open source. 
OpenStreetMap Map  

After Editing with the Leaflet
                   
6.6. Leaflet: This is basically mainly used for mapping our all the coordinates which are present in the maps with our places like the places which we have defined on the maps like the tuckshop, UG-1, UG-2, Jaal-Pelu, etc. The pointers and the roadmap which have been used are made up of the Leaflet.

6.7. HTML Geolocation: This has been basically used for the defining of the exact coordinates of our in the map using the location of our place. And then it is displaying the distance 



6.8. Haversine: 
Euclidean Distance works for the flat surface like a Cartesian plain however, Earth is not flat. So, we have to use a special type of formula known as Haversine Distance.
Haversine Distance can be defined as the angular distance between two locations on the Earth’s surface.
Haversine distance can be calculated as:

 











7.0   Wireframes


 


8.0 Gaps and Challenges 







One of the major challenges is Indoor Mapping in this like in the GPS using the Geolocation we get a location or the coordinates of a particular location so the above room and the below room both have same coordinates and so we can’t differentiate between the two Rooms placed above and below.
So, same condition is there in our College rooms as we can’t differentiate between the above and below room.
The Solution to this challenge is by using the Beacons for the indoor Mapping. This is because of the following:
1.	Positioning: It locates a place inside a building by using Bluetooth.
2.	Navigation: It creates the shortest route possible to the preferred destination, such as from one room to another room in a hostel.
3.	Push Notifications: It sends the necessary messages to a user's smartphone that what is the difference between that person and destination.
  
Here baecons use the bluetooth for the exact positioning of the a location of any room or particular location.So for the positioning of the we need atleast 3 beacons

 
9.0 Future Scope and Final Deliverables
The Final deliverable includes an app that can help or assist any user as a personal guide that is always with them. The app will have features like live location tracing and the app will also give knowledge about the various places in the university. The app will also help the new students and their parents to take a tour of the university and also help them in the admission process where many students didn’t find the classrooms they were assigned and end up into more time consumption and making the process more difficult for themselves.

For the future scope the app can implement AR map which can give a virtual tour of the university and also can use beacons for the Indoor Mapping.
9.1 Conclusion:
The Guiding Map of NU is basically a Web application where user can be able to do the get to know the most feasible path or the route between the source and destination and will also get to know about all the things like where is the particular room no. or where is the particular CR or LT in which side and will also be able to know about the drinking water and etc. shops where is the Mess and where is North East point and etc.
      9.2 Appendix:
Wireframe
Wireframes are used to design a website service at the structural level. wireframes are commonly used to lay out content and functionality on a page which takes into account user needs and user journeys. Generally, a Wireframe is used early on in the development process to establish the basic structure of a page before visual design and content is added while providing a basic overview of the same.
A major benefit of using wireframes is it ensures that the terminology and structure used for the site meets user expectations.


9.3 References 
1. K. Al Nuaimi and H. Kamel. A survey of indoor positioning systems and algorithms. In Innovations in information technology (IIT), 2011 international conference on, pages 185–190. IEEE, 2011. 
2. P. Bahl, V. N. Padmanabhan, and A. Balachandran. Enhancements to the radar user location and tracking system. Microsoft Research, 2(MSR-TR-2000-12):775–784, 2000. 
3. S. S. Chawathe. Beacon placement for indoor localization using bluetooth. In Intelligent Transportation Systems, 2008. ITSC 2008. 11th International IEEE Conference on, pages 980–985. Citeseer, 2008. 
4. R. Harle. A survey of indoor inertial positioning systems for pedestrians. IEEE Communications Surveys and Tutorials, 15(3):1281–1293, 2013. 

 
