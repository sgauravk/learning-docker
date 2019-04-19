FROM node:8
ADD . /app
WORKDIR /app
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]