<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Response;
use Inertia\Inertia;
use Inertia\ResponseFactory;

class FileController extends Controller{

    public function downloadResume(Request $request)
    {
        $path = Storage::disk('public')->path('files/AustinParhamResume.pdf');
        $fileName = 'AustinParhamResume.pdf';
        return response()->download($path,$fileName);
    }
}
