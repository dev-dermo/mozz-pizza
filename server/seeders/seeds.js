require('dotenv').config();

const db = require('../config/connection');
const { User, Category, Product } = require('../models');

db.once('open', async () => {
  await User.deleteMany({});
	await User.create({
		name: process.env.NAME,
		email: process.env.EMAIL,
		password: process.env.PASSWORD,
		isPartner: false,
		isAdmin: true,
	});

  // const categories = [
  //   { name: 'Classic Pizzas' },
  //   { name: 'Gourmet Pizzas' },
  //   { name: 'Sides' },
  //   { name: 'Drinks' },
  // ];

  // // Category.deleteMany({});
  // Category.insertMany(categories);

  // const products = [
  //   {
  //     name: 'Test name',
  //     description: 'test desc',
  //     allergens: '123123',
  //     price: 12341234,
  //     category: '60e9dc65f009853eea6c9ef6',
  //     isActive: true,
  //   }
  // ];

  // Product.deleteMany({});
  // await Product.insertMany(products);

  // create user data
  // const userData = [];

  // for (let i = 0; i < 50; i += 1) {
  //   const username = faker.internet.userName();
  //   const email = faker.internet.email(username);
  //   const password = faker.internet.password();

  //   userData.push({ username, email, password });
  // }

  // const createdUsers = await User.collection.insertMany(userData);

  // create friends
  // for (let i = 0; i < 100; i += 1) {
  //   const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
  //   const { _id: userId } = createdUsers.ops[randomUserIndex];

  //   let friendId = userId;

  //   while (friendId === userId) {
  //     const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
  //     friendId = createdUsers.ops[randomUserIndex];
  //   }

  //   await User.updateOne({ _id: userId }, { $addToSet: { friends: friendId } });
  // }

  // create thoughts
  // let createdThoughts = [];
  // for (let i = 0; i < 100; i += 1) {
  //   const thoughtText = faker.lorem.words(Math.round(Math.random() * 20) + 1);

  //   const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
  //   const { username, _id: userId } = createdUsers.ops[randomUserIndex];

  //   const createdThought = await Thought.create({ thoughtText, username });

  //   const updatedUser = await User.updateOne(
  //     { _id: userId },
  //     { $push: { thoughts: createdThought._id } }
  //   );

  //   createdThoughts.push(createdThought);
  // }

  // create reactions
  // for (let i = 0; i < 100; i += 1) {
  //   const reactionBody = faker.lorem.words(Math.round(Math.random() * 20) + 1);

  //   const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
  //   const { username } = createdUsers.ops[randomUserIndex];

  //   const randomThoughtIndex = Math.floor(Math.random() * createdThoughts.length);
  //   const { _id: thoughtId } = createdThoughts[randomThoughtIndex];

  //   await Thought.updateOne(
  //     { _id: thoughtId },
  //     { $push: { reactions: { reactionBody, username } } },
  //     { runValidators: true }
  //   );
  // }

  console.log('all done!');
  process.exit(0);
});