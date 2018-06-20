# Portfolio_v2

### Welcome to my second portfolio repository

This portfolio is intended to be a way for me to apply a lot of the techniques I've learned over the last few months and re-apply them to my portfolio.

---

## How to run the application:

After cloning down the repository, run the following command:

```
npm install
```


### For Development:

```
npm run start-dev
```

This command will run the webpack in development mode, watching the files and recompiling changes.  Uses Nodemon to create a server that restarts whenever local changes are made.



### For Production:

```
npm start
```

The start script has been set up to run the build script, then run the server through node.  The build script will run webpack in the production mode, without a watcher.