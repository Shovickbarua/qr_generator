<?php

namespace App\Traits;

use App\Models\QRCode;
use App\Utils\FlexQR;
use Illuminate\Support\Facades\Config;


trait QRFormating
{
    use CommonTrait;

    public function formatQRStyle($qrCode, $input)
    {
        $color = $input['qr_code_color'] ? $input['qr_code_color'] : '';
        $bg_color = $input['bg_color'] ? $input['bg_color'] : '';
        if (!empty($color)) {
            list($color_r, $color_g, $color_b) = sscanf($color, "#%02x%02x%02x");
            $qrCode = $qrCode->color($color_r, $color_g, $color_b);
        }
        if (!empty($bg_color)) {
            list($bgcolor_r, $bgcolor_g, $bgcolor_b) = sscanf($bg_color, "#%02x%02x%02x");
            $qrCode = $qrCode->backgroundColor($bgcolor_r, $bgcolor_g, $bgcolor_b);
        }
        if (!empty($input['eye_style'])) {
            $qrCode = $qrCode->eye($input['eye_style']);
        }
        if (!empty($input['qr_style'])) {
            $qrCode = $qrCode->style($input['qr_style']);
        }
        return $qrCode;
    }

    public function formatQRText($input)
    {
        $qr_text = '';
        if ($input['type'] == FlexQR::TYPE_COMPANY_PROFILE){
            $input['qr_info'] = json_decode($input['qr_info'], true);
            if (request()->file('company_logo')){
                $company_logo = $this->uploadFile(request()->file('company_logo'), 'public/company-logos/');
                $input['qr_info']['company_logo'] = $company_logo;
            };
            $input['qr_info'] = json_encode($input['qr_info']);
            // $qr_text = json_encode($input['company_info']);
            // $qr_text = $input['company_info'];
            $qr_text = url('/').'/fq/'.$input['uuid'];
        } else {
            $qr_text = !empty($input['qr_info']) ? $input['qr_info'] : '';
        }
        
        return [$qr_text, $input];
    }
}