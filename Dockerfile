FROM node:8
ADD . /app
WORKDIR /app
RUN npm install
EXPOSE 8000

ENV NAME="world"
CMD ["npm", "start"]