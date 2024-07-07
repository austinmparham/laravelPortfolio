<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FileController extends Controller{

    public function downloadResume(Request $request)
    {
        $path = Storage::disk('public')->path('AustinParhamResume.pdf');
        $fileName = 'AustinParhamResume.pdf';
        return response()->download($path,$fileName);
    }
}
