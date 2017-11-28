# Custom Extension Example

Example extension for the article [Creating Custom Extensions on Medium](https://medium.com/directus/how-to-setup-a-custom-extension-770d6ea48551).

This extension renders a graph that visualizes the amount of rows in a table called `main` grouped by the value of a column called `user`.

## Installation

Clone this repo into `/customs/extensions/activity-graph`:  
`$ cd customs/extensions`  
`$ git clone git@github.com:directus/extension-activity-graph.git activity-graph`

> Note: If you've installed this extension by downloading this repo as zip, and moving it into the folder yourself; please make sure to rename the folder to `activity-graph`

## Usage

### Required schema:

```
table: main
| column_name | interface    |
|-------------|--------------|
| user        | user_created |
```

Please make sure your table `main` has a column named `user` which uses a `user_created` interface, or this extension won't work.

To use this extension with another table, rename the table from `main` to your preferred table [on line 4 of the `api.php` file](https://github.com/rijkvanzanten/activity-graph/blob/master/api.php#L4).

To change the column_name which contains the `user_created` interface, update the reference [on line 15 of `api.php`](https://github.com/rijkvanzanten/activity-graph/blob/master/api.php#L15).
