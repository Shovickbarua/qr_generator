<meta name="description" content="@yield('meta.description','Represent your company with a qr code. It is now free to generate qr code to represent your company easily. You will get a company profile page to share with qr code generator')" />
@hasSection('meta.keywords')
<meta name="keywords" content="@yield('meta.keywords')" />
@endif
<meta name="author" content="@yield('meta.author','Flexible It')" />
@hasSection('meta.copyright')
<meta name="copyright" content="@yield('meta.copyright', "Flexible It")" />
@endif
<meta name="application-name" content="@yield('meta.application-name','FlexQR')" />

<meta property="og:title" content="@yield('meta.title','QR code generator with logo and profile page for your company')" />
<meta property="og:type" content="website" />
<meta property="og:url" content="@yield('og.url', url()->current())" />
@hasSection('og.image')
<meta property="og:image" content="@yield('og.image')" />
@endif
<meta property="og:description" content="@yield('meta.description','Represent your company with a qr code. It is now free to generate qr code to represent your company easily. You will get a company profile page to share with qr code generator')" />

<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="@yield('meta.title','QR code generator with logo and profile page for your company')" />
<meta name="twitter:description" content="@yield('meta.description','Represent your company with a qr code. It is now free to generate qr code to represent your company easily. You will get a company profile page to share with qr code generator')" />
@hasSection('og.image')
<meta name="twitter:image" content="@yield('og.image')" />
@endif
@hasSection('canonical')
<link rel="canonical" href="@yield('canonical')">
@endif