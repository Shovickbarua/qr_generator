<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QRCode extends AppModel
{
    use HasFactory;
    protected $table = "qr_codes";

    protected $fillable = ['user_id', 'name', 'type', 'qr_info', 'eye_color', 'qr_code_color', 'bg_color', ' eye_style', 'qr_style', 'qr_image_url', 'logo', 'uuid'];
}
