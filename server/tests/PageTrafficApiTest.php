<?php

namespace App\Tests;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class PageTrafficApiTest extends WebTestCase
{
    public function testGetTrafficData(): void
    {
        // create a client
        $client = static::createClient();

        // request to get traffic data
        $client->request('GET', '/api/traffic');

        // check if the response is successful and content type is json
        $this->assertResponseIsSuccessful();
        $this->assertResponseHeaderSame('content-type', 'application/json');

        // check if the response is an array
        $response = json_decode($client->getResponse()->getContent(), true);
        $this->assertIsArray($response);


        // check if the response has the required keys
        foreach($response as $page){
            $this->assertArrayHasKey('page_id', $page);
            $this->assertArrayHasKey('page_url', $page);
            $this->assertArrayHasKey('traffic', $page);
        }
    }
}
