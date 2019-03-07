# Git CheatSheet


#### Installation
	
##### On Linux 
```sh
#Debain Distro
sudo apt-get install git

# Fedora Distro
yum -y install git

```
#### On windows and Mac

Download `github desktop and shell` from [here](https://desktop.github.com/)

#### Getting Started
	
```sh
  	#to initialize git in a local directory
    git init
    
    #to clone a repo from github
    git clone url
```
  
#### Configuring your name and email 

```sh
	#set up user name
    git config --global user.name "Insert your name here"
    
    #set up user  email
    git config --global user.email "Insert your email here"
```

    
#### Commiting files

##### Check file status

```sh
	git status
```


##### how to add files to the [staging](http://gitready.com/beginner/2009/01/18/the-staging-area.html) area 
	
```sh 
  #add a specific file
  git add filename
 
  #add a specific file type
  git add *.extention
 
  #add all files 
 
  git add .
     or 
  git add *
  
  #this command will unstage the files which are not commited
  git reset filename
```	
 
 
#####  How to commit Changes
 
 ```sh
 git commit -m "Insert Commit message here"
 
```

##### See commit history
```sh
#detailed commit history
git log
```

##### Go back to a previous commit

```sh
git reset --hard sha
```
sha is the alphanumeric  you find when using `git log`
 


#### Branches

```sh
	# check current branch names
    git branch

	# add a new branch
    git branch branchname
    
    # switch to a different branch
    git checkout branch name
    
    # add a new branch and switch to that branch
   git checkout -b branchname   
   
   # merge a branch to the current branch
   git merge  branchname
```

##### Contributing to an Online Repo Workflow

![Workflow](https://camo.githubusercontent.com/7e30d597ecfa19d80b573db63799ecf6d58a6525/687474703a2f2f69726f6e626f6172642d637572726963756c756d2d636f6e74656e742e73332e616d617a6f6e6177732e636f6d2f66726f6e742d656e642f6c61622d6173736574732f6769742d776f726b666c6f772d352e706e67)


#### Remotes

Manage the set of repositories ("remotes") whose branches you track.
```sh
	#check available remotes
    git remote 
    
    #Add a new remote 
    git remote add url
    
```

#### Pull and Push

```sh
	#pull all the branches from your main repo 
    git pull 
    
    #pull specific branch from a specific repo
    git pull remote-name  branch-name 

	# push all the branches to the main repo
    git push 
    
    #push specific branch to a specific repo
	git push remote-name branch-name    

```

#### Resources 

* [Try Github](https://try.github.io)
* [learnGitBranching](http://pcottle.github.io/learnGitBranching/?NODEMO)
* [Pro Git - Free Book](http://git-scm.com/book)
* Learn more about [Markdown format](https://guides.github.com/features/mastering-markdown/)
* Learn more about [github gist](https://gist.github.com/)
