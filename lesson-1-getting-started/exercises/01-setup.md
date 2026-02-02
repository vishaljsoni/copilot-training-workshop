# Exercise 1: Setup & First Suggestions 🔧

**Duration**: 10 minutes | **Difficulty**: Beginner

## 🎯 Objective

Verify GitHub Copilot is working correctly and understand how to interact with inline suggestions.

---

## 📝 Steps

### Step 1: Create a Test File

1. Open VS Code
2. Create a new file: `test.js`
3. Save it (this helps Copilot understand the language context)

### Step 2: Test Inline Suggestions

1. Type the following comment:
```javascript
// Function to calculate the sum of two numbers
```

2. Press Enter and wait 1-2 seconds
3. You should see a **gray text suggestion** appear!

Expected suggestion:
```javascript
function sum(a, b) {
  return a + b;
}
```

4. Press `Tab` to accept the suggestion

🎉 **Congratulations!** You just used Copilot for the first time!

### Step 3: Try Different Suggestions

1. Delete the function you just created
2. Type the same comment again:
```javascript
// Function to calculate the sum of two numbers
```

3. Press Enter
4. When the suggestion appears, press `Alt+]` (Windows/Linux) or `Option+]` (Mac)
5. You'll see an alternative suggestion!
6. Keep pressing to cycle through options
7. Accept the one you like with `Tab`

### Step 4: Reject a Suggestion

1. Type a new comment:
```javascript
// Function to multiply two numbers
```

2. Press Enter
3. When suggestion appears, press `Esc` to reject it
4. Try typing the function yourself
5. Notice Copilot may still offer suggestions as you type each line!

---

## 🎮 Practice Challenges

Try getting Copilot to generate these functions by writing comments:

### Challenge 1: Basic Function
```javascript
// Function to check if a number is even
```

Expected output:
```javascript
function isEven(num) {
  return num % 2 === 0;
}
```

### Challenge 2: Array Operation
```javascript
// Function to find the maximum value in an array
```

Expected output:
```javascript
function findMax(arr) {
  return Math.max(...arr);
}
```

### Challenge 3: String Manipulation
```javascript
// Function to reverse a string
```

Expected output:
```javascript
function reverseString(str) {
  return str.split('').reverse().join('');
}
```

---

## ⌨️ Keyboard Shortcuts Reference

| Action | Windows/Linux | Mac |
|--------|---------------|-----|
| Accept suggestion | `Tab` | `Tab` |
| Reject suggestion | `Esc` | `Esc` |
| Next suggestion | `Alt+]` | `Option+]` |
| Previous suggestion | `Alt+[` | `Option+[` |
| Trigger suggestion | `Alt+\` | `Option+\` |
| Open Copilot Chat | `Ctrl+I` | `Cmd+I` |

---

## ✅ Checkpoint

Before moving to the next exercise, make sure:
- [ ] You can see gray inline suggestions
- [ ] You successfully accepted at least one suggestion with Tab
- [ ] You tried cycling through multiple suggestions with Alt+]
- [ ] You rejected at least one suggestion with Esc

---

## 🐞 Troubleshooting

### Problem: No suggestions appearing

**Solutions**:
1. Check the Copilot icon in the status bar (bottom right)
   - Should show a checkmark or Copilot logo
   - If showing an error, click it for details
2. Verify internet connection
3. Sign out and sign in again:
   - Click account icon (bottom left)
   - Click "Sign out"
   - Sign in again
4. Reload VS Code: `Ctrl+Shift+P` / `Cmd+Shift+P` > "Reload Window"

### Problem: Wrong language suggestions

**Solution**: Save your file with the correct extension (`.js`, `.py`, `.html`, etc.)

### Problem: Suggestions but can't accept

**Solution**: Make sure you're pressing `Tab`, not `Enter`

---

## 💡 What You Learned

- ✅ How to trigger inline suggestions
- ✅ How to accept suggestions with Tab
- ✅ How to reject suggestions with Esc
- ✅ How to cycle through multiple suggestions
- ✅ How to verify Copilot is working

---

## 🚀 Next Exercise

**Ready for more?** Continue to [Exercise 2: Inline Suggestions Mastery](./02-inline-suggestions.md)

---

## 📝 Notes

- **Be patient**: Suggestions may take 1-2 seconds
- **Context matters**: Copilot looks at your entire file for context
- **Not perfect**: Copilot won't always suggest exactly what you want
- **Keep practicing**: The more you use it, the better you'll understand it!