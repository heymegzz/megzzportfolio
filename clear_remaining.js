const fs = require('fs');

function clearArray(filePath, regexStr, replacement) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    let regex = new RegExp(regexStr, 'g');
    let newContent = content.replace(regex, replacement);
    fs.writeFileSync(filePath, newContent);
    console.log(`Cleared ${filePath}`);
}

// Clear projectsData
clearArray('src/data/projectsData.ts', 'export const projectsData: Project\\[\\] = \\[[\\s\\S]*?\\n\\];', 'export const projectsData: Project[] = [];');

// Clear blogsData
clearArray('src/data/blogsData.ts', 'export const blogsData: Blog\\[\\] = \\[[\\s\\S]*?\\n\\];', 'export const blogsData: Blog[] = [];');

