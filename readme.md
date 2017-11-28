# Custom Extension Example

Example extension for the article [Creating Custom Extensions on Medium](https://medium.com/directus/how-to-setup-a-custom-extension-770d6ea48551).

## Installation

1. Clone this repo into `/customs/extensions/activity-graph`:  
`$ cd customs/extensions`  
`$ git clone git@github.com:directus/extension-activity-graph.git activity-graph`
2. Install the `npm` dependencies of the extension:  
`$ cd activity-graph`  
`$ npm install`

> Note: If you've installed this extension by downloading this repo as zip, and moving it into the folder yourself; please make sure to rename the folder to `activity-graph`

## Usage
This extension renders a graph that compares the amount of rows created by different users in the `main` table. Since the api file specifically checks for a table called `main`, this extension won't work if you don't have a table called `main`.

To use this extension with another table, rename the table from `main` to your preferred table on line 4 of the `api.php` file.
