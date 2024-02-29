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

    <!-- Plugin css for this page -->
    {{-- <link rel="stylesheet" href="../assets/vendors/font-awesome/css/font-awesome.min.css" />
    <link rel="stylesheet" href="../assets/vendors/bootstrap-datepicker/bootstrap-datepicker.min.css">
    <link rel="stylesheet" href="../assets/vendors/jquery-bar-rating/css-stars.css">
    <link rel="stylesheet" href="../assets/vendors/jvectormap/jquery-jvectormap.css"> --}}
    <!-- End plugin css for this page -->

    <link rel="stylesheet" href="../../assets/vendors/dropzone/dropzone.css">
    <link rel="stylesheet" href="../../assets/vendors/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="../../assets/vendors/jquery-bar-rating/bars-1to10.css">
    <link rel="stylesheet" href="../../assets/vendors/jquery-bar-rating/bars-horizontal.css">
    <link rel="stylesheet" href="../../assets/vendors/jquery-bar-rating/bars-movie.css">
    <link rel="stylesheet" href="../../assets/vendors/jquery-bar-rating/bars-pill.css">
    <link rel="stylesheet" href="../../assets/vendors/jquery-bar-rating/bars-reversed.css">
    <link rel="stylesheet" href="../../assets/vendors/jquery-bar-rating/bars-square.css">
    <link rel="stylesheet" href="../../assets/vendors/jquery-bar-rating/bootstrap-stars.css">
    <link rel="stylesheet" href="../../assets/vendors/jquery-bar-rating/css-stars.css">
    <link rel="stylesheet" href="../../assets/vendors/jquery-bar-rating/examples.css">
    <link rel="stylesheet" href="../../assets/vendors/jquery-bar-rating/fontawesome-stars-o.css">
    <link rel="stylesheet" href="../../assets/vendors/jquery-bar-rating/fontawesome-stars.css">
    <link rel="stylesheet" href="../../assets/vendors/jquery-asColorPicker/css/asColorPicker.min.css">
    <link rel="stylesheet" href="../../assets/vendors/x-editable/bootstrap-editable.css">
    <link rel="stylesheet" href="../../assets/vendors/bootstrap-datepicker/bootstrap-datepicker.min.css">
    <link rel="stylesheet" href="../../assets/vendors/dropify/dropify.min.css">
    <link rel="stylesheet" href="../../assets/vendors/jquery-file-upload/uploadfile.css">
    <link rel="stylesheet" href="../../assets/vendors/jquery-tags-input/jquery.tagsinput.min.css">
    <link rel="stylesheet" href="../../assets/vendors/tempusdominus-bootstrap-4/tempusdominus-bootstrap-4.min.css">

    <link rel="stylesheet" href="../../assets/vendors/jquery-tags-input/jquery.tagsinput.min.css">
    <link rel="stylesheet" href="../../assets/vendors/tempusdominus-bootstrap-4/tempusdominus-bootstrap-4.min.css">

    <!-- Layout styles -->
    <link rel="stylesheet" href="../assets/css/demo_1/style.css">
    <!-- End layout styles -->
    <link rel="shortcut icon" href="../assets/images/favicon.ico" />

    {{-- <script src="../assets/js/jquery-3.7.1.min.js"></script> --}}

</head>
<body class="sidebar-fixed" style="overflow:hidden">
    <style>
        .red {background-color: red!important;}
        .green { background-color: green!important;}
        .yellow {background-color: yellow!important;}
        .blue {background-color: blue!important;}
    </style>

    <div class="container-scroller">

        <x-top-bar-pro>
        </x-top-bar-pro>

        <div class="container-fluid page-body-wrapper">

            <x-side-bar-pro>
            </x-side-bar-pro>

            <div class="main-panel blue">

                @yield('content')

                <x-footer-pro>
                </x-footer-pro>

            </div>

        </div>

    </div>
  <!-- plugins:js -->
  <script src="../assets/vendors/js/vendor.bundle.base.js"></script>
  <script src="../assets/vendors/bootstrap-material-design/js/bootstrap-material-design.min.js"></script>
  <!-- endinject -->

  <!-- Plugin js for this page -->
  {{-- <script src="../assets/vendors/chart.js/Chart.min.js"></script>
  <script src="../assets/vendors/jquery-circle-progress/js/circle-progress.min.js"></script>
  <script src="../assets/vendors/jquery-bar-rating/jquery.barrating.min.js"></script>
  <script src="../assets/vendors/jvectormap/jquery-jvectormap.min.js"></script>
  <script src="../assets/vendors/jvectormap/jquery-jvectormap-world-mill-en.js"></script>
  <script src="../assets/vendors/flot/jquery.flot.js"></script>
  <script src="../assets/vendors/flot/jquery.flot.resize.js"></script>
  <script src="../assets/vendors/flot/jquery.flot.categories.js"></script>
  <script src="../assets/vendors/flot/jquery.flot.fillbetween.js"></script>
  <script src="../assets/vendors/flot/jquery.flot.stack.js"></script>
  <script src="../assets/vendors/flot/jquery.flot.pie.js"></script>
  <script src="../assets/vendors/bootstrap-datepicker/bootstrap-datepicker.min.js"></script> --}}
  <!-- End plugin js for this page -->

  <script src="../../assets/vendors/jquery.repeater/jquery.repeater.min.js"></script>
  <script src="../../assets/vendors/inputmask/jquery.inputmask.bundle.js"></script>


  <!-- inject:js -->
  <script src="../assets/js/off-canvas.js"></script>
  <script src="../assets/js/hoverable-collapse.js"></script>
  <script src="../assets/js/misc.js"></script>
  <script src="../assets/js/settings.js"></script>
  <script src="../assets/js/todolist.js"></script>
  <script src="../../assets/js/form-repeater.js"></script>
  <script src="../../assets/js/inputmask.js"></script>
  <!-- endinject -->

  <!-- Custom js for this page -->
  <script src="../assets/js/dashboard.js"></script>
  <!-- End custom js for this page -->

  <script src="../../assets/vendors/js/vendor.bundle.base.js"></script>
    <script src="../../assets/vendors/bootstrap-material-design/js/bootstrap-material-design.min.js"></script>
    <!-- endinject -->
    <!-- Plugin js for this page -->
    <script src="../../assets/vendors/jquery-bar-rating/jquery.barrating.min.js"></script>
    <script src="../../assets/vendors/jquery-asColor/jquery-asColor.min.js"></script>
    <script src="../../assets/vendors/jquery-asGradient/jquery-asGradient.min.js"></script>
    <script src="../../assets/vendors/jquery-asColorPicker/jquery-asColorPicker.min.js"></script>
    <script src="../../assets/vendors/x-editable/bootstrap-editable.min.js"></script>
    <script src="../../assets/vendors/moment/moment.min.js"></script>
    <script src="../../assets/vendors/tempusdominus-bootstrap-4/tempusdominus-bootstrap-4.js"></script>
    <script src="../../assets/vendors/bootstrap-datepicker/bootstrap-datepicker.min.js"></script>
    <script src="../../assets/vendors/dropify/dropify.min.js"></script>
    <script src="../../assets/vendors/jquery-file-upload/jquery.uploadfile.min.js"></script>
    <script src="../../assets/vendors/jquery-tags-input/jquery.tagsinput.min.js"></script>
    <script src="../../assets/vendors/dropzone/dropzone.js"></script>
    <script src="../../assets/vendors/jquery.repeater/jquery.repeater.min.js"></script>
    <script src="../../assets/vendors/inputmask/jquery.inputmask.bundle.js"></script>
    <!-- End plugin js for this page -->
    <!-- inject:js -->
    <script src="../../assets/js/off-canvas.js"></script>
    <script src="../../assets/js/hoverable-collapse.js"></script>
    <script src="../../assets/js/misc.js"></script>
    <script src="../../assets/js/settings.js"></script>
    <script src="../../assets/js/todolist.js"></script>
    <!-- endinject -->
    <!-- Custom js for this page -->
    <script src="../../assets/js/formpickers.js"></script>
    <script src="../../assets/js/form-addons.js"></script>
    <script src="../../assets/js/x-editable.js"></script>
    <script src="../../assets/js/dropify.js"></script>
    <script src="../../assets/js/dropzone.js"></script>
    <script src="../../assets/js/jquery-file-upload.js"></script>
    <script src="../../assets/js/formpickers.js"></script>
    <script src="../../assets/js/form-repeater.js"></script>
    <script src="../../assets/js/inputmask.js"></script>

    <script src="../../assets/js/imgDropZone.js"></script>


</body>
</html>
