<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Inventario IMCO</title>

    <!-- Google Font: Source Sans Pro -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="{{asset('assets/fontawesome/css/all.min.css')}}">
    <!-- Ionicons -->
    <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
    <!-- Tempusdominus Bootstrap 4 -->
    <!-- <link rel="stylesheet" href="{{asset('assets/css/tempusdominus-bootstrap-4.min.css')}}"> -->
    <!-- iCheck -->
    <!-- <link rel="stylesheet" href="{{asset('assets/css/icheck-bootstrap.min.css')}}"> -->
    <!-- JQVMap -->
    <!-- <link rel="stylesheet" href="{{asset('assets/css/jqvmap.min.css')}}"> -->
    <!-- Theme style -->
    <link rel="stylesheet" href="{{asset('assets/css/adminlte.min.css')}}">
    <!-- overlayScrollbars -->
    <link rel="stylesheet" href="{{asset('assets/css/OverlayScrollbars.min.css')}}">
    <!-- <link rel="stylesheet" type="text/css" href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" media="all"> -->
    <!-- Styles -->
    <link href="{{ asset('/css/app.css') }}" rel="stylesheet">
</head>
<body style="overflow-x: hidden;" class="hold-transition sidebar-mini layout-fixed">

    <div class="wrapper" id="app"></div>

    <!-- jQuery -->
    <script src="{{asset('assets/js/jquery.min.js')}}"></script>
    <!-- jQuery UI 1.11.4 -->
    <script src="{{asset('assets/js/jquery-ui.min.js')}}"></script>
    <!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
    <script>
    // $.widget.bridge('uibutton', $.ui.button)
    </script>
    <!-- Bootstrap 4 -->
    <!-- <script src="{{asset('assets/js/bootstrap.bundle.min.js')}}"></script> -->
    <!-- JQVMap -->
    <!-- <script src="{{asset('assets/js/jquery.vmap.min.js')}}"></script> -->
    <!-- <script src="{{asset('assets/js/jquery.vmap.usa.js')}}"></script> -->
    <!-- jQuery Knob Chart -->
    <!-- <script src="{{asset('assets/js/jquery.knob.min.js')}}"></script> -->
    <!-- daterangepicker -->
    <!-- <script src="{{asset('assets/js/moment.min.js')}}"></script>
    <script src="{{asset('assets/js/daterangepicker.js')}}"></script> -->
    <!-- Tempusdominus Bootstrap 4 -->
    <!-- <script src="{{asset('assets/js/tempusdominus-bootstrap-4.min.js')}}"></script> -->
    <!-- overlayScrollbars -->
    <script src="{{asset('assets/js/jquery.overlayScrollbars.min.js')}}"></script>
    <!-- AdminLTE App -->
    <script src="{{asset('assets/js/adminlte.min.js')}}"></script>

    <!-- AdminLTE for demo purposes -->
    <!-- <script src="{{asset('assets/js/demo.js')}}"></script> -->
    <!-- AdminLTE dashboard demo (This is only for demo purposes) -->
    <!-- <script src="{{asset('assets/js/dashboard.js')}}"></script> -->
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>