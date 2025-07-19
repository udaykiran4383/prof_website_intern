# Timeout Prevention Guide

## Problem
The read file tool times out after 10 seconds when trying to read large files like:
- `package-lock.json` (4,618 lines)
- `styles.css` (3,233 lines)
- `script.js` (1,487 lines)
- `admin.html` (1,223 lines)

## Solution: Use the Right Tool for the Job

### 1. For Large Files (>1000 lines): Use Semantic Search
```typescript
// ❌ DON'T: Read entire large file
read_file("package-lock.json", true) // Will timeout

// ✅ DO: Use semantic search
codebase_search("dependencies and devDependencies", [])
```

### 2. For Medium Files (500-1000 lines): Use Chunked Reading
```typescript
// ❌ DON'T: Read entire file at once
read_file("script.js", true) // May timeout

// ✅ DO: Read in chunks
read_file("script.js", false, 1, 200)
read_file("script.js", false, 201, 400)
read_file("script.js", false, 401, 600)
```

### 3. For Exact Text Matches: Use Grep Search
```typescript
// ❌ DON'T: Read file to find text
read_file("package.json", true) // Unnecessary

// ✅ DO: Use grep for exact matches
grep_search("dependencies", "package.json")
grep_search("function initialize", "script.js")
```

### 4. For File Navigation: Use File Search
```typescript
// ❌ DON'T: List directory and read files
list_dir("components/")
read_file("components/ui/button.tsx", true)

// ✅ DO: Use file search
file_search("button.tsx")
```

## File Size Guidelines

### Safe to Read Entirely (<500 lines)
- `package.json` (71 lines)
- `tsconfig.json` (28 lines)
- `tailwind.config.ts` (99 lines)
- Component files (typically <200 lines)
- Page files (typically <300 lines)

### Use Chunked Reading (500-1000 lines)
- `contact.html` (452 lines)
- `about.html` (457 lines)
- `cav.html` (479 lines)
- `index.html` (502 lines)

### Use Semantic Search (>1000 lines)
- `awards.html` (488 lines)
- `publications.html` (547 lines)
- `projects.html` (571 lines)
- `patents.html` (604 lines)
- `research.html` (707 lines)

### Avoid Reading Entirely (>1000 lines)
- `admin.html` (1,223 lines)
- `script.js` (1,487 lines)
- `styles.css` (3,233 lines)
- `package-lock.json` (4,618 lines)

## Best Practices

### 1. Always Check File Size First
```typescript
// Use the file-utils to check before reading
import { getFileInfo, getReadingStrategy } from '@/lib/file-utils'

const fileInfo = getFileInfo('package-lock.json')
const strategy = getReadingStrategy('package-lock.json')

console.log(`File has ${fileInfo.lines} lines, use ${strategy} strategy`)
```

### 2. Use Semantic Search for Information Discovery
```typescript
// Instead of reading large files to find information
codebase_search("authentication login admin", [])
codebase_search("team members research", [])
codebase_search("publications citations", [])
```

### 3. Use Grep for Exact Patterns
```typescript
// Find specific functions, variables, or text
grep_search("function login", "script.js")
grep_search("export default", "app/")
grep_search("className=", "components/")
```

### 4. Read Configuration Files Instead of Generated Files
```typescript
// ✅ Read source configuration
read_file("package.json", true)
read_file("tailwind.config.ts", true)
read_file("tsconfig.json", true)

// ❌ Avoid generated files
read_file("package-lock.json", true) // Generated from package.json
read_file("styles.css", true) // Generated from Tailwind
```

### 5. Use Directory Listing for Structure
```typescript
// Quick overview of project structure
list_dir("app/")
list_dir("components/")
list_dir("lib/")
```

## Common Patterns

### Finding Dependencies
```typescript
// ✅ Use package.json instead of package-lock.json
read_file("package.json", true)

// ✅ Or search for specific dependencies
grep_search("@radix-ui", "package.json")
```

### Finding Functions
```typescript
// ✅ Use grep for exact function names
grep_search("function initialize", "script.js")
grep_search("export function", "lib/")

// ✅ Use semantic search for function behavior
codebase_search("authentication login function", [])
```

### Finding Components
```typescript
// ✅ Use file search for component files
file_search("Button.tsx")
file_search("navigation")

// ✅ Use semantic search for component usage
codebase_search("Button component usage", [])
```

## Emergency Recovery

If you encounter a timeout:

1. **Stop the current operation**
2. **Use semantic search instead** of reading the file
3. **Use grep search** for exact text matches
4. **Read smaller chunks** if you need specific sections
5. **Use file search** to find related files

## Tools Summary

| Tool | Best For | File Size | Example |
|------|----------|-----------|---------|
| `read_file` | Small files, specific sections | <500 lines | `read_file("package.json", true)` |
| `codebase_search` | Information discovery | Any size | `codebase_search("dependencies", [])` |
| `grep_search` | Exact text matches | Any size | `grep_search("function", "*.js")` |
| `file_search` | Finding files | N/A | `file_search("button.tsx")` |
| `list_dir` | Project structure | N/A | `list_dir("components/")` |

## Quick Reference

### When to Use Each Tool:
- **Need to understand code behavior?** → `codebase_search`
- **Looking for exact text?** → `grep_search`
- **Finding a specific file?** → `file_search`
- **Exploring project structure?** → `list_dir`
- **Reading small config files?** → `read_file`
- **Reading specific sections?** → `read_file` with line ranges

### Files to Avoid Reading Entirely:
- `package-lock.json` (4,618 lines)
- `styles.css` (3,233 lines)
- `script.js` (1,487 lines)
- `admin.html` (1,223 lines)

### Safe Files to Read:
- `package.json` (71 lines)
- `tsconfig.json` (28 lines)
- `tailwind.config.ts` (99 lines)
- Component files (<200 lines)
- Page files (<300 lines) 