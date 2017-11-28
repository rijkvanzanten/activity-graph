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
This extension renders a graph that visualizes the amount of rows in a table called `main` grouped by the value of a column called `user` (with a `user` interface). Please make sure you have a table called `main` with at least a column called `user` (which is a user interface). Otherwise, this extension won't work.

To use this extension with another table, rename the table from `main` to your preferred table on line 4 of the `api.php` file.
