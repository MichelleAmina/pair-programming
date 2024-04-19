/*
2108. Find First Palindromic String in the Array
Solved
Easy
Topics
Companies
Hint
Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

A string is palindromic if it reads the same forward and backward.

 

Example 1:

Input: words = ["abc","car","ada","racecar","cool"]
Output: "ada"
Explanation: The first string that is palindromic is "ada".
Note that "racecar" is also palindromic, but it is not the first.
Example 2:

Input: words = ["notapalindrome","racecar"]
Output: "racecar"
Explanation: The first and only string that is palindromic is "racecar".
Example 3:

Input: words = ["def","ghi"]
Output: ""
Explanation: There are no palindromic strings, so the empty string is returned.
*/

function firstPalindrome(words){
    function isPalindrome(s) {
        s = s.replace(/[^a-zA-Z0-9]/gi, '').toLowerCase();
        
        for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
            if (s[i] !== s[j]) {
                return false;
            }
        }
        return true;
    }

    for (i of words) {
        if (isPalindrome(i)) {
            return i;
        }
    }
    return "";
}

console.log(firstPalindrome(["abc","car","ada","racecar","cool"])) //ada
console.log(firstPalindrome(["notapalindrome","racecar"])) //racecar
console.log(firstPalindrome(["def","ghi"])) //
console.log(firstPalindrome(["avd", 'asda', "ssss"]))
