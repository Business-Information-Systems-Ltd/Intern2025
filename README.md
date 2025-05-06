# Static Website Scaffold
This is the base structure for a 6-page static website project in order to provide git and github training to a team of junior software engineers.

**Git Training for a Team of Entry-Level Software Engineers**

## Project Structure
## Basic Git Process
### **Module 1: Introduction to Git**

**Objective:** Understand what Git is and why it is used.

* What is Git?

  * Distributed Version Control System
  * Tracks changes to source code over time
* Benefits of using Git

  * Collaboration
  * Backup
  * Version history
  * Experimentation with branches

**Activity:** Discuss real-life scenarios where version control is useful.

---

### **Module 2: Git Setup**

**Objective:** Install and configure Git on your machine.

* Install Git

  * Windows, Mac, Linux installation links
* Basic Configuration

```bash
  git config --global user.name "Your Name"
  git config --global user.email "you@example.com"
```

**Activity:** Set up Git and verify using `git config --list`

---

### **Module 3: Git Basic Workflow**

**Objective:** Learn the core Git commands for day-to-day usage.

1. Create or Clone a Repo

```bash
git init
git clone https://github.com/user/repo.git
```

2. Check Status and Add Changes

```bash
git status
git add filename or git add .
```

3. Commit Changes

```bash
git commit -m "commit message"
```

4. Push and Pull

```bash
git push origin branch-name
git pull origin branch-name
```

**Activity:** Create a test repo and go through the steps.

---

### **Module 4: Branching and Merging**

**Objective:** Understand how to create branches and merge changes.

* Create a Branch

```bash
git checkout -b feature-branch
```

* Merge Branch

```bash
git checkout main
git merge feature-branch
```

* Delete Branch

```bash
git branch -d feature-branch
```

**Activity:** Practice feature branching and merging in a group.

---

### **Module 5: Viewing History and Undoing Changes**

**Objective:** Learn how to view commit history and undo mistakes.

* View History

```bash
git log
git log --oneline
```

* Undoing Changes

```bash
git checkout filename         # Discard file changes
git reset --soft HEAD~1       # Undo last commit, keep changes
```

**Activity:** Make mistakes and try to fix them with Git commands.

---

### **Module 6: Working with Remote Repositories**

**Objective:** Use GitHub for remote collaboration.

* Connect local repo to GitHub

```bash
git remote add origin https://github.com/user/repo.git
git push -u origin main
```

* Forking and Pull Requests (Intro Only)

**Activity:** Fork a repo and submit a pull request.

---

### **Module 7: Best Practices and Troubleshooting**

**Objective:** Learn good habits and how to deal with common Git issues.

* Write meaningful commit messages
* Pull before push
* Use `.gitignore`
* Avoid force push unless necessary

**Activity:** Review Git best practices checklist.

---

### **Module 8: Practice Project**

**Objective:** Apply all Git skills in a real-world simulated project.

**Project:** Build a collaborative Markdown-based Resume Website Repository

**Tasks:**

1. Create a GitHub repository named `resume-project`
2. Clone the repository locally
3. Create a `README.md` file with your name and profile
4. Create a branch `education-section`, add your education info, and merge to main
5. Create a branch `experience-section`, add your experience info, and merge
6. Introduce a collaborator to create the `skills-section` and handle merge conflict if it occurs
7. Practice `git log`, `git diff`, and `git revert` to explore changes

**Goal:** Understand collaboration, conflict resolution, and version history exploration

---

### **Module 9: Deployment to Staging Server (Azure or AWS)**

**Objective:** Understand the process of deploying code to a staging environment.

**General Steps:**

1. Push code to a specific branch (e.g., `staging`)
2. Use CI/CD tools (like GitHub Actions, Azure DevOps, or AWS CodePipeline)

**For Azure:**

* Setup an Azure App Service or Virtual Machine
* Configure GitHub Actions pipeline to deploy on push to `staging` branch

```yaml
on:
  push:
    branches:
      - staging
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Deploy to Azure Web App
      uses: azure/webapps-deploy@v2
      with:
        app-name: <your-app-name>
        publish-profile: ${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}
        package: .
```

**For AWS:**

* Setup Elastic Beanstalk, EC2, or ECS
* Use AWS CLI or GitHub Actions

```yaml
on:
  push:
    branches:
      - staging
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Configure AWS credentials
      uses: aws-actions/configure-aws-credentials@v1
      with:
        aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
        aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        region: us-east-1
    - name: Deploy to S3 or Beanstalk (example)
      run: aws s3 sync ./build s3://your-staging-bucket
```

**Activity:** Deploy a simple HTML or Node.js app to Azure or AWS staging using GitHub Actions.

---

### **Module 10: Working with Git Without GitHub**

**Objective:** Learn how to use Git independently of remote services like GitHub.

* Git is a distributed version control system; every clone has the full history
* You can version control and collaborate without any remote server

**Local Workflow:**

1. Initialize: `git init`
2. Track changes: `git add`, `git commit`
3. View history: `git log`
4. Create branches: `git checkout -b branch-name`
5. Merge changes locally: `git merge`

**Team Collaboration (without GitHub):**

* Use shared folders (e.g., over network or USB)
* Share `.git` folder or use `git bundle` or `git archive`
* Clone from local path:

```bash
git clone /path/to/shared/repo
```

* Add local remote:

```bash
git remote add origin /shared/central/repo
```

**Activity:** Create two folders to simulate two users. Collaborate using Git operations only.

---

### **Appendix: Helpful Tools and Resources**

* Visual Git Tools: GitHub Desktop, GitKraken, VSCode Git UI
* Git Cheatsheet
* Resources:

  * [https://www.atlassian.com/git/tutorials](https://www.atlassian.com/git/tutorials)
  * [https://git-scm.com/docs](https://git-scm.com/docs)
  * [https://learngitbranching.js.org/](https://learngitbranching.js.org/)
