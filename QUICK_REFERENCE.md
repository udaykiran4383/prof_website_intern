# 🚀 Quick Reference: Avoid Timeout Issues

## ⚠️ Files That Will Timeout (>1000 lines)
- `package-lock.json` (4,618 lines) ❌
- `styles.css` (3,233 lines) ❌  
- `script.js` (1,487 lines) ❌
- `admin.html` (1,223 lines) ❌

## ✅ Safe Files to Read (<500 lines)
- `package.json` (71 lines) ✅
- `tsconfig.json` (28 lines) ✅
- `tailwind.config.ts` (99 lines) ✅
- Component files (<200 lines) ✅
- Page files (<300 lines) ✅

## 🛠️ Quick Solutions

### Instead of reading large files:
```bash
# Check file size first
node scripts/check-file-size.js <filename>

# Use semantic search for information
codebase_search("dependencies", [])
codebase_search("authentication", [])
codebase_search("team members", [])

# Use grep for exact matches
grep_search("function login", "script.js")
grep_search("@radix-ui", "package.json")

# Use file search to find files
file_search("Button.tsx")
file_search("navigation")
```

### For specific sections:
```bash
# Read chunks instead of entire file
read_file("script.js", false, 1, 200)
read_file("script.js", false, 201, 400)
```

## 🎯 Common Use Cases

| What You Need | Use This Tool | Example |
|---------------|---------------|---------|
| Find dependencies | `read_file("package.json", true)` | ✅ Safe |
| Find functions | `grep_search("function", "*.js")` | ✅ Fast |
| Understand code | `codebase_search("authentication", [])` | ✅ Smart |
| Find files | `file_search("component")` | ✅ Quick |
| Project structure | `list_dir("components/")` | ✅ Overview |

## 🚨 Emergency Recovery
If you get a timeout:
1. **Stop** the current operation
2. **Use semantic search** instead of reading
3. **Use grep search** for exact text
4. **Read chunks** for specific sections
5. **Check file size** with the script

## 📞 Need Help?
- Run: `node scripts/check-file-size.js <filename>`
- Read: `TIMEOUT_PREVENTION_GUIDE.md`
- Use: `lib/file-utils.ts` for programmatic checks 