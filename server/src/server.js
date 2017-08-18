/*import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
// import multer from 'multer';


class Server {
    constructor() {
        this.app = express();
        this.fs = fs;


        // this.upload = multer({dest: 'uploads/'});
        this.dataFile = path.join(__dirname, '../data.json');
    }

    configureApp() {
        this.app.set('port', (process.env.PORT || 3000));
        // this.app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }

    configureCORS() {
        // Additional middleware which will set headers that we need on each request.
        this.app.use((req, res, next) => {
            // Set permissive CORS header - this allows this server to be used only as
            // an API server in conjunction with something like webpack-dev-server.
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, DELETE, GET');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

            // Disable caching so we'll always get the latest userDetails.
            res.setHeader('Cache-Control', 'no-cache');
            next();
        });
    }

    configureRoutes() {
        // Ignore this
        // this.app.post('/api/image', this.upload.single('image'), (req, res) => {
        //     console.log(req.file);
        //     res.json({image: 'http://localhost:1337/'+req.file.path})
        // });
        this.app.get('/api/comments', (req, res) => {
            this.fs.readFile(this.dataFile, (err, data) => {
                if (err) {
                    console.error(err);
                    process.exit(1);
                }
                res.json(JSON.parse(data));
            });
        });

        this.app.post('/api/comments', (req, res) => {
            this.fs.readFile(this.dataFile, (err, data) => {
                if (err) {
                    console.error(err);
                    process.exit(1);
                }
                var comments = JSON.parse(data);

                var newComment = {
                    id: Date.now(),
                    author: req.body.author,
                    text: req.body.text,
                };

                comments.push(newComment);
                this.fs.writeFile(this.dataFile, JSON.stringify(comments, null, 4), (err) => {
                    if (err) {
                        console.error(err);
                        process.exit(1);
                    }
                    /*
                                                this.twilioClient.messages.create({
                                                  body: `Message from ${req.body.author}. Content: ${req.body.text}`,
                                                  to: process.env.TWILIO_TO,
                                                  from: process.env.TWILIO_FROM
                                                  // mediaUrl: 'http://www.yourserver.com/someimage.png'
                                                }, function(err, data) {
                                                  if (err) {
                                                    console.error('Could not notify administrator');
                                                    console.error(err);
                                                  } else {
                                                    console.log('Administrator notified');
                                                  }
                                                });*/
/*                    res.json(comments);
                });
            });
        });
        this.app.put('/api/comments/:id', (req, res) => {
            this.fs.readFile(this.dataFile, (err, data) => {
                if (err) {
                    console.error(err);
                    process.exit(1);
                }
                let comments = JSON.parse(data);
                let idIndex = 0;
                let findCommentById = comments.filter(comment => {
                    if (comment.id == req.params.id) {
                        idIndex = comments.indexOf(comment);
                        return comment;
                    }
                });
                findCommentById[0].text = req.body.text;
                findCommentById[0].author = req.body.author;

                comments.splice(idIndex, 1, findCommentById[0]);
                this.fs.writeFile(this.dataFile, JSON.stringify(comments, null, 4), function(err) {
                    if (err) {
                        console.error(err);
                        process.exit(1);
                    }
                    res.json(comments);
                });
            });
        });
        this.app.delete('/api/comments/:id', (req, res) => {
            this.fs.readFile(this.dataFile, (err, data) => {
                if (err) {
                    console.error(err);
                    process.exit(1);
                }
                let comments = JSON.parse(data);
                let idIndex = null;
                let findCommentById = comments.filter(comment => {
                    if (comment.id == req.params.id) {
                        idIndex = comments.indexOf(comment);
                        return comment;
                    }
                });

                if (idIndex >= 0) {
                    comments.splice(idIndex, 1);
                }

                this.fs.writeFile(this.dataFile, JSON.stringify(comments, null, 4), function(err) {
                    if (err) {
                        console.error(err);
                        process.exit(1);
                    }
                    res.json(comments);
                });
            });
        });
    }

    listen(port) {
        this.app.listen(port, () => {
            console.log(`Server started: http://localhost:${port}/`);
        });
    }

    run() {
        this.configureApp();
        this.configureCORS()
        this.configureRoutes();
        this.listen(this.app.get('port'));
    }
}

export default Server;
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
// import multer from 'multer';


class Server {
    constructor() {
        this.app = express();
        this.fs = fs;


        // this.upload = multer({dest: 'uploads/'});
        this.dataFile = path.join(__dirname, '../profile.json');
    }

    configureApp() {
        this.app.set('port', (process.env.PORT || 3000));
        // this.app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }

    configureCORS() {
            // Additional middleware which will set headers that we need on each request.
            this.app.use((req, res, next) => {
                // Set permissive CORS header - this allows this server to be used only as
                // an API server in conjunction with something like webpack-dev-server.
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, DELETE, GET');
                res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

                // Disable caching so we'll always get the latest userDetails.
                res.setHeader('Cache-Control', 'no-cache');
                next();
            });
        }
        /*
            sortBy = (function() {

                const _defaults = {
                    parser: (x) => x,
                    desc: false
                };

                const isObject = (o) => o !== null && typeof o === "object";
                const isDefined = (v) => typeof v !== "undefined";

                //gets the item to be sorted
                function getItem(x) {
                    const isProp = isObject(x) && isDefined(x[this.prop]);
                    return this.parser(isProp ? x[this.prop] : x);
                }

                /**
                 * Sorts an array of elements
                 * @param  {Array} array: the collection to sort
                 * @param  {Object} options: 
                 *         options with the sort rules. It have the properties:
                 *         - {String}   prop: property name (if it is an Array of objects)
                 *         - {Boolean}  desc: determines whether the sort is descending
                 *         - {Function} parser: function to parse the items to expected type
                 * @return {Array}
                 */
        /*
                return function(array, options) {
                    if (!(array instanceof Array) || !array.length)
                        return [];
                    const opt = Object.assign({}, _defaults, options);
                    opt.desc = opt.desc ? -1 : 1;
                    return array.sort(function(a, b) {
                        a = getItem.call(opt, a);
                        b = getItem.call(opt, b);
                        return opt.desc * (a < b ? -1 : +(a > b));
                    });
                };

            }());*/

    configureRoutes() {
        // Ignore this
        // this.app.post('/api/image', this.upload.single('image'), (req, res) => {
        //     console.log(req.file);
        //     res.json({image: 'http://localhost:1337/'+req.file.path})
        // });
        this.app.get('/api/userDetails', (req, res) => {
            this.fs.readFile(this.dataFile, (err, data) => {
                if (err) {
                    console.error(err);
                    process.exit(1);
                }
                //this.sortBy(data, { prop: "id" });
                //var descending = data.sort((a, b) => Number(b.id) - Number(a.id));
                //console.log("descending", descending);
                res.json(JSON.parse(data));
            });
        });

        this.app.post('/api/userPosts', (req, res) => {
            this.fs.readFile(this.dataFile, (err, data) => {
                if (err) {
                    console.error(err);
                    process.exit(1);
                }
                var userPosts = JSON.parse(data);

                var newUserPosts = {
                    id: Date.now(),
                    name: req.body.name,
                    text: req.body.text,
                    profilePic: req.body.profilePic,
                    postPic: req.body.postPic,
                    videoUrl: req.body.videoUrl,
                    extendedText: req.body.extendedText,
                    imageCaption: req.body.imageCaption,
                    videoCaption: req.body.videoCaption,
                    likedByMe: req.body.likedByMe,
                    creationTime: Date.now(),
                    updatedTime: req.body.updatedTime,
                    updatedBy: req.body.updatedBy,
                    time: Date.now(),
                    likes: req.body.likes

                };

                userPosts.push(newUserPosts);
                this.fs.writeFile(this.dataFile, JSON.stringify(userPosts, null, 4), (err) => {
                    if (err) {
                        console.error(err);
                        process.exit(1);
                    }
                    /*
                                                this.twilioClient.messages.create({
                                                  body: `Message from ${req.body.author}. Content: ${req.body.text}`,
                                                  to: process.env.TWILIO_TO,
                                                  from: process.env.TWILIO_FROM
                                                  // mediaUrl: 'http://www.yourserver.com/someimage.png'
                                                }, function(err, data) {
                                                  if (err) {
                                                    console.error('Could not notify administrator');
                                                    console.error(err);
                                                  } else {
                                                    console.log('Administrator notified');
                                                  }
                                                });*/
                    res.json(userPosts);
                });
            });
        });
        this.app.put('/api/userDetails/:id', (req, res) => {
            this.fs.readFile(this.dataFile, (err, data) => {
                if (err) {
                    console.error(err);
                    process.exit(1);
                }
                let userDetails = JSON.parse(data);
                let idIndex = 0;
                let findUserDetailById = userDetails.filter(userDetail => {
                    if (userDetail.id == req.params.id) {
                        idIndex = userDetails.indexOf(userDetail);
                        return userDetail;
                    }
                });
                findUserDetailById[0].text = req.body.text;
                findUserDetailById[0].name = req.body.name;
                findUserDetailById[0].profilePic = req.body.profilePic;
                findUserDetailById[0].postPic = req.body.postPic;
                findUserDetailById[0].videoUrl = req.body.videoUrl;
                findUserDetailById[0].extendedText = req.body.extendedText;
                findUserDetailById[0].imageCaption = req.body.imageCaption;
                findUserDetailById[0].videoCaption = req.body.videoCaption;
                findUserDetailById[0].likedByMe = req.body.likedByMe;
                findUserDetailById[0].creationTime = req.body.id;
                findUserDetailById[0].updatedTime = Date.now();
                findUserDetailById[0].updatedBy = req.body.updatedBy;
                findUserDetailById[0].time = findUserDetailById[0].creationTime - findUserDetailById[0].updatedTime;
                findUserDetailById[0].likes = req.body.likes;

                userDetails.splice(idIndex, 1, findUserDetailById[0]);
                this.fs.writeFile(this.dataFile, JSON.stringify(userDetails, null, 4), function(err) {
                    if (err) {
                        console.error(err);
                        process.exit(1);
                    }
                    res.json(userDetails);
                });
            });
        });
        this.app.delete('/api/userDetails/:id', (req, res) => {
            this.fs.readFile(this.dataFile, (err, data) => {
                if (err) {
                    console.error(err);
                    process.exit(1);
                }
                let userDetails = JSON.parse(data);
                let idIndex = null;
                let findUserDetailById = userDetails.filter(userDetail => {
                    if (userDetail.id == req.params.id) {
                        idIndex = userDetails.indexOf(userDetail);
                        return userDetail;
                    }
                });

                if (idIndex >= 0) {
                    userDetails.splice(idIndex, 1);
                }

                this.fs.writeFile(this.dataFile, JSON.stringify(userDetails, null, 4), function(err) {
                    if (err) {
                        console.error(err);
                        process.exit(1);
                    }
                    res.json(userDetails);
                });
            });
        });
    }

    listen(port) {
        this.app.listen(port, () => {
            console.log(`Server started: http://localhost:${port}/`);
        });
    }

    run() {
        this.configureApp();
        this.configureCORS()
        this.configureRoutes();
        this.listen(this.app.get('port'));
    }
}

export default Server;