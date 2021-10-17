const settings = {
  "name": "kita-official",
  "state": {
    "frontity": {
      "url": "https://kitaofficial.com",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "my-kita-theme",
      
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://kitaofficial.com"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
