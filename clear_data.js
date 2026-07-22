const fs = require('fs');

function clearArray(filePath, arrayNameRegex, emptyArrayString) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    // We want to replace the array content from `const arrayName = [` to the matching `];`
    // This regex looks for `arrayName = [...]` or `arrayName: Type[] = [...]`
    // But since it's multiline, we can just replace everything between `[` and `];` with `[];`
    // Wait, regex for balanced brackets is hard. Let's just do it string by string if possible,
    // or simply use a non-greedy regex that matches to the first \n];
    let newContent = content.replace(new RegExp(arrayNameRegex + '\\s*=\\s*\\[[\\s\\S]*?\\n\\];', 'g'), emptyArrayString);
    fs.writeFileSync(filePath, newContent);
    console.log(`Cleared ${filePath}`);
}

clearArray('src/data/projectsData.ts', 'export const projects\\s*:\\s*Project\\[\\]', 'export const projects: Project[] = [];');
clearArray('src/data/blogsData.ts', 'export const allBlogs', 'export const allBlogs = [];');
// Or maybe it has type? let's just do: export const allBlogs: BlogPost[] = [];
clearArray('src/data/blogsData.ts', 'export const allBlogs\\s*:\\s*BlogPost\\[\\]', 'export const allBlogs: BlogPost[] = [];');

clearArray('src/data/highlightsData.ts', 'export const highlightsData\\s*:\\s*Highlight\\[\\]', 'export const highlightsData: Highlight[] = [];');

clearArray('src/app/experience/page.tsx', 'const experiences\\s*:\\s*ExperienceData\\[\\]', 'const experiences: ExperienceData[] = [];');

clearArray('src/components/ExperienceList.tsx', 'const experiences', 'const experiences = [];');
// wait, ExperienceList might have a type too.
clearArray('src/components/ExperienceList.tsx', 'const experiences\\s*:\\s*ExperienceData\\[\\]', 'const experiences: ExperienceData[] = [];');

