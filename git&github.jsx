function Git(){
return (
<div>
    <section >
        <h1>topic one : Introduction</h1>


        {/* we can create file by echo in git bash */}
 {/* Version Control is a system that records changes made to files over time so that you can review, track, and recover previous versions when necessary. */}
{/* Version Control helps you remember what you changed in your project and allows you to return to an earlier version. */}

{/* benefits of version control</b>  */}
 {/* Track changes ->	See what changed in your code. */}
 {/* Restore versions ->	Return to an older version. */}
 {/* Collaboration ->	Multiple developers can work together. */}
 {/* Backup	Keep ->  project history in a repository. */}
 {/* Accountability	-> Know who made changes and when. */}
 {/* Experimentation ->	Try new features without losing existing work. */}

 {/* Version control system is a software that perfom the process of version control */}
 {/* there are three major  version control  system */}
    {/* Type 1: Local Version Control System , version history is maintained on one computer. */}
    {/* Advantages: Simple to use. and  No internet connection is required.
     Disadvantages: Collaboration is difficult. and  If your computer is damaged, you may lose your history. */}
    {/* Type 2: Centralized Version Control System (CVCS)   -> a central server stores the project's version history.*/}
    {/* Advantages:  Central location for project history. and Developers can share project files.
     Disadvantages:  The central server can become a single point of failure. and Working offline is more limited. */}
    {/* Type 3: Distributed Version Control System (DVCS) -> each developer gets a complete copy of the repository, including its history. */}
    {/* Advantages:  example git
        - Developers have complete local project history.
        - Most Git operations work offline.
        - Collaboration is easier.
        - You can work independently and synchronize later. */}

{/* Git is a free, open-source, distributed version control system used to track changes in files and manage the history of software projects. */}

{/* GitHub is an online platform that hosts Git repositories and provides tools for developers to collaborate on software projects. */}

{/* Repository (often called a repo) is a place where Git stores your project's files and the information needed to track its history.  */}
    {/* A  repository is the most basic element of GitHub. It's a place where you can store your code, your files, and each file's revision history. */}
    {/* there are two important repository */}
        {/* local repository is the Git repository stored on your own computer. by hiden file " .git " */}
        {/* remote repository is a version of your repository hosted somewhere else, usually on a hosting service such as GitHub. */}
        {/* local reopsitory -- git push --> and <-- git pull -- remote/github repository */}

    {/* Git works by recording project snapshots called commits. A commit represents a saved state of your project at a particular point in its history. */}
    {/* Git stores project history separately from file content. Different commits can reuse the same file content, reducing unnecessary duplication */}
    </section>



    <section >
        <h1>topic two : Git installation and configuration</h1>
{/* Git installation is the process of downloading and setting up Git software so that your operating system can execute Git commands. */}
{/* https://git-scm.com/install/windows?utm_source=chatgpt.com */}

{/* Git Bash is a command-line environment for Windows that provides a Bash terminal and allows you to execute Git commands. */}
{/* Git Bash is a place where you type commands to communicate with Git. */}
{/* How to open Git Bash  
    1. Press the Windows key. then Type Git Bash. then Click the Git Bash application.
    2. You can also right-click inside a project folder and choose Open Git Bash Here, if that option is available. */}

{/* verify that git is installed */}
    {/* "git --version or git -v"  -> git(runs git) and  --version(requests the installed version)*/}
        {/* if get version number , git is installed and accessible.  else if get "git is not recoginzed" , see the path setting ot may be have failed in installation */}

{/* Git configuration is the process of setting preferences and information that control how Git behaves.  */}
{/*  Git configuration means customizing Git by telling it your identity and preferred settings. such as "username , email , editor(text editor) ,  default branch and so on " */}
{/* git config --> This command allows you to view, create, and modify Git configuration settings  and  now we see several confuges*/}
    {/* confugure username " git config --global user.name "actual user name// for example " Dawit Behaili"   NOTE: username does not have to be identical. 
                     --global means "apply to all my repositeries for my user account" , user.name means "setting for my cimmit author name"  and  actual uaer name means "this is name i want to git to record*/}
    {/* configure email address  " git config --global user.email " actual email address" 
                    use email that verifed on guthub , if we want assosation with github.  */}
    {/* user.name identifies the commit author by name.
        user.email identifies the commit author by email. */}
    {/* to check git config  
        for username "git config --global user.name"
        for email "git config --global user.email" 
        for all config "git config --global --list" 
        for all setting with their source "git config --list --shoe-orign"  , This helps you understand where each setting comes from.*/}

 {/* understanding --global , --local , --system */}
        {/* --system	System configuration or computer wide defalut	             All users on the computer (git config --system user.property "actual property")  This applies system-wide, generally requires administrator permissions, and is rarely needed for ordinary personal development. can overrite by global.
            --global	User configuration	                                         All repositories belonging to your Windows user -> applies to all projects unless a more specific setting overrides it.
            --local	    want a d/t commit author proprety for specific project.	     Only the current repository -> 1st open derectory of project , then "git config user.property(name , email, ...) " actual property"  NOTE: local config overrides the global config. */}
{/* additional useful configurations
    To set default branch name to main "git config --global init.defaultBranch main"  , Now newly initialized repositories will use main as their initial branch.
    To set default git editor to vs code "git config --global core.editor "code --wait" (core.editor->"tells git which editor to use") , code->(open vscode) and --wait->(makes git wait until we finished editing and close the editor window.
       This is useful when Git needs you to write a commit message in an editor. , when set the message and save and close editor , git cintiniues and create your commit using that massage  
    Configure Windows line endings "git config --global core.autocrlf true" This tells Git to handle Windows line-ending conversions automatically. */}
    </section>

    <section >
        <h1>topic three : Basic Git Commands</h1>

{/* unnderstand the git work flow -> git uses three important areas. */}
{/* 1 working directory(where we create, edit and delete project files.) such as we wriiten the function.
    2 staging Area(where we prepare selected changes for commit) such as select that chanage using "git add.".
    3 local repository(where commieted project history is stored) save that change using "git commit
        working directory -- git add --> stagong Area -- git commit --> local reposotory */}

{/* git commands */}
    {/* git init"git init"(initialize a new git repository in your current project directory.) simpl tells git to start tracking a project , so git crreate hidden decretory ".git"
            ".git" directory contains internal info git needs to manage repository , including commits and cinfiguration , references and object data 
            When do we use git init? --- When starting a new project. and When turning an existing project into a Git repository. and  When starting version control for a project that was not previously tracked.*/}
    {/* git status"git status"(displays the current state of your working directory and staging area. In simple tells you what has changed in your project and what Git is tracking.) 
            if project is new and hasnot been added to git`s tracking system , it dialpay all moast all things are nothing 
            Use it frequently:  After creating files., After modifying code., After using git add, Before committing. and When you are unsure what Git is tracking.
            My advice: Make git status one of your most frequently used Git commands.*/}
    {/* git add"git add filename"(adds changes from your working directory to the staging area.) simplly tells Git which changes you want to include in your next commit.
            we have d.t ways to use git add
                1. for add one file ->"git add file name" means only change in this files are staged.
                2. for add multiple files -> "git add filename1 filename2 ...//without , " means both are staged.
                3. for all change -> "git add -A or . " means changes under whole files in this directory*/}
    {/* git commit"git commit -m "commit message""(records the changes currently in the staging area as a new commit in local repository.In simple: lets saves a version of our project in Git's history.) 
            commit(record staged changes), -m(provide commit message), commit message(describe what we changed in our project for remember) 
            after commit local repository create verion for that commit and save it, A commit is saved locally. It is not automatically uploaded to GitHub.*/}
    {/* git log"git log"(displays the history of commits in your repository.  It shows the different versions you have saved in Git with(commit id , authour , date , message).) 
            Commit ID(Unique identifier of a commit) , Author(Person who created the commit) , Date(When the commit was created) and Message(Description of the changes)  
            useful variations
                1. for Short commit history                     "git log --oneline"                  (displays commits in a compact format)
                2. TO Show commits with branches visually       "git log --oneline --graph --all"    (displays a graphical representation of commit history, including branches.)
                3. To Show the latest three commits             "git log -3"                         (This displays the three most recent commits.)
                4. to find a particular commit                  "git log --grep="paricular message"   and --grep"praticular message -i// to search with out case sensetivety  and "git log --all --grep="particular message"// to search message acress all refs incliding branches.
            
            When do we use git log?   To see previous commits., To find a particular commit., To understand the development history.and To identify who made changes and when. */}
    {/* git diff"git diff"(displays differences between versions of files.  It shows exactly what you added, removed, or modified in the code.) 
            Symbol	Meaning  "-(Removed line)  and +(Added line)"   and The unchanged lines may also appear to provide context 
            useful variations
                1. Compare working directory with staging area      "git diff"                      Shows changes you have made in your working directory but have not yet added to the staging area.
                2. Compare staging area with last commit            "git diff --staged"             Shows changes you have added in Staging area but have not yet commited yet.  It shows changes prepared for your next commit.
                3. compare traked in both staged and unstaged       "git diff HEAD"             	All tracked changes since the latest commit, staged and unstaged, git diff + git diff --staged
                4. Compare two specific commits                     "git diff commit1 commit2"  */}
    {/* git restore "git restore file_name "(restores files to a previous state by discarding selected uncommitted changes. In simple English: It helps you undo unwanted modifications to your files)  
            useful variations
                1. Discard unstaged changes    "git restore file_name"              replaces your latest unstaged edits with the staged version.
                2. ustage a file               "git restore --staged filename"   
            Check git diff before using it  */}
    {/* git rm "git rm file_name"(removes a tracked file and prepares that deletion for the next commit.) */}
    {/* git mv "git mv old_file_name new_file_name"(It helps you rename or move a file using Git) */}

    {/* to see all files in that branch      " ls "     NOTE: active is branch and we use this command see that branch files + main branch , but in main branch active and use this command it display only the main files. */}
        </section>

    
    <section >
        <h1>topic four : Git Branches and Merging</h1>

{/* Git Branch -> is an independent line of development in Git repository. it allows to work on a new feature or make changes to your project without directly changing the main version of your project.
        Think of a branch like making a separate copy of your project for experimentation.
        we can: Develop new features, Fix bugs., Test new ideas, Make changes without disturbing the main branch.
            When everything works correctly, you can merge your branch into main. 
        A Git branch is not a complete separate copy of every project file. It is a movable reference to a commit in your repository. thinks as pointer but it is movable b/c it can make all things as main   */}

{/* Why Do Developers Use Branches?
        1. Independent development: Work on different features separately.
        2. Safety: Keep unfinished features away from the main branch.
        3. Bug fixing: Fix bugs without disturbing other development work.
        4. Team collaboration: Multiple developers can work on different tasks.
        5. Experimentation: Test new ideas without risking the main project. */}
{/* Understanding Main and Feature Branches
        When you initialize a Git repository, it starts with an initial branch. In many modern configurations, that branch is called main.
        other beyond to main create branch  */}
{/* git branch command 
       1. to see avaliable branch   "git branch"                 output have "*" meanning currently active brach is this 
       2. To create new branch      "git branch branch_name"     Important: Creating a branch does not automatically switch to active state
       3. to delete branch          "git branch -d branch_name"  This deletes the local branch if Git considers it safely merged.  
                                    "git branch -D branch_name"  to delete unmerged branch       */}
{/* git switch Command -> command changes your currently active branch.
        1. To Switch to an existing branch  "git switch branch_name"
        2. To create and switch new branch  "git switch -c branch_name  " */}
{/* git checkout command  -> are older form of switch z, so are work exactly same thing and switch are modernized   NOTE: the d/ce to swich is in switch "-c"  changed to "-b" */}
{/* git merge Command -> Merging means combining the changes from one branch into another branch.
        Important rule : You should first switch to the branch that will receive the changes. */}
    {/* steps merge branches 
            1. switch to branch that recieve the change    "git switch that branch"
            2. merge the needed branch                     "git merge feature branch"          this combine the change from feature branch to active branch to recieve the change       merge: is means combine branch changes.
            3. check the resut                             "git log --onrlinr --graph --all"    */}
    
    {/* types of git merge , there are two important merge outcomes
            1. Fast-forward merge ->  This happens when the target branch has not received new commits since the feature branch was created, and the feature branch simply moves ahead.
                Git can simply move the main branch forward to the latest commit.  No extra merge commit is necessary. 
            2. three-way-merge  ->  it uses three commits to prtform merge b/c both branches have developed independently after a common ancestor.
                    1. Common ancestor (the commit where the branches separated).
                    2. Latest commit on the current branch.
                    3. Latest commit on the branch being merged. */}
    {/* merge conflict -> occurs when Git cannot automatically decide how to combine changes from different branches. 
          "if their is code is must same output in both branches but they give diferent output in this time git are Confusing to deicde which is taken" when we sayed that occures MRDGE CONFLICT
            it diplay like this outcome and ask to developer to decide which conten should remian.

        <<<<<<< HEAD	           Starts the version from  current branch
        // code or out put from current active branch 
        =======	                   Separates the two versions
        // code or out put from current feature branch 
        >>>>>>> feature-message	   Ends the incoming branch version */}

               {/* How to resolve a merge conflict */}
            {/* 1. Open the conflicted file in VS Code. 
                2. Choose the correct content. 
                3. Remove the conflict markers.  ->  Your final file should contain only the content you want.
                4. Stage the resolved file.  -> git add file_name
                5. completr the merge  -> git commit -m "commit meessage" */}

                {/* When VS Code detects a conflict, it may show:
                            1. Accept Current Change – keep your current branch's version.
                            2. Accept Incoming Change – keep the branch being merged.
                            3. Accept Both Changes – keep both versions.
                            4. Compare Changes – inspect the differences.
                        NOTE: Always review the result before committing.
Important: Not every merge produces a conflict. Git automatically merges many changes when they do not overlap. */}
    {/* How to cancel a merge  " git merge --abort" */}
        </section>




        <section>
            <h1>GitHub and Remote Repositories</h1>

{/* create repository in git hub account -> before connectin local repository to remote one we must create remote repository */}
    {/* public vs private visibility
        1.public -> any one view it , use for open source projrect , other developer can usually fork it.
        2. private -> only authorized person can view it , use for private project , acces must be granted  */}
{/* remote is a named connection to another Git repository.  most common remote name is "origin"
    1. add a remote             "git remote add remote_name repository_url"  this connect locar to remote repo
    2. to see remote with url   "git remote -v"   
        After connect remote to local repo and use command git remote -v we get 
                "remote_name(origin)  https://github.com/username/repository_name.git (fetch)"  ->  this is url to download changes.
                "remote_name(origin)  https://github.com/username/repository_name.git (push)"   -> this is url to upload changes 
    3. remove a remote          "git remote remove remote_name"      This removes the connection named that_remote_name from local configuration. It does not delete GitHub repository.
    4. change a remote URL      "git remote old_url  remote_name new_url"        This is useful when your repository URL changes.*/}
{/* git push "git push remote_name branch_name" -> uploads your local commits to a remote repository. 
        1. for new branch we can use "git push -u remote_name branch_name"    "-u" it sets the upstream traking r/ship b/n local branch and remote branch  and then we can usually use shoter command "git push" instead of "git push remote_name branch_name"
        2.  git push -> uploads commits, not simply every file you have changed. You normally need to stage and commit your changes first.
                i)  vs code(modify)--git add--> staging area(select chage for next commit)--git commit--> local repo(changes are recorded as a commit)--git push-->remote repo(commits are sent to git hub)
                ii) we can push directly from VScode (modify code -> open source control -> stage change(+) -> enter commit message -> commit & push) */}
{/* git fetch"git fetch remote_name"  -> command that downloads new commits and updated information from a remote repository  into local Git repository without merging those changes into  current working branch.
        1. "git fetch"                -> when current branch already has a configured upstream relationship.
        2. "git fetch remote_name     -> When we want to specify exactly which remote repository to fetch from. 
        3. "git fetch --all           -> Fetches updates from all configured remotes."
        4. "git fetch --prune"        -> Fetches updates and removes remote-tracking references for branches that have been deleted from the remote repository.  */}
{/* git pull"git pull"           -> command downloads changes from a remote repository and integrates them into current branch.
        1. "git pull remote_name branch_name"   -> fetches updates from remote to branch and integrates them into cuurent branch.
                The integration may use a merge or rebase, depending on your configuration and options. */}
{/* got clone"git clone URL"        -> Git command used to create a local copy of an existing remote repository on local computer.
        it provides project files& folder , existing coomit history , brnach info , remotr connection info , git config for that repo
        why use git clone
            - to get existing project , to work with other developerd , to get the project`s history  */}

{/* Fork means creating your own copy of another person's GitHub repository under your own GitHub account.
        You use it when you want to work on someone else's project but you don't have permission to push changes directly to their repository.
        How to fork the repositary
        1. frok the repo(create your own copy) -> open needed github repositary and click fork button.
        2. clone your fork(create local repo from your own git hub)
        3. work on it as your repo
        4. create a pull request to make recieve friends in thier original repository 
              Pull Request means: "I'm requesting that you take my changes from my repository and add them to your repository." 
                1. Open your fork on GitHub.
                2. Select your frontend branch.
                3. Click Contribute or Compare & pull request.
                4. Select the original repository as the destination.
                5. Select the original branch you want to update, usually main.
                6. Write a title and description.
                7. Click Create pull request. */}


{/* # 1. Make changes to your project
# 2. Check changes   --> git status
# 3. Stage changes   --> git add .
# 4. Commit changes  --> git commit -m "Add student registration"
# 5. Upload commits  --> git push */}


{/*             Situation                                                       	                    Command
Your project already exists locally and you want to upload it to GitHub         	git init + connect remote + push
Your project exists on GitHub and you want it on your computer	                    git clone
You already cloned a project and want new updates	                                git pull or git fetch
You want your own GitHub copy of someone else's project	                            Fork                             */}


        </section>
</div>
);
}

export default Git;


























