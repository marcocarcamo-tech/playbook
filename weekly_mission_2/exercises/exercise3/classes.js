//Facebook

class User {

    constructor(user, userName, bio, age){
        this.user = user;
        this.userName = userName;
        this.bio = bio;
        this.age = age;
        
    }
	
	showUserInfo() {
		return `User ${this.user} has the username ${this.userName} and the next information in his/her bio: ${this.bio}`
	}
}

const facebookUser = new User("Marco Carcamo", "@marcocar","LaunchX explorer", 23);
console.log(facebookUser.showUserInfo());

class Post {

    constructor(user, date, numLikes, numReactions, comments){
        this.user = user;
        this.date = date;
        this.numLikes = numLikes;
        this.numReactions = numReactions;
        this.comments = comments
    }
	
	showPostInfo() {
        const strComments = JSON.stringify(this.comments);
            return `This post was published by ${this.user},  the ${this.date}, ${this.numLikes} people have liked this post,  ${this.numReactions} people have reacted to this post, and following comments had been submitted ${strComments}`
        }
}

const facebookPost = new Post("Marco Carcamo", "21/04/2022", 200, 50, {com_1: "Great", com_2: "Awesome",com_3: "Cute"});
console.log(facebookPost.showPostInfo());


class Biography {

    constructor(user, numPosts, numPhotos, numFriends, numVideos){
        this.user = user;
        this.numPosts = numPosts;
        this.numPhotos = numPhotos;
        this.numFriends = numFriends;
        this.numVideos = numVideos
    }
	
	showPostInfo() {
        const strComments = JSON.stringify(this.comments);
        return `The user: ${this.user} bio has ${this.numPosts} posts, ${this.numPhotos} phtos, ${this.numFriends} friends, and ${this.numVideos} videos.`
        }
}

const facebookBiography = new Biography("Marco Carcamo", 200, 500, 560, 5);
console.log(facebookBiography.showPostInfo());

// // Github

// const repo = {
//     name: "LaunchX",
//     author: "carlogilmar",
//     language: "JavaScript",
//     numberOfCommits: 100,
//     stars: 199,
//     forks: 299,
//     issues_open: 10,
//     issues_close: 10,
//     getTotalIssues: function(){
//       return this.issues_open + this.issues_close
//     },
//     getGeneralInfo: function(){
//       return `This repository ${this.name} was created by ${this.author}`
//     }
//    }
   
//    console.log("Nombre del repo:" + repo.name)
//    console.log("Issues totales: " + repo.getTotalIssues())
//    console.log(repo.getGeneralInfo())
class Repo {

    constructor(name, author, language, numberOfCommits, stars, forks, issues_open, issues_close){
        this.name = name;
        this.author = author;
        this.language = language;
        this.numberOfCommits = numberOfCommits;
        this.stars = stars
        this.forks = forks;
        this.issues_open = issues_open;
        this.issues_close = issues_close
    }
	
	getTotalIssues(){
        return this.issues_open + this.issues_close
    };
    getGeneralInfo(){
        return `This repository ${this.name} was created by ${this.author}`
    }
}

const githubRepo = new Repo("LaunchX", "carlogilmar", "JavaScript", 100, 199, 299, 10, 10);
console.log("Issues totales: " + githubRepo.getTotalIssues());
console.log(githubRepo.getGeneralInfo());

//    const issue = {
//     title: "Issue 1",
//     repositoryNameAssociated: "LaunchX",
//     status: "open",
//     numberOfComments: 5,
//     labels: {
//        label1: "issue1",
//        label2: "code"
//      },
//     author: "Marco Carcamo",
//     dateCreated: "19/04/2022",
//     lastUpdated: "20/04/2022",
//     getTitleAndAuthor: function(){
//      return `Title: ${this.title} Autor: ${this.author}`
//      },
//     getGeneralInfo: function(){
//      return `Issues: ${this.issues}
//          Labels: ${this.labels}
//          Date of creation: ${this.dateCreated}
//          Date of last update: ${this.lastUpdated}`
//      }
//    }
   
//    const pullRequest = {
//     title: "code resolution",
//     branchName: "dev",
//     dateCreated: "20/042022",
//     status: "open",
//     author: "Marco Carcamo",
//     repositoryNameAssociated: "LaunchX",
//     getStatus: function(){
//     return this.status
//     },
//     getTitleAndAuthor: function(){
//     return `Title: ${this.title} Autor: ${this.author}`
//     }
//    }
   

// //Twitter

// const twUser = {
// 	user: "marco carcamo",
// 	username: "@marcocar",
// 	bio: "LaunchX explorer",
// 	age: 23,
// 	showUserInfo: function () {
// 		return `User ${this.user} has the username ${this.username} and the next information in his/her bio: ${this.bio}`
// 	}
// }

// const trendingTopic = {
// 	country: "Mexico",
// 	category: "Music",
// 	numTweets: 100000,
// 	rankNumber: 6,
// 	showTrendingTopicInfo: function (){
// 		return `This trending is from ${this.country}, and it belongs to  ${this.category} category, this trend has currently ${this.numTweets} Tweets and is ranked in position number ${this.rankNumber}`
// 	}
// }

// const hashTag = {
// 	tagName: "#webdeveloper",
// 	featuredAccounts: {
// 		acc_1: "Dennis Thoughts",
// 		acc_2: "JussefDev",
// 		acc_3: "La brava dev"
// 	},
// 	relatedTags: {
// 		tag_1: "#Developer",
// 		tag_2: "#devlife",
// 		tag_3: "FrontEnd"
// 	},
// 	showHashTagInfo: function () {
// 		const strAccounts = JSON.stringify(this.featuredAccounts);
// 		const strRelTags = JSON.stringify(this.relatedTags);
// 		return `The following hashtag: ${this.tagName} has the next featured accounts ${strAccounts} and the next related tags: ${strRelTags}`
// 	}
// }

// console.log(user.showUserInfo());
// console.log(trendingTopic.showTrendingTopicInfo());
// console.log(hashTag.showHashTagInfo());


// //Uber

// const profile = {
//     userName: "marco carcamo",
//     numTravels: 15,
//     numMessages: 7,
//     paymentMethod: "Credit Card",
//     showProfileInfo: function () {
//             return `User ${this.userName} has made ${this.numTravels} travels and received ${this.numMessages} messages, payment method selected is ${this.paymentMethod}`
//     }
// }

// const travel = {
//     user: "Marco Carcamo",
//     travelDate: "21/04/2022",
//     travelDuration: "15 minutes",
//     driverName: "José González",
// carModel: "Nissan Versa 2020",	
//     showTravelInfo: function (){
//             return ` Travel date: ${this.travelDate}, the travel duration was ${this.travelDuration}, driver's name was ${this.driverName}, car model was ${this.carModel}`
//     }
// }
// console.log(profile.showProfileInfo());
// console.log(travel.showTravelInfo());
