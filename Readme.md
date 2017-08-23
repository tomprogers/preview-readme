# readme-preview

Preview your README file as it will appear on npmjs.com, before publishing.


## Installation

```bash
$ npm install tomprogers/preview-readme
```


## Usage

```bash
cd ~/code/my-repo
preview-readme
```

See your file, rendered at [http://localhost:5000](http://localhost:5000)


## API keys

If you need more than 60 renders per hour, you can get 5000 per hour by going to [GitHub Applications Settings](https://github.com/settings/applications) and create a new Personal Access Token. Then, put this in your `.bash_profile` so that preview-readme can use it:

```
# ~/.bash_profile
README_PREVIEW_API_KEY=yourapitoken
```

You can also send it as an argument: `preview-readme <token>`.
