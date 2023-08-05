@component('mail::message')

<h1>We received a mail from {{$data['name']}},</h1>
<p>Name: {{ $data['name'] }}</p>
<p>Email: {{ $data['email'] }}</p>
<p>Message: {{ $data['message'] }}</p>

@endcomponent