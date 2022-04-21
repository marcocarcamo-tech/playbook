const user = {
	user: "marco carcamo",
	username: "@marcocar",
	bio: "LaunchX explorer",
	age: 23,
	showUserInfo: function () {
		return `User ${this.user} has the username ${this.username} and the next information in his/her bio: ${this.bio}`
	}
}

const trendingTopic = {
	country: "Mexico",
	category: "Music",
	numTweets: 100000,
	rankNumber: 6,
	showTrendingTopicInfo: function (){
		return `This trending is from ${this.country}, and it belongs to  ${this.category} category, this trend has currently ${this.numTweets} Tweets and is ranked in position number ${this.rankNumber}`
	}
}

const hashTag = {
	tagName: "#webdeveloper",
	featuredAccounts: {
		acc_1: "Dennis Thoughts",
		acc_2: "JussefDev",
		acc_3: "La brava dev"
	},
	relatedTags: {
		tag_1: "#Developer",
		tag_2: "#devlife",
		tag_3: "FrontEnd"
	},
	showHashTagInfo: function () {
		const strAccounts = JSON.stringify(this.featuredAccounts);
		const strRelTags = JSON.stringify(this.relatedTags);
		return `The following hashtag: ${this.tagName} has the next featured accounts ${strAccounts} and the next related tags: ${strRelTags}`
	}
}

console.log(user.showUserInfo());
console.log(trendingTopic.showTrendingTopicInfo());
console.log(hashTag.showHashTagInfo());
