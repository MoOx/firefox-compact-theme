# Firefox Compact theme

[![Support on gitter chat](https://img.shields.io/badge/support-gitter%20chat-E40255.svg)](https://gitter.im/MoOx/firefox-compact-theme)

[![Repo on GitHub](https://img.shields.io/badge/repo-GitHub-3D76C2.svg)](https://github.com/MoOx/firefox-compact-theme)
[![Repo on GitLab](https://img.shields.io/badge/repo-GitLab-6C488A.svg)](https://gitlab.com/MoOx/firefox-compact-theme)
[![Repo on BitBucket](https://img.shields.io/badge/repo-BitBucket-1F5081.svg)](https://bitbucket.org/MoOx/firefox-compact-theme)

> A simple Firefox compact theme

<img src="screenshot.png" align="center" />

**For now, only tested on OS X. Improvements are welcome.**

- This theme play nice with
[Beyond Australis](https://addons.mozilla.org/en-US/firefox/addon/the-fox-only-better/)
with and **Slim Chrome** enabled (see *Beyond Australis* addon preferences).
- You should probably _Customize_ Firefox and remove the "New tab" button from the tab bar.

## Installation

**For now this theme is not published or packaged anywhere since I didn't take
the time to (see note below).**

For now, you have to turn off the cert checking
- open a new tab with the following url
  ``about:config?filter=xpinstall.signatures.required``
- change `xpinstall.signatures.required` value to ``false``

Then you are ready to get the code and build the XPI.

```clone
$ git clone https://github.com/MoOx/firefox-compact-theme.git
$ cd firefox-compact-theme
$ npm install
$ npm run build
```

This commands should build & push an XPI to Firefox.

## TODO

- publish with nice way to automate release/update
- write some tests?

## Notes

This package has been made this way because I didn't know how to share this
so I asked on StackOverflow :

https://stackoverflow.com/questions/36725196/how-to-create-a-firefox-theme-addon-from-a-simple-stylesheet/36779937

If you have a quick way to automate package publishing, that would be awesome
to share. I just took a quick look to this pages
- https://developer.mozilla.org/en-US/Add-ons/Distribution
- https://developer.mozilla.org/en-US/Add-ons/SDK/Tools/jpm#jpm_sign

Then I gave up since it's not my priority.

Feel free to open issue to discuss about that so we can improve the process.

We could
- found a way to automate release/update via addons.mozilla.org
- sign and host this package on github release

---

## CONTRIBUTING

* ⇄ Pull/Merge requests and ★ Stars are always welcome.
* For bugs and feature requests, please create an issue.


1. Get [Extension Auto-Installer](https://addons.mozilla.org/en-US/firefox/addon/autoinstaller/)

2. Run this commands

  ```console
  $ npm install
  $ npm start
  ```

See https://developer.mozilla.org/en-US/Add-ons/SDK/Tools/jpm for more.

3. Edit the data/index.css file.
  Help yourself using `Firefox > Tools > Web Developer > Browser Toolbox` to
  find css selectors to adjust.

## [CHANGELOG](CHANGELOG.md)

## [LICENSE](LICENSE)
