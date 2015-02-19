# Resume
A JSON-powered resume with clean and modern typography.

This is not a flashy resume like you see on Dribbble or Behance. There are no stars or progress bars here. This is a practical, polished and professional resume you can feel comfortable submitting anywhere.

It's built with Gulp, using Jade and Sass. All the information in your resume is supplied via a simple JSON file. This makes opportunities for extension and styling endless.

### Example

![steve jobs resume](https://cloud.githubusercontent.com/assets/792845/6216250/f4a38566-b5bc-11e4-9d67-5da936e387c7.png)

example content from: http://www.landsnail.com/apple/local/steve-jobs-resume/Resume.html

### Getting Started
1. Install node & npm
2. Clone this repo and, from within the cloned directory, run `$ npm install`
3. Copy example-resume.json and rename resume.json
4. Run `$ gulp`
5. Navigate to http://localhost:8000 to see your resume

The gulp task builds a dist folder containing an html file and a stylesheet. These can be hosted anywhere. Additionally, you can print the resume or save it to a pdf file.


### JSON Documentation
*coming soon*

### Contributing
This is still a work-in-progress. Pull requests, especially those that add to what I've outlined on the roadmap, would be much appreciated. If you have suggestions for improvements, feel free to open an issue.

### Roadmap
#### 1.0
- [x] Sample resume.json file
- [x] package.json with dependencies
- [x] Write getting started instructions
- [x] Improve typography, fonts
- [x] Add image to Readme
- [ ] Fix: Watch resume.json and reload data after save

#### 2.0
- [ ] JSON Documentation
- [ ] More generalized json
- [ ] Page numbers, header/footer content in print
- [ ] Option to add page break at section
- [ ] Gulp task to generate pdf
- [ ] Automatically detect links
- [ ] Responsiveness

#### 3.0
- [ ] Themes
- [ ] Gulp task to generate new theme
- [ ] Gulp task to deploy the packaged html?

##### additional ideas
- Social profiles?
- content bar when viewing as html?

