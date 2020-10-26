# Social Network

### Importing data into database:
- First create a database with a name **social_network**
- .sql file is provided in the project root folder. Import it using command: 
`mysql -u root -p social_network_1 < social_network.sql`
> Note: You have to specify the full path of the .sql file if you are not in the root folder.

### Setting up backend:
- Go to *api* folder. 
- add `.env` file in this folder. Copy the variables from `env.ref` file and change it according to your credentials.
- Run the command `npm i` to install all the dependencies.
- Run the command `node server.js` to run the backend server. Alternatively you can use `nodemon` to run the server.
> Important: The backend server runs on port: **8888**.

> Note: There is no authentication check for API requests so you can test the API URLs directly in browser.

### API documentation:
- Go to *api* folder.
- Run the command `npm run build-api-doc`. This will generate an *api-doc* folder in the root directory.
- Open *index.html* file which is inside *api-doc* folder.

### Setting up frontend:
- Go to *frontend* folder.
- run the command `npm i` to install all the dependencies.
- run the command `npm run frontend`. It will run the frontend server on **4200** port.
- Now open *http://localhost:4200* in your browser to access the app.

