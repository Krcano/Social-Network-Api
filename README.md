# Social-Network-Api

![License: MIT](https://img.shields.io/badge/License-MIT-success.svg)

## Description

This project uses Node.js and MongoDB to make a social network api. It allows users to share their thoughts with their friends and create a friend list. It also uses Express.js for routing and the Mongoose ODM. It also allows to delete friends from your friend list, delete/update a user and delete/update a thought.

[Post & Put for thoughhts and users and delete for users](https://drive.google.com/file/d/1qZx9k1Ju3U7lFgg58nzJuNKITE9Q19Uk/view)
[deleting a user, thought and friend](https://drive.google.com/file/d/1TqO2jcatY_Rhf_ykPAx1A3KymTVb1Vd6/view)
[Getting a single thought](https://drive.google.com/file/d/1p78AH9kklNmeAzzcAqM_-452M6SRiRtN/view)

## Table of Contents

[Usage](#usage)

[Installation](#installation)

[License](#License)

## Installation
To install this project you need to download Node.js, MongoDB, Express.js, Mongoose, and Moment. The last 3 of the aforementioned packages can be installed when after you clone the repo to your computer. After you clone the repo you can go to your terminal and cd into the correcto directory you can type ```npm install``` to download all the need packages from the package.json to your computer. 
## Usage

To get started, you will need to start your server and then go to Insomnia or Postman to set up the right route. You can create a user by putting in the username and email in json format and at the route ```http://localhost:3001/api/users```. To create a thought for that user you can got to the route ```http://localhost:3001/api/thoughts``` and type in the thoughtText and username in json format. Lastly to add friend you can add the user's id you want to friend and the user's id you want to friend to this route ```http://localhost:3001/api/<:usersID>/friends/<:friendID>```. You can use those same routes for updating and deleting a friend, user, or thought by changing the http method to a put or delete.

## Technologies

| Technologies Used |
| ----------------- |
| MongoDB           |
| Mongoose          |
| Express.js        |
| Moment.js         |
| JavaScript        |

## License

[License: MIT](https://opensource.org/licenses/MIT)
MIT License

Copyright (c) [2022] [Kelly R. Cano]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
