<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>TILEVU</title>
    <!-- plugins:css -->
    <link rel="stylesheet" href="../assets/vendors/mdi/css/materialdesignicons.min.css">
    <link rel="stylesheet" href="../assets/vendors/flag-icon-css/css/flag-icon.min.css">
    <link rel="stylesheet" href="../assets/vendors/bootstrap-material-design/css/bootstrap-material-design.min.css">
    <link rel="stylesheet" href="../assets/vendors/css/vendor.bundle.base.css">
    <!-- endinject -->

    <link rel="stylesheet" href="../assets/css/demo_1/style.css">
    <link rel="shortcut icon" href="../assets/images/favicon.ico" />

    <script src="../assets/js/jquery-3.7.1.min.js"></script>

    <link rel="stylesheet" href="../assets/pdv/pdv.css">

</head>
<body class="sidebar-fixed" style="overflow:hidden">

    <div class="container-scroller">

        <div class="container-fluid page-body-wrapper">

            <x-side-bar-pro>
            </x-side-bar-pro>

            <div class="main-panel">

                @yield('content')

            </div>

        </div>

    </div>

    <!-- Plugin js for popup -->
    <script src="../../assets/vendors/sweetalert/sweetalert.min.js"></script>
    <script src="../../assets/vendors/jquery.avgrund/jquery.avgrund.min.js"></script>
    <!-- End plugin js for this page -->

    <!-- Custom js for popup -->
    <script src="../../assets/js/alerts.js"></script>
    <script src="../../assets/js/avgrund.js"></script>
    <!-- End custom js for this page -->

  <script src="../assets/js/convert-currency.js"></script>
  {{-- <script src="../assets/pdv/pdv-top.js"></script>
  <script src="../assets/pdv/pdv-items.js"></script>
  <script src="../assets/pdv/pdv-bottom.js"></script> --}}
  <script src="../assets/pdv/pdv.js"></script>

  <!-- plugins:js -->
  <script src="../assets/vendors/js/vendor.bundle.base.js"></script>
  <script src="../assets/vendors/bootstrap-material-design/js/bootstrap-material-design.min.js"></script>
  <!-- endinject -->

  <!-- inject:js -->
  <script src="../assets/js/off-canvas.js"></script>
  <script src="../assets/js/hoverable-collapse.js"></script>
  <script src="../assets/js/misc.js"></script>
  <script src="../assets/js/settings.js"></script>
  <script src="../assets/js/todolist.js"></script>
  <!-- endinject -->

  <script>
   $(function() {
        var body = $('body');
        body.toggleClass('sidebar-icon-only');
    });

    $(document).on('mouseenter mouseleave', '.sidebar', function(ev) {
        var body = $('body');
        body.toggleClass('sidebar-icon-only');
    });

</script>
</body>
</html>
