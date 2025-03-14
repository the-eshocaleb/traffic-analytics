<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;
use App\Repository\PagetrafficRepository;

final class PageTrafficController extends AbstractController{

    // page traffic controller endpoint
    #[Route('/api/traffic', name: 'app_page_traffic', methods:['GET'])]
    public function index(PagetrafficRepository $repository): JsonResponse
    {
        // get all page traffic data
        $pagetraffic = $repository->findAll();

        // map the data to the required format
        $data = array_map(function($item){
            return [
                "page_id" => $item->getPageId(),
                "page_url" => $item->getPageUrl(),
                "traffic" => $item->getTraffic()
            ];
        }, $pagetraffic);
        
            
        // return the data as json response
        return $this->json($data);
    }
}
