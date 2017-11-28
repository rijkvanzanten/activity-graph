<?php

$app = \Directus\Application\Application::getInstance();
$mainTable = \Directus\Database\TableGatewayFactory::create('test');
$userTable = \Directus\Database\TableGatewayFactory::create('directus_users');

$app->get('/stats', function () use ($app, $mainTable, $userTable) {
    $users = $userTable->getItems()['data'];
    $items = $mainTable->getItems([
        'status' => [1, 2]
    ])['data'];

    // Map array to be in format userID => count
    $results = array_count_values(array_map(function ($item) {
        return $item['user'];
    }, $items));

    // Replace the userID with the name
    //   of the user in the results array
    foreach($results as $key => $value) {
        $userName = getUserName($users, $key);
        $results[$userName] = $value;
        unset($results[$key]);
    }

    // Return the results to the client
    return $app->response([
        'results' => $results
    ]);
});

function getUserName($users, $value) {
    foreach($users as $key => $user) {
        if ( $user['id'] === $value ) {
            return $users[$key]['first_name'];
        }
    }
    return false;
}
