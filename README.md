# Automatic Spell Checking Language Selection Extension for Firefox
Automatically changes the dictionary used for spell checking based on the language of text in input fields.
Uses the [Compact Language Detection framework](https://github.com/CLD2Owners/cld2) built into Firefox to determine the text language. No text or other data is sent to any external services.
Icon by A’ Design Award & Competition, Onur Müştak Çobanlı and Farhat Datta through http://www.languageicon.org/

Install from https://addons.mozilla.org/firefox/addon/automatic-spelling-language/

### Supported Languages
The following languages [are supported](https://github.com/CLD2Owners/cld2#supported-languages):
Afrikaans, Albanian, Arabic, Armenian, Azerbaijani, Basque, Belarusian, Bengali, Bihari, Bulgarian, Catalan, Cebuano, Cherokee, Croatian, Czech, Chinese (traditional and simplified), Danish, Dhivehi, Dutch, English, Estonian, Finnish, French, Galician, Ganda, Georgian, German, Greek, Gujarati, Haitian Creole, Hebrew, Hindi, Hmong, Hungarian, Icelandic, Indonesian, Inuktitut, Irish, Italian, Javanese, Japanese, Kannada, Khmer, Kinyarwanda, Korean, Laothian, Latvian, Limbu, Lithuanian, Macedonian, Malay, Malayalam, Maltese, Marathi, Nepali, Norwegian, Oriya, Persian, Polish, Portuguese, Punjabi, Romanian, Russian, Scottish Gaelic, Serbian, Sinhalese, Slovak, Slovenian, Spanish, Swahili, Swedish, Syriac, Tagalog, Tamil, Telugu, Thai, Turkish, Ukrainian, Urdu, Vietnamese, Welsh, and Yiddish.

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
