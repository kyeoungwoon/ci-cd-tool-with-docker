# Node.js Dockerfile

FROM node:22
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 7777
CMD ["node", "index.js"] 


# Flask dockerfile

# FROM python:3.12
# WORKDIR /app
# COPY requirements.txt .
# RUN pip install --no-cache-dir -r requirements.txt
# COPY . .
# CMD ["gunicorn", "-b", "0.0.0.0:7777", "app:app"]