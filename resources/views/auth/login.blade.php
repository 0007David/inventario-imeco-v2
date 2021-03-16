<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Login IMCO</title>

    <!-- Google Font: Source Sans Pro -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <link rel="stylesheet" href="{{asset('assets/css/login.css')}}">

</head>
<body style="overflow-x: hidden;">

<div class="login-reg-panel">
		<div class="login-info-box">
			<h2>Ya tienes una cuenta?</h2>
			<p>Lorem ipsum dolor sit amet</p>
			<label id="label-register" for="log-reg-show">Login</label>
			<input type="radio" name="active-log-panel" id="log-reg-show"  checked="checked">
		</div>

		<div class="register-info-box">
			<h2>IMECO SRL</h2>
			<p>Lorem ipsum dolor sit amet</p>
			<label id="label-login" for="log-login-show">Registro</label>
			<input type="radio" name="active-log-panel" id="log-login-show">
		</div>

		<div class="white-panel">
			<div class="login-show">
				@php
				if( !is_null(session()->get('status') )) {
					$mensaje = session()->get('mensaje');
				@endphp
				<div class="alert alert-warning alert-block">
					<button type="button" class="close" data-dismiss="alert">×</button>
					<strong>{{ $mensaje ?? ''}}</strong>
				</div>
				@php } @endphp
				<form>
					@csrf
					<h2>LOGIN</h2>
					<input type="text" required id ="login-email" placeholder="Email" value="test2@gmail.com">
					<input type="password" required id="login-password" placeholder="Password" value="12345678">
					<input class="btn" type="button" id="btn-login" value="Login">
					<a href="#">¿Olvidaste tu contraseña?</a>
				</form>
			</div>
			<div class="register-show">
				<h2>REGISTER</h2>
				<input type="text" placeholder="Email">
				<input type="password" placeholder="Password">
				<input type="password" placeholder="Confirm Password">
				<input type="button" value="Register">
			</div>
		</div>
	</div>


    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="{{asset('assets/js/login.js')}}"></script>
</body>
</html>