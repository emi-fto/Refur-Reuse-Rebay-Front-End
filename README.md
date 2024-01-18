# Rebay - Frontend Web App

## [See the App!](https://elaborate-marzipan-adc163.netlify.app/)

![App Logo](https://github.com/emi-fto/E-commerce-Web-App-React/blob/main/src/assets/images/Rebay%20Logo.png)

## Description

Welcome to Rebay! We created a fake e-marketplace for buying and selling used items. This React-based web app provides a user-friendly interface for seamless navigation and interaction. You can add the items you want to sell, or even ask us for a quote to repair your broken items! The goal is to make used items have a new life!

## Technology used

- HTML
- CSS
- JavaScript
- Vite Framework
- React library
- Mantine library for styling

## Pages

### Homepage

The homepage welcomes users to Rebay, showcasing featured items, and categories. Users can easily navigate to different sections of the app from here.
The user can add items to the cart only one time, since each item is unique! From here the user can also see the product details just clicking on one item, or update the item if it has the proper authorization

- Axios GET is getting the list of items from the database

### About Page

The about page provides information about the three Ironhackers behind the scene.

### Cart Page

The cart page displays the items added by users for purchase. Users can review, modify, and proceed to checkout from this page. Once the user clicks on the buy button, the items will disappear from the home page.

- Axios Delete is deleting the selected items from the database

### Details Page

The details page provides comprehensive information about a specific item. Users can view images, read descriptions, and make informed decisions before making a purchase. The user can click the back button to go back to the homepage.

### Edit Item Page

The edit item page allows users to modify the details of the items they have listed for sale. Only authorized users can update product information, images, and pricing (for the sake of semplicity, this is just a windows.confirm, but in the future could be a login function allowing the user to update only his own items!).

- Axios PUT will update the selected item in the database.

### Quote Page

The quote page enables users to get a price quote for the items they are interested to repair. Users can provide details about their items, and Rebay will generate a quote based on the information provided. The user can then compare the price of repairing his item, with the price of a similar one in the home page, and decide which route to follow.

### Add Item Page

The add item page allows users to add items for sale. The user can input product information, images, and pricing. The item will be shown in the home page together with the others.

- Axios POST will update the selected item in the database.

## Components

- Navbar. Users can easily navigate to the home page, about us, add item page, quote page, cart page,
- Search bar. Users can easily search items by name or category!
- Footer. Users can click on the front end repo and back end repo links.

## Backlog

- Add a fake login function and logic
- Add a delete and update button in the Edit item page only for logged users
- Add a burger on navbar hiding buttons on smartphones screens
- Add a payment framework

## Links

### Collaborators

[Emiliano Foti](https://github.com/emi-fto)

[János Sitku](https://github.com/sitkujanos86)

[Yiman Huang](https://github.com/VivianeHuang2022)

### Project

[Repository Link](https://github.com/emi-fto/E-commerce-Web-App-React.git)

[Deploy Link](https://elaborate-marzipan-adc163.netlify.app/)

### Trello

[Trello board link](https://trello.com/b/LX3shZlk/project-e-commerce-web-app)

### Slides

[Slides Link](https://pitch.com/v/Rebay-Selling-and-Buying-Used-Items-s34a8u)
