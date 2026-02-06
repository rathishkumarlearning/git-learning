export const courseData = {
  title: "Git & GitHub",
  subtitle: "Master version control and collaboration",
  chapters: [
    {
      id: 1,
      title: "Getting Started with Git",
      description: "Understanding version control fundamentals",
      lessons: [
        {
          id: "1-1",
          title: "What is Version Control?",
          duration: "8 min",
          content: `
## Welcome to Git! 🎉

Imagine writing a 50-page essay and accidentally deleting half of it. Without version control, you'd cry. With it? Just restore the previous version!

### What is Version Control?

**Version control** tracks changes to files over time. It lets you:
- Go back to any previous version
- See who changed what and when
- Work with others without overwriting each other's work
- Experiment safely with branches

### The Problem Git Solves

\`\`\`
Without Git:
essay_v1.docx
essay_v2.docx
essay_v2_final.docx
essay_v2_final_REAL.docx
essay_v2_final_REAL_submitted.docx  😱
\`\`\`

\`\`\`
With Git:
essay.docx
  └── Version 1 (Jan 1)
  └── Version 2 (Jan 2)
  └── Version 3 (Jan 3)  ← Current
  
Need version 1? Just checkout! ✨
\`\`\`

### Git vs GitHub

| Git | GitHub |
|-----|--------|
| Software on your computer | Website/cloud service |
| Tracks file versions locally | Hosts Git repos online |
| Works offline | Enables collaboration |
| Free & open source | Free + paid tiers |

Think of it like:
- **Git** = Microsoft Word's "Track Changes"
- **GitHub** = Google Docs (online collaboration)

### Key Concepts

\`\`\`
Repository (Repo)  = Project folder tracked by Git
Commit             = A saved snapshot of changes
Branch             = Parallel version of code
Merge              = Combining branches together
Clone              = Copy a remote repo locally
Push               = Upload commits to remote
Pull               = Download commits from remote
\`\`\`

### Why Developers Love Git

1. **Never lose work** — Every change is saved
2. **Fearless experimentation** — Try anything in branches
3. **Collaboration** — Multiple people, one codebase
4. **History** — See exactly what changed and why
5. **Industry standard** — Every tech company uses it

<tip>
💡 Git was created by Linus Torvalds in 2005 — the same person who created Linux!
</tip>

### Installing Git

\`\`\`bash
# Check if Git is installed
git --version

# macOS (with Homebrew)
brew install git

# Windows
# Download from git-scm.com

# Ubuntu/Debian
sudo apt install git
\`\`\`

### First-Time Setup

\`\`\`bash
# Tell Git who you are
git config --global user.name "Your Name"
git config --global user.email "you@example.com"

# Verify settings
git config --list
\`\`\`

<warning>
⚠️ Use the same email as your GitHub account to link your commits to your profile!
</warning>

Ready to create your first repository? Let's go! 🚀
          `
        },
        {
          id: "1-2",
          title: "Your First Repository",
          duration: "10 min",
          content: `
## Creating Your First Git Repo 📁

Let's get hands-on and create your first Git repository!

### Initialize a Repository

\`\`\`bash
# Create a new folder
mkdir my-first-repo
cd my-first-repo

# Initialize Git in this folder
git init

# Output: Initialized empty Git repository in /path/my-first-repo/.git/
\`\`\`

That \`.git\` folder is where Git stores all version history. Don't delete it!

### Check Repository Status

\`\`\`bash
git status

# On branch main
# No commits yet
# nothing to commit (create/copy files and use "git add" to track)
\`\`\`

This is your new best friend command — use it constantly!

### Create Your First File

\`\`\`bash
# Create a README file
echo "# My First Project" > README.md

# Check status again
git status

# Untracked files:
#   README.md
\`\`\`

### The Staging Area

Git has a two-step save process:

\`\`\`
Working Directory → Staging Area → Repository
     (edit)           (add)         (commit)

1. You EDIT files in working directory
2. You ADD files to staging area (preparing to commit)
3. You COMMIT staged files to repository (permanent snapshot)
\`\`\`

### Stage Files with git add

\`\`\`bash
# Add a specific file
git add README.md

# Add all files
git add .

# Check status
git status

# Changes to be committed:
#   new file: README.md   (now it's green!)
\`\`\`

### Commit Your Changes

\`\`\`bash
git commit -m "Initial commit: add README"

# [main (root-commit) a1b2c3d] Initial commit: add README
#  1 file changed, 1 insertion(+)
#  create mode 100644 README.md
\`\`\`

**Congratulations!** You just created your first commit! 🎉

### View Commit History

\`\`\`bash
git log

# commit a1b2c3d... (HEAD -> main)
# Author: Your Name <you@example.com>
# Date:   Mon Jan 1 12:00:00 2024
#
#     Initial commit: add README
\`\`\`

### The Complete Workflow

\`\`\`bash
# 1. Make changes to files
echo "This is my project" >> README.md

# 2. See what changed
git status
git diff  # Shows actual changes

# 3. Stage changes
git add README.md

# 4. Commit with a message
git commit -m "Add project description to README"

# 5. View history
git log --oneline
# b2c3d4e Add project description to README
# a1b2c3d Initial commit: add README
\`\`\`

### Quick Tip: Stage + Commit in One

\`\`\`bash
# Add all changes AND commit (for tracked files only)
git commit -am "Update README"

# Note: This doesn't work for NEW files - use git add first
\`\`\`

<tip>
💡 Write clear commit messages! "Fix bug" is bad. "Fix login button not responding on mobile" is good!
</tip>

### Commit Message Best Practices

| ❌ Bad | ✅ Good |
|--------|---------|
| "update" | "Add user authentication feature" |
| "fix" | "Fix crash when username is empty" |
| "stuff" | "Refactor database connection handling" |
| "asdfjkl" | "Update README with installation steps" |

### Practice Exercise

\`\`\`bash
# Create a project folder
mkdir hello-git && cd hello-git
git init

# Create and commit a file
echo "Hello, Git!" > hello.txt
git add hello.txt
git commit -m "Add hello.txt with greeting"

# Modify and commit again
echo "Learning Git is fun!" >> hello.txt
git commit -am "Add learning message"

# View your history
git log --oneline
\`\`\`

You now know the basic Git workflow! 🎯
          `
        }
      ]
    },
    {
      id: 2,
      title: "Understanding Commits",
      description: "Deep dive into commits and history",
      lessons: [
        {
          id: "2-1",
          title: "Anatomy of a Commit",
          duration: "10 min",
          content: `
## What's Inside a Commit? 🔍

Every commit is a snapshot of your project at a moment in time.

### Commit Structure

\`\`\`
commit a1b2c3d4e5f6789...
├── Tree (snapshot of all files)
├── Parent (previous commit)
├── Author (who wrote the code)
├── Committer (who committed it)
├── Date
└── Message
\`\`\`

### View Commit Details

\`\`\`bash
# Short log
git log --oneline
# a1b2c3d Add feature X
# b2c3d4e Fix bug Y
# c3d4e5f Initial commit

# Full details
git log

# Super detailed
git show a1b2c3d
\`\`\`

### Understanding SHA Hashes

Every commit has a unique identifier (SHA-1 hash):

\`\`\`
a1b2c3d4e5f6789abcdef1234567890abcdef12
└──────────────────────────────────────┘
              40 characters

You only need the first 7 to identify it:
a1b2c3d
\`\`\`

<tip>
💡 The hash is generated from the commit contents. Change anything, and you get a completely different hash!
</tip>

### View What Changed

\`\`\`bash
# See changes in a specific commit
git show a1b2c3d

# See all changes between two commits
git diff a1b2c3d b2c3d4e

# See changes in last commit
git show HEAD

# See changes before staging
git diff

# See changes after staging
git diff --staged
\`\`\`

### HEAD - Where You Are Now

\`HEAD\` is a pointer to your current position:

\`\`\`
c3d4e5f ← HEAD (you are here)
    ↓
b2c3d4e
    ↓
a1b2c3d (first commit)
\`\`\`

### Navigate History

\`\`\`bash
# HEAD references
HEAD      = current commit
HEAD~1    = 1 commit before HEAD
HEAD~2    = 2 commits before HEAD
HEAD^     = parent of HEAD (same as HEAD~1)
\`\`\`

\`\`\`bash
# View file from previous commit
git show HEAD~1:README.md

# Compare current vs 2 commits ago
git diff HEAD~2 HEAD
\`\`\`

### Amending Commits

Made a typo in your last commit message?

\`\`\`bash
# Change the last commit message
git commit --amend -m "New, better message"

# Add forgotten files to last commit
git add forgotten-file.txt
git commit --amend --no-edit
\`\`\`

<warning>
⚠️ Only amend commits that haven't been pushed! Amending rewrites history.
</warning>

### Viewing File History

\`\`\`bash
# All commits that touched a file
git log -- README.md

# With patches (actual changes)
git log -p -- README.md

# Who changed each line (blame)
git blame README.md

# Output:
# a1b2c3d (Alice 2024-01-01) # My Project
# b2c3d4e (Bob   2024-01-02) Description here
\`\`\`

### Pretty Log Formats

\`\`\`bash
# One line per commit
git log --oneline

# With graph
git log --oneline --graph

# With stats
git log --stat

# Custom format
git log --pretty=format:"%h - %an: %s"
# a1b2c3d - Alice: Add feature
# b2c3d4e - Bob: Fix bug
\`\`\`

### Searching Commits

\`\`\`bash
# Find commits by message
git log --grep="bug fix"

# Find commits by author
git log --author="Alice"

# Find commits that changed specific code
git log -S "function_name"

# Commits in date range
git log --since="2024-01-01" --until="2024-02-01"
\`\`\`

You now understand what commits really are! 📚
          `
        },
        {
          id: "2-2",
          title: "Undoing Changes",
          duration: "12 min",
          content: `
## Oops! Undoing in Git 🔙

Everyone makes mistakes. Git has many ways to undo them!

### Levels of "Undo"

\`\`\`
Scenario                           → Solution
─────────────────────────────────────────────────
Changed file, not staged           → git checkout
Staged file, not committed         → git reset
Committed locally                  → git reset/revert
Pushed to remote                   → git revert (safest)
\`\`\`

### Discard Unstaged Changes

\`\`\`bash
# You edited a file but want to discard changes
git checkout -- filename.txt

# Discard ALL unstaged changes (careful!)
git checkout -- .

# Modern way (Git 2.23+)
git restore filename.txt
\`\`\`

<warning>
⚠️ This permanently deletes your changes! No way to recover unless you have a backup.
</warning>

### Unstage Files

\`\`\`bash
# You added files to staging but changed your mind
git reset filename.txt

# Unstage everything
git reset

# Modern way (Git 2.23+)
git restore --staged filename.txt
\`\`\`

Your changes are kept, just unstaged.

### Undo the Last Commit (Keep Changes)

\`\`\`bash
# Oops, committed too soon!
git reset --soft HEAD~1

# Your changes are back in staging area
# The commit is gone, but your work is safe
\`\`\`

### Undo the Last Commit (Discard Changes)

\`\`\`bash
# Nuclear option - delete last commit AND changes
git reset --hard HEAD~1

# Changes are GONE. Use carefully!
\`\`\`

### Reset Modes Explained

\`\`\`
git reset --soft HEAD~1
  ├── Commit: UNDONE
  ├── Staging: KEPT
  └── Working: KEPT

git reset --mixed HEAD~1  (default)
  ├── Commit: UNDONE
  ├── Staging: UNDONE
  └── Working: KEPT

git reset --hard HEAD~1
  ├── Commit: UNDONE
  ├── Staging: UNDONE
  └── Working: UNDONE (deleted!)
\`\`\`

### Revert - Safe Undo for Pushed Commits

\`\`\`bash
# Creates a NEW commit that undoes an old commit
git revert a1b2c3d

# History:
# c - Revert "Add feature"  ← new commit
# b - Add feature           ← still exists
# a - Initial
\`\`\`

<tip>
💡 Use \`revert\` for pushed commits because it doesn't rewrite history. Others won't have conflicts!
</tip>

### Recover "Lost" Commits

Accidentally reset too far? Git saves everything for 30 days!

\`\`\`bash
# See all recent HEAD positions
git reflog

# Output:
# a1b2c3d HEAD@{0}: reset: moving to HEAD~2
# b2c3d4e HEAD@{1}: commit: Add feature
# c3d4e5f HEAD@{2}: commit: Fix bug

# Recover to a specific point
git reset --hard b2c3d4e
\`\`\`

### Clean Untracked Files

\`\`\`bash
# See what would be deleted
git clean -n

# Delete untracked files
git clean -f

# Delete untracked files AND directories
git clean -fd

# Interactive mode
git clean -i
\`\`\`

### Stash - Temporary Save

Need to switch tasks but not ready to commit?

\`\`\`bash
# Save current changes temporarily
git stash

# Your working directory is now clean!

# Do other work...

# Get your changes back
git stash pop

# List all stashes
git stash list

# Apply specific stash
git stash apply stash@{1}
\`\`\`

### Practical Scenarios

\`\`\`bash
# "I want to start fresh on this file"
git checkout -- filename.txt

# "I committed to the wrong branch!"
git reset --soft HEAD~1    # undo commit, keep changes
git stash                   # save changes
git checkout correct-branch
git stash pop              # apply changes here

# "I need to undo a pushed commit"
git revert abc123

# "I deleted everything by accident!"
git reflog                 # find the commit
git reset --hard abc123    # go back to it
\`\`\`

You now have the power to fix almost any mistake! 💪
          `
        }
      ]
    },
    {
      id: 3,
      title: "Branching & Merging",
      description: "Work on features in isolation",
      lessons: [
        {
          id: "3-1",
          title: "Understanding Branches",
          duration: "12 min",
          content: `
## Branches - Parallel Universes 🌿

Branches let you work on features without affecting the main code!

### What is a Branch?

\`\`\`
                 feature
                    ↓
              e --- f
             /
a --- b --- c --- d  ← main
\`\`\`

A branch is just a pointer to a commit. Creating branches is instant and cheap!

### Why Use Branches?

- **Isolation**: Work on features without breaking main code
- **Experimentation**: Try ideas, delete branch if it fails
- **Collaboration**: Multiple people work on different features
- **Organization**: Keep work separated and manageable

### Create and Switch Branches

\`\`\`bash
# See all branches
git branch
# * main   ← asterisk shows current branch

# Create a new branch
git branch feature-login

# Switch to it
git checkout feature-login

# Or create AND switch in one command
git checkout -b feature-signup

# Modern way (Git 2.23+)
git switch feature-login
git switch -c feature-new  # create and switch
\`\`\`

### Branch Workflow

\`\`\`bash
# 1. Create feature branch
git checkout -b feature-navbar

# 2. Make changes and commit
echo "navbar code" > navbar.js
git add navbar.js
git commit -m "Add navbar component"

# 3. Make more commits...
git commit -am "Style navbar"
git commit -am "Add mobile menu"

# 4. Switch back to main
git checkout main

# 5. Your navbar changes aren't here!
ls navbar.js  # File not found

# 6. Switch back to feature
git checkout feature-navbar
ls navbar.js  # File exists!
\`\`\`

### Visualize Branches

\`\`\`bash
# See branches with commits
git log --oneline --graph --all

# Output:
# * abc123 (feature-navbar) Add mobile menu
# * def456 Style navbar
# * ghi789 Add navbar component
# | * jkl012 (main) Update README
# |/
# * mno345 Initial commit
\`\`\`

### List Branches

\`\`\`bash
# Local branches
git branch

# Remote branches
git branch -r

# All branches
git branch -a

# With last commit info
git branch -v
\`\`\`

### Delete Branches

\`\`\`bash
# Delete merged branch
git branch -d feature-done

# Force delete unmerged branch
git branch -D feature-abandoned
\`\`\`

<warning>
⚠️ Don't delete branches you haven't merged unless you're sure you don't need that work!
</warning>

### Rename Branches

\`\`\`bash
# Rename current branch
git branch -m new-name

# Rename another branch
git branch -m old-name new-name
\`\`\`

### Branch Naming Conventions

\`\`\`
Common patterns:
feature/user-authentication
bugfix/login-crash
hotfix/security-patch
release/v2.0
experiment/new-algorithm

Good names:
feature/add-shopping-cart
bugfix/fix-email-validation
hotfix/patch-sql-injection

Bad names:
my-branch
test
asdf
johns-stuff
\`\`\`

<tip>
💡 Use descriptive branch names! Future you will thank present you.
</tip>

### Practical Exercise

\`\`\`bash
# Create a new project
mkdir branch-practice && cd branch-practice
git init
echo "# Project" > README.md
git add . && git commit -m "Initial commit"

# Create a feature branch
git checkout -b feature/greeting

# Add a feature
echo "Hello!" > greeting.txt
git add . && git commit -m "Add greeting"

# Check the difference
git checkout main
ls  # Only README.md
git checkout feature/greeting
ls  # README.md AND greeting.txt!
\`\`\`

You're now a branching pro! 🌳
          `
        },
        {
          id: "3-2",
          title: "Merging Branches",
          duration: "14 min",
          content: `
## Bringing It All Together 🔀

You've made changes on a branch. Now let's merge them back!

### What is Merging?

\`\`\`
Before merge:
        feature
           ↓
     c --- d
    /
a --- b  ← main

After merge:
     c --- d
    /       \\
a --- b --- e  ← main (includes c & d)
\`\`\`

### Basic Merge

\`\`\`bash
# 1. Switch to the TARGET branch (where you want changes)
git checkout main

# 2. Merge the SOURCE branch
git merge feature-navbar

# Output:
# Updating abc123..def456
# Fast-forward
#  navbar.js | 50 ++++++++++++++
#  1 file changed, 50 insertions(+)
\`\`\`

### Fast-Forward Merge

When main hasn't changed since you branched:

\`\`\`
Before:
     c --- d  ← feature
    /
a --- b  ← main

After (fast-forward):
a --- b --- c --- d  ← main, feature

Git just moves the main pointer forward!
\`\`\`

\`\`\`bash
# Force a merge commit even when fast-forward possible
git merge --no-ff feature-branch
\`\`\`

### Three-Way Merge

When both branches have new commits:

\`\`\`
Before:
        feature
           ↓
     c --- d
    /
a --- b --- e  ← main

After (merge commit created):
     c --- d
    /       \\
a --- b --- e --- f  ← main
              merge commit
\`\`\`

### Merge Conflicts 😱

When Git can't auto-merge because both branches changed the same lines:

\`\`\`bash
git merge feature-branch

# CONFLICT (content): Merge conflict in file.txt
# Automatic merge failed; fix conflicts and commit.
\`\`\`

### Resolving Conflicts

\`\`\`
<<<<<<< HEAD
This is the content from main branch
=======
This is the content from feature branch
>>>>>>> feature-branch
\`\`\`

To resolve:
1. Edit the file - keep what you want
2. Remove the conflict markers
3. Stage and commit

\`\`\`bash
# After fixing the file manually
git add file.txt
git commit -m "Merge feature-branch, resolve conflicts"
\`\`\`

### Conflict Resolution Tools

\`\`\`bash
# Use visual merge tool
git mergetool

# See what's conflicted
git status

# Abort merge and go back
git merge --abort
\`\`\`

<tip>
💡 VS Code and other editors have great built-in merge conflict resolution. Look for "Accept Incoming" / "Accept Current" / "Accept Both" buttons!
</tip>

### Merge Strategies

\`\`\`bash
# Standard merge (creates merge commit)
git merge feature-branch

# Squash merge (combine all commits into one)
git merge --squash feature-branch
git commit -m "Add feature X"

# The squash keeps history clean but loses individual commits
\`\`\`

### Complete Merge Workflow

\`\`\`bash
# 1. Start on main, create feature branch
git checkout main
git checkout -b feature/user-profile

# 2. Do work and commit
git add .
git commit -m "Add user profile page"
git commit -m "Add avatar upload"
git commit -m "Add bio editing"

# 3. Update from main (get latest changes)
git checkout main
git pull origin main
git checkout feature/user-profile
git merge main  # or git rebase main

# 4. Merge feature into main
git checkout main
git merge feature/user-profile

# 5. Delete feature branch
git branch -d feature/user-profile

# 6. Push to remote
git push origin main
\`\`\`

### Avoiding Conflicts

\`\`\`
✅ Communicate with team about what you're working on
✅ Pull from main frequently
✅ Keep branches short-lived
✅ Make small, focused commits
✅ Don't reformat entire files unnecessarily
\`\`\`

<warning>
⚠️ Never merge directly to main in team projects! Use Pull Requests instead (covered next chapter).
</warning>

You can now merge like a pro! 🎯
          `
        }
      ]
    },
    {
      id: 4,
      title: "Working with GitHub",
      description: "Remote repositories and collaboration",
      lessons: [
        {
          id: "4-1",
          title: "Connecting to GitHub",
          duration: "12 min",
          content: `
## Git Meets the Cloud ☁️

GitHub hosts your Git repositories online, enabling collaboration worldwide!

### Create a GitHub Account

1. Go to [github.com](https://github.com)
2. Sign up with your email
3. Choose a username (this is your identity!)
4. Verify your email

### Create Your First Remote Repository

\`\`\`
1. Click "+" → "New repository"
2. Name it (e.g., "my-first-repo")
3. Add description (optional)
4. Choose Public or Private
5. DON'T initialize with README (we have local repo)
6. Click "Create repository"
\`\`\`

### Connect Local to Remote

\`\`\`bash
# Add remote (origin is conventional name)
git remote add origin https://github.com/username/my-first-repo.git

# Verify remote
git remote -v
# origin  https://github.com/username/my-first-repo.git (fetch)
# origin  https://github.com/username/my-first-repo.git (push)

# Push your code!
git push -u origin main
\`\`\`

### Authentication Options

**Option 1: HTTPS with Token**
\`\`\`bash
# Generate token: GitHub → Settings → Developer Settings → Personal Access Tokens
# Use token as password when pushing
\`\`\`

**Option 2: SSH Keys (Recommended!)**
\`\`\`bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your@email.com"

# Start SSH agent
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Copy public key
cat ~/.ssh/id_ed25519.pub
# Add this to GitHub → Settings → SSH Keys

# Test connection
ssh -T git@github.com
# Hi username! You've successfully authenticated...

# Use SSH URL
git remote set-url origin git@github.com:username/repo.git
\`\`\`

<tip>
💡 SSH keys mean you never type passwords! Set them up once and forget about them.
</tip>

### Clone Existing Repositories

\`\`\`bash
# Clone someone else's repo
git clone https://github.com/facebook/react.git

# Clone into specific folder
git clone https://github.com/user/repo.git my-folder

# Clone specific branch
git clone -b develop https://github.com/user/repo.git
\`\`\`

### Push and Pull

\`\`\`bash
# Push your commits to GitHub
git push origin main

# Get commits from GitHub
git pull origin main

# First push of a new branch
git push -u origin feature-branch
# -u sets upstream, so next time just: git push
\`\`\`

### Remote Commands

\`\`\`bash
# List remotes
git remote -v

# Add another remote
git remote add upstream https://github.com/original/repo.git

# Remove remote
git remote remove origin

# Rename remote
git remote rename origin github
\`\`\`

### Fetch vs Pull

\`\`\`bash
# Fetch: download changes but DON'T merge
git fetch origin

# Now you can see what changed
git log origin/main

# Merge when ready
git merge origin/main

# Pull: fetch + merge in one command
git pull origin main
\`\`\`

<warning>
⚠️ \`git pull\` can create merge conflicts if you have local changes. Consider using \`git fetch\` first to see what's coming!
</warning>

### The .gitignore File

Tell Git what NOT to track:

\`\`\`bash
# .gitignore file
node_modules/
.env
*.log
.DS_Store
dist/
build/
*.secret
\`\`\`

\`\`\`bash
# Create .gitignore
echo "node_modules/" > .gitignore
git add .gitignore
git commit -m "Add gitignore"
\`\`\`

### GitHub's Web Interface

You can do a lot without command line:
- View code and commits
- Edit files directly
- Create branches
- Open issues
- Review pull requests
- Manage settings

Your code is now in the cloud! 🌤️
          `
        },
        {
          id: "4-2",
          title: "Pull Requests & Code Review",
          duration: "14 min",
          content: `
## Pull Requests - The Heart of Collaboration 💜

Pull Requests (PRs) are how teams collaborate and review code on GitHub.

### What is a Pull Request?

A PR is a request to merge your branch into another branch. It enables:
- **Code review** before merging
- **Discussion** about changes
- **CI/CD** automated testing
- **Documentation** of why changes were made

### Creating a Pull Request

\`\`\`bash
# 1. Create and push your feature branch
git checkout -b feature/add-login
# ... make changes ...
git add .
git commit -m "Add login functionality"
git push -u origin feature/add-login
\`\`\`

Then on GitHub:
1. Click "Compare & pull request" (appears after pushing)
2. Or: Pull Requests → New Pull Request
3. Select base branch (main) and compare branch (feature/add-login)
4. Write a title and description
5. Click "Create Pull Request"

### Writing Good PR Descriptions

\`\`\`markdown
## What does this PR do?
Adds user login functionality with email/password authentication.

## Changes
- Add login form component
- Implement authentication API
- Add session management
- Create protected route wrapper

## Testing
- [x] Unit tests pass
- [x] Manual testing on Chrome/Firefox
- [x] Mobile responsive

## Screenshots
![Login form](screenshot.png)

## Related Issues
Closes #42
\`\`\`

### Code Review Process

**As a Reviewer:**
\`\`\`
1. Look at the "Files changed" tab
2. Click line numbers to add comments
3. Use "Start a review" to batch comments
4. Submit review with:
   - Comment (just feedback)
   - Approve (looks good!)
   - Request changes (needs work)
\`\`\`

**As the Author:**
\`\`\`
1. Respond to feedback
2. Make requested changes
3. Push new commits
4. Request re-review
\`\`\`

<tip>
💡 Be kind in reviews! Suggest improvements, don't criticize. "Consider using X because..." is better than "This is wrong."
</tip>

### PR Review Best Practices

\`\`\`
✅ Keep PRs small (< 400 lines ideally)
✅ One feature per PR
✅ Write descriptive commit messages
✅ Add screenshots for UI changes
✅ Link related issues
✅ Respond to all feedback
✅ Test before requesting review
\`\`\`

### Merging Pull Requests

Three merge options on GitHub:

**1. Merge Commit**
\`\`\`
Creates a merge commit. Preserves full history.
Best for: Most cases
\`\`\`

**2. Squash and Merge**
\`\`\`
Combines all commits into one. Clean history.
Best for: Feature branches with messy commits
\`\`\`

**3. Rebase and Merge**
\`\`\`
Applies commits on top of base. Linear history.
Best for: When you want clean, linear history
\`\`\`

### Handling Merge Conflicts in PRs

\`\`\`bash
# GitHub shows: "This branch has conflicts"

# Option 1: Resolve on GitHub (for simple conflicts)
# Click "Resolve conflicts" button

# Option 2: Resolve locally
git checkout feature/add-login
git pull origin main
# Fix conflicts
git add .
git commit -m "Resolve merge conflicts"
git push
\`\`\`

### Draft Pull Requests

Not ready for review yet?

\`\`\`
1. Create PR as usual
2. Click dropdown next to "Create" → "Create draft"
3. Work on it, push commits
4. Click "Ready for review" when done
\`\`\`

### Forking and Contributing

To contribute to repos you don't own:

\`\`\`bash
# 1. Fork the repo on GitHub (click "Fork" button)

# 2. Clone YOUR fork
git clone https://github.com/YOUR-USERNAME/repo.git

# 3. Add original as upstream
git remote add upstream https://github.com/ORIGINAL/repo.git

# 4. Create branch and make changes
git checkout -b fix/typo
# make changes
git push origin fix/typo

# 5. Create PR from your fork to original repo
\`\`\`

### Keeping Fork Updated

\`\`\`bash
# Get changes from original repo
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
\`\`\`

<warning>
⚠️ Always create PRs from feature branches, never from main!
</warning>

You now understand collaborative Git workflows! 🤝
          `
        }
      ]
    },
    {
      id: 5,
      title: "Advanced Git Techniques",
      description: "Power user features",
      lessons: [
        {
          id: "5-1",
          title: "Rebasing",
          duration: "14 min",
          content: `
## Rebase - Rewriting History ✨

Rebasing is an alternative to merging that creates cleaner history.

### Merge vs Rebase

\`\`\`
Merge creates a merge commit:
     c --- d
    /       \\
a --- b --- e --- M  ← merge commit

Rebase replays commits on top:
a --- b --- e --- c' --- d'
                   ↑
         commits are "replayed"
\`\`\`

### Basic Rebase

\`\`\`bash
# You're on feature branch, main has new commits
git checkout feature-branch
git rebase main

# Your commits are now on top of main!
# Then merge (will be fast-forward)
git checkout main
git merge feature-branch
\`\`\`

### When to Use Rebase vs Merge

| Use Rebase | Use Merge |
|-----------|-----------|
| Local branches not pushed | Shared/pushed branches |
| Want linear history | Preserve full history |
| Before creating PR | Main/develop branches |
| Cleaning up commits | Team collaboration |

### Interactive Rebase - Edit Commits

\`\`\`bash
# Rebase last 3 commits interactively
git rebase -i HEAD~3
\`\`\`

Opens editor:
\`\`\`
pick abc123 Add feature
pick def456 Fix typo
pick ghi789 Add tests

# Commands:
# p, pick = use commit
# r, reword = use commit, edit message
# e, edit = use commit, stop for amending
# s, squash = meld into previous commit
# f, fixup = like squash but discard message
# d, drop = remove commit
\`\`\`

### Squash Commits

Combine multiple commits into one:

\`\`\`bash
git rebase -i HEAD~3

# Change to:
pick abc123 Add feature
squash def456 Fix typo
squash ghi789 Add tests

# Result: One commit with all changes
\`\`\`

<tip>
💡 Squash messy "WIP" commits before creating a PR for cleaner history!
</tip>

### Reorder Commits

\`\`\`bash
git rebase -i HEAD~3

# Original:
pick abc123 Third commit
pick def456 Second commit
pick ghi789 First commit

# Reorder by changing lines:
pick ghi789 First commit
pick def456 Second commit
pick abc123 Third commit
\`\`\`

### Edit Commit Messages

\`\`\`bash
git rebase -i HEAD~2

# Change 'pick' to 'reword':
reword abc123 Fix teh typo
pick def456 Add feature

# Save, then edit the message when prompted
\`\`\`

### Handling Rebase Conflicts

\`\`\`bash
git rebase main

# CONFLICT! Fix the file, then:
git add conflicted-file.txt
git rebase --continue

# Or abort and go back
git rebase --abort
\`\`\`

### The Golden Rule of Rebasing

<warning>
⚠️ NEVER rebase commits that have been pushed to a shared branch!

Rebasing rewrites commit history. If others have those commits, you'll cause major problems!
</warning>

\`\`\`
Safe to rebase:
✅ Your local feature branch
✅ Before pushing
✅ Your own fork

Never rebase:
❌ main branch
❌ Shared feature branches
❌ After pushing (unless solo)
\`\`\`

### Rebase Workflow Example

\`\`\`bash
# 1. Working on feature branch
git checkout -b feature/new-button

# 2. Make commits
git commit -m "Add button component"
git commit -m "wip"
git commit -m "fix styling"
git commit -m "Add click handler"

# 3. Clean up before PR
git rebase -i HEAD~4
# Squash the wip/fix commits

# 4. Get latest main
git fetch origin
git rebase origin/main

# 5. Force push (only your branch!)
git push --force-with-lease

# 6. Create clean PR
\`\`\`

### Force Push Safely

\`\`\`bash
# After rebasing, you need to force push
# Use --force-with-lease (safer than --force)
git push --force-with-lease origin feature-branch

# This fails if someone else pushed in the meantime
\`\`\`

You're now a rebase master! 🎓
          `
        },
        {
          id: "5-2",
          title: "Git Workflows",
          duration: "12 min",
          content: `
## Team Workflows 🏢

Different teams use different Git strategies. Let's learn the popular ones!

### 1. Feature Branch Workflow

The simplest workflow for teams:

\`\`\`
main
  │
  ├── feature/login
  │     └── PR → main
  │
  ├── feature/signup
  │     └── PR → main
  │
  └── feature/profile
        └── PR → main
\`\`\`

\`\`\`bash
# 1. Always branch from main
git checkout main
git pull origin main
git checkout -b feature/my-feature

# 2. Work and commit
git commit -m "Add feature"

# 3. Create PR, get reviewed, merge
# 4. Delete feature branch
\`\`\`

### 2. Gitflow Workflow

For projects with scheduled releases:

\`\`\`
main ────●────────────●────────────●── (releases)
         │            │
develop ─┴────●───●───┴────●───●───── (integration)
              │   │        │
         feature  feature  feature
\`\`\`

**Branches:**
- \`main\` — Production releases only
- \`develop\` — Integration branch
- \`feature/*\` — New features
- \`release/*\` — Release preparation
- \`hotfix/*\` — Emergency production fixes

### 3. GitHub Flow

Simple workflow for continuous deployment:

\`\`\`
main ─────●──●──●──●──●──●── (always deployable)
          │  │  │  │  │  │
          PR PR PR PR PR PR
\`\`\`

Rules:
1. \`main\` is always deployable
2. Branch from \`main\` for new work
3. Open PR when ready
4. Merge after review
5. Deploy immediately

### 4. Trunk-Based Development

For fast-moving teams:

\`\`\`
main ─●─●─●─●─●─●─●─●─●─●─ (everyone commits here)
      │ │ │ │ │ │ │ │ │ │
     Short-lived branches (hours, not days)
\`\`\`

Rules:
- Very short-lived branches (< 1 day)
- Small, frequent commits
- Feature flags for incomplete features
- Strong test coverage required

### Choosing a Workflow

| Workflow | Best For |
|----------|----------|
| Feature Branch | Small teams, startups |
| Gitflow | Release cycles, versioned software |
| GitHub Flow | Web apps, continuous deployment |
| Trunk-Based | Large teams, rapid iteration |

### Branch Protection Rules

Set these on GitHub for safety:

\`\`\`
Settings → Branches → Add rule

Recommended rules:
☑ Require pull request reviews
☑ Require status checks (CI/CD)
☑ Require branches be up to date
☑ Require conversation resolution
☑ Do not allow force pushes
☑ Do not allow deletions
\`\`\`

<warning>
⚠️ Always protect your main branch! No one should push directly to it.
</warning>

### Code Owners

Automatically request reviews from the right people:

\`\`\`bash
# .github/CODEOWNERS file
# Frontend team owns these files
*.js @frontend-team
*.css @frontend-team

# Backend team owns these
/api/ @backend-team
*.py @backend-team

# Security team must approve
/auth/ @security-team
\`\`\`

### Semantic Versioning

When releasing, use semantic versions:

\`\`\`
MAJOR.MINOR.PATCH

1.0.0 → 1.0.1  (bug fix)
1.0.0 → 1.1.0  (new feature, backwards compatible)
1.0.0 → 2.0.0  (breaking changes)
\`\`\`

\`\`\`bash
# Tag a release
git tag v1.0.0
git push origin v1.0.0

# Or create release on GitHub
# Releases → New Release → Create tag
\`\`\`

<tip>
💡 Start with Feature Branch or GitHub Flow. They're simple and work for most teams!
</tip>

You now know how professional teams use Git! 🏆
          `
        }
      ]
    },
    {
      id: 6,
      title: "CI/CD with GitHub Actions",
      description: "Automate testing and deployment",
      lessons: [
        {
          id: "6-1",
          title: "Introduction to GitHub Actions",
          duration: "12 min",
          content: `
## Automate Everything! 🤖

GitHub Actions lets you automate tasks whenever something happens in your repo.

### What is CI/CD?

\`\`\`
CI (Continuous Integration)
  → Automatically test code when pushed
  → Catch bugs before merging

CD (Continuous Deployment)
  → Automatically deploy when tests pass
  → Get changes to users faster
\`\`\`

### How GitHub Actions Works

\`\`\`
Trigger (push, PR, schedule)
    ↓
Workflow starts
    ↓
Job 1: Build
    ↓
Job 2: Test
    ↓
Job 3: Deploy
    ↓
Done! ✅
\`\`\`

### Your First Workflow

Create \`.github/workflows/ci.yml\`:

\`\`\`yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          
      - name: Install dependencies
        run: npm install
        
      - name: Run tests
        run: npm test
        
      - name: Build
        run: npm run build
\`\`\`

### Workflow Anatomy

\`\`\`yaml
name: CI                    # Workflow name

on:                         # Triggers
  push:                     # When to run
    branches: [main]
  pull_request:
    branches: [main]

jobs:                       # What to do
  build:                    # Job name
    runs-on: ubuntu-latest  # Machine type
    
    steps:                  # Sequential steps
      - uses: actions/checkout@v4  # Pre-made action
      - run: npm install           # Shell command
\`\`\`

### Common Triggers

\`\`\`yaml
on:
  # On push to specific branches
  push:
    branches: [main, develop]
  
  # On pull requests
  pull_request:
    branches: [main]
  
  # On schedule (cron)
  schedule:
    - cron: '0 0 * * *'  # Daily at midnight
  
  # Manual trigger
  workflow_dispatch:
  
  # When release is published
  release:
    types: [published]
\`\`\`

### Using Actions from Marketplace

\`\`\`yaml
steps:
  # Checkout code
  - uses: actions/checkout@v4
  
  # Setup Node
  - uses: actions/setup-node@v4
    with:
      node-version: '20'
  
  # Setup Python
  - uses: actions/setup-python@v5
    with:
      python-version: '3.12'
  
  # Cache dependencies
  - uses: actions/cache@v4
    with:
      path: node_modules
      key: deps-\${{ hashFiles('package-lock.json') }}
\`\`\`

### Environment Variables & Secrets

\`\`\`yaml
jobs:
  deploy:
    runs-on: ubuntu-latest
    env:
      NODE_ENV: production
    
    steps:
      - name: Deploy
        env:
          API_KEY: \${{ secrets.API_KEY }}
        run: ./deploy.sh
\`\`\`

Add secrets: Settings → Secrets → Actions → New secret

<warning>
⚠️ Never hardcode secrets in workflow files! Always use GitHub Secrets.
</warning>

### Matrix Builds

Test on multiple versions/platforms:

\`\`\`yaml
jobs:
  test:
    runs-on: \${{ matrix.os }}
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest, macos-latest]
        node: [18, 20, 22]
    
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: \${{ matrix.node }}
      - run: npm test
\`\`\`

This runs 9 jobs (3 OS × 3 Node versions)!

### Viewing Results

\`\`\`
GitHub → Actions tab
  │
  ├── See all workflow runs
  ├── Click into specific run
  ├── View logs for each step
  └── Download artifacts
\`\`\`

<tip>
💡 Failed builds block PRs from merging (if you set up branch protection). This catches bugs early!
</tip>

You've automated your first workflow! 🎉
          `
        },
        {
          id: "6-2",
          title: "Deploying with Actions",
          duration: "14 min",
          content: `
## Ship It! 🚀

Let's set up automatic deployment with GitHub Actions.

### Deploy to GitHub Pages

\`\`\`yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    permissions:
      contents: read
      pages: write
      id-token: write
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          
      - name: Install and Build
        run: |
          npm install
          npm run build
          
      - name: Setup Pages
        uses: actions/configure-pages@v4
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
          
      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v4
\`\`\`

### Deploy to Vercel

\`\`\`yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: \${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: \${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: \${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
\`\`\`

### Deploy to AWS S3

\`\`\`yaml
name: Deploy to S3

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Build
        run: npm install && npm run build
      
      - name: Deploy to S3
        uses: jakejarvis/s3-sync-action@v0.5.1
        with:
          args: --delete
        env:
          AWS_S3_BUCKET: \${{ secrets.AWS_S3_BUCKET }}
          AWS_ACCESS_KEY_ID: \${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: \${{ secrets.AWS_SECRET_ACCESS_KEY }}
          SOURCE_DIR: 'dist'
\`\`\`

### Deploy with Docker

\`\`\`yaml
name: Build and Push Docker

on:
  push:
    branches: [main]

jobs:
  docker:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Login to Docker Hub
        uses: docker/login-action@v3
        with:
          username: \${{ secrets.DOCKER_USERNAME }}
          password: \${{ secrets.DOCKER_PASSWORD }}
      
      - name: Build and push
        uses: docker/build-push-action@v5
        with:
          push: true
          tags: username/app:latest
\`\`\`

### Complete CI/CD Pipeline

\`\`\`yaml
name: CI/CD Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm test
      - run: npm run lint

  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-artifact@v4
        with:
          name: build
          path: dist

  deploy:
    needs: build
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/download-artifact@v4
        with:
          name: build
          path: dist
      - name: Deploy
        run: echo "Deploying to production..."
        # Add your deployment commands
\`\`\`

### Job Dependencies

\`\`\`yaml
jobs:
  test:
    # runs first
    
  build:
    needs: test  # waits for test
    
  deploy:
    needs: [test, build]  # waits for both
    if: github.ref == 'refs/heads/main'  # only on main
\`\`\`

### Notifications

\`\`\`yaml
- name: Notify Slack
  if: failure()
  uses: 8398a7/action-slack@v3
  with:
    status: \${{ job.status }}
    text: 'Deployment failed!'
  env:
    SLACK_WEBHOOK_URL: \${{ secrets.SLACK_WEBHOOK }}
\`\`\`

<tip>
💡 Start simple! Just CI (testing) is valuable. Add deployment later when you're comfortable.
</tip>

### Best Practices

\`\`\`
✅ Always test before deploying
✅ Use caching to speed up builds
✅ Keep secrets in GitHub Secrets
✅ Use specific action versions (@v4, not @latest)
✅ Add status badges to README
✅ Set up notifications for failures
\`\`\`

You can now automate your entire deployment pipeline! 🚀
          `
        }
      ]
    },
    {
      id: 7,
      title: "Git Tips & Tricks",
      description: "Productivity boosters",
      lessons: [
        {
          id: "7-1",
          title: "Git Aliases & Configuration",
          duration: "10 min",
          content: `
## Work Smarter, Not Harder ⚡

Let's supercharge your Git workflow with aliases and configuration!

### Git Aliases

Shortcuts for common commands:

\`\`\`bash
# Set up aliases
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status

# Now use them!
git co main       # instead of git checkout main
git br            # instead of git branch
git ci -m "msg"   # instead of git commit -m "msg"
git st            # instead of git status
\`\`\`

### Power Aliases

\`\`\`bash
# Pretty log
git config --global alias.lg "log --oneline --graph --all --decorate"

# Undo last commit (keep changes)
git config --global alias.undo "reset --soft HEAD~1"

# Show what you did today
git config --global alias.today "log --since='midnight' --oneline --author='$(git config user.name)'"

# Amend without editing message
git config --global alias.amend "commit --amend --no-edit"

# Quick save (add all + commit)
git config --global alias.save "!git add -A && git commit -m"
# Usage: git save "Quick save"
\`\`\`

### View All Aliases

\`\`\`bash
git config --global --get-regexp alias
\`\`\`

### My Recommended Aliases

\`\`\`bash
# Add these to your ~/.gitconfig
[alias]
    # Shortcuts
    co = checkout
    br = branch
    ci = commit
    st = status
    
    # Logs
    lg = log --oneline --graph --all --decorate
    last = log -1 HEAD --stat
    
    # Undo
    undo = reset --soft HEAD~1
    unstage = reset HEAD --
    
    # Info
    branches = branch -a
    remotes = remote -v
    tags = tag -l
    
    # Workflow
    save = !git add -A && git commit -m
    wip = commit -am "WIP"
    sync = !git fetch --all && git rebase origin/main
\`\`\`

### Global Gitignore

Ignore files across ALL repos:

\`\`\`bash
# Create global gitignore
git config --global core.excludesfile ~/.gitignore_global

# Edit ~/.gitignore_global
.DS_Store
Thumbs.db
*.swp
*.swo
.idea/
.vscode/
*.log
node_modules/
.env.local
\`\`\`

### Default Branch Name

\`\`\`bash
# Set default branch to 'main' for new repos
git config --global init.defaultBranch main
\`\`\`

### Useful Configurations

\`\`\`bash
# Colorful output
git config --global color.ui auto

# Use VS Code as default editor
git config --global core.editor "code --wait"

# Better diff algorithm
git config --global diff.algorithm histogram

# Auto-correct typos
git config --global help.autocorrect 20
# git chekcout → Did you mean 'checkout'? Running in 2 seconds...

# Rebase by default on pull
git config --global pull.rebase true

# Prune deleted remote branches on fetch
git config --global fetch.prune true
\`\`\`

### View Your Config

\`\`\`bash
# See all config
git config --list

# See where each setting comes from
git config --list --show-origin

# Check specific setting
git config user.email
\`\`\`

### Config Files

\`\`\`
Priority (highest to lowest):
1. .git/config     (repo-specific)
2. ~/.gitconfig    (user global)
3. /etc/gitconfig  (system-wide)
\`\`\`

<tip>
💡 Keep your ~/.gitconfig backed up! It's a lifesaver when setting up a new machine.
</tip>

### Example ~/.gitconfig

\`\`\`ini
[user]
    name = Your Name
    email = you@example.com

[init]
    defaultBranch = main

[core]
    editor = code --wait
    excludesfile = ~/.gitignore_global

[alias]
    co = checkout
    br = branch
    ci = commit
    st = status
    lg = log --oneline --graph --all --decorate
    undo = reset --soft HEAD~1

[pull]
    rebase = true

[fetch]
    prune = true

[color]
    ui = auto
\`\`\`

Your Git is now turbocharged! ⚡
          `
        },
        {
          id: "7-2",
          title: "Advanced Tips",
          duration: "12 min",
          content: `
## Pro Tips & Hidden Gems 💎

Let's explore some advanced Git features that pros use daily!

### Bisect - Find Bad Commits

Binary search to find which commit introduced a bug:

\`\`\`bash
git bisect start
git bisect bad              # Current version is broken
git bisect good v1.0        # This version worked

# Git checks out middle commit
# Test it, then:
git bisect good  # or
git bisect bad

# Repeat until Git finds the exact commit!
git bisect reset  # Return to normal
\`\`\`

### Cherry Pick - Copy Specific Commits

\`\`\`bash
# Copy commit from another branch
git cherry-pick abc123

# Copy multiple commits
git cherry-pick abc123 def456

# Cherry pick without committing
git cherry-pick --no-commit abc123
\`\`\`

### Worktrees - Multiple Checkouts

Work on multiple branches simultaneously:

\`\`\`bash
# Create a new worktree for a branch
git worktree add ../hotfix hotfix-branch

# Now you have two working directories!
# /project (main branch)
# /hotfix  (hotfix-branch)

# List worktrees
git worktree list

# Remove worktree
git worktree remove ../hotfix
\`\`\`

### Blame with Ignore

\`\`\`bash
# Ignore whitespace-only commits
git blame -w file.txt

# Ignore revisions (formatting commits, etc.)
echo "abc123" >> .git-blame-ignore-revs
git config blame.ignoreRevsFile .git-blame-ignore-revs
git blame file.txt
\`\`\`

### Searching in Git

\`\`\`bash
# Search in all commits
git log -S "functionName" --oneline

# Search with regex
git log -G "fix.*bug" --oneline

# Search commit messages
git log --grep="refactor"

# Search in all branches
git log --all -S "searchTerm"
\`\`\`

### Partial Staging

Stage specific lines, not whole files:

\`\`\`bash
git add -p file.txt

# Git shows each change (hunk) and asks:
# Stage this hunk [y,n,q,a,d,e,?]?
# y = yes, stage this hunk
# n = no, don't stage
# s = split into smaller hunks
# e = manually edit
\`\`\`

### Recover Deleted Branch

\`\`\`bash
# Oops, deleted a branch!
git branch -D feature-branch

# Find it in reflog
git reflog | grep feature

# Recreate it
git checkout -b feature-branch abc123
\`\`\`

### Clean Up Local Branches

\`\`\`bash
# See which branches are merged
git branch --merged main

# Delete all merged branches (except main)
git branch --merged main | grep -v "main" | xargs git branch -d

# See stale remote tracking branches
git remote prune origin --dry-run

# Clean them up
git remote prune origin
\`\`\`

### Git Hooks

Automate actions on Git events:

\`\`\`bash
# .git/hooks/pre-commit
#!/bin/sh
npm test
if [ $? -ne 0 ]; then
  echo "Tests failed! Commit aborted."
  exit 1
fi
\`\`\`

Common hooks:
- \`pre-commit\` — Before commit (run tests, lint)
- \`commit-msg\` — Validate commit message
- \`pre-push\` — Before push (run tests)

### Stash Tips

\`\`\`bash
# Stash with a name
git stash push -m "Work in progress on login"

# Stash specific files
git stash push -m "Partial work" file1.js file2.js

# Create branch from stash
git stash branch new-branch stash@{0}

# Show stash diff
git stash show -p stash@{0}
\`\`\`

### Quick Stats

\`\`\`bash
# Lines of code per author
git shortlog -sn

# Commits per day
git log --format="%ad" --date=short | uniq -c

# Files changed in last 10 commits
git log --oneline --stat -10
\`\`\`

<tip>
💡 These commands become muscle memory with practice. Start with 2-3 and add more as you need them!
</tip>

### Git Cheat Sheet

\`\`\`bash
# Status & History
git status                    # Current state
git log --oneline            # Commit history
git diff                     # Unstaged changes
git diff --staged            # Staged changes

# Branching
git branch                   # List branches
git checkout -b name         # Create & switch
git merge branch             # Merge branch

# Stashing
git stash                    # Save changes
git stash pop               # Restore changes

# Undoing
git checkout -- file        # Discard changes
git reset HEAD file         # Unstage
git reset --soft HEAD~1     # Undo commit
git revert commit           # Safe undo

# Remote
git pull                    # Fetch & merge
git push                    # Upload commits
git fetch                   # Download only
\`\`\`

You're now a Git power user! 🎯
          `
        }
      ]
    },
    {
      id: 8,
      title: "Real-World Projects",
      description: "Apply your skills",
      lessons: [
        {
          id: "8-1",
          title: "Contributing to Open Source",
          duration: "12 min",
          content: `
## Join the Global Dev Community 🌍

Open source is how the world builds software together. Let's contribute!

### Why Contribute?

- **Learn** from experienced developers
- **Build** your portfolio and reputation
- **Network** with the global dev community
- **Give back** to tools you use daily
- **Get hired** — companies love OSS contributors!

### Find Projects to Contribute

**Good first project criteria:**
- Active (recent commits)
- Has issues labeled "good first issue"
- Responsive maintainers
- Clear contribution guidelines

**Where to look:**
\`\`\`
🔍 github.com/explore
🔍 goodfirstissue.dev
🔍 firsttimersonly.com
🔍 up-for-grabs.net
🔍 codetriage.com
\`\`\`

### The Contribution Workflow

\`\`\`bash
# 1. Fork the repository on GitHub

# 2. Clone YOUR fork
git clone https://github.com/YOUR-USERNAME/project.git
cd project

# 3. Add upstream remote
git remote add upstream https://github.com/ORIGINAL/project.git

# 4. Create a branch
git checkout -b fix/typo-readme

# 5. Make your changes
# Edit files...

# 6. Commit with clear message
git commit -m "Fix typo in README installation section"

# 7. Push to YOUR fork
git push origin fix/typo-readme

# 8. Create Pull Request on GitHub
# Go to original repo → Pull Requests → New
\`\`\`

### Before You Start

\`\`\`bash
# Always read these files:
README.md             # Project overview
CONTRIBUTING.md       # How to contribute
CODE_OF_CONDUCT.md    # Community guidelines

# Check existing issues and PRs
# Don't duplicate work!
\`\`\`

### Good First Contributions

Start small:
- **Documentation**: Fix typos, improve clarity
- **Tests**: Add missing test cases
- **Translation**: Translate docs to your language
- **Bug fixes**: Fix "good first issue" bugs
- **Code style**: Apply consistent formatting

### Writing Good PR Descriptions

\`\`\`markdown
## Description
Fixes the typo in the installation section of README.md

## Changes Made
- Changed "instalation" to "installation"
- Fixed broken markdown link

## Related Issue
Closes #42

## Checklist
- [x] I have read CONTRIBUTING.md
- [x] My code follows the project style
- [x] I have tested my changes
\`\`\`

### Responding to Review Feedback

\`\`\`bash
# Maintainer requests changes
# Make the changes locally
git add .
git commit -m "Address review feedback"
git push origin fix/typo-readme

# The PR automatically updates!
\`\`\`

<tip>
💡 Be patient and polite. Maintainers are volunteers. A week for review is normal!
</tip>

### Keeping Your Fork Updated

\`\`\`bash
# Fetch upstream changes
git fetch upstream

# Update your main branch
git checkout main
git merge upstream/main
git push origin main

# Update your feature branch
git checkout fix/typo-readme
git rebase main
git push --force-with-lease origin fix/typo-readme
\`\`\`

### Common Mistakes to Avoid

\`\`\`
❌ Don't make PRs without reading guidelines
❌ Don't claim issues and disappear
❌ Don't submit huge PRs
❌ Don't argue with maintainers
❌ Don't copy code without attribution

✅ Do ask questions
✅ Do make small, focused PRs
✅ Do be patient and kind
✅ Do test your changes
✅ Do update documentation
\`\`\`

### Your First Contribution Task

\`\`\`
1. Find a project you use
2. Star it ⭐
3. Read the README and CONTRIBUTING
4. Find a "good first issue" or typo
5. Fork, branch, fix, PR
6. Celebrate! 🎉
\`\`\`

<warning>
⚠️ Sign the CLA (Contributor License Agreement) if required. Some big projects need this!
</warning>

Welcome to open source! 🌟
          `
        },
        {
          id: "8-2",
          title: "Managing Your Own Project",
          duration: "14 min",
          content: `
## Build Something Amazing 🚀

You've learned Git. Now let's create a project others can contribute to!

### Setting Up Your Project

\`\`\`bash
# Create project
mkdir my-awesome-project
cd my-awesome-project
git init

# Create initial structure
touch README.md
touch LICENSE
touch CONTRIBUTING.md
touch .gitignore
mkdir src tests docs
\`\`\`

### Essential Files

**README.md**
\`\`\`markdown
# Project Name

Brief description of what it does.

## Installation

\\\`\\\`\\\`bash
npm install my-project
\\\`\\\`\\\`

## Usage

\\\`\\\`\\\`javascript
import { feature } from 'my-project';
feature.doSomething();
\\\`\\\`\\\`

## Features

- Feature 1
- Feature 2
- Feature 3

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

## License

MIT License - see [LICENSE](LICENSE)
\`\`\`

**CONTRIBUTING.md**
\`\`\`markdown
# Contributing to Project Name

Thank you for your interest in contributing!

## Getting Started

1. Fork the repository
2. Clone your fork
3. Create a branch
4. Make changes
5. Submit a PR

## Development Setup

\\\`\\\`\\\`bash
npm install
npm test
\\\`\\\`\\\`

## Code Style

- Use ESLint configuration
- Write tests for new features
- Update documentation

## Pull Request Process

1. Update README if needed
2. Add tests for new features
3. Ensure all tests pass
4. Request review from maintainers
\`\`\`

### Issue Templates

Create \`.github/ISSUE_TEMPLATE/bug_report.md\`:

\`\`\`markdown
---
name: Bug Report
about: Create a report to help us improve
---

## Bug Description
A clear description of the bug.

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. See error

## Expected Behavior
What you expected to happen.

## Screenshots
If applicable.

## Environment
- OS: [e.g., Windows 11]
- Browser: [e.g., Chrome 120]
- Version: [e.g., 1.0.0]
\`\`\`

### Pull Request Template

Create \`.github/pull_request_template.md\`:

\`\`\`markdown
## Description
What does this PR do?

## Related Issue
Closes #

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation
- [ ] Refactoring

## Checklist
- [ ] Tests pass
- [ ] Code follows style guide
- [ ] Documentation updated
\`\`\`

### Labels for Issues

\`\`\`
Good labels to create:
  bug           - Something isn't working
  enhancement   - New feature
  documentation - Documentation improvements
  good first issue - Good for newcomers
  help wanted   - Extra attention needed
  question      - Further info requested
  wontfix       - Will not be worked on
  duplicate     - Already exists
\`\`\`

### Set Up GitHub Actions

\`.github/workflows/ci.yml\`:
\`\`\`yaml
name: CI

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm test
\`\`\`

### Branch Protection

\`\`\`
Settings → Branches → Add rule

For "main" branch:
☑️ Require pull request before merging
  ☑️ Require approvals (1+)
☑️ Require status checks
  ☑️ Require branches be up to date
☑️ Do not allow force pushes
\`\`\`

### Release Your Project

\`\`\`bash
# Tag a version
git tag -a v1.0.0 -m "First release"
git push origin v1.0.0

# Create GitHub Release
# Releases → Draft new release
# Select tag → Write release notes → Publish
\`\`\`

### Semantic Versioning

\`\`\`
1.0.0
│ │ └── PATCH (bug fixes)
│ └──── MINOR (new features, backwards compatible)
└────── MAJOR (breaking changes)

Examples:
1.0.0 → 1.0.1  Fix a bug
1.0.1 → 1.1.0  Add a feature
1.1.0 → 2.0.0  Breaking API change
\`\`\`

### Add Badges to README

\`\`\`markdown
![Build Status](https://github.com/user/repo/workflows/CI/badge.svg)
![npm version](https://img.shields.io/npm/v/my-package)
![License](https://img.shields.io/github/license/user/repo)
\`\`\`

<tip>
💡 Good documentation is more important than good code. People can't use what they don't understand!
</tip>

### Promoting Your Project

\`\`\`
📢 Post on:
- Twitter/X with relevant hashtags
- Reddit (r/webdev, r/programming)
- Hacker News (Show HN)
- Dev.to
- Your blog

📈 Track:
- GitHub stars
- npm downloads
- Issue engagement
- Contributor count
\`\`\`

Congratulations! You've completed the Git & GitHub course! 🎉

You now know how to:
- Track changes with Git
- Collaborate with branches and PRs
- Automate with GitHub Actions
- Contribute to open source
- Maintain your own projects

Keep building, keep learning, keep shipping! 🚀
          `
        }
      ]
    }
  ]
};

export default courseData;
