# Automatic Spell Checking Language Selection Extension for Firefox
Automatically changes the dictionary used for spell checking based on the language of text in input fields.
Uses the [Compact Language Detection framework](https://github.com/CLD2Owners/cld2) to determine the text language.
Icon by A’ Design Award & Competition, Onur Müştak Çobanlı and Farhat Datta through http://www.languageicon.org/

Install from https://addons.mozilla.org/firefox/addon/automatic-spelling-language/

## Tested on sites
- GitHub
- Gmail
- Reddit
- Stack Exchange
- Trello
- Wikipedia

## Content Preferences
If this extension doesn't work for you for a specific site, you probably have a content preference that overwrites the dictionary for that site.
This content preference is automatically added if you manually set the dictionary for an input field on a site.
In order to clear it, try manually setting the dictionary to the same language as the site, e.g., English for Reddit.

If that doesn't work, you can manually clear all content preferences by deleting the `content-prefs.sqlite` in your profile directory.
On Windows, this can be found in a subfolder of `%AppData%\Mozilla\Firefox\Profiles\`.
Please note that this will also delete other content preferences you might have set for different sites, such as the zoom level and the default download folder.
