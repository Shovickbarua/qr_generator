<?php

namespace App\Http\Controllers;

// use BaconQrCode\Encoder\QrCode;

// use BaconQrCode\Encoder\QrCode ;

use App\Models\QRCode as MyQRCode;
use App\Traits\CommonTrait;
use App\Traits\QRFormating;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class QrCodeController extends Controller
{
    use CommonTrait, QRFormating;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $codes = MyQRCode::where('user_id', auth()->user()->id)->get();
        return $this->sendResponse($codes);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $request->all();
        // dd($input);
        $input['user_id'] = auth()->user()->id;
        $input['uuid'] = uniqid();
        $ext = 'svg';
        $qrCode = QrCode::format($ext)->size(300);
        //Formating QR style aaccording to input
        $qrCode = $this->formatQRStyle($qrCode, $input);
        //formating QR text
        list($qr_text, $input) = $this->formatQRText($input); //$input['qr_info'] ? $input['qr_info'] : '';

        $qr_path = "public/qrcodes/qrcode-" . Str::slug($input['name']) . '_' . time() . ".".$ext;
        if ($request->file('media')) {
            $input['logo'] = $this->uploadFile($request->file('media'), 'public/qr-logos/', true);
            Storage::disk('local')->put($qr_path, $qrCode->merge($input['logo'], 0.2, true)->errorCorrection('H')->generate($qr_text));
        } else {
            $path = Storage::disk('local')->put($qr_path, $qrCode->errorCorrection('H')->generate($qr_text));
        }
        $qr_image_url = Storage::url($qr_path);
        $input['qr_image_url'] = $qr_image_url;
        $qrCodeObj = new MyQRCode();
        
        $qrCodeObj->saveData($input);
        return $this->sendResponse($qr_image_url);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $qr = MyQRCode::find($id);
        return response()->json($qr);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $input = $request->all();
        // dd($input);
        $input['user_id'] = auth()->user()->id;
        $input['uuid'] = uniqid();
        $ext = 'svg';
        $qrCode = QrCode::format($ext)->size(300);
        //Formating QR style aaccording to input
        $qrCode = $this->formatQRStyle($qrCode, $input);
        //formating QR text
        list($qr_text, $input) = $this->formatQRText($input); //$input['qr_info'] ? $input['qr_info'] : '';

        $qr_path = "public/qrcodes/qrcode-" . Str::slug($input['name']) . '_' . time() . ".".$ext;
        if ($request->file('media')) {
            $input['logo'] = $this->uploadFile($request->file('media'), 'public/qr-logos/', true);
            Storage::disk('local')->put($qr_path, $qrCode->merge($input['logo'], 0.2, true)->errorCorrection('H')->generate($qr_text));
        } else {
            $path = Storage::disk('local')->put($qr_path, $qrCode->errorCorrection('H')->generate($qr_text));
        }
        $qr_image_url = Storage::url($qr_path);
        $input['qr_image_url'] = $qr_image_url;
        $qrCodeObj =MyQRCode::find($id);
        
        $qrCodeObj->saveData($input);
        return $this->sendResponse($qr_image_url);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
