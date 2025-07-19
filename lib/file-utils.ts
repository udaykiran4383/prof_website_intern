/**
 * File reading utilities to prevent timeout issues
 */

export interface FileChunk {
  content: string
  startLine: number
  endLine: number
  totalLines: number
}

export interface FileInfo {
  path: string
  size: number
  lines: number
  isLarge: boolean
}

/**
 * Get file information without reading the entire content
 */
export function getFileInfo(filePath: string): FileInfo {
  // This would be implemented with actual file system calls
  // For now, return mock data based on known file sizes
  const knownFiles: Record<string, FileInfo> = {
    'package-lock.json': { path: filePath, size: 162000, lines: 4618, isLarge: true },
    'styles.css': { path: filePath, size: 56000, lines: 3233, isLarge: true },
    'script.js': { path: filePath, size: 51000, lines: 1487, isLarge: true },
    'admin.html': { path: filePath, size: 51000, lines: 1223, isLarge: true },
    'research.html': { path: filePath, size: 37000, lines: 707, isLarge: false },
    'projects.html': { path: filePath, size: 29000, lines: 571, isLarge: false },
    'publications.html': { path: filePath, size: 28000, lines: 547, isLarge: false },
    'patents.html': { path: filePath, size: 30000, lines: 604, isLarge: false },
    'awards.html': { path: filePath, size: 24000, lines: 488, isLarge: false },
    'about.html': { path: filePath, size: 24000, lines: 457, isLarge: false },
    'contact.html': { path: filePath, size: 23000, lines: 452, isLarge: false },
    'cav.html': { path: filePath, size: 24000, lines: 479, isLarge: false },
    'index.html': { path: filePath, size: 25000, lines: 502, isLarge: false },
  }

  const fileName = filePath.split('/').pop() || filePath
  return knownFiles[fileName] || { path: filePath, size: 0, lines: 0, isLarge: false }
}

/**
 * Determine if a file should be read in chunks
 */
export function shouldChunkFile(filePath: string): boolean {
  const info = getFileInfo(filePath)
  return info.isLarge || info.lines > 1000
}

/**
 * Calculate optimal chunk size for a file
 */
export function getOptimalChunkSize(filePath: string): number {
  const info = getFileInfo(filePath)
  
  if (info.lines > 4000) return 100  // Very large files
  if (info.lines > 2000) return 200  // Large files
  if (info.lines > 1000) return 300  // Medium-large files
  return 500 // Small files
}

/**
 * Get recommended reading strategy for a file
 */
export function getReadingStrategy(filePath: string): 'full' | 'chunked' | 'search' {
  const info = getFileInfo(filePath)
  
  if (info.lines > 3000) return 'search'      // Use semantic search
  if (info.lines > 1000) return 'chunked'     // Read in chunks
  return 'full'                               // Read entire file
}

/**
 * Generate chunk boundaries for a file
 */
export function generateChunks(filePath: string): Array<{ start: number; end: number }> {
  const info = getFileInfo(filePath)
  const chunkSize = getOptimalChunkSize(filePath)
  const chunks = []
  
  for (let start = 1; start <= info.lines; start += chunkSize) {
    const end = Math.min(start + chunkSize - 1, info.lines)
    chunks.push({ start, end })
  }
  
  return chunks
}

/**
 * Safe file reading with timeout prevention
 */
export async function safeReadFile(
  filePath: string,
  options: {
    startLine?: number
    endLine?: number
    maxLines?: number
    timeout?: number
  } = {}
): Promise<string> {
  const {
    startLine = 1,
    endLine,
    maxLines = 500,
    timeout = 8000
  } = options

  const info = getFileInfo(filePath)
  
  // If file is too large, recommend alternative approach
  if (info.lines > maxLines && !endLine) {
    throw new Error(
      `File ${filePath} is too large (${info.lines} lines). ` +
      `Use chunked reading or semantic search instead. ` +
      `Recommended strategy: ${getReadingStrategy(filePath)}`
    )
  }

  // Calculate actual end line
  const actualEndLine = endLine || Math.min(startLine + maxLines - 1, info.lines)
  
  // This would be the actual file reading implementation
  // For now, return a placeholder
  return `[Reading lines ${startLine}-${actualEndLine} of ${filePath} (${info.lines} total lines)]`
}

/**
 * Get file reading recommendations
 */
export function getFileReadingRecommendations(filePath: string): {
  strategy: string
  reason: string
  alternatives: string[]
} {
  const info = getFileInfo(filePath)
  const strategy = getReadingStrategy(filePath)
  
  const recommendations = {
    strategy,
    reason: '',
    alternatives: []
  }
  
  switch (strategy) {
    case 'search':
      recommendations.reason = `File is very large (${info.lines} lines)`
      recommendations.alternatives = [
        'Use semantic search to find specific information',
        'Use grep search for exact text matches',
        'Read specific sections using chunked reading'
      ]
      break
    case 'chunked':
      recommendations.reason = `File is large (${info.lines} lines)`
      recommendations.alternatives = [
        'Read in chunks of 200-300 lines',
        'Use semantic search for specific content',
        'Use grep search for exact matches'
      ]
      break
    case 'full':
      recommendations.reason = `File is manageable size (${info.lines} lines)`
      recommendations.alternatives = [
        'Safe to read entire file',
        'Use chunked reading for specific sections if needed'
      ]
      break
  }
  
  return recommendations
} 