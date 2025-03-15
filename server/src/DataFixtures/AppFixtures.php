<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Pagetraffic;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // home page traffic
        $pagetraffic = new Pagetraffic();
        $pagetraffic->setPageId(1);
        $pagetraffic->setPageUrl("/home");
        $pagetraffic->setTraffic(125);

        $manager->persist($pagetraffic);

        // about page traffic
        $pagetraffic = new Pagetraffic();
        $pagetraffic->setPageId(2);
        $pagetraffic->setPageUrl("/about");
        $pagetraffic->setTraffic(80);

        $manager->persist($pagetraffic);

        // contact page traffic
        $pagetraffic = new Pagetraffic();
        $pagetraffic->setPageId(3);
        $pagetraffic->setPageUrl("/contact");
        $pagetraffic->setTraffic(300);

        $manager->persist($pagetraffic);

        // product page traffic
        $pagetraffic = new Pagetraffic();
        $pagetraffic->setPageId(4);
        $pagetraffic->setPageUrl("/product");
        $pagetraffic->setTraffic(45);

        $manager->persist($pagetraffic);

        // blog page traffic
        $pagetraffic = new Pagetraffic();
        $pagetraffic->setPageId(5);
        $pagetraffic->setPageUrl("/blog");
        $pagetraffic->setTraffic(95);

        $manager->persist($pagetraffic);

        $manager->flush();
    }
}
