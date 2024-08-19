# MY_PROJECT
 
## npm commands (package.json scripts)
 
`npm run dev`: to start the development server  
`npm run build`: to make a production build  
`npm run start`: to start the server on a production server using the build we made with the previous command  
`npm run lint`: to run a linting script that will scan our code and help us find problems in our code  
`npm run lint-nocache`:  same as the **lint** command but it does **NOT** use the ESLint **cache**, useful to testing changes to the linting configuration  
`npm run lint-debug`: a more verbose version of the lint command that adds more information to the **output** tab, useful to verify the things ESLint is doing and to debug potential problems  
`npm run lint-fix`: ESLint will attempt to automatically fix linting problems (use with caution as ESLint might make a lot of changes, so you might want to create a new branch before running this command)  

## CI/CD pipeline for automatic deployments
 
Every time code gets pushed into the main branch, it will trigger a production deployment
 
When code gets pushed into the preview branch, it will trigger a preview deployment
