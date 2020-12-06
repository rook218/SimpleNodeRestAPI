exports.getPosts = (req, res, next) => {
	res.status(200).json({
		posts: [
			{title: 'First Post', content: 'this is the first post that can be loaded'},
			{title: 'Post #2', content: 'lorem ipsum dolar sit amet'},
		],
	})
}

exports.postPost = (req, res, next) => {
	const title = req.body.title;
	const content = req.body.content;
	// create the post in the database
	res.status(201).json({
		message: 'Post created!',
		post: {id: new Date().toISOString(), title: title, content: content},
	})
}