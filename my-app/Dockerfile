# Step 1: השתמש בתמונה של Node.js כבסיס
FROM node:18

# Step 2: הגדר את תיקיית העבודה בתוך הקונטיינר
WORKDIR /app

# Step 3: העתק את קובץ package.json ו-package-lock.json
COPY package*.json ./

# Step 4: התקן את התלויות של React
RUN npm install

# Step 5: העתק את כל שאר הקבצים לתוך הקונטיינר
COPY . .

# Step 6: הפעל את אפליקציית React
CMD ["npm", "start"]

# Step 7: חשוף את הפורט 3000
EXPOSE 3000
