<?php

namespace App\Http\Controllers;

use App\Models\QRCode;
use App\Traits\CommonTrait;
use Illuminate\Http\Request;

class FrontController extends Controller
{   
    use CommonTrait;

    public function index()
    {
        return view('page');
    }

    public function showqr($code)
    {
        $qrcode = QRCode::where('uuid', $code)->first();
        if ($qrcode) {
            $qrcode->qr_info = json_decode($qrcode->qr_info);
            return $this->sendResponse($qrcode);
        } else {
            return $this->sendError([]);
        }
    }
}