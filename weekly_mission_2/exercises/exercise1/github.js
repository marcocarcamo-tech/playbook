const repo = {
 name: "LaunchX",
 author: "carlogilmar",
 language: "JavaScript",
 numberOfCommits: 100,
 stars: 199,
 forks: 299,
 issues_open: 10,
 issues_close: 10,
 getTotalIssues: function(){
   return this.issues_open + this.issues_close
 },
 getGeneralInfo: function(){
   return `This repository ${this.name} was created by ${this.author}`
 }
}

console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())

const issue = {
 title: "Issue 1",
 repositoryNameAssociated: "LaunchX",
 status: "open",
 numberOfComments: 5,
 labels: {
	label1: "issue1",
	label2: "code"
  }
 author: "Marco Carcamo",
 dateCreated: "19/04/2022",
 lastUpdated: "20/04/2022",
 getTitleAndAuthor: function(){
  return `Title: ${this.title} Autor: ${this.author}`
  },
 getGeneralInfo: function(){
  return `Issues: ${this.issues}
	  Labels: ${this.labels}
	  Date of creation: ${this.dateCreated}
	  Date of last update: ${this.lastUpdated}`
  }
}

const pullRequest = {
 title: "code resolution",
 branchName: "dev",
 dateCreated: "20/042022",
 status: "open",
 author: "Marco Carcamo"
 repositoryNameAssociated: "LaunchX",
 getStatus: function(){
 return this.status
 },
 getTitleAndAuthor: function(){
 return `Title: ${this.title} Autor: ${this.author}`
 }
}

