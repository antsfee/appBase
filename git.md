Git常用命令
--------------------------
-------------------------------
# 1 Git配置
	>
1 git config --global user.name "robbin"  
2 git config --global user.email "fankai#gmail.com"
3 git config --global color.ui true
4 git config --global alias.co checkout
5 git config --global alias.ci commit
6 git config --global alias.st status
7 git config --global alias.br branch
8 git config --global core.editor "mate -w"    # 设置Editor使用textmate
9 git config -1 #列举所有配置

用户的git配置文件~/.gitconfig

# 2 Git常用命令 (查看、添加、提交、删除、找回，重置修改文件)
	
1 git help <command>  # 显示command的help
2 git show            # 显示某次提交的内容
3 git show $id
4 git co  -- <file>   # 抛弃工作区修改
5 git co  .           # 抛弃工作区修改
6 git add <file>      # 将工作文件修改提交到本地暂存区
7 git add .           # 将所有修改过的工作文件提交暂存区
 
8 git rm <file>       # 从版本库中删除文件
9 git rm <file> --cached  # 从版本库中删除文件，但不删除文件
 
10 git reset <file>    # 从暂存区恢复到工作文件
11 git reset -- .      # 从暂存区恢复到工作文件
12 git reset --hard    # 恢复最近一次提交过的状态，即放弃上次提交后的所有本次修改
 
13 git ci <file>
14 git ci .
15 git ci -a           # 将git add, git rm和git ci等操作都合并在一起做
16 git ci -am "some comments"
17 git ci --amend      # 修改最后一次提交记录
 
18 git revert <$id>    # 恢复某次提交的状态，恢复动作本身也创建了一次提交对象
19 git revert HEAD     # 恢复最后一次提交的状态

# 3  查看文件diff
	
1 git diff <file>     # 比较当前文件和暂存区文件差异
2 git diff
3 git diff <$id1> <$id2>   # 比较两次提交之间的差异
4 git diff <branch1>..<branch2> # 在两个分支之间比较
5 git diff --staged   # 比较暂存区和版本库差异
6 git diff --cached   # 比较暂存区和版本库差异
7 git diff --stat     # 仅仅比较统计信息

# 4  查看提交记录

1 git log
2 git log <file>      # 查看该文件每次提交记录
3 git log -p <file>   # 查看每次详细修改内容的diff
4 git log -p -2       # 查看最近两次详细修改内容的diff
5 git log --stat      #查看提交统计信息

tig 
Mac上可以使用tig代替diff和log，brew install tig

# 5 Git 本地分支管理  查看、切换、创建和删除分支
	
1 git br -r           # 查看远程分支
2 git br <new_branch> # 创建新的分支
3 git br -v           # 查看各个分支最后提交信息
4 git br --merged     # 查看已经被合并到当前分支的分支
5 git br --no-merged  # 查看尚未被合并到当前分支的分支
 
6 git co <branch>     # 切换到某个分支
7 git co -b <new_branch> # 创建新的分支，并且切换过去
8 git co -b <new_branch> <branch>  # 基于branch创建新的new_branch
 
9 git co $id          # 把某次历史提交记录checkout出来，但无分支信息，切换到其他分支会自动删除
10 git co $id -b <new_branch>  # 把某次历史提交记录checkout出来，创建成一个分支
 
11 git br -d <branch>  # 删除某个分支
12 git br -D <branch>  # 强制删除某个分支 (未被合并的分支被删除的时候需要强制)

#  6 分支合并和rebase
	
1 git merge <branch>               # 将branch分支合并到当前分支
2 git merge origin/master --no-ff  # 不要Fast-Foward合并，这样可以生成merge提交
3 git rebase master <branch>       # 将master rebase到branch，相当于：
4 git co <branch> && git rebase master && git co master && git merge <branch>

# 7  Git补丁管理(方便在多台机器上开发同步时用)
	
1 git diff > ../sync.patch         # 生成补丁
2 git apply ../sync.patch          # 打补丁
3 git apply --check ../sync.patch  #测试补丁能否成功

# 8 Git暂存管理
	
1 git stash                        # 暂存
2 git stash list                   # 列所有stash
3 git stash apply                  # 恢复暂存的内容
4 git stash drop                   # 删除暂存区

# 9  Git远程分支管理
	
1 git pull                         # 抓取远程仓库所有分支更新并合并到本地
2 git pull --no-ff                 # 抓取远程仓库所有分支更新并合并到本地，不要快进合并
3 git fetch origin                 # 抓取远程仓库更新
4 git merge origin/master          # 将远程主分支合并到本地当前分支
5 git co --track origin/branch     # 跟踪某个远程分支创建相应的本地分支
6 git co -b <local_branch> origin/<remote_branch>  # 基于远程分支创建本地分支，功能同上
 
7 git push                         # push所有分支
8 git push origin master           # 将本地主分支推到远程主分支
9 git push -u origin master        # 将本地主分支推到远程(如无远程主分支则创建，用于初始化远程仓库)
10 git push origin <local_branch>   # 创建远程分支， origin是远程仓库名
11 git push origin <local_branch>:<remote_branch>  # 创建远程分支
12 git push origin :<remote_branch>  #先删除本地分支(git br -d <branch>)，然后再push删除远程分支

# 10  Git远程仓库管理
	
1 git remote -v                    # 查看远程服务器地址和仓库名称
2 git remote show origin           # 查看远程服务器仓库状态
3 git remote add origin git@ github:robbin/robbin_site.git         # 添加远程仓库地址
4 git remote set-url origin git@ github.com:robbin/robbin_site.git # 设置远程仓库地址(用于修改远程仓库地址)
5 git remote rm <repository>       # 删除远程仓库

# 11 创建远程仓库

1 git clone --bare robbin_site robbin_site.git  # 用带版本的项目创建纯版本仓库
2 scp -r my_project.git git@ git.csdn.net:~      # 将纯仓库上传到服务器上
 
3 1mkdir robbin_site.git && cd robbin_site.git && git --bare init # 在服务器创建纯仓库
4 git remote add origin git@ github.com:robbin/robbin_site.git    # 设置远程仓库地址
5 git push -u origin master                                      # 客户端首次提交
6 git push -u origin develop  # 首次将本地develop分支提交到远程develop分支，并且track
 
7 git remote set-head origin master   # 设置远程仓库的HEAD指向master分支

# 12 也可以命令设置跟踪远程库和本地库
	
1 git branch --set-upstream master origin/master
2 git branch --set-upstream develop origin/develop