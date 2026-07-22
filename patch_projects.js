/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
let file = fs.readFileSync('src/data/projectsData.ts', 'utf8');

// Replace imports
file = file.replace(
  'import { Network, Search } from "lucide-react";',
  'import { Network, Search, Database, Languages, BarChart, LineChart, Zap, Cpu, Sliders, Table, TableProperties, BarChart2, PieChart, LayoutDashboard, Smartphone, Coins } from "lucide-react";'
);
file = file.replace(
  '  SiFirebase,',
  '  SiFirebase,\n  SiGooglemaps,\n  SiScipy,'
);

// Add keys to TechKey
file = file.replace(
  '| "numpy" | "firebase";',
  '| "numpy" | "firebase" | "chromadb" | "sentenceTransformers" | "shap" | "econml" | "lightgbm" | "faiss" | "groq" | "optuna" | "googlemaps" | "googlesheets" | "pivot" | "dataanalysis" | "dataviz" | "dashboarding" | "tableau" | "scipy" | "reactnative" | "coingecko";'
);

// Add to iconMap
file = file.replace(
  '  scikitlearn: SiScikitlearn, streamlit: SiStreamlit, mysql: SiMysql, pandas: SiPandas, numpy: SiNumpy, firebase: SiFirebase,',
  '  scikitlearn: SiScikitlearn, streamlit: SiStreamlit, mysql: SiMysql, pandas: SiPandas, numpy: SiNumpy, firebase: SiFirebase,\n  chromadb: Database, sentenceTransformers: Languages, shap: BarChart, econml: LineChart,\n  lightgbm: Zap, faiss: Cpu, groq: Cpu, optuna: Sliders,\n  googlemaps: SiGooglemaps, googlesheets: Table, pivot: TableProperties, dataanalysis: BarChart2,\n  dataviz: PieChart, dashboarding: LayoutDashboard, tableau: PieChart, scipy: SiScipy,\n  reactnative: Smartphone, coingecko: Coins,'
);

// Add to techNames
file = file.replace(
  '  socketio: "Socket.io", scikitlearn: "Scikit-learn", streamlit: "Streamlit", mysql: "MySQL", pandas: "Pandas", numpy: "NumPy", firebase: "Firebase",',
  '  socketio: "Socket.io", scikitlearn: "Scikit-learn", streamlit: "Streamlit", mysql: "MySQL", pandas: "Pandas", numpy: "NumPy", firebase: "Firebase",\n  chromadb: "ChromaDB", sentenceTransformers: "Sentence Transformers", shap: "SHAP", econml: "EconML",\n  lightgbm: "LightGBM", faiss: "FAISS", groq: "Groq", optuna: "Optuna",\n  googlemaps: "Google Maps API", googlesheets: "Google Sheets", pivot: "Pivot Tables", dataanalysis: "Data Analysis",\n  dataviz: "Data Visualization", dashboarding: "Dashboarding", tableau: "Tableau", scipy: "SciPy",\n  reactnative: "React Native", coingecko: "CoinGecko API",'
);

// Replace project tech arrays
file = file.replace(/\{ label: "ChromaDB" \}, \{ label: "Sentence Transformers" \}, \{ label: "SHAP" \}/g, '"chromadb", "sentenceTransformers", "shap"');
file = file.replace(/\{ label: "EconML" \}, \{ label: "LightGBM" \}, \{ label: "SHAP" \}/g, '"econml", "lightgbm", "shap"');
file = file.replace(/\{ label: "FAISS" \}/g, '"faiss"');
file = file.replace(/\{ label: "Groq" \}/g, '"groq"');
file = file.replace(/\{ label: "LightGBM" \}, \{ label: "Optuna" \}, \{ label: "SHAP" \}/g, '"lightgbm", "optuna", "shap"');
file = file.replace(/\{ label: "Google Maps API" \}/g, '"googlemaps"');
file = file.replace(/\{ label: "Google Sheets" \}, \{ label: "Pivot Tables" \}, \{ label: "Data Analysis" \}, \{ label: "Data Visualization" \}, \{ label: "Dashboarding" \}/g, '"googlesheets", "pivot", "dataanalysis", "dataviz", "dashboarding"');
file = file.replace(/\{ label: "Tableau" \}/g, '"tableau"');
file = file.replace(/\{ label: "SciPy" \}/g, '"scipy"');
file = file.replace(/\{ label: "React Native" \}/g, '"reactnative"');
file = file.replace(/\{ label: "CoinGecko API" \}/g, '"coingecko"');

fs.writeFileSync('src/data/projectsData.ts', file);
console.log('done');
