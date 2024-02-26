[PART1](https://fullstackopen.com/en/part1)

## React/Vite project

```sh
# Create a new project
#
# npm create vite =>
# - npm init create-vite
# - runs script defined in package.json

npm create vite@latest part1 -- --template react
cd part1

# Installs a package and any packages that it depends on (in node_modules folder)
# If package has a package-lock,  installation of dependencies will be driven by that
# A package is :
# - a folder with package.json
# - a gzip tar containing a package.json
# - a <name>@<version> published on the registry
# - a <name>@<tag> or <name> with "latest" tag
# - a <git remote url> that resolves to a folder with package.json
npm install

npm run dev
```

[PART1/Javascript](https://fullstackopen.com/en/part1/java_script)