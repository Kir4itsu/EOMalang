<!doctype html>
<html lang="en" data-bs-theme="light" data-footer="dark">

    <head>

        <meta charset="utf-8">
        <title>Sign In | Toner eCommerce + Admin HTML Template</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta content="eCommerce + Admin HTML Template" name="description">
        <meta content="Themesbrand" name="author">
        <!-- App favicon -->
        <link rel="shortcut icon" href="../assets/images/favicon.ico">

        <!-- Bootstrap Css -->
        <link href="../assets/css/bootstrap.min.css" rel="stylesheet" type="text/css">
        <!-- Icons Css -->
        <link href="../assets/css/icons.min.css" rel="stylesheet" type="text/css">
        <!-- App Css-->
        <link href="../assets/css/app.min.css" rel="stylesheet" type="text/css">
        <!-- custom Css-->
        <link href="../assets/css/custom.min.css" rel="stylesheet" type="text/css">

    </head>

    <body>

        <section class="auth-page-wrapper position-relative bg-light min-vh-100 d-flex align-items-center justify-content-between">
            <div class="auth-header position-fixed top-0 start-0 end-0 bg-body">
                <div class="container-fluid">
                    <div class="row justify-content-between align-items-center">
                        <div class="col-2">
                            <a class="navbar-brand mb-2 mb-sm-0" href="index.html">
                                <img src="../assets/images/logo-dark.png" class="card-logo card-logo-dark" alt="logo dark" height="22">
                                <img src="../assets/images/logo-light.png" class="card-logo card-logo-light" alt="logo light" height="22">
                            </a>
                        </div><!---end col-->
                        <div class="col-auto">
                            <ul class="list-unstyled hstack gap-2 mb-0">
                                <li class="me-md-3">
                                    <a href="#!" class="text-body fw-medium fs-15">Become a Selling</a>
                                </li>
                                <li class="d-none d-md-block">
                                    <a href="#!" class="btn btn-soft-secondary" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="bi bi-google-play align-middle me-1"></i> Download App
                                    </a>
                                </li>
                                <li class="d-none d-md-block">
                                    <a href="#!" class="btn btn-soft-primary" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="bi bi-apple align-middle me-1"></i> Download App
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div><!--end row-->
                </div><!--end container-fluid-->
            </div>
            <div class="w-100">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6">
                            <div class="auth-card mx-lg-3">
                                <div class="card border-0 mb-0">
                                    <div class="card-header bg-primary border-0">
                                        <div class="row">
                                            <div class="col-lg-4 col-3">
                                                <img src="../assets/images/auth/img-1.png" alt="" class="img-fluid">
                                            </div>
                                            <div class="col-lg-8 col-9">
                                                <h1 class="text-white lh-base fw-lighter">Join Our Toner Store</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <p class="text-muted fs-15">Sign in to continue to Toner.</p>
                                        <div class="p-2">
                                            <form action="index.html">
                
                                                <div class="mb-3">
                                                    <label for="username" class="form-label">Username</label>
                                                    <input type="text" class="form-control" id="username" placeholder="Enter username">
                                                </div>
                
                                                <div class="mb-3">
                                                    <div class="float-end">
                                                        <a href="auth-pass-reset-basic.html" class="text-muted">Forgot password?</a>
                                                    </div>
                                                    <label class="form-label" for="password-input">Password</label>
                                                    <div class="position-relative auth-pass-inputgroup mb-3">
                                                        <input type="password" class="form-control pe-5 password-input" placeholder="Enter password" id="password-input">
                                                        <button class="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" id="password-addon"><i class="ri-eye-fill align-middle"></i></button>
                                                    </div>
                                                </div>
                
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="auth-remember-check">
                                                    <label class="form-check-label" for="auth-remember-check">Remember me</label>
                                                </div>
                
                                                <div class="mt-4">
                                                    <button class="btn btn-primary w-100" type="submit">Sign In</button>
                                                </div>
                
                                                <div class="mt-4 pt-2 text-center">
                                                    <div class="signin-other-title">
                                                        <h5 class="fs-13 mb-4 title">Sign In with</h5>
                                                    </div>
                                                    <div class="pt-2 hstack gap-2 justify-content-center">
                                                        <button type="button" class="btn btn-soft-primary btn-icon"><i class="ri-facebook-fill fs-16"></i></button>
                                                        <button type="button" class="btn btn-soft-danger btn-icon"><i class="ri-google-fill fs-16"></i></button>
                                                        <button type="button" class="btn btn-soft-dark btn-icon"><i class="ri-github-fill fs-16"></i></button>
                                                        <button type="button" class="btn btn-soft-info btn-icon"><i class="ri-twitter-fill fs-16"></i></button>
                                                    </div>
                                                </div>
                                            </form>
                
                                            <div class="text-center mt-5">
                                                <p class="mb-0">Don't have an account ? <a href="auth-signup-basic.html" class="fw-semibold text-secondary text-decoration-underline"> SignUp</a> </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><!--end col-->
                    </div><!--end row-->
                </div><!--end container-->
                
                <footer class="footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="text-center">
                                    <p class="mb-0 text-muted">©
                                        <script>document.write(new Date().getFullYear())</script> Toner. Crafted with <i class="mdi mdi-heart text-danger"></i> by Themesbrand
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </section>
        
        <!-- JAVASCRIPT -->
        <script src="../assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="../assets/libs/simplebar/simplebar.min.js"></script>
        <script src="../assets/js/plugins.js"></script>

        <script src="../assets/js/pages/password-addon.init.js"></script>

    </body>

</html>