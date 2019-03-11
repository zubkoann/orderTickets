<?php

/* @var $this yii\web\View */

use app\models\Blog;
$this->title = 'My Yii Application';
?>

<div class="site-index">
    <div class="body-content">
        <div class="row">
            <?php
            $rest = new Blog();
            $rest = $rest->getBlogarticles();
            $rest = $rest->result;
            $arr = json_decode(json_encode($rest));
            foreach ($arr as $value) :?>
                <h2><?= get_object_vars($value)['title'] ?></h2>
                <p>   <?= get_object_vars($value)['body'] ?></p>
            <?php endforeach; ?>

        </div>

    </div>
</div>
