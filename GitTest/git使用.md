# Git使用

## 一.新建一个文件

**建立本地仓库，cd到项目目录下，或者在项目文件内右键选择Git Bash here打开命令窗口**

```shell
git init  //这样就会在这个目录下创建.git文件，成为git可以管理的仓库
```

## 二.将本地的项目工作区的文件添加到缓存区

```shell
git add .  //这个 . 表示添加文件夹下的所有文件，如果想添加指定文件，只需要把.替换成对应的文件名即可
```

## 三.将缓存区文件提交到本体仓库

```shell
git commit -m "注释说明"
```

## 四.在GitHub/GitLab上新建仓库

**新建完仓库后，在clone下面找到复制远程仓库的https地址将本地仓库关联到GitHub/GitLab上**

```shell
git remote add origin https地址

//：如果出现错误可以输入以下代码
git remote rm origin

//再输入
git remote add origin https地址
```

## 五.将本地仓库上传到远程仓库

```shell
//如果新建的仓库不为空则必须先拉取主分支以免造成冲突污染代码
git pull --rebase origin master

//把当前分支推送到master上
git push -u origin master

//如果你当前不是master分支可以使用 git checkout master 命令切换到master分支
//如果你想用本地当前分支上传代码，则把push命令中的master换成当前分支名即可
```
> **一些注意事项 **
>
> 1. 在多人开发团队中创建分支，通过分支提交代码可以避免项目代码混乱
> 2. 使用git branch [name] 命令创建分支后，需要手动切换到新建分支
> 3. 在新分支内使用 git add . 和 git commit -m 'message'命令将分支内的代码提交
> 4. 在分支内push代码的时候需要push到远端的新建分支上，例如新建了分支hyf ，则在push的时候需要使用命令 **git push -u origin hyf**
> 5. 要将分支代码合并到主分支需要切换分支到master，然后通过命令 git merge [name] 将分支合并，但是此时在远程仓库还是无法看到上传的代码
> 6. 需要在master分支上通过命令 git push -u origin master 推送到远端的master分支上 


## 六.常用命令

### 1.分支(branch)操作相关命令

```shell
git branch				//查看本地分支
git branch -r			//查看远程分支
git branch [name]		//创建新分支，注意：新分支创建完后不会自动切换到新分支
git checkout [name]		//切换分支
git checkout -b[name]	//创建新分支并立即切换到该分支
git branch -d[name]		//删除分支，-d只能删除已经参与了合并的分支，对于没有参与合并的分支是无法删除的。-D可以强制删除
git merge [name]		//将名称为[name]的分支和当前分支合并
git push origin [name]	//本地分支push到远程

```




