# Models Folder

This folder contains Mongoose schemas (models) for MongoDB collections:

- `User.js`: User schema with fields for username, email, password, avatar, and bio.
- `Post.js`: Post schema with references to user, content, image, likes, and comments.
- `Comment.js`: Comment schema with references to user, post, and text.

These models define the structure and relationships of the data stored in MongoDB.
