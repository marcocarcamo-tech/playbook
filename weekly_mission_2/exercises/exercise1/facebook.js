const user = {
	user: "marco carcamo",
	username: "@marcocar",
	bio: "LaunchX explorer",
	age: 23,
	showUserInfo: function () {
		return `User ${this.user} has the username ${this.username} and the next information in his/her bio: ${this.bio}`
	}
}

const post = {
	user: "Marco Carcamo",
	date: "21/04/2022",
	numLikes: 200,
	numReactions: 50,
	comments: {
		com_1: "Great",
		com_2: "Awesome",
		com_3: "Cute"
	},
	showPostInfo: function (){
	const strComments = JSON.stringify(this.comments);
		return `This post was published by ${this.user},  the ${this.date}, ${this.numLikes} people have liked this post,  ${this.numReactions} people have reacted to this post, and following comments had been submitted ${strComments}`
	}
}

const biography = {
	user: "Marco Carcamo",
	numPosts: 200,
	numPhotos: 500,
	numFriends: 560,
	numVideos: 5,

	showBioInfo: function () {
		return `The user: ${this.user} bio has ${this.numPosts} posts, ${this.numPhotos} phtos, ${this.numFriends} friends, and ${this.numVideos} videos.`
	}
}

console.log(user.showUserInfo());
console.log(post.showPostInfo());
console.log(biography.showBioInfo());
