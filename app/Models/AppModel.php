<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AppModel extends Model
{
    use HasFactory;

    public function saveData($input)
    {
        $newData = $this->create($input);
        $newData = $newData->fresh();

        return $newData;
    }
}
