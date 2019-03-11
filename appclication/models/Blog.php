<?php

namespace app\models;

use yii\base\Model;
use yii\httpclient\Client;

class Blog extends Model
{

    /**
     * {@inheritdoc}
     */
    public static function getBlogarticles()
    {
        $client = new Client([
            'baseUrl' => 'https://api.mt5.com/get-news-forex?limit=10&offset=0&_lang=ru&_format=json&cols=*&from=0&to=0 ',
            'responseConfig' => [
                'format' => Client::FORMAT_JSON
            ],
        ]);
        $response = $client->createRequest()
            ->addHeaders(['Authorization' => 'Bearer M7yhRUMtB7CW8YJ7tygeunr2873'])
            ->send();
        if ($response->isOk) {
            $response = $response->content;
            $response = json_decode($response);
            return $response;
        }

    }


}
