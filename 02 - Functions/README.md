# Functions

A function is just a block of code that you can call anytime you want from another block of code.  You should make a code into a function if you are going to re-use that block of code in several places.

### Example
Write a function that prints the numbers from 1 to x.  Then write a program below it that calls this function 3 times.  Your output should be:
```
Counting to 5...
1
2
3
4
5
Counting to 3...
1
2
3
Counting to 6...
1
2
3
4
5
6
```

Example is in this folder called `counter.js`


### Steps

```
# make a folder (you should start in the /code folder)
mkdir counter
cd counter

# go to github.com, create repository, and then follow the instructions to push up
# your code

# create a file called counter.js
touch counter.js

# open the whole folder in sublime text
subl .
```

Then type your code into the counter.js file.

Save it.

Run the program and make sure it works
```
node counter.js
```


Push your changes to github:
```
git add --all
git commit -m "add counter.js file and get it working"
git push origin master
```

Write this program 5x while "cheating" (looking at the answer) and 5x without looking at the answer.