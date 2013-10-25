# readme-preview

Preview GitHub Readmes before pushing.

```bash
$ npm install readme-preview
```

## Usage
```bash
cd ~/code/my-repo
preview-readme
```

See your rendered `Readme.md` at [http://localhost:5000](http://localhost:5000).

## API keys
To get more than 60 requests per hour, you can go to [GitHub Applications Settings](https://github.com/settings/applications) and create a new Personal Access Token. Put this in your `.bash_profile`
```
README_PREVIEW_API_KEY=yourapitoken
```
and `readme-preview` will use it. This will give you 5000 requests.

You can also send it as an argument: `readme-preview <token>`.
